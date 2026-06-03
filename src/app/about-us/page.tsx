import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { AboutAgencyContent } from "@/components/sections/AboutAgencyContent";
import { ContentStudio } from "@/components/sections/ContentStudio";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <>
      <PageImageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutAgencyContent />
      <ContentStudio showTalent={false} />
    </>
  );
}
