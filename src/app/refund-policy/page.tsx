import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Refund Policy" },
      ]}
    >
      <p className="text-sm text-text-secondary">Last updated: June 2026</p>

      <h2>Studio Memberships — Levels 1 and 2</h2>
      <p>
        No refund for sessions already completed or in progress. To cancel, send written
        notice 30 days before the next billing date to{" "}
        {site.billingEmail}. No refund for the billing period already charged at the
        time of cancellation. Session rescheduling requires a minimum of 48 hours
        notice. Missed sessions without 48 hours prior notice do not generate credit or
        refund.
      </p>

      <h2>Strategic Brand Foundation — Level 3 ($2,000)</h2>
      <p>
        The 50% deposit ($1,000) is non-refundable at the time of contract signing.
        The remaining 50% ($1,000) is non-refundable after project start.
        Delays caused by DB Studio Media grant the client an additional
        14-day grace period.
      </p>

      <h2>Brand Management — Level 4 ($1,000/mo)</h2>
      <p>
        Prorated credit only for the unused portion of the current month,
        when cancellation is made in accordance with contract terms. No refund
        for any month of service already completed. Cancellation notice: 30 days written
        notice before the next billing date, after the minimum committed period.
      </p>

      <h2>Integrated, Signature Studio, and Enterprise Levels — Levels 5, 6, and 7</h2>
      <p>
        Cancellation and refund terms are governed by the specific Statement of Work (SOW)
        contract signed with each client.
      </p>

      <p>
        For refund requests:{" "}
        <a href={`mailto:${site.billingEmail}`}>{site.billingEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
