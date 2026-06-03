"use client";

import { useState } from "react";
import Link from "next/link";
import type { ServiceLevel } from "@/lib/serviceLevels";
import { site } from "@/lib/site";

export function SubscriptionCheckout({ level }: { level: ServiceLevel }) {
  const [consented, setConsented] = useState(false);

  const consentText = `By subscribing, I authorize DB Studio Media to charge ${level.price}${level.priceSuffix} on the billing start date and each month thereafter until I cancel. I may cancel with 30 days written notice to ${site.billingEmail}.`;

  return (
    <div className="checkout-panel mx-auto max-w-xl rounded-2xl border-2 border-burgundy/15 bg-white p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-burgundy/70">
        Level {level.id}
      </p>
      <h1 className="mt-2 text-2xl font-semibold uppercase text-burgundy">{level.name}</h1>
      <p className="mt-2 text-3xl font-bold text-burgundy">
        {level.price}
        <span className="text-lg font-normal text-text-secondary">{level.priceSuffix}</span>
      </p>
      <p className="mt-4 text-sm text-text-secondary">{level.contract}</p>

      <div className="mt-6 rounded-xl bg-cream p-4 text-sm text-text-secondary">
        <p className="font-semibold text-burgundy">Cancellation policy</p>
        <p className="mt-2">{level.disclosure}</p>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          className="mt-1 h-4 w-4 accent-burgundy"
        />
        <span className="text-sm leading-relaxed text-text-secondary">{consentText}</span>
      </label>

      <button
        type="button"
        disabled={!consented}
        className="mt-6 w-full rounded-[10px] bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition enabled:hover:bg-[#4a1619] disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => {
          window.location.href =
            process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL ?? `mailto:${site.billingEmail}?subject=Subscribe%20${encodeURIComponent(level.name)}`;
        }}
      >
        Confirm subscription — {level.price}
        {level.priceSuffix}
      </button>

      <p className="mt-4 text-center text-xs text-text-secondary">
        By proceeding you agree to our{" "}
        <Link href="/terminos-de-servicio" className="text-burgundy underline">
          Terms of Service
        </Link>
        ,{" "}
        <Link href="/politica-de-reembolso" className="text-burgundy underline">
          Refund Policy
        </Link>
        , and{" "}
        <Link href="/politica-de-privacidad" className="text-burgundy underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
