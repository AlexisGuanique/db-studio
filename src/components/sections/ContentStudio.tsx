import {
  contentCreatorFeatures,
  premiumCreatorFeatures,
  talentConnections,
} from "@/lib/site";
import { getServiceLevel } from "@/lib/serviceLevels";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { SectionTitle } from "@/components/ui/SectionTitle";

const level1 = getServiceLevel("content-creator")!;
const level2 = getServiceLevel("premium-creator")!;

function PricingCard({
  title,
  subtitle,
  price,
  features,
  ctaLabel,
  ctaHref,
  disclosure,
  featured = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  disclosure: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`content-studio-card flex h-full flex-col p-8 text-center md:p-9 ${
        featured ? "content-studio-card--featured" : ""
      }`}
    >
      <h3 className="content-studio-card__title text-xl font-semibold uppercase text-burgundy">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-text-secondary">
        {subtitle}
      </p>
      <div className="my-6">
        <span className="text-4xl font-bold text-burgundy">{price}</span>
        <span className="text-text-secondary"> /month</span>
      </div>
      <div className="mt-3 flex flex-1 justify-center">
        <CheckList items={features} />
      </div>
      <div className="mt-8">
        <Button href={ctaHref} variant="primary" interactive className="w-full justify-center">
          {ctaLabel}
        </Button>
        <p className="service-level-card__disclosure mt-3 text-xs leading-relaxed text-text-secondary/80">
          {disclosure}
        </p>
      </div>
    </div>
  );
}

export function ContentStudio({ showTalent = true }: { showTalent?: boolean }) {
  return (
    <>
      <section id="content-studio" className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            <Reveal direction="left">
              <div className="content-studio-intro md:col-span-2 lg:col-span-1 lg:pr-4 xl:pr-6">
                <SectionTitle>In-House Content Studio</SectionTitle>
                <div className="reveal-stagger mt-6 space-y-4 text-text-secondary">
                  <p>
                    DB Studio operates a professional recording and content production studio
                    for creators, entrepreneurs, and brands seeking structured production.
                  </p>
                  <p>This is not studio rental.</p>
                  <p className="font-medium text-text-primary">
                    It is guided content creation inside a strategic ecosystem.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/services#studio-memberships" variant="primary" interactive>
                    View all pricing
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={120}>
              <PricingCard
                title="Content Creator"
                subtitle="Membership — Level 1"
                price="$249.99"
                features={contentCreatorFeatures}
                ctaLabel={level1.ctaLabel}
                ctaHref={`/checkout/${level1.slug}`}
                disclosure={level1.disclosure}
              />
            </Reveal>

            <Reveal direction="right" delay={200}>
              <PricingCard
                title="Premium Creator"
                subtitle="Membership — Level 2"
                price="$499.99"
                features={premiumCreatorFeatures}
                ctaLabel={level2.ctaLabel}
                ctaHref={`/checkout/${level2.slug}`}
                disclosure={level2.disclosure}
                featured
              />
            </Reveal>
          </div>
        </div>
      </section>

      {showTalent && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <Reveal direction="left">
              <SectionTitle>Talent & Brand Connections</SectionTitle>
              <p className="mt-4 max-w-2xl text-text-secondary">
                DB Studio connects brands with:
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {talentConnections.map((item, index) => (
                <Reveal key={item} direction={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
                  <div className="talent-card talent-card--mirror rounded-lg border-2 border-burgundy bg-burgundy px-4 py-6 text-center">
                    <h3 className="talent-card__title text-sm font-semibold uppercase tracking-wide text-white">
                      {item}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal direction="up" delay={120}>
              <div className="mt-8">
                <Button href="/services#brand-foundation" variant="primary" interactive>
                  View Brand Services — from $2,000
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
