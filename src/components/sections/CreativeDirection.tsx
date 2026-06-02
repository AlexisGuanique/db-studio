import { studioApproach } from "@/lib/site";
import { CheckList } from "@/components/ui/CheckList";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CreativeDirection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <ImagePlaceholder label="Creative Director" aspectRatio="portrait" />

        <div>
          <SectionTitle>Creative Direction</SectionTitle>
          <div className="mt-6 space-y-4 text-text-secondary">
            <p>
              DB Studio is led by Creative Director Deborah Bolívar, a brand
              strategist and visual communication specialist with over five years
              of experience in digital positioning, brand perception, and
              high-level communication strategy.
            </p>
            <p>
              Her professional background spans Venezuela, Colombia, and the
              United States, including participation in Bogotá Fashion Week and
              working with major brands and large-scale productions. This
              experience strengthened her expertise in visual authority, brand
              execution, audience psychology, and professional standards.
            </p>
            <p>
              Recognized as Miss Orlando 2024, she brings discipline, presence,
              and strategic representation into every project — not as a
              spotlight, but as a standard of excellence and leadership.
            </p>
            <p>
              Under her direction, DB Studio operates with a collaborative
              team-based structure, integrating brand strategy, audiovisual
              production, content systems, and structured positioning frameworks
              to help entrepreneurs and companies build credible, scalable, and
              professionally positioned brands.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-semibold uppercase tracking-wide">
            The studio&apos;s approach is built on:
          </h3>
          <div className="mt-4">
            <CheckList items={studioApproach} columns={2} />
          </div>

          <blockquote className="mt-8 border-l-4 border-burgundy pl-4 italic text-text-secondary">
            <p>Presence without structure fades.</p>
            <p>Structure without presence disconnects.</p>
            <p className="mt-2 font-semibold not-italic text-burgundy">
              DB Studio bridges both.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
