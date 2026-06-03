import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { ContentStudio } from "@/components/sections/ContentStudio";

export const metadata: Metadata = {
  title: "Memberships",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Memberships" },
];

export default function MembershipsPage() {
  return (
    <>
      <PageImageHero title="Memberships" breadcrumbs={breadcrumbs} />
      <ContentStudio />
    </>
  );
}
