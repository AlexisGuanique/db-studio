import { getStripe, getTerminalLocationId } from "@/lib/stripe-server";
import type Stripe from "stripe";

function isActiveReader(reader: unknown): reader is Stripe.Terminal.Reader {
  return (
    typeof reader === "object" &&
    reader !== null &&
    !("deleted" in reader && (reader as { deleted?: boolean }).deleted)
  );
}

export async function getOnlineReader(): Promise<Stripe.Terminal.Reader> {
  const locationId = getTerminalLocationId();
  const readerId = process.env.STRIPE_TERMINAL_READER_ID?.trim();

  const stripe = getStripe();

  if (readerId) {
    const reader = await stripe.terminal.readers.retrieve(readerId);
    if (!isActiveReader(reader)) {
      throw new Error("Reader was removed from Stripe. Re-register it in the Dashboard.");
    }
    if (reader.status !== "online") {
      throw new Error(
        `Reader "${reader.label || reader.id}" is offline. Power it on and confirm it shows Online in Stripe Dashboard.`,
      );
    }
    return reader;
  }

  if (!locationId) {
    throw new Error(
      "STRIPE_TERMINAL_LOCATION_ID is not configured. Add your Orlando location ID (tml_...).",
    );
  }

  const readers = await stripe.terminal.readers.list({
    location: locationId,
    status: "online",
    limit: 1,
  });

  const reader = readers.data[0];
  if (!reader) {
    throw new Error(
      "No online reader found at this location. Ensure the WisePOS E is powered on and shows Online in Stripe Dashboard → Terminal → Readers.",
    );
  }

  return reader;
}

export async function startReaderPayment(
  amount: number,
  description?: string,
): Promise<{ paymentIntentId: string; readerId: string; readerLabel: string }> {
  const stripe = getStripe();
  const reader = await getOnlineReader();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: "usd",
    description: description || "In-person payment — DB Studio Media",
    statement_descriptor: "DB STUDIO MEDIA",
    payment_method_types: ["card_present"],
    capture_method: "manual",
  });

  await stripe.terminal.readers.processPaymentIntent(reader.id, {
    payment_intent: paymentIntent.id,
  });

  return {
    paymentIntentId: paymentIntent.id,
    readerId: reader.id,
    readerLabel: reader.label || "Stripe Reader",
  };
}

export async function getReaderPaymentStatus(
  readerId: string,
  paymentIntentId: string,
): Promise<{
  done: boolean;
  success: boolean;
  message: string;
  amount?: number;
}> {
  const stripe = getStripe();

  const [readerResponse, paymentIntent] = await Promise.all([
    stripe.terminal.readers.retrieve(readerId),
    stripe.paymentIntents.retrieve(paymentIntentId),
  ]);

  if (!isActiveReader(readerResponse)) {
    return {
      done: true,
      success: false,
      message: "Reader is no longer available.",
    };
  }

  const reader = readerResponse;
  const action = reader.action;
  const actionFailed =
    action?.status === "failed" ||
    action?.failure_message != null ||
    paymentIntent.status === "canceled";

  if (actionFailed) {
    return {
      done: true,
      success: false,
      message:
        action?.failure_message ||
        paymentIntent.last_payment_error?.message ||
        "Payment failed on the reader.",
    };
  }

  const readyToCapture =
    paymentIntent.status === "requires_capture" ||
    paymentIntent.status === "succeeded";

  if (readyToCapture) {
    if (paymentIntent.status === "requires_capture") {
      await stripe.paymentIntents.capture(paymentIntentId);
    }

    return {
      done: true,
      success: true,
      message: "Payment approved",
      amount: paymentIntent.amount / 100,
    };
  }

  if (action?.status === "in_progress") {
    return {
      done: false,
      success: false,
      message: "Waiting for customer to present card on the reader...",
    };
  }

  return {
    done: false,
    success: false,
    message: "Processing payment on the reader...",
  };
}
