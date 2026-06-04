"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

interface SubscriptionRequestFormProps {
  planSlug: string;
  planName: string;
  amountLabel: string;
  onBack: () => void;
  onSuccess: (referenceId: string) => void;
}

const inputClassName =
  "w-full rounded-lg border-2 border-burgundy/20 px-4 py-3 text-sm text-text-primary focus:border-burgundy focus:outline-none";

export function SubscriptionRequestForm({
  planSlug,
  planName,
  amountLabel,
  onBack,
  onSuccess,
}: SubscriptionRequestFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/subscription-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
          planSlug,
          planName,
          amountLabel,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        referenceId?: string;
        error?: string;
      };

      if (!response.ok || !result.success || !result.referenceId) {
        throw new Error(result.error ?? "Could not submit your request.");
      }

      onSuccess(result.referenceId);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Could not submit your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full text-left">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 text-sm font-medium text-burgundy underline underline-offset-2"
      >
        ← Back
      </button>

      <p className="text-xs font-semibold uppercase tracking-widest text-burgundy/70">
        Subscription request
      </p>
      <h2 className="mt-2 text-xl font-semibold text-burgundy">
        Tell us how to reach you
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        Complete your details for <span className="font-medium text-burgundy">{planName}</span>{" "}
        ({amountLabel}). Our billing team will contact you to finalize payment.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="billing-fullName" className="mb-1 block text-sm font-medium">
            Full name *
          </label>
          <input
            id="billing-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="billing-email" className="mb-1 block text-sm font-medium">
            Email *
          </label>
          <input
            id="billing-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="billing-phone" className="mb-1 block text-sm font-medium">
            Phone *
          </label>
          <input
            id="billing-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="billing-company" className="mb-1 block text-sm font-medium">
            Company / Brand
          </label>
          <input
            id="billing-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="billing-message" className="mb-1 block text-sm font-medium">
            Notes (optional)
          </label>
          <textarea
            id="billing-message"
            name="message"
            rows={3}
            placeholder="Best time to call, questions about the plan, etc."
            className={`${inputClassName} resize-y`}
          />
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-[10px] bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition enabled:hover:bg-[#4a1619] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending request…" : "Submit request"}
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-text-secondary">
        We will reach you at the contact details above, or write to{" "}
        <a href={`mailto:${site.billingEmail}`} className="text-burgundy underline">
          {site.billingEmail}
        </a>
        .
      </p>
    </div>
  );
}
