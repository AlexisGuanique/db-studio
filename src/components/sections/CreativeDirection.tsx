import Image from "next/image";
import { studioApproach } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { SectionTitle } from "@/components/ui/SectionTitle";

const portraitPresets = {
  home: {
    src: "/images/creative-direction.jpg",
    alt: "DB Studio Media creative direction and brand strategy team at work",
    width: 682,
    height: 1024,
  },
  about: {
    src: "/images/creative-direction-about.jpg",
    alt: "DB Studio Media team member in a professional brand development setting",
    width: 682,
    height: 1024,
  },
} as const;

export function CreativeDirection({
  portrait = "home",
}: {
  portrait?: keyof typeof portraitPresets;
}) {
  const photo = portraitPresets[portrait];

  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
      <Reveal direction="left">
        <div className="section-image section-image--light section-image--mirror mx-auto w-full max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="section-image__photo aspect-[2/3]"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </Reveal>

      <Reveal direction="right" delay={120}>
        <div>
          <SectionTitle light>Creative Direction</SectionTitle>
          <div className="mt-6 space-y-4 text-white/90">
            <p>
              At DB Studio Media, creative direction is agency-led — integrating brand
              strategy, visual communication, and high-level production standards across
              every client engagement.
            </p>
            <p>
              Our methodology draws on experience across Venezuela, Colombia, and the
              United States, including fashion productions, international brand campaigns,
              and large-scale audiovisual projects. This cross-market expertise strengthens
              our approach to visual authority, brand execution, and audience psychology.
            </p>
            <p>
              DB Studio operates with a collaborative team-based structure, integrating
              brand strategy, audiovisual production, content systems, and structured
              positioning frameworks to help entrepreneurs and companies build credible,
              scalable, and professionally positioned brands.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-semibold uppercase tracking-wide text-cream">
            Our methodology is built on:
          </h3>
          <div className="mt-4">
            <CheckList items={studioApproach} columns={2} light />
          </div>

          <blockquote className="mt-8 border-l-4 border-cream/70 pl-4 italic text-white/85">
            <p>Presence without structure fades.</p>
            <p>Structure without presence disconnects.</p>
            <p className="mt-2 font-semibold not-italic text-cream">
              DB Studio bridges both.
            </p>
          </blockquote>
        </div>
      </Reveal>
    </div>
  );
}
