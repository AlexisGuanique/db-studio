import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BrandManagement } from "@/components/sections/BrandManagement";
import { CreativeDirection } from "@/components/sections/CreativeDirection";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <CreativeDirection />
      <BrandManagement />
    </>
  );
}
