import Image from "next/image";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { AutumnLeavesBackground } from "@/components/sections/AutumnLeavesBackground";
import { ClientResults } from "@/components/sections/ClientResults";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Reveal } from "@/components/ui/Reveal";

export function HomeHero() {
  return (
    <>
      <section className="home-hero relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
        <AutumnLeavesBackground />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          <div className="home-hero__mosaic">
            <Reveal direction="left" className="home-hero__mosaic-feature">
              <div className="section-image home-hero__mosaic-item home-hero__mosaic-item--feature overflow-hidden">
                <Image
                  src="/images/who-we-are-studio.jpg"
                  alt="DB Studio production environment with professional recording equipment"
                  width={1024}
                  height={677}
                  className="section-image__photo h-full w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal direction="left" delay={120} className="home-hero__mosaic-cell">
              <div className="section-image home-hero__mosaic-item home-hero__mosaic-item--thumb overflow-hidden">
                <Image
                  src="/images/industries/carousel-fashion.png"
                  alt="Brand content produced by DB Studio Media"
                  width={764}
                  height={389}
                  className="section-image__photo h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={180} className="home-hero__mosaic-cell">
              <div className="section-image home-hero__mosaic-item home-hero__mosaic-item--thumb overflow-hidden">
                <Image
                  src="/images/collaborations/connecting-voices.png"
                  alt="Client brand results from DB Studio campaigns"
                  width={788}
                  height={518}
                  className="section-image__photo h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal direction="right" delay={100}>
              <h1 className="text-2xl font-semibold uppercase leading-snug tracking-wide text-text-primary sm:text-3xl lg:text-4xl">
                Where strategy, production, and brand development become competitive advantage.
              </h1>
            </Reveal>
            <Reveal direction="right" delay={180}>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary md:text-base">
                DB Studio Media is a full-service brand development and production agency. We
                build brand systems — combining strategic positioning, audiovisual production,
                and talent connections — for companies ready to scale with structure. This is
                not social media management. This is not studio rental. This is your brand
                growth engine.
              </p>
            </Reveal>
            <Reveal direction="right" delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services" interactive>
                  View our services
                </Button>
                <Button href="/memberships" variant="outline" interactive>
                  Explore memberships
                </Button>
                <Button href="/booking" variant="outline" interactive>
                  Book a strategic call →
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <AnimatedStats />

      <ClientResults />

      <section className="hero-section bg-white px-6 pb-16 pt-8 lg:px-12">
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal direction="up">
            <HeroVideo />
          </Reveal>
        </div>
      </section>
    </>
  );
}
