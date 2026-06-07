import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { serviceLevels } from "@/lib/serviceLevels";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
};

const subscriptionLevels = serviceLevels.filter(
  (level) => level.checkoutType === "subscription",
);
const applicationLevels = serviceLevels.filter(
  (level) => level.checkoutType === "application" && level.priceSuffix === "/month",
);
const projectLevels = serviceLevels.filter((level) => level.id === 3);

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

      <p>
        This policy matches the cancellation and refund terms disclosed at checkout for
        each published service tier. For questions, contact{" "}
        <a href={`mailto:${site.billingEmail}`}>{site.billingEmail}</a> or call{" "}
        <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>.
      </p>

      <h2>Studio Memberships — Levels 1 and 2</h2>
      {subscriptionLevels
        .filter((level) => level.id === 1 || level.id === 2)
        .map((level) => (
          <div key={level.slug}>
            <h3>
              Level {level.id} — {level.name} ({level.price}
              {level.priceSuffix})
            </h3>
            <p>{level.disclosure}</p>
            <p>
              No refund for sessions already completed or in progress. Session
              rescheduling requires a minimum of 48 hours notice. Missed sessions without
              48 hours prior notice do not generate credit or refund.
            </p>
          </div>
        ))}

      <h2>Strategic Brand Foundation — Level 3 ($2,000)</h2>
      {projectLevels.map((level) => (
        <p key={level.slug}>{level.disclosure}</p>
      ))}
      <p>
        Delays caused by DB Studio Media grant the client an additional 14-day grace
        period.
      </p>

      <h2>Brand Management — Level 4 ($1,000/mo)</h2>
      <p>
        {applicationLevels.find((level) => level.id === 4)?.disclosure}
      </p>
      <p>
        Prorated credit only for the unused portion of the current month, when
        cancellation is made in accordance with contract terms. No refund for any month
        of service already completed.
      </p>

      <h2>Enterprise Monthly Packages — Levels 5, 6, and 7</h2>
      {applicationLevels
        .filter((level) => level.id >= 5)
        .map((level) => (
          <div key={level.slug}>
            <h3>
              Level {level.id} — {level.name} ({level.price}
              {level.priceSuffix})
            </h3>
            <p>{level.disclosure}</p>
          </div>
        ))}

      <p>
        For refund requests:{" "}
        <a href={`mailto:${site.billingEmail}`}>{site.billingEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
