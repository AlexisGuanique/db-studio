import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { SubscriptionCheckout } from "@/components/checkout/SubscriptionCheckout";
import { getServiceLevel } from "@/lib/serviceLevels";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const level = getServiceLevel(slug);
  return { title: level ? `Checkout — ${level.name}` : "Checkout" };
}

export default async function CheckoutPage({ params }: Props) {
  const { slug } = await params;
  const level = getServiceLevel(slug);

  if (!level || level.checkoutType !== "subscription") notFound();

  return (
    <>
      <PageImageHero
        title="Secure Checkout"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: level.name },
        ]}
      />
      <section className="bg-cream py-16">
        <SubscriptionCheckout level={level} />
      </section>
    </>
  );
}
