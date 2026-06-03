import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
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
      <PageImageHero title="Contact Us" breadcrumbs={breadcrumbs} />
      <ContactIntro />
      <ContactBottom />
    </>
  );
}
