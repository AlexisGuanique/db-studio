import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  if (!stripeClient) {
    stripeClient = new Stripe(secretKey, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      apiVersion: "2026-05-27.dahlia" as any,
    });
  }

  return stripeClient;
}

export function getTerminalLocationId(): string | undefined {
  return process.env.STRIPE_TERMINAL_LOCATION_ID;
}

export function isTerminalSimulated(): boolean {
  return process.env.NEXT_PUBLIC_STRIPE_TERMINAL_SIMULATED === "true";
}
