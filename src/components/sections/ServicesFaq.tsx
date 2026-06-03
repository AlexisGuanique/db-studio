"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

function faqMatchesQuery(
  item: { question: string; answer: string },
  query: string,
): boolean {
  const terms = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  if (terms.length === 0) return true;

  const haystack = `${item.question} ${item.answer}`.toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

export function ServicesFaq({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => items.filter((item) => faqMatchesQuery(item, query)),
    [items, query],
  );

  return (
    <div className="services-faq">
      <Reveal direction="up">
        <p className="text-sm font-semibold uppercase tracking-widest text-burgundy">
          Frequently Asked Questions
        </p>
        <SectionTitle className="mt-2">
          Answers to common questions about our process, services, and approach.
        </SectionTitle>
      </Reveal>

      <Reveal direction="up" delay={80}>
        <div className="services-faq__search mt-8">
          <label htmlFor="faq-search" className="services-faq__search-label">
            Search questions and answers
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. video, international, strategy…"
            className="services-faq__search-input"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </Reveal>

      <div className="services-faq__list mt-8 space-y-3">
        {filtered.length === 0 ? (
          <p className="services-faq__empty" role="status">
            No questions match &ldquo;{query.trim()}&rdquo;. Try different
            keywords.
          </p>
        ) : (
          filtered.map((item, index) => (
            <Reveal key={item.question} direction="up" delay={index * 60}>
              <details className="services-faq__item group">
                <summary className="services-faq__summary">
                  <span>{item.question}</span>
                  <span className="services-faq__icon" aria-hidden>
                    +
                  </span>
                </summary>
                <div className="services-faq__answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            </Reveal>
          ))
        )}
      </div>
    </div>
  );
}
