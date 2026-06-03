import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { ApplicationForm } from "@/components/checkout/ApplicationForm";
import { getServiceLevel } from "@/lib/serviceLevels";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const level = getServiceLevel(slug);
  return { title: level ? `Apply — ${level.name}` : "Apply" };
}

export default async function ApplyPage({ params }: Props) {
  const { slug } = await params;
  const level = getServiceLevel(slug);

  if (!level) notFound();

  return (
    <>
      <PageImageHero
        title={`Apply — ${level.name}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Apply" },
        ]}
      />
      <section className="bg-cream py-16">
        <ApplicationForm level={level} />
      </section>
    </>
  );
}
