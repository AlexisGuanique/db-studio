import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Partnership",
};

const partnershipBenefits = [
  {
    title: "Expanding Brand Visibility Through Media",
    description:
      "Strategic partnerships create opportunities for brands and creators to reach audiences through television and digital media.",
  },
  {
    title: "Connecting Digital Content With Television",
    description:
      "Strategic partnerships create opportunities for brands and creators to reach audiences through multiple platforms.",
  },
];

export default function PartnershipPage() {
  return (
    <>
      <PageImageHero
        title="Partnership"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partnership" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle>Partnership That Expand Visibility</SectionTitle>
          <div className="mt-6 max-w-3xl space-y-4 text-text-secondary">
            <p>
              At DB Studio Media, partnerships are built with media platforms and
              strategic allies that help expand the reach and visibility of the
              projects we develop. These alliances allow us to connect brands,
              businesses, and creators with broader audiences through media
              exposure, distribution opportunities, and collaborative
              initiatives.
            </p>
            <p>
              One of our strategic media partners is{" "}
              <strong className="text-burgundy">EVTV Miami Orlando</strong>, a
              television network that allows our productions and collaborations
              to reach audiences beyond digital platforms. Through these
              partnerships, DB Studio Media bridges digital content with broader
              communication channels, helping brands amplify their presence
              across multiple platforms including social media, digital media,
              and television.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="rounded-lg border-2 border-burgundy bg-cream p-8">
              <h3 className="text-lg font-semibold uppercase text-burgundy">
                Strategic Media Partner
              </h3>
              <p className="mt-2 text-xl font-bold">EVTV Miami Orlando</p>
              <p className="mt-4 text-text-secondary">
                A television network that allows our productions and
                collaborations to reach audiences beyond digital platforms.
                Through this partnership, DB Studio Media expands content
                visibility across television, digital platforms, and social
                media.
              </p>
            </div>
            <ImagePlaceholder label="EVTV Partnership" aspectRatio="landscape" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {partnershipBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border-2 border-burgundy/20 p-8"
              >
                <h3 className="font-semibold uppercase text-burgundy">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact-us">Follow Us on Instagram</Button>
          </div>
        </div>
      </section>
    </>
  );
}
