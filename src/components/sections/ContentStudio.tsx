import {
  contentCreatorFeatures,
  premiumCreatorFeatures,
  talentConnections,
} from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTitle } from "@/components/ui/SectionTitle";

function PricingCard({
  title,
  subtitle,
  price,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-lg border-2 p-8 ${
        featured
          ? "border-burgundy bg-burgundy text-white"
          : "border-burgundy/20 bg-white"
      }`}
    >
      <h3
        className={`text-xl font-semibold uppercase ${featured ? "text-white" : "text-burgundy"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-1 text-sm uppercase tracking-wide ${featured ? "text-white/80" : "text-text-secondary"}`}
      >
        {subtitle}
      </p>
      <div className="my-6">
        <span
          className={`text-4xl font-bold ${featured ? "text-white" : "text-burgundy"}`}
        >
          $ {price}
        </span>
        <span className={featured ? "text-white/80" : "text-text-secondary"}>
          {" "}
          /month
        </span>
      </div>
      <div className="flex-1">
        <CheckList items={features} light={featured} />
      </div>
      <div className="mt-8">
        <Button
          href={ctaHref}
          variant={featured ? "outline-light" : "primary"}
          className="w-full justify-center"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}

export function ContentStudio({ showTalent = true }: { showTalent?: boolean }) {
  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle>In-House Content Studio</SectionTitle>
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4 text-text-secondary">
              <p>
                DB Studio operates a professional recording and content
                production studio for creators, entrepreneurs, and brands
                seeking structured production.
              </p>
              <p>This is not studio rental.</p>
              <p className="font-medium text-text-primary">
                It is guided content creation inside a strategic ecosystem.
              </p>
              <Button href="/memberships">Explore More</Button>
            </div>
            <ImagePlaceholder label="Content Studio" aspectRatio="video" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <PricingCard
              title="Content Creator"
              subtitle="Membership"
              price="249.99"
              features={contentCreatorFeatures}
              ctaLabel="Apply for Studio Membership"
              ctaHref="/memberships"
            />
            <PricingCard
              title="Premium Creator"
              subtitle="Membership"
              price="499.99"
              features={premiumCreatorFeatures}
              ctaLabel="Apply for Premium Membership"
              ctaHref="/memberships"
              featured
            />
          </div>
        </div>
      </section>

      {showTalent && (
        <section className="bg-burgundy py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle light>Talent & Brand Connections</SectionTitle>
            <p className="mt-4 max-w-2xl text-white/90">
              DB Studio connects brands with:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {talentConnections.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/20 bg-white/5 px-4 py-6 text-center"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-white/90">
              All connections are aligned with positioning goals not random
              exposure.
            </p>
            <p className="mt-2 font-medium">
              We create structured collaboration opportunities.
            </p>
            <div className="mt-8">
              <Button href="/services" variant="outline-light">
                Apply for Brand Management
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
