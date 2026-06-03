"use client";

import { useState } from "react";
import { useStripeTerminal } from "@/hooks/useStripeTerminal";

const statusConfig = {
  idle: { color: "bg-gray-400", label: "Terminal not started" },
  connecting: { color: "bg-amber-400 animate-pulse", label: "Searching for reader..." },
  connected: { color: "bg-emerald-500", label: "Reader connected" },
  disconnected: { color: "bg-gray-400", label: "Reader disconnected" },
  processing: {
    color: "bg-amber-500 animate-pulse",
    label: "Processing — ask customer to tap or insert card",
  },
  success: { color: "bg-emerald-500", label: "Payment approved" },
  error: { color: "bg-red-500", label: "Payment error" },
} as const;

export function PosTerminal() {
  const {
    status,
    errorMessage,
    lastPaymentAmount,
    initializeTerminal,
    collectPayment,
    disconnectReader,
  } = useStripeTerminal();

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const numericAmount = parseFloat(amount);
  const isValidAmount = !Number.isNaN(numericAmount) && numericAmount >= 0.5;

  const handleCollectPayment = async () => {
    if (!isValidAmount) {
      setValidationError("Enter a valid amount (minimum $0.50 USD)");
      return;
    }
    setValidationError(null);
    await collectPayment(numericAmount, description || undefined);
    setAmount("");
    setDescription("");
  };

  const statusInfo = statusConfig[status];
  const displayStatus =
    status === "success" && lastPaymentAmount != null
      ? `Payment approved — $${lastPaymentAmount.toFixed(2)} USD`
      : statusInfo.label;

  return (
    <div className="pos-page bg-cream px-6 py-12 md:py-16">
      <div className="pos-terminal mx-auto w-full max-w-md">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-semibold uppercase tracking-wide text-burgundy">
            Point of Sale
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            DB Studio Media — Orlando, FL
          </p>
          {process.env.NEXT_PUBLIC_STRIPE_TERMINAL_SIMULATED === "true" && (
            <p className="mt-2 rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800">
              Simulated reader mode — for testing only
            </p>
          )}
        </header>

        <div className="pos-terminal__status mb-6 flex items-center gap-3 rounded-xl border-2 border-burgundy/12 bg-white px-4 py-3">
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full ${statusInfo.color}`}
            aria-hidden
          />
          <span className="text-sm text-text-primary">{displayStatus}</span>
        </div>

        {errorMessage && (
          <div
            className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        {(status === "idle" || status === "disconnected" || status === "error") && (
          <button
            type="button"
            onClick={initializeTerminal}
            className="w-full rounded-[10px] bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#4a1619]"
          >
            Connect reader
          </button>
        )}

        {status === "connected" && (
          <div className="space-y-5">
            <div>
              <label htmlFor="pos-amount" className="mb-2 block text-sm font-medium">
                Amount (USD)
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">
                  $
                </span>
                <input
                  id="pos-amount"
                  type="number"
                  step="0.01"
                  min="0.50"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full rounded-lg border-2 border-burgundy/20 py-3 pl-8 pr-4 focus:border-burgundy focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pos-description" className="mb-2 block text-sm font-medium">
                Description (optional)
              </label>
              <input
                id="pos-description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Studio Membership — Level 1"
                className="w-full rounded-lg border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
              />
            </div>

            {validationError && (
              <p className="text-sm text-red-600">{validationError}</p>
            )}

            <button
              type="button"
              onClick={handleCollectPayment}
              disabled={!isValidAmount}
              className="w-full rounded-[10px] bg-burgundy px-6 py-4 text-base font-semibold uppercase tracking-wide text-white transition enabled:hover:bg-[#4a1619] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Charge ${isValidAmount ? numericAmount.toFixed(2) : "0.00"} USD
            </button>

            <button
              type="button"
              onClick={disconnectReader}
              className="w-full rounded-[10px] border-2 border-burgundy/20 bg-transparent px-6 py-2.5 text-sm text-text-secondary transition hover:border-burgundy/40"
            >
              Disconnect reader
            </button>
          </div>
        )}

        {status === "processing" && (
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50 px-6 py-10 text-center">
            <p className="text-4xl" aria-hidden>
              💳
            </p>
            <p className="mt-4 text-base font-semibold text-amber-900">
              Ask the customer to tap or insert their card
            </p>
            <p className="mt-2 text-sm text-amber-800">Do not close this window</p>
          </div>
        )}

        {status === "success" && lastPaymentAmount != null && (
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
            <p className="text-4xl" aria-hidden>
              ✓
            </p>
            <p className="mt-4 text-lg font-semibold text-emerald-900">
              Payment approved
            </p>
            <p className="mt-2 text-3xl font-bold text-emerald-800">
              ${lastPaymentAmount.toFixed(2)} USD
            </p>
            <p className="mt-3 text-sm text-emerald-700">
              Returning to checkout panel...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
