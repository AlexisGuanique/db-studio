import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work — Case Studies",
};

export default function WorkPage() {
  return (
    <>
      <PageImageHero
        title="Work"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Work" },
        ]}
      />
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12 px-6 md:px-8">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} direction="up" delay={index * 80}>
              <article className="rounded-2xl border-2 border-burgundy/12 bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-burgundy/70">
                  {study.industry}
                </p>
                <h2 className="mt-2 text-xl font-semibold uppercase text-burgundy">
                  {study.client}
                </h2>
                <p className="mt-3 text-lg font-medium text-text-primary">{study.headline}</p>
                <div className="mt-6 space-y-4 text-sm text-text-secondary">
                  <p><strong className="text-burgundy">Challenge:</strong> {study.challenge}</p>
                  <p><strong className="text-burgundy">Approach:</strong> {study.approach}</p>
                  <p><strong className="text-burgundy">Result:</strong> {study.result}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
