import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { serviceLevels } from "@/lib/serviceLevels";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Terms of Service" },
      ]}
    >
      <p className="text-sm text-text-secondary">Last updated: June 2026</p>

      <h2>1. Description of Services</h2>
      <p>
        {site.legalName} (&quot;DB Studio Media&quot;) offers seven levels of brand
        development and audiovisual production services:
      </p>
      <ul>
        {serviceLevels.map((level) => (
          <li key={level.slug}>
            <strong>Level {level.id} — {level.name}:</strong> {level.price}
            {level.priceSuffix}. {level.contract}
          </li>
        ))}
      </ul>

      <h2>2. Payment Terms</h2>
      <p>
        Payments are processed via Stripe and/or Square. Subscriptions (Levels 1, 2, 4,
        5, 6, and 7) are billed monthly on the agreed date. Level 3 requires 50% upon
        signing and 50% at project start. Failed payments may result in
        service suspension until the account is brought current. DB Studio Media will send
        reminders before each billing cycle.
      </p>

      <h2>3. Cancellation Policy</h2>
      <p>
        Levels 1, 2, and 4: written notice 30 days before the next
        billing date. Level 3: non-refundable deposit upon signing; balance non-refundable
        after project start. Levels 5, 6, and 7: 30 days notice after the minimum
        committed period. See our{" "}
        <a href="/refund-policy">Refund & Cancellation Policy</a> for
        full details.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All raw footage captured at DB Studio Media is the exclusive property
        of the agency until full payment is received. Upon final payment,
        the client obtains exclusive rights to all edited and final deliverables
        agreed in the statement of work. Raw files are retained by
        DB Studio Media for 30 days and permanently deleted thereafter, unless
        otherwise agreed in writing. DB Studio Media reserves the right to use
        project work anonymously in its portfolio and marketing materials,
        unless the client requests otherwise in writing at the time of signing the
        agreement.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        DB Studio Media provides professional strategy and production services. We do not
        guarantee specific business results, sales growth, or
        audience metrics. Our maximum liability is limited to the amount paid
        by the client in the 12 months prior to the claim.
      </p>

      <h2>6. Dispute Resolution</h2>
      <p>
        Before initiating litigation, the parties agree to attempt to resolve disputes through
        good-faith written negotiation at {site.email} within 30 days. If unresolved,
        disputes will be submitted to mediation in the state of Florida.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These terms are governed by the laws of the State of Florida, United States, without
        regard to conflicts of legal principles.
      </p>

      <h2>8. Modifications</h2>
      <p>
        DB Studio Media may modify these terms with 14 days notice by email or
        publication on the website. Continued use of the service constitutes acceptance.
      </p>

      <p>
        Contact: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPageLayout>
  );
}
