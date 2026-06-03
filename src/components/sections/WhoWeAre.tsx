import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WhoWeAre() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <Reveal direction="left">
          <div>
            <SectionTitle>Who We Are</SectionTitle>
            <div className="mt-6 space-y-4 text-text-secondary">
              <p>DB Studio is not a traditional marketing agency.</p>
              <p>
                We are a strategic and production-driven studio working with brands
                and business owners who are ready for clarity, structure, and
                long-term growth.
              </p>
              <p>We don&apos;t manage platforms.</p>
              <p>We don&apos;t sell isolated services.</p>
              <p>
                We design complete brand ecosystems where strategy, production,
                and opportunity align.
              </p>
              <p>Every project is built with direction and execution.</p>
            </div>
            <div className="mt-8">
              <Button href="/booking" interactive>
                Book a strategic call
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120}>
          <div className="section-image">
            <Image
              src="/images/who-we-are-studio.jpg"
              alt="DB Studio interview space with professional microphones and seating"
              width={1024}
              height={677}
              className="section-image__photo"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
