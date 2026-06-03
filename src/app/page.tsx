import { HomeHero } from "@/components/sections/HomeHero";
import { BrandManagement } from "@/components/sections/BrandManagement";
import { ContentStudio } from "@/components/sections/ContentStudio";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import {
  SharedBackdropPanel,
  SharedBackdropRoot,
} from "@/components/layout/SharedBackdrop";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhoWeAre />
      <SharedBackdropRoot>
        <SharedBackdropPanel variant="burgundy-tint" className="py-20 md:py-28">
          <BrandManagement />
        </SharedBackdropPanel>
      </SharedBackdropRoot>
      <ContentStudio />
    </>
  );
}
