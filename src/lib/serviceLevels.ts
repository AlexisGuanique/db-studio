export type ServiceLevelId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface ServiceLevel {
  id: ServiceLevelId;
  slug: string;
  name: string;
  category: "studio" | "brand" | "enterprise";
  price: string;
  priceAmount: number;
  priceSuffix: string;
  contract: string;
  idealFor: string;
  deliverables: readonly string[];
  disclosure: string;
  note?: string;
  ctaLabel: string;
  checkoutType: "subscription" | "application";
  requiresFoundation?: boolean;
  minCommitment?: string;
  addon?: string;
}

export const serviceLevels: readonly ServiceLevel[] = [
  {
    id: 1,
    slug: "content-creator",
    name: "Studio Content Creator Membership",
    category: "studio",
    price: "$249.99",
    priceAmount: 249.99,
    priceSuffix: "/month",
    contract:
      "Month-to-month · 30-day written cancellation notice · No enrollment fee",
    idealFor:
      "Individual creators, podcasters, and entrepreneurs starting structured content production who need professional studio access without long-term commitment.",
    deliverables: [
      "2 studio recording days per month",
      "2-hour sessions per recording day",
      "Professional podcast and recording setup",
      "Script support and session preparation",
      "Content editing: up to 4 deliverable clips per month",
      "Social-ready clips formatted per platform",
    ],
    addon: "Additional studio days available at $75/day",
    disclosure:
      "By subscribing, you authorize DB Studio Media to charge $249.99 monthly until you cancel. Cancel with 30 days written notice. No refund for the billing period already charged.",
    ctaLabel: "Subscribe — $249.99/mo",
    checkoutType: "subscription",
  },
  {
    id: 2,
    slug: "premium-creator",
    name: "Premium Creator Membership",
    category: "studio",
    price: "$499.99",
    priceAmount: 499.99,
    priceSuffix: "/month",
    contract:
      "3-month minimum ($1,499.97) · Then month-to-month · 30-day cancellation notice",
    idealFor:
      "Established creators ready for strategic network access, media exposure, and advanced narrative development.",
    deliverables: [
      "Everything in Studio Content Creator Membership",
      "Advanced narrative and positioning direction",
      "Influencer and talent connections: up to 2 per month",
      "Guest interview opportunities and logistics coordination",
      "Collaborative media exposure",
      "Event integration: 1 per quarter",
      "Strategic visibility and placement opportunities",
      "Up to 8 social-ready clips per month",
    ],
    disclosure:
      "By subscribing, you authorize DB Studio Media to charge $499.99 monthly. 3-month minimum commitment ($1,499.97 total). No refund for completed months. Cancel after the minimum period with 30 days written notice.",
    ctaLabel: "Subscribe — $499.99/mo",
    checkoutType: "subscription",
    minCommitment: "3 months",
  },
  {
    id: 3,
    slug: "brand-foundation",
    name: "Strategic Brand Foundation",
    category: "brand",
    price: "$2,000",
    priceAmount: 2000,
    priceSuffix: " one-time",
    contract:
      "6–8 week project · 50% ($1,000) at signing + 50% ($1,000) at project start",
    idealFor:
      "Businesses and entrepreneurs who need complete strategic positioning before scaling. Required before Brand Management Membership.",
    deliverables: [
      "Full brand diagnosis and competitive audit",
      "Positioning clarity framework and ideal client profile (ICP)",
      "Core narrative and message alignment document",
      "Content system design and channel strategy",
      "Visual and communication direction guide",
      "Structural planning and 90-day brand roadmap",
    ],
    disclosure:
      "The 50% deposit ($1,000) is non-refundable upon signing. The remaining 50% ($1,000) is non-refundable after project start. Delivery: complete strategic document + presentation session.",
    ctaLabel: "Apply — $2,000",
    checkoutType: "application",
  },
  {
    id: 4,
    slug: "brand-management",
    name: "Brand Management Membership",
    category: "brand",
    price: "$1,000",
    priceAmount: 1000,
    priceSuffix: "/month",
    contract:
      "Option A — 3-month minimum (total with Level 3: $5,000) · Option B — 12 months ($14,000 total)",
    idealFor:
      "Brands that completed Strategic Brand Foundation and are ready for ongoing growth partnership without hiring an internal team.",
    deliverables: [
      "Ongoing strategic brand support — unlimited consultations",
      "Monthly message and positioning refinement",
      "Monthly creative direction and content oversight",
      "Growth roadmap execution and accountability",
      "Collaboration and strategic partnership access",
      "Monthly 60-minute strategy session (video call)",
    ],
    disclosure:
      "By subscribing, you authorize DB Studio Media to charge $1,000 monthly. Minimum commitment per selected option. Cancel after the minimum period with 30 days written notice before the next billing date.",
    ctaLabel: "Apply — $1,000/mo",
    checkoutType: "application",
    requiresFoundation: true,
    minCommitment: "3 or 12 months",
  },
  {
    id: 5,
    slug: "integrated-media",
    name: "Integrated Media Package",
    category: "enterprise",
    price: "$3,500",
    priceAmount: 3500,
    priceSuffix: "/month",
    contract:
      "6-month minimum · Total commitment: $21,000 · 30-day written cancellation after minimum",
    idealFor:
      "Growing companies wanting studio production AND brand management under one agency contract — no need to manage multiple vendors.",
    deliverables: [
      "Everything in Premium Creator Membership (Level 2)",
      "Everything in Brand Management Membership (Level 4)",
      "Monthly content strategy and full editorial calendar",
      "2 strategy sessions per month (60 minutes each)",
      "Monthly brand analytics and performance report",
      "Priority studio scheduling — no waitlist",
      "Onboarding session included at no extra cost",
    ],
    note: "No Brand Foundation prerequisite · Onboarding included · Contract includes defined scope of work.",
    disclosure:
      "By subscribing, you authorize DB Studio Media to charge $3,500 monthly. 6-month minimum commitment ($21,000 total). Cancel after the minimum period with 30 days written notice.",
    ctaLabel: "Apply — $3,500/mo",
    checkoutType: "application",
    minCommitment: "6 months",
  },
  {
    id: 6,
    slug: "enterprise",
    name: "Enterprise Agency Partnership",
    category: "enterprise",
    price: "$5,000",
    priceAmount: 5000,
    priceSuffix: "/month",
    contract:
      "12-month minimum · Annual contract: $60,000 · Application required",
    idealFor:
      "Established companies, product launches, and multi-channel campaigns. High-level agency relationship with dedicated brand manager.",
    deliverables: [
      "All Integrated Media Package services (Level 5)",
      "Dedicated senior brand strategist with assigned point of contact",
      "Full content production calendar and monthly execution",
      "Public relations coordination and media exposure",
      "Talent acquisition oversight and management",
      "Quarterly executive brand review with results report",
      "Event production support: up to 2 events per year",
      "Unlimited strategy sessions (weekly, bi-weekly, or monthly)",
    ],
    note: "Requires application and qualification interview · Custom statement of work · Quarterly reviews with performance milestones.",
    disclosure:
      "By subscribing, you authorize DB Studio Media to charge $5,000 monthly. 12-month minimum commitment ($60,000 total). Cancellation and refund terms governed by signed SOW.",
    ctaLabel: "Apply — $5,000/mo",
    checkoutType: "application",
    minCommitment: "12 months",
  },
  {
    id: 7,
    slug: "signature-studio",
    name: "Signature Studio Partnership",
    category: "enterprise",
    price: "$3,000",
    priceAmount: 3000,
    priceSuffix: "/month",
    contract:
      "6-month minimum · Total commitment: $18,000 · 30-day written cancellation after minimum",
    idealFor:
      "Ambitious brands ready to show up with presence — strategic brand leadership and studio production in one curated partnership, without the full Integrated Media scope.",
    deliverables: [
      "Ongoing brand strategy and monthly positioning oversight",
      "1 studio recording day per month (2-hour session)",
      "Up to 4 social-ready clips per month",
      "Monthly 60-minute strategy session (video call)",
      "Monthly content direction and creative oversight",
      "Growth roadmap execution and accountability",
      "Collaboration and strategic partnership access",
    ],
    note: "Your signature presence, built with intention · No Brand Foundation prerequisite · Application required.",
    disclosure:
      "By subscribing, you authorize DB Studio Media to charge $3,000 monthly. 6-month minimum commitment ($18,000 total). Cancel after the minimum period with 30 days written notice.",
    ctaLabel: "Apply — $3,000/mo",
    checkoutType: "application",
    minCommitment: "6 months",
  },
] as const;

export function getServiceLevel(slug: string) {
  return serviceLevels.find((level) => level.slug === slug);
}

export const comparisonFeatures = [
  { label: "Price", key: "price" as const },
  { label: "Contract type", key: "contract" as const },
  { label: "Studio recording days", levels: [2, 2, 0, 0, 2, 2, 1] },
  { label: "Social-ready clips/month", levels: [4, 8, 0, 0, 8, 8, 4] },
  { label: "Brand strategy", levels: [false, true, true, true, true, true, true] },
  { label: "Influencer connections", levels: [false, true, false, false, true, true, false] },
  { label: "Dedicated brand manager", levels: [false, false, false, false, false, true, false] },
  { label: "Media / PR exposure", levels: [false, true, false, false, true, true, false] },
  { label: "Requires Brand Foundation", levels: [false, false, false, true, false, false, false] },
  { label: "Application required", levels: [false, false, true, true, false, true, true] },
] as const;

export const pricingFaq = [
  {
    question:
      "Do I need to complete Strategic Brand Foundation before Brand Management?",
    answer:
      "Yes. Level 4 (Brand Management Membership) requires completion of Level 3 (Strategic Brand Foundation — $2,000). Levels 5, 6, and 7 do not require Level 3; onboarding is included.",
  },
  {
    question: "Can I combine studio and brand management services?",
    answer:
      "Yes. Level 5 (Integrated Media Package — $3,500/mo) combines Premium Creator studio access with Brand Management under one contract.",
  },
  {
    question: "What is the cancellation policy for each level?",
    answer:
      "Levels 1, 2, and 4: 30-day written notice before the next billing date. Level 3: non-refundable deposit and final payment per contract. Levels 5, 6, and 7: 30-day notice after minimum commitment. See our Refund & Cancellation Policy for full details.",
  },
  {
    question: "Is there an enrollment fee on any plan?",
    answer: "No. Levels 1 and 2 have no enrollment fee. Level 3 requires a 50% deposit at signing.",
  },
  {
    question: "What happens if I miss a scheduled studio session?",
    answer:
      "Rescheduling requires 48 hours minimum notice. Sessions missed without 48-hour notice do not receive credit or refund.",
  },
  {
    question: "How does the application process work for Levels 4, 5, 6, and 7?",
    answer:
      "Submit the application form with your business details and goals. Our team reviews fit within 2–3 business days. Approved clients receive a custom contract and billing link.",
  },
] as const;

export const howItWorksSteps = [
  {
    step: 1,
    title: "Book your strategic call",
    description:
      "Complete a brief qualification form so we understand your business, goals, and current stage.",
  },
  {
    step: 2,
    title: "We assess fit and needs",
    description:
      "On the call, we recommend the right service level based on your situation and growth objectives.",
  },
  {
    step: 3,
    title: "Sign your contract and begin",
    description:
      "Receive your personalized agreement, sign, and the DB Studio team begins structured execution.",
  },
] as const;
