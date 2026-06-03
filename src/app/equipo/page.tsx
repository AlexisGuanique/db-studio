import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { Reveal } from "@/components/ui/Reveal";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Team",
};

export default function EquipoPage() {
  return (
    <>
      <PageImageHero
        title="Our Team"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Our Team" },
        ]}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3 md:px-8">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} direction="up" delay={index * 80}>
              <article className="overflow-hidden rounded-2xl border-2 border-burgundy/12 bg-cream">
                <div className="section-image aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at DB Studio Media`}
                    width={682}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-semibold uppercase text-burgundy">{member.name}</h2>
                  <p className="mt-1 text-sm font-medium text-text-secondary">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-xl px-6 text-center text-sm text-text-secondary">
          <Link href="/about-us#mission" className="text-burgundy underline">
            Learn about our mission and methodology →
          </Link>
        </p>
      </section>
    </>
  );
}
