import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe-server";

export async function POST(request: NextRequest) {
  try {
    const { payment_intent_id } = await request.json();

    if (!payment_intent_id || typeof payment_intent_id !== "string") {
      return NextResponse.json(
        { error: "Payment intent ID is required" },
        { status: 400 },
      );
    }

    const stripe = getStripe();
    const paymentIntent = await stripe.paymentIntents.capture(payment_intent_id);

    return NextResponse.json({
      status: paymentIntent.status,
      amount: paymentIntent.amount / 100,
      payment_intent_id: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error capturing payment intent:", error);
    return NextResponse.json(
      { error: "Could not capture payment" },
      { status: 500 },
    );
  }
}
