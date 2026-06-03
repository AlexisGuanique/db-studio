import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { CollaborationsContent } from "@/components/sections/CollaborationsContent";

export const metadata: Metadata = {
  title: "Collaborations",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Collaborations" },
];

export default function CollaborationsPage() {
  return (
    <>
      <PageImageHero title="Collaborations" breadcrumbs={breadcrumbs} />
      <CollaborationsContent />
    </>
  );
}
