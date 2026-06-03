"use client";

import { useState } from "react";
import { pricingFaq } from "@/lib/serviceLevels";

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pricing-faq space-y-3">
      <h2 className="mb-8 text-center text-2xl font-semibold uppercase tracking-wide text-burgundy">
        Frequently Asked Questions
      </h2>
      {pricingFaq.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-xl border-2 border-burgundy/12 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-burgundy"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span aria-hidden>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p className="border-t border-burgundy/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
