"use client";

import { useCallback, useRef, useState } from "react";

export type TerminalStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "disconnected"
  | "processing"
  | "success"
  | "error";

interface UseStripeTerminalReturn {
  status: TerminalStatus;
  errorMessage: string | null;
  lastPaymentAmount: number | null;
  readerLabel: string | null;
  initializeTerminal: () => Promise<void>;
  collectPayment: (amount: number, description?: string) => Promise<void>;
  disconnectReader: () => void;
}

const POLL_INTERVAL_MS = 1500;
const POLL_TIMEOUT_MS = 120_000;

async function pollPaymentStatus(
  readerId: string,
  paymentIntentId: string,
  signal: AbortSignal,
): Promise<{ success: boolean; message: string; amount?: number }> {
  const startedAt = Date.now();

  while (!signal.aborted) {
    const response = await fetch(
      `/api/terminal/charge/status?reader_id=${encodeURIComponent(readerId)}&payment_intent_id=${encodeURIComponent(paymentIntentId)}`,
    );

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "Could not check payment status");
    }

    const data = await response.json();

    if (data.done) {
      return {
        success: Boolean(data.success),
        message: data.message as string,
        amount: data.amount as number | undefined,
      };
    }

    if (Date.now() - startedAt > POLL_TIMEOUT_MS) {
      throw new Error("Payment timed out. Check the reader and try again.");
    }

    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  throw new Error("Payment cancelled");
}

export function useStripeTerminal(): UseStripeTerminalReturn {
  const [status, setStatus] = useState<TerminalStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastPaymentAmount, setLastPaymentAmount] = useState<number | null>(null);
  const [readerLabel, setReaderLabel] = useState<string | null>(null);
  const pollAbortRef = useRef<AbortController | null>(null);

  const initializeTerminal = useCallback(async () => {
    try {
      setStatus("connecting");
      setErrorMessage(null);

      const response = await fetch("/api/terminal/readers");

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Could not reach the payment reader");
      }

      const data = await response.json();
      setReaderLabel(data.label || "Stripe Reader");
      setStatus("connected");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to connect terminal",
      );
    }
  }, []);

  const collectPayment = useCallback(
    async (amount: number, description?: string) => {
      if (status !== "connected") {
        setErrorMessage("Connect the reader first");
        setStatus("error");
        return;
      }

      pollAbortRef.current?.abort();
      const abortController = new AbortController();
      pollAbortRef.current = abortController;

      try {
        setStatus("processing");
        setErrorMessage(null);

        const chargeResponse = await fetch("/api/terminal/charge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, description }),
        });

        if (!chargeResponse.ok) {
          const data = await chargeResponse.json().catch(() => ({}));
          throw new Error(data.error || "Could not send payment to reader");
        }

        const { paymentIntentId, readerId } = await chargeResponse.json();

        const result = await pollPaymentStatus(
          readerId,
          paymentIntentId,
          abortController.signal,
        );

        if (!result.success) {
          throw new Error(result.message);
        }

        setLastPaymentAmount(result.amount ?? amount);
        setStatus("success");

        window.setTimeout(() => {
          setStatus("connected");
          setLastPaymentAmount(null);
        }, 3000);
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "Payment processing failed",
        );

        window.setTimeout(() => {
          setStatus("connected");
          setErrorMessage(null);
        }, 5000);
      }
    },
    [status],
  );

  const disconnectReader = useCallback(() => {
    pollAbortRef.current?.abort();
    setReaderLabel(null);
    setStatus("disconnected");
  }, []);

  return {
    status,
    errorMessage,
    lastPaymentAmount,
    readerLabel,
    initializeTerminal,
    collectPayment,
    disconnectReader,
  };
}
