import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  SharedBackdropPanel,
  SharedBackdropRoot,
} from "@/components/layout/SharedBackdrop";
import { BrandManagement } from "@/components/sections/BrandManagement";
import { ContentStudio } from "@/components/sections/ContentStudio";
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

      <SharedBackdropRoot>
        <SharedBackdropPanel variant="burgundy-tint" className="py-20 md:py-28">
          <CreativeDirection portrait="about" />
        </SharedBackdropPanel>
        <SharedBackdropPanel variant="transparent" className="py-20 md:py-28">
          <BrandManagement />
        </SharedBackdropPanel>
      </SharedBackdropRoot>

      <ContentStudio />
    </>
  );
}
