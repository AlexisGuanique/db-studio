import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Cookie Policy" },
      ]}
    >
      <p className="text-sm text-text-secondary">Last updated: June 2026</p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when
        you visit dbstudiomedia.com.
      </p>

      <h2>2. Necessary Cookies</h2>
      <ul>
        <li>Session and security — duration: session</li>
        <li>Cookie consent preference — duration: 12 months</li>
        <li>Stripe / Square — payment processing — duration: per provider</li>
      </ul>

      <h2>3. Analytics Cookies</h2>
      <ul>
        <li>Google Analytics — duration: up to 24 months — requires consent</li>
      </ul>

      <h2>4. Marketing Cookies</h2>
      <ul>
        <li>Meta Pixel (Facebook) — duration: up to 90 days — requires consent</li>
      </ul>

      <h2>5. How to Manage Cookies</h2>
      <p>
        On your first visit, you may accept all cookies or only essential
        cookies. You can change your preference by clearing browser cookies and
        revisiting the site.
      </p>

      <h2>6. Third-Party Cookies</h2>
      <p>
        Google Analytics, Meta Pixel, Stripe, and Square may set their own cookies
        according to their respective privacy policies.
      </p>
    </LegalPageLayout>
  );
}
