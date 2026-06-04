import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const paragraphs = [
  "DB Studio is not a traditional marketing agency.",
  "We are a strategic and production-driven studio working with brands and business owners who are ready for clarity, structure, and long-term growth.",
  "We don't manage platforms.",
  "We don't sell isolated services.",
  "We design complete brand ecosystems where strategy, production, and opportunity align.",
  "Every project is built with direction and execution.",
];

export function WhoWeAre() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <Reveal direction="left">
            <SectionTitle>Who We Are</SectionTitle>
          </Reveal>
          <Reveal direction="left" delay={100}>
            <div className="reveal-stagger mt-6 space-y-4 text-text-secondary">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal direction="left" delay={220}>
            <div className="mt-8">
              <Button href="/booking" interactive>
                Book a strategic call
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={140}>
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
