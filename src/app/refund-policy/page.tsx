import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        title="Refund Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Refund Policy" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-text-secondary">
            All membership and service investments at DB Studio Media are
            discussed during consultation. Refund eligibility depends on the
            specific program, contract terms, and services rendered.
          </p>
          <p className="mt-4 text-text-secondary">
            For refund inquiries, please contact{" "}
            <a href={`mailto:${site.email}`} className="text-burgundy hover:underline">
              {site.email}
            </a>{" "}
            with your account details and reason for request.
          </p>
        </div>
      </section>
    </>
  );
}
