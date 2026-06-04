"use client";

import { useEffect } from "react";
import { StripeLogo } from "@/components/checkout/StripeLogo";
import { site } from "@/lib/site";

export type StripePaymentModalState =
  | "processing"
  | "redirecting"
  | "unavailable";

export type StripeUnavailableReason =
  | "stripe_not_connected"
  | "checkout_not_configured";

interface StripePaymentModalProps {
  open: boolean;
  state: StripePaymentModalState;
  planName: string;
  amountLabel: string;
  reason?: StripeUnavailableReason;
  onClose: () => void;
}

function Spinner() {
  return (
    <div
      className="h-10 w-10 animate-spin rounded-full border-[3px] border-[#635BFF]/20 border-t-[#635BFF]"
      aria-hidden
    />
  );
}

function SuccessPulse() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
      <svg
        className="h-6 w-6 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function WarningIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
      <svg
        className="h-6 w-6 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
    </div>
  );
}

function getUnavailableCopy(reason?: StripeUnavailableReason) {
  if (reason === "checkout_not_configured") {
    return {
      title: "Checkout not available yet",
      body: "Stripe is connected, but this plan does not have an active checkout link yet. Our team is finishing the setup.",
    };
  }

  return {
    title: "Payment could not be completed",
    body: "Stripe is not connected to this site yet, so we could not start your secure checkout session.",
  };
}

export function StripePaymentModal({
  open,
  state,
  planName,
  amountLabel,
  reason,
  onClose,
}: StripePaymentModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && state === "unavailable") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose, state]);

  if (!open) return null;

  const unavailable = getUnavailableCopy(reason);
  const mailtoHref = `mailto:${site.billingEmail}?subject=${encodeURIComponent(`Subscribe — ${planName}`)}&body=${encodeURIComponent(`Hi, I would like to subscribe to ${planName} (${amountLabel}).`)}`;

  return (
    <div
      className="stripe-payment-modal fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        aria-label="Close payment dialog"
        onClick={state === "unavailable" ? onClose : undefined}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="stripe-payment-modal-title"
        aria-describedby="stripe-payment-modal-desc"
        className="stripe-payment-modal__panel relative w-full max-w-md rounded-2xl border border-burgundy/10 bg-white p-8 shadow-2xl"
      >
        <div className="flex flex-col items-center text-center">
          <StripeLogo className="h-8" />

          <div className="mt-6 flex min-h-[3rem] items-center justify-center">
            {state === "processing" && <Spinner />}
            {state === "redirecting" && <SuccessPulse />}
            {state === "unavailable" && <WarningIcon />}
          </div>

          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#635BFF]">
            Powered by Stripe
          </p>

          <h2
            id="stripe-payment-modal-title"
            className="mt-4 text-xl font-semibold text-burgundy"
          >
            {state === "processing" && "Starting secure payment"}
            {state === "redirecting" && "Payment session started"}
            {state === "unavailable" && unavailable.title}
          </h2>

          <p
            id="stripe-payment-modal-desc"
            className="mt-3 text-sm leading-relaxed text-text-secondary"
          >
            {state === "processing" &&
              `We are preparing your checkout for ${planName} (${amountLabel}). Please wait a moment.`}
            {state === "redirecting" &&
              "You will be redirected to Stripe Checkout to complete your subscription on a secure, encrypted page."}
            {state === "unavailable" && unavailable.body}
          </p>

          {state === "redirecting" && (
            <p className="mt-4 text-xs text-text-secondary/80">
              Redirecting now…
            </p>
          )}

          {state === "unavailable" && (
            <div className="mt-6 flex w-full flex-col gap-3">
              <a
                href={mailtoHref}
                className="w-full rounded-[10px] bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#4a1619]"
              >
                Contact billing to subscribe
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-[10px] border-2 border-burgundy/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-burgundy transition hover:border-burgundy/40"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
