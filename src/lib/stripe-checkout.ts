export type StripeCheckoutInitResult =
  | { status: "ready"; url: string }
  | {
      status: "unavailable";
      reason: "stripe_not_connected" | "checkout_not_configured";
    };

const checkoutUrlBySlug: Record<string, string | undefined> = {
  "content-creator": process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL_CONTENT_CREATOR,
  "premium-creator": process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL_PREMIUM_CREATOR,
};

export function getCheckoutUrlForSlug(slug: string): string | null {
  const perLevel = checkoutUrlBySlug[slug]?.trim();
  if (perLevel) return perLevel;

  const global = process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL?.trim();
  return global || null;
}

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY?.trim());
}

export function resolveCheckoutInit(slug: string): StripeCheckoutInitResult {
  const url = getCheckoutUrlForSlug(slug);

  if (url) {
    return { status: "ready", url };
  }

  if (isStripeConfigured()) {
    return { status: "unavailable", reason: "checkout_not_configured" };
  }

  return { status: "unavailable", reason: "stripe_not_connected" };
}
