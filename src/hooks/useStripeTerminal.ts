"use client";

import { useCallback, useState } from "react";
import type { Terminal } from "@stripe/terminal-js";

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
  initializeTerminal: () => Promise<void>;
  collectPayment: (amount: number, description?: string) => Promise<void>;
  disconnectReader: () => void;
}

const simulated =
  process.env.NEXT_PUBLIC_STRIPE_TERMINAL_SIMULATED === "true";

const locationId =
  process.env.NEXT_PUBLIC_STRIPE_TERMINAL_LOCATION_ID ?? undefined;

function hasTerminalError(
  result: unknown,
): result is { error: { message: string } } {
  return (
    typeof result === "object" &&
    result !== null &&
    "error" in result &&
    Boolean((result as { error?: { message?: string } }).error)
  );
}

export function useStripeTerminal(): UseStripeTerminalReturn {
  const [terminal, setTerminal] = useState<Terminal | null>(null);
  const [status, setStatus] = useState<TerminalStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastPaymentAmount, setLastPaymentAmount] = useState<number | null>(
    null,
  );

  const fetchConnectionToken = useCallback(async (): Promise<string> => {
    const response = await fetch("/api/terminal/connection-token", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Could not obtain connection token");
    }

    const data = await response.json();
    return data.secret as string;
  }, []);

  const initializeTerminal = useCallback(async () => {
    try {
      setStatus("connecting");
      setErrorMessage(null);

      const { loadStripeTerminal } = await import("@stripe/terminal-js");
      const StripeTerminal = await loadStripeTerminal();

      if (!StripeTerminal) {
        throw new Error("Could not load Stripe Terminal SDK");
      }

      const terminalInstance = StripeTerminal.create({
        onFetchConnectionToken: fetchConnectionToken,
        onUnexpectedReaderDisconnect: () => {
          setStatus("disconnected");
          setErrorMessage("Reader disconnected unexpectedly");
          setTerminal(null);
        },
      });

      const discoverResult = await terminalInstance.discoverReaders({
        simulated,
        ...(locationId ? { location: locationId } : {}),
      });

      if (hasTerminalError(discoverResult)) {
        throw new Error(discoverResult.error.message);
      }

      const readers = discoverResult.discoveredReaders ?? [];

      if (!readers.length) {
        throw new Error(
          simulated
            ? "No simulated reader found. Check Stripe Terminal configuration."
            : "No reader found. Ensure the BBPOS WisePOS E is powered on and on the same WiFi network.",
        );
      }

      const connectResult = await terminalInstance.connectReader(readers[0]);

      if (hasTerminalError(connectResult)) {
        throw new Error(connectResult.error.message);
      }

      setTerminal(terminalInstance);
      setStatus("connected");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to connect terminal",
      );
    }
  }, [fetchConnectionToken]);

  const collectPayment = useCallback(
    async (amount: number, description?: string) => {
      if (!terminal) {
        setErrorMessage("Terminal is not connected");
        setStatus("error");
        return;
      }

      try {
        setStatus("processing");
        setErrorMessage(null);

        const intentResponse = await fetch(
          "/api/terminal/create-payment-intent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, description }),
          },
        );

        if (!intentResponse.ok) {
          throw new Error("Could not create payment intent");
        }

        const { client_secret, payment_intent_id } = await intentResponse.json();

        const collectResult = await terminal.collectPaymentMethod(client_secret);

        if (hasTerminalError(collectResult)) {
          throw new Error(collectResult.error.message);
        }

        const processResult = await terminal.processPayment(
          collectResult.paymentIntent,
        );

        if (hasTerminalError(processResult)) {
          throw new Error(processResult.error.message);
        }

        const captureResponse = await fetch(
          "/api/terminal/capture-payment-intent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payment_intent_id }),
          },
        );

        if (!captureResponse.ok) {
          throw new Error("Could not confirm payment capture");
        }

        setLastPaymentAmount(amount);
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
          setStatus(terminal ? "connected" : "disconnected");
          setErrorMessage(null);
        }, 4000);
      }
    },
    [terminal],
  );

  const disconnectReader = useCallback(() => {
    if (terminal) {
      terminal.disconnectReader();
      setTerminal(null);
      setStatus("disconnected");
    }
  }, [terminal]);

  return {
    status,
    errorMessage,
    lastPaymentAmount,
    initializeTerminal,
    collectPayment,
    disconnectReader,
  };
}
