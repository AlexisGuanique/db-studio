import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe-server";

export async function POST() {
  try {
    const stripe = getStripe();
    const connectionToken = await stripe.terminal.connectionTokens.create();

    return NextResponse.json({
      secret: connectionToken.secret,
    });
  } catch (error) {
    console.error("Error creating connection token:", error);
    return NextResponse.json(
      { error: "Could not generate connection token" },
      { status: 500 },
    );
  }
}
