import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IndustriesIntroCarousel } from "@/components/sections/IndustriesIntroCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  industriesIntro,
  industriesServeIntro,
  industriesServed,
  industriesTalent,
} from "@/lib/industries";

export function IndustriesContent() {
  return (
    <>
      <section className="industries-intro bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="industries-intro__layout grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <div className="industries-intro__content lg:py-2">
                <SectionTitle>{industriesIntro.title}</SectionTitle>
                <div className="industries-intro__text mt-6 space-y-4">
                  {industriesIntro.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href="/booking" variant="primary" interactive>
                    Book a Strategy Call
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <IndustriesIntroCarousel />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="industries-serve bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="industries-serve__title">Industries We Serve</h2>
            <p className="industries-serve__intro mt-4 max-w-3xl">
              {industriesServeIntro}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {industriesServed.map((industry, index) => (
              <Reveal key={industry.title} direction="up" delay={index * 70}>
                <article className="industries-card">
                  <div className="industries-card__image section-image">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={1200}
                      height={800}
                      className="section-image__photo aspect-[3/2] w-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                    />
                  </div>
                  <div className="industries-card__body">
                    <h3 className="industries-card__title">{industry.title}</h3>
                    <p className="industries-card__text">{industry.description}</p>
                    <div className="mt-6">
                      <Button href="/booking" variant="primary" interactive>
                        Book a Strategy Call
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-talent bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <SectionTitle>Talent & Brand Connections</SectionTitle>
            <p className="industries-talent__lead mt-4 max-w-2xl">
              DB Studio connects brands with:
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {industriesTalent.map((item, index) => (
              <Reveal
                key={item}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 70}
              >
                <div className="talent-card talent-card--mirror rounded-lg border-2 border-burgundy bg-burgundy px-4 py-6 text-center">
                  <h3 className="talent-card__title text-sm font-semibold uppercase tracking-wide text-white">
                    {item}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={120}>
            <p className="industries-talent__note mt-8 max-w-2xl">
              All connections are aligned with positioning goals not random
              exposure.
            </p>
            <p className="industries-talent__note mt-2 font-medium text-text-primary">
              We create structured collaboration opportunities.
            </p>
            <div className="mt-8">
              <Button href="/services" variant="primary" interactive>
                Apply for Brand Management
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
