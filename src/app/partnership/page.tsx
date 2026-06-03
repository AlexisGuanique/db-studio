import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { PartnershipContent } from "@/components/sections/PartnershipContent";

export const metadata: Metadata = {
  title: "Partnership",
};

export default function PartnershipPage() {
  return (
    <>
      <PageImageHero
        title="Partnership"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partnership" },
        ]}
      />

      <PartnershipContent />
    </>
  );
}
