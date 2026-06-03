import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { IndustriesContent } from "@/components/sections/IndustriesContent";

export const metadata: Metadata = {
  title: "Industries",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageImageHero title="Industries" breadcrumbs={breadcrumbs} />
      <IndustriesContent />
    </>
  );
}
