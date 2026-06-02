import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { BrandManagement } from "@/components/sections/BrandManagement";
import { ContentStudio } from "@/components/sections/ContentStudio";
import { CreativeDirection } from "@/components/sections/CreativeDirection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="mx-auto max-w-4xl text-3xl font-semibold uppercase leading-tight tracking-wide text-text-primary md:text-4xl lg:text-5xl">
            DB Studio media Where Strategy, Production and Talent Connect.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
            DB Studio is a strategic production and brand development company
            integrating positioning, audiovisual execution, and talent
            connections under one structured ecosystem.
          </p>

          <div className="mx-auto mt-10 max-w-4xl">
            <ImagePlaceholder label="Hero Video" aspectRatio="video" />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/booking">Book a Strategy Call</Button>
            <Button href="/memberships" variant="outline">
              Explore memberships
            </Button>
            <Button href="/memberships" variant="outline">
              Explore the Studio
            </Button>
          </div>
        </div>
      </section>

      <WhoWeAre />
      <CreativeDirection />
      <BrandManagement />
      <ContentStudio />
    </>
  );
}
