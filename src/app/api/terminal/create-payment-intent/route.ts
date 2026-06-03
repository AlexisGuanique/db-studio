import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe-server";

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "usd", description } = await request.json();

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const stripe = getStripe();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      description: description || "In-person payment — DB Studio Media",
      payment_method_types: ["card_present"],
      capture_method: "manual",
    });

    return NextResponse.json({
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Could not create payment intent" },
      { status: 500 },
    );
  }
}
