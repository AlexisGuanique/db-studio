export const site = {
  name: "DB Studio",
  brandName: "DB Studio Media",
  tagline: "Strategic Direction. Production. Connection.",
  email: "info@dbstudiomedia.com",
  billingEmail: "billing@dbstudiomedia.com",
  privacyEmail: "privacy@dbstudiomedia.com",
  phone: "+1 (407) 688-7889",
  legalName: "EBL Productions LLC DBA DB Studio Media LLC",
  stateOfIncorporation: "Florida, United States",
  address: "Orlando, Florida — United States",
  hours: "24 X 7, Send us a message",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
} as const;

export type NavItem =
  | { href: string; label: string }
  | { label: string; children: readonly { href: string; label: string }[] };

export const navLinks: readonly NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About Us",
    children: [
      { href: "/about-us", label: "Who We Are" },
      { href: "/our-team", label: "Our Team" },
      { href: "/about-us#mission", label: "Mission" },
    ],
  },
  {
    label: "Services",
    children: [
      { href: "/services#brand-foundation", label: "Brand Foundation" },
      { href: "/services#brand-management", label: "Brand Management" },
      { href: "/services#studio-memberships", label: "Studio Memberships" },
      { href: "/services#enterprise", label: "Enterprise" },
    ],
  },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/for-partners", label: "For Partners" },
  { href: "/contact-us", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/memberships", label: "Memberships" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/for-partners", label: "For Partners" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export const footerLegalLinks = [
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
] as const;

export const agencyStats = [
  { target: 7, suffix: "", label: "published service tiers" },
  { target: 6, suffix: "", label: "industries served" },
  { target: 3, suffix: "", label: "strategic service areas" },
] as const;

export const studioApproach = [
  "Strategic brand positioning",
  "Visual authority & executive presence",
  "High-level audiovisual production",
  "Structured systems for long-term growth",
  "Brand perception & audience psychology",
] as const;

export const talentConnections = [
  "Models",
  "Influencers",
  "Content creators",
  "Media personalities",
  "Strategic collaborators",
] as const;

export const contentCreatorFeatures = [
  "2 recording days per month",
  "2-hour sessions",
  "Professional podcast and recording setup",
  "Script support",
  "Content editing: up to 4 clips/month",
  "Social-ready clips",
] as const;

export const premiumCreatorFeatures = [
  "Everything in Content Creator Membership",
  "Advanced narrative and positioning direction",
  "Influencer & talent connections",
  "Guest interview opportunities",
  "Collaborative media exposure",
  "Event integration",
  "Up to 8 social-ready clips/month",
] as const;
