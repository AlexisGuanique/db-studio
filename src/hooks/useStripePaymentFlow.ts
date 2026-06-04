"use client";

import { useCallback, useState } from "react";
import type {
  StripePaymentModalState,
  StripeUnavailableReason,
} from "@/components/checkout/StripePaymentModal";
import type { StripeCheckoutInitResult } from "@/lib/stripe-checkout";

interface InitiatePaymentParams {
  slug: string;
  planName: string;
  amountLabel: string;
}

const PROCESSING_DELAY_MS = 900;
const REDIRECT_DELAY_MS = 1400;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useStripePaymentFlow() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<StripePaymentModalState>("processing");
  const [reason, setReason] = useState<StripeUnavailableReason | undefined>();
  const [planName, setPlanName] = useState("");
  const [amountLabel, setAmountLabel] = useState("");

  const close = useCallback(() => {
    setOpen(false);
    setState("processing");
    setReason(undefined);
  }, []);

  const initiatePayment = useCallback(
    async ({ slug, planName, amountLabel }: InitiatePaymentParams) => {
      setPlanName(planName);
      setAmountLabel(amountLabel);
      setState("processing");
      setReason(undefined);
      setOpen(true);

      await wait(PROCESSING_DELAY_MS);

      try {
        const response = await fetch("/api/checkout/initiate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });

        const result = (await response.json()) as StripeCheckoutInitResult;

        if (result.status === "ready" && result.url) {
          setState("redirecting");
          await wait(REDIRECT_DELAY_MS);
          window.location.assign(result.url);
          return;
        }

        if (result.status === "unavailable") {
          setReason(result.reason);
          setState("unavailable");
        }
      } catch {
        setReason("stripe_not_connected");
        setState("unavailable");
      }
    },
    [],
  );

  return {
    open,
    state,
    reason,
    planName,
    amountLabel,
    initiatePayment,
    close,
  };
}
