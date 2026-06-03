import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { agencyMission } from "@/lib/team";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function AboutAgencyContent() {
  return (
    <>
      <section id="mission" className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <Reveal direction="up">
            <p className="text-lg leading-relaxed text-text-secondary">{agencyMission.opening}</p>
            <SectionTitle className="mt-10">Our Mission</SectionTitle>
            <p className="mt-6 text-text-secondary">{agencyMission.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <Reveal direction="up">
            <SectionTitle>Our Methodology</SectionTitle>
            <p className="mt-4 text-text-secondary">
              Three pillars that define how DB Studio delivers results:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {agencyMission.methodology.map((pillar, index) => (
              <Reveal key={pillar.title} direction="up" delay={index * 80}>
                <div className="rounded-xl border-2 border-burgundy/12 bg-cream p-6">
                  <h3 className="font-semibold uppercase text-burgundy">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/equipo" variant="outline" interactive>
              Meet our team
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <Reveal direction="up">
            <SectionTitle>The Story Behind the Agency</SectionTitle>
            <p className="mt-6 leading-relaxed text-text-secondary">{agencyMission.founderStory}</p>
            <p className="mt-4 text-sm text-text-secondary">
              <Link href="/equipo" className="text-burgundy underline">
                View full team profiles →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
