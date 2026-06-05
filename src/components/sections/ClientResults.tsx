"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/caseStudies";

export function ClientResults() {
  return (
    <section className="client-results bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal direction="up">
          <div className="text-center">
            <p className="client-results__eyebrow">Proven outcomes</p>
            <h2 className="client-results__title">Client Results</h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} direction="up" delay={120 + index * 110}>
              <article className="case-study-card group h-full">
                <span className="case-study-card__shine" aria-hidden="true" />
                <p className="case-study-card__industry">{study.industry}</p>
                <p className="case-study-card__headline">{study.headline}</p>
                <Link href="/work" className="case-study-card__link">
                  View case study
                  <span className="case-study-card__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
