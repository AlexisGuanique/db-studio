import Image from "next/image";
import Link from "next/link";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Reveal } from "@/components/ui/Reveal";
import { clientLogos } from "@/lib/site";
import { caseStudies } from "@/lib/caseStudies";

export function HomeHero() {
  return (
    <>
      <section className="home-hero bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <Reveal direction="left">
            <div className="home-hero__visual grid grid-cols-2 gap-3">
              <div className="section-image col-span-2 overflow-hidden rounded-2xl">
                <Image
                  src="/images/who-we-are-studio.jpg"
                  alt="DB Studio production environment with professional recording equipment"
                  width={1024}
                  height={677}
                  className="section-image__photo aspect-[3/2] w-full object-cover"
                  priority
                />
              </div>
              <div className="section-image overflow-hidden rounded-2xl">
                <Image
                  src="/images/industries/carousel-fashion.png"
                  alt="Brand content produced by DB Studio Media"
                  width={764}
                  height={389}
                  className="section-image__photo h-full w-full object-cover"
                />
              </div>
              <div className="section-image overflow-hidden rounded-2xl">
                <Image
                  src="/images/collaborations/connecting-voices.png"
                  alt="Client brand results from DB Studio campaigns"
                  width={788}
                  height={518}
                  className="section-image__photo h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div>
              <h1 className="text-2xl font-semibold uppercase leading-snug tracking-wide text-text-primary sm:text-3xl lg:text-4xl">
                Where strategy, production, and brand development become competitive advantage.
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary md:text-base">
                DB Studio Media is a full-service brand development and production agency. We
                build brand systems — combining strategic positioning, audiovisual production,
                and talent connections — for companies ready to scale with structure. This is
                not social media management. This is not studio rental. This is your brand
                growth engine.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services" interactive>View our services</Button>
                <Button href="/memberships" variant="outline" interactive>
                  Explore memberships
                </Button>
                <Button href="/booking" variant="outline" interactive>
                  Book a strategic call →
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatedStats />

      <section className="client-logos bg-white py-10 md:py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="client-logos__grid">
            {clientLogos.map((client) => (
              <div key={client.name} className="client-logos__item">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="client-logos__logo"
                />
              </div>
            ))}
          </div>
          <p className="client-logos__caption mt-6 text-xs text-text-secondary">
            Brands that trust DB Studio Media.
          </p>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal direction="up">
            <h2 className="text-center text-xl font-semibold uppercase tracking-wide text-burgundy md:text-2xl">
              Client Results
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} direction="up" delay={index * 80}>
                <article className="rounded-xl border-2 border-burgundy/12 bg-white p-5">
                  <p className="text-xs font-semibold uppercase text-burgundy/70">
                    {study.industry}
                  </p>
                  <p className="mt-2 text-sm font-medium text-text-primary">{study.headline}</p>
                  <Link href="/trabajo" className="mt-3 inline-block text-xs font-semibold uppercase text-burgundy hover:underline">
                    View case study →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-section bg-white px-6 pb-16 pt-8 lg:px-12">
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal immediate direction="up">
            <HeroVideo />
          </Reveal>
        </div>
      </section>
    </>
  );
}
