export const contactIntro = {
  title: "Get in touch with us!",
  description:
    "Ready to take your brand to the next level? Connect with our team to explore a strategic approach built around clarity, production, and measurable growth.",
} as const;

export const contactFormCopy = {
  label: "Contact",
  title: "Get Tailored Digital Solutions for Your Business",
  paragraphs: [
    "At DB Studio Media, we specialize in helping brands grow online through creative digital solutions and strategic media services. From compelling visual content and website design to effective marketing and media management, we deliver results that help your business stand out and connect with your audience.",
    "Whether you're launching a new brand, boosting your online presence, or scaling your digital marketing efforts, our team is here to support your goals with clarity and creativity.",
    "Let's work together to turn your ideas into impactful results because your success is our priority.",
  ],
} as const;

export const contactFormFields = [
  { id: "name", name: "name", label: "Name", type: "text", required: true },
  {
    id: "company",
    name: "company",
    label: "Company Name",
    type: "text",
    required: false,
  },
  {
    id: "industry",
    name: "industry",
    label: "Industry",
    type: "text",
    required: true,
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone no#",
    type: "tel",
    required: false,
  },
  {
    id: "service",
    name: "service",
    label: "Service of interest",
    type: "text",
    required: false,
  },
  {
    id: "message",
    name: "message",
    label: "Message",
    type: "textarea",
    required: false,
  },
] as const;
