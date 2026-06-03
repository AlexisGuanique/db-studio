import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import {
  SharedBackdropPanel,
  SharedBackdropRoot,
} from "@/components/layout/SharedBackdrop";
import { ServicesAudience } from "@/components/sections/ServicesAudience";
import { ServicesFaq } from "@/components/sections/ServicesFaq";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesTimeline } from "@/components/sections/ServicesTimeline";
import { ServicesWhatsIncluded } from "@/components/sections/ServicesWhatsIncluded";
import {
  servicesFaq,
  servicesForWho,
  servicesNotFor,
  servicesNotIncludes,
  servicesTimelineSteps,
  servicesWhatsIncluded,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero breadcrumbs={breadcrumbs} />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <div className="section-image mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
                <Image
                  src="/images/who-we-are-studio.jpg"
                  alt="DB Studio podcast and recording setup with professional microphones"
                  width={1024}
                  height={677}
                  className="section-image__photo aspect-[3/2] w-full"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="services-not-social lg:py-4">
                <h2 className="text-xl font-semibold uppercase tracking-wide text-burgundy md:text-2xl lg:text-3xl">
                  This Is Not Social Media Management
                </h2>
                <ul className="mt-6 space-y-3 text-text-secondary">
                  {servicesNotIncludes.map((item) => (
                    <li key={item} className="text-base md:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-semibold text-burgundy md:text-xl">
                  This is structured brand growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SharedBackdropRoot>
        <SharedBackdropPanel variant="burgundy-tint" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
            <ServicesTimeline steps={servicesTimelineSteps} />
          </div>
        </SharedBackdropPanel>
      </SharedBackdropRoot>

      <ServicesWhatsIncluded items={servicesWhatsIncluded} />

      <ServicesAudience forWho={servicesForWho} notFor={servicesNotFor} />

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <ServicesFaq items={servicesFaq} />
        </div>
      </section>
    </>
  );
}
