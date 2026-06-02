import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Industries",
};

const industries = [
  "Fashion & Beauty",
  "Real Estate",
  "Health & Wellness",
  "Education & Coaching",
  "Hospitality & Events",
  "Entertainment & Media",
  "Corporate & Professional Services",
  "E-commerce & Retail",
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle>Industries We Work With</SectionTitle>
          <p className="mt-6 max-w-3xl text-text-secondary">
            DB Studio Media collaborates with businesses across multiple
            industries that understand the importance of strong visual
            communication and brand perception. Our work supports companies that
            want to present their brand with clarity, professionalism, and
            impact through high-quality visual content and strategic storytelling.
          </p>

          <div className="mt-10">
            <Button href="/booking">Book a Strategy Call</Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-lg border-2 border-burgundy/20 bg-cream px-4 py-6 text-center transition hover:border-burgundy"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-burgundy">
                  {industry}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <ImagePlaceholder
                key={n}
                label={`Industry ${n}`}
                aspectRatio="video"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
