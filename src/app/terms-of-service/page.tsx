import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms Of Service",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageImageHero
        title="Terms Of Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms Of Service" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-text-secondary lg:px-8">
          <p>
            By accessing and using the {site.name} Media website and services,
            you agree to comply with these Terms of Service.
          </p>

          <div>
            <h2 className="text-xl font-semibold uppercase text-burgundy">
              Services
            </h2>
            <p className="mt-2">
              DB Studio provides strategic brand development, audiovisual
              production, and talent connection services. Specific deliverables
              and timelines are defined in individual agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold uppercase text-burgundy">
              Intellectual Property
            </h2>
            <p className="mt-2">
              All content on this website, including text, graphics, and branding,
              is the property of {site.legalName} unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold uppercase text-burgundy">
              Contact
            </h2>
            <p className="mt-2">
              Questions about these terms may be directed to{" "}
              <a href={`mailto:${site.email}`} className="text-burgundy hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}