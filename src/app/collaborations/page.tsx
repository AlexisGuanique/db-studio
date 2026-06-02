import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Collaborations",
};

const formats = [
  {
    title: "Brand Influencers Campaigns",
    description: "Strategic partnership with creators",
  },
  {
    title: "Visual Storytelling Campaigns",
    description: "Creative content production",
  },
  {
    title: "Digital Activations",
    description: "Engaged digital initiatives",
  },
];

const connectedBrands = ["MIU MIU", "L'Oréal", "Garnier", "Amazon"];

export default function CollaborationsPage() {
  return (
    <>
      <PageHero
        title="Collaborations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collaborations" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle>Collaborations That Build Visibility</SectionTitle>
          <div className="mt-6 max-w-3xl space-y-4 text-text-secondary">
            <p>
              At DB Studio Media, collaborations focus on developing strategic
              content and campaigns with brands, businesses, and creators. We
              work alongside companies to produce visual storytelling, influencer
              campaigns, and digital activations designed to strengthen brand
              presence and connect with the right audience.
            </p>
            <p>
              Our experience includes collaborations and campaigns connected
              with international brands such as{" "}
              {connectedBrands.join(", ")}, as well as projects focused on
              education, business growth, and audience engagement in the United
              States.
            </p>
            <p>
              In addition, DB Studio Media connects brands with content creators
              and influencers, helping develop collaborations and campaigns that
              expand reach, credibility, and audience engagement.
            </p>
          </div>

          <div className="mt-12">
            <ImagePlaceholder label="Collaborations Gallery" aspectRatio="video" />
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-semibold uppercase text-burgundy">
              Collaboration Formats
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {formats.map((format) => (
                <div
                  key={format.title}
                  className="rounded-lg border-2 border-burgundy/20 bg-cream p-6"
                >
                  <h4 className="font-semibold uppercase text-burgundy">
                    {format.title}
                  </h4>
                  <p className="mt-2 text-sm text-text-secondary">
                    {format.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-burgundy p-8 text-white md:p-12">
            <SectionTitle light>
              Connecting Brands with the Right Voices
            </SectionTitle>
            <p className="mt-4 text-white/90">DB Studio Media connects brands with:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Content creators",
                "Influencers",
                "Models",
                "Media personalities",
                "Strategic collaborators",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-cream">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact-us" variant="outline-light">
                Start a Collaboration
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
