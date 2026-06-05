import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { PartnershipContent } from "@/components/sections/PartnershipContent";

export const metadata: Metadata = {
  title: "For Partners",
};

export default function ForPartnersPage() {
  return (
    <>
      <PageImageHero
        title="For Partners"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Partners" },
        ]}
      />
      <PartnershipContent />
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-xl font-semibold uppercase text-burgundy">Partner Application</h2>
          <p className="mt-4 text-text-secondary">
            DB Studio Media seeks complementary agency partners, consultants, and media allies.
            Submit your application through our contact form.
          </p>
          <a
            href="/contact-us"
            className="mt-6 inline-flex rounded-[10px] bg-burgundy px-8 py-3 text-sm font-semibold uppercase text-white"
          >
            Apply to partner
          </a>
        </div>
      </section>
    </>
  );
}
