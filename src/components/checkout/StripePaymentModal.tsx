"use client";

import { useEffect, useState } from "react";
import { StripeLogo } from "@/components/checkout/StripeLogo";
import { SubscriptionRequestForm } from "@/components/checkout/SubscriptionRequestForm";

export type StripePaymentModalState =
  | "processing"
  | "redirecting"
  | "unavailable";

export type StripeUnavailableReason =
  | "stripe_not_connected"
  | "checkout_not_configured";

type ModalView = "status" | "form" | "success";

interface StripePaymentModalProps {
  open: boolean;
  state: StripePaymentModalState;
  planSlug: string;
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
  planSlug,
  planName,
  amountLabel,
  reason,
  onClose,
}: StripePaymentModalProps) {
  const [view, setView] = useState<ModalView>("status");
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (!open) {
      setView("status");
      setReferenceId("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && (state === "unavailable" || view !== "status")) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose, state, view]);

  if (!open) return null;

  const unavailable = getUnavailableCopy(reason);
  const canDismiss =
    state === "unavailable" || view === "form" || view === "success";

  return (
    <div
      className="stripe-payment-modal fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        aria-label="Close payment dialog"
        onClick={canDismiss ? onClose : undefined}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="stripe-payment-modal-title"
        aria-describedby="stripe-payment-modal-desc"
        className="stripe-payment-modal__panel relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-burgundy/10 bg-white p-8 shadow-2xl"
      >
        {view === "form" ? (
          <SubscriptionRequestForm
            planSlug={planSlug}
            planName={planName}
            amountLabel={amountLabel}
            onBack={() => setView("status")}
            onSuccess={(id) => {
              setReferenceId(id);
              setView("success");
            }}
          />
        ) : view === "success" ? (
          <div className="flex flex-col items-center text-center">
            <SuccessPulse />
            <h2
              id="stripe-payment-modal-title"
              className="mt-6 text-xl font-semibold text-burgundy"
            >
              Request received
            </h2>
            <p
              id="stripe-payment-modal-desc"
              className="mt-3 text-sm leading-relaxed text-text-secondary"
            >
              Thank you for your interest in{" "}
              <span className="font-medium text-burgundy">{planName}</span>. Our billing team
              will contact you within 1–2 business days to process your subscription.
            </p>
            {referenceId && (
              <p className="mt-4 rounded-lg bg-cream px-4 py-2 text-xs text-text-secondary">
                Reference: <span className="font-semibold text-burgundy">{referenceId}</span>
              </p>
            )}
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-[10px] bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#4a1619]"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <StripeLogo />

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
              <p className="mt-4 text-xs text-text-secondary/80">Redirecting now…</p>
            )}

            {state === "unavailable" && (
              <div className="mt-6 flex w-full flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setView("form")}
                  className="w-full rounded-[10px] bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#4a1619]"
                >
                  Contact billing to subscribe
                </button>
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
        )}
      </div>
    </div>
  );
}
