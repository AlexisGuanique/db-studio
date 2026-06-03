import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WhoWeAre() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
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
              <Button href="/booking">Book a strategy call</Button>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={120}>
          <ImagePlaceholder label="DB Studio Team" aspectRatio="landscape" />
        </Reveal>
      </div>
    </section>
  );
}
