import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
      ]}
    >
      <p className="text-sm text-text-secondary">Last updated: June 2026</p>

      <h2>1. Data We Collect</h2>
      <ul>
        <li>Name, email, phone number, and company</li>
        <li>Payment data (processed by Stripe and Square — we do not store full card numbers)</li>
        <li>IP address, browser type, and cookies</li>
        <li>Information from contact, booking, and application forms</li>
      </ul>

      <h2>2. How We Use Data</h2>
      <p>
        Payment processing, service communications, contractual fulfillment,
        marketing (with consent), website improvement, and analytics.
      </p>

      <h2>3. Retention</h2>
      <ul>
        <li>Active account data: for the duration of the business relationship + 3 years</li>
        <li>Payment records: 7 years (tax requirements)</li>
        <li>Analytics cookies: up to 24 months</li>
        <li>Contact forms: 24 months</li>
      </ul>

      <h2>4. We Do Not Sell Your Data</h2>
      <p>
        DB Studio Media does not sell, rent, or trade personal data to third parties.
      </p>

      <h2>5. Third-Party Processors</h2>
      <ul>
        <li>Stripe and Square — payment processing</li>
        <li>Google Analytics — web analytics</li>
        <li>Meta Ads (Facebook Pixel) — advertising</li>
        <li>Email marketing tools — communications</li>
        <li>Calendly/Cal.com — call scheduling</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We use necessary, analytics, and marketing cookies. See our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>7. Data Deletion</h2>
      <p>
        Request deletion by writing to{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. We will respond within
        30 days.
      </p>

      <h2>8. CCPA Rights (California)</h2>
      <p>
        California residents may request access, deletion, and opt-out of sale
        (we do not sell data). Contact: {site.privacyEmail}.
      </p>

      <h2>9. GDPR Rights (EU)</h2>
      <p>
        EU users have the right to access, rectify, delete, port, and object to processing.
        Legal basis: contractual performance and consent.
      </p>

      <h2>10. Privacy Contact</h2>
      <p>
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
