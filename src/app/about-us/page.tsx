import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
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

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About Us" },
];

export default function AboutUsPage() {
  return (
    <>
      <PageImageHero title="About Us" breadcrumbs={breadcrumbs} />

      <SharedBackdropRoot id="about-content">
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
