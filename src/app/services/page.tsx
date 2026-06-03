import type { Metadata } from "next";
import Image from "next/image";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { Reveal } from "@/components/ui/Reveal";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingFaq } from "@/components/sections/PricingFaq";
import { ServiceComparisonTable } from "@/components/sections/ServiceComparisonTable";
import { ServiceLevelsGrid } from "@/components/sections/ServiceLevelCard";
import { serviceLevels } from "@/lib/serviceLevels";
import { servicesNotIncludes } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services & Pricing",
};

export default function ServicesPage() {
  const studioLevels = serviceLevels.filter((l) => l.category === "studio");
  const brandLevels = serviceLevels.filter((l) => l.category === "brand");
  const enterpriseLevels = serviceLevels.filter((l) => l.category === "enterprise");

  return (
    <>
      <PageImageHero
        title="Services & Pricing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <div className="section-image mx-auto w-full max-w-xl lg:mx-0">
                <Image
                  src="/images/who-we-are-studio.jpg"
                  alt="DB Studio professional recording and production environment"
                  width={1024}
                  height={677}
                  className="section-image__photo aspect-[3/2] w-full"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <div className="services-not-social lg:py-4">
                <h2 className="text-xl font-semibold uppercase tracking-wide text-burgundy md:text-2xl">
                  This Is Not Social Media Management
                </h2>
                <ul className="mt-6 space-y-3 text-text-secondary">
                  {servicesNotIncludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-semibold text-burgundy">
                  This is structured brand growth with transparent pricing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="studio-memberships" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <ServiceLevelsGrid levels={studioLevels} title="Studio Memberships" />
        </div>
      </section>

      <section id="brand-foundation" className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <ServiceLevelsGrid levels={brandLevels} title="Brand Development" />
        </div>
      </section>

      <section id="enterprise" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <ServiceLevelsGrid levels={enterpriseLevels} title="Enterprise Packages" />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="mb-8 text-center text-2xl font-semibold uppercase text-burgundy">
              Compare All Levels
            </h2>
            <ServiceComparisonTable />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <HowItWorks />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <PricingFaq />
        </div>
      </section>
    </>
  );
}
