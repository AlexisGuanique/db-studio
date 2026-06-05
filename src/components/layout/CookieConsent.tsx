"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "db-studio-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = (choice: "all" | "essential") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner fixed inset-x-0 bottom-0 z-[100] border-t-2 border-burgundy/20 bg-cream p-4 shadow-2xl md:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-text-secondary">
          DB Studio Media uses essential cookies and, with your consent, analytics and
          marketing cookies (Google Analytics, Meta Pixel, Stripe, Square).{" "}
          <Link href="/cookie-policy" className="text-burgundy underline">
            Cookie Policy
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => accept("essential")}
            className="rounded-lg border-2 border-burgundy px-4 py-2 text-xs font-semibold uppercase text-burgundy"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => accept("all")}
            className="rounded-lg bg-burgundy px-4 py-2 text-xs font-semibold uppercase text-white"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
