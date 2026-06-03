import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactBottom } from "@/components/sections/ContactBottom";
import { ContactIntro } from "@/components/sections/ContactIntro";

export const metadata: Metadata = {
  title: "Contact Us",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact Us" },
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero title="Contact Us" breadcrumbs={breadcrumbs} />
      <ContactIntro />
      <ContactBottom />
    </>
  );
}
