import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContentStudio } from "@/components/sections/ContentStudio";

export const metadata: Metadata = {
  title: "Memberships",
};

export default function MembershipsPage() {
  return (
    <>
      <PageHero
        title="Memberships"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Memberships" },
        ]}
      />
      <ContentStudio />
    </>
  );
}
