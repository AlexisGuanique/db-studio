import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Services",
};

const notIncludes = [
  "It's not network management",
  "It's not just branding",
  "It's not just content",
];

const whatsIncluded = [
  "In-depth brand business diagnosis",
  "Clear messaging positioning definition",
  "Organic growth sales strategy",
  "Functional branding (if required)",
  "Visual communication coherence",
  "Owner's personal brand development (if applicable)",
  "Content strategy direction",
  "Digital system organization",
  "Continuous strategic guidance",
  "Talent influencer connections (added value)",
];

const forWho = [
  "Businesses already generating revenue",
  "Brands wanting structured growth",
  "Owners who value strategy",
  "Companies ready to delegate with clarity",
];

const notFor = [
  "Businesses looking for cheap posting services",
  "Brands without revenue or direction",
  "Owners unwilling to invest in strategy",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-xl font-medium text-burgundy">
            It is order, clarity, direction, and real growth.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionTitle>Brand Management</SectionTitle>
              <p className="mt-4 text-text-secondary">
                Brand Management is a comprehensive brand and growth support
                service for businesses that are already operating but know they
                can do better.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/booking">Book a Strategy Call</Button>
                <Button href="/memberships" variant="outline">
                  View Program Details
                </Button>
              </div>
            </div>
            <ImagePlaceholder label="Brand Management" aspectRatio="landscape" />
          </div>

          <div className="mt-16 rounded-lg bg-cream p-8">
            <h3 className="text-lg font-semibold uppercase text-burgundy">
              This Is Not Social Media Management
            </h3>
            <ul className="mt-4 space-y-2 text-text-secondary">
              {notIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-text-primary">
              This is structured brand growth.
            </p>
          </div>

          <div className="mt-16">
            <SectionTitle>How It Works</SectionTitle>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border-2 border-burgundy/20 bg-white p-8">
                <h3 className="text-xl font-semibold text-burgundy">
                  Step 1 – Brand Activation
                </h3>
                <p className="mt-2 font-medium">
                  One-Time Investment – $2,000
                </p>
                <p className="mt-4 text-text-secondary">
                  Your brand is streamlined, the message clarified, strategy
                  defined, and a solid foundation for growth is built.
                </p>
              </div>
              <div className="rounded-lg border-2 border-burgundy bg-burgundy p-8 text-white">
                <h3 className="text-xl font-semibold">
                  Step 2 – Brand Management Membership
                </h3>
                <p className="mt-2 font-medium">Up to $1,000 / month</p>
                <p className="mt-1 text-sm text-white/80">3-Month Program</p>
                <p className="mt-4 text-sm text-white/90">From Month 2 Onwards Includes:</p>
                <ul className="mt-4 space-y-2 text-sm text-white/90">
                  <li>• Continuous strategic support</li>
                  <li>• Message positioning refinement</li>
                  <li>• Creative direction</li>
                  <li>• Growth roadmap execution</li>
                  <li>• Collaboration opportunity access</li>
                </ul>
                <p className="mt-4 text-sm italic text-white/70">
                  Important Note: This is not a monthly posting subscription.
                  This is strategic brand partnership.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionTitle>What&apos;s Included</SectionTitle>
            <p className="mt-2 text-text-secondary">
              What&apos;s Included in the Brand Management Package?
            </p>
            <div className="mt-6">
              <CheckList items={whatsIncluded} columns={2} />
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-green-800/20 bg-green-50 p-8">
              <h3 className="font-semibold uppercase text-green-900">
                This Is For:
              </h3>
              <ul className="mt-4 space-y-2 text-text-secondary">
                {forWho.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-red-900/20 bg-red-50 p-8">
              <h3 className="font-semibold uppercase text-red-900">
                Not For:
              </h3>
              <ul className="mt-4 space-y-2 text-text-secondary">
                {notFor.map((item) => (
                  <li key={item}>✗ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/booking">Apply for Brand Management</Button>
          </div>
        </div>
      </section>
    </>
  );
}
