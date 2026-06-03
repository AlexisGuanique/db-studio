import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageImageHero
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="prose prose-neutral mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-text-secondary">
            This Privacy Policy describes how {site.legalName} (&quot;DB Studio
            Media,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            collects, uses, and protects your personal information when you visit
            our website or use our services.
          </p>

          <h2 className="mt-8 text-xl font-semibold uppercase text-burgundy">
            Information We Collect
          </h2>
          <p className="mt-4 text-text-secondary">
            We may collect personal information that you voluntarily provide,
            including your name, email address, phone number, and any messages
            submitted through our contact or booking forms.
          </p>

          <h2 className="mt-8 text-xl font-semibold uppercase text-burgundy">
            How We Use Your Information
          </h2>
          <p className="mt-4 text-text-secondary">
            We use collected information to respond to inquiries, provide
            services, improve our website, and communicate with you about our
            offerings.
          </p>

          <h2 className="mt-8 text-xl font-semibold uppercase text-burgundy">
            Contact
          </h2>
          <p className="mt-4 text-text-secondary">
            For privacy-related questions, contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-burgundy hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}