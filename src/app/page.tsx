import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandManagement } from "@/components/sections/BrandManagement";
import { ContentStudio } from "@/components/sections/ContentStudio";
import { CreativeDirection } from "@/components/sections/CreativeDirection";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { WhoWeAre } from "@/components/sections/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <section className="hero-section bg-white px-4 pb-12 lg:pb-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center lg:px-8">
          <Reveal immediate direction="left" delay={100}>
            <h1 className="hero-heading max-w-3xl text-xl sm:text-2xl lg:text-[1.75rem]">
              DB Studio Media Where Strategy, Production and Talent Connect.
            </h1>
          </Reveal>

          <Reveal immediate direction="right" delay={220}>
            <p className="hero-subheading mt-3 max-w-xl text-sm text-text-secondary md:text-base">
              DB Studio is a strategic production and brand development company
              integrating positioning, audiovisual execution, and talent
              connections under one structured ecosystem.
            </p>
          </Reveal>

          <Reveal
            immediate
            direction="left"
            delay={340}
            className="mt-4 w-full max-w-3xl md:mt-5"
          >
            <HeroVideo />
          </Reveal>

          <Reveal
            immediate
            direction="right"
            delay={460}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4"
          >
            <Button href="/booking">Book a Strategy Call</Button>
            <Button href="/memberships" variant="outline">
              Explore memberships
            </Button>
            <Button href="/memberships" variant="outline">
              Explore the Studio
            </Button>
          </Reveal>
        </div>
      </section>

      <WhoWeAre />
      <CreativeDirection />
      <BrandManagement />
      <ContentStudio />
    </>
  );
}
