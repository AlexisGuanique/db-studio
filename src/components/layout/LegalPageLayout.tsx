import type { ReactNode } from "react";
import { PageImageHero } from "@/components/layout/PageImageHero";

export function LegalPageLayout({
  title,
  breadcrumbs,
  children,
}: {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
}) {
  return (
    <>
      <PageImageHero title={title} breadcrumbs={breadcrumbs} />
      <section className="bg-white py-16">
        <div className="legal-prose mx-auto max-w-3xl px-6 md:px-8">{children}</div>
      </section>
    </>
  );
}
