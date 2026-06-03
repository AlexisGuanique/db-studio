export const servicesNotIncludes = [
  "It's not network management",
  "It's not just branding",
  "It's not just content",
] as const;

export const servicesWhatsIncluded = [
  "In-depth brand & business diagnosis",
  "Clear messaging & positioning definition",
  "Organic growth & sales strategy",
  "Functional branding (if required)",
  "Visual & communication coherence",
  "Owner's personal brand development (if applicable)",
  "Content strategy & direction",
  "Digital system organization",
  "Continuous strategic guidance",
  "Talent & influencer connections (added value)",
] as const;

export const servicesForWho = [
  "Businesses already generating revenue",
  "Brands wanting structured growth",
  "Owners who value strategy",
  "Companies ready to delegate smartly",
] as const;

export const servicesNotFor = [
  'People who just want "pretty posts"',
  "Those looking for the cheapest option",
  'Anyone wanting to "try it for a month"',
] as const;

export const servicesTimelineSteps = [
  {
    step: 1,
    title: "Brand Activation",
    price: "One-Time Investment – $2,000",
    description:
      "Your brand is streamlined, the message clarified, strategy defined, and a solid foundation for growth is built.",
    variant: "light" as const,
  },
  {
    step: 2,
    title: "Brand Management Membership",
    price: "Up to $1,000 / month",
    subtitle: "3-Month Program",
    description: "From Month 2 Onwards Includes:",
    includes: [
      "Continuous strategic support",
      "Message & positioning refinement",
      "Creative direction",
      "Growth roadmap execution",
      "Collaboration & opportunity access",
    ],
    note: "This is not a monthly posting subscription. This is strategic brand partnership.",
    variant: "burgundy" as const,
  },
] as const;

export const servicesFaq = [
  {
    question: "What services does DB Studio provide?",
    answer:
      "DB Studio is a full-service marketing agency specializing in brand strategy, audiovisual production, content creation, and campaign development. We help businesses strengthen their market presence through strategic planning and high-quality visual execution.",
  },
  {
    question: "Who does DB Studio work with?",
    answer:
      "We work with growing brands, established companies, entrepreneurs, and organizations looking to elevate their positioning and increase brand visibility. Our clients value strategic marketing, premium production, and long-term brand growth.",
  },
  {
    question: "Do you only provide video production services?",
    answer:
      "No. While high-end audiovisual production is a core strength of DB Studio, we offer comprehensive marketing solutions including brand strategy, creative direction, content planning, and campaign execution. Our approach integrates strategy with production for measurable impact.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes. DB Studio has experience working on international projects and large-scale productions, including collaborations during events such as Bogotá Fashion Week. We are equipped to manage campaigns and productions both locally and globally.",
  },
  {
    question: "How can we start working with DB Studio?",
    answer:
      "The first step is to book a strategy call through our calendar. During this consultation, we analyze your brand's goals, challenges, and opportunities to create a customized marketing and production plan tailored to your business.",
  },
] as const;
