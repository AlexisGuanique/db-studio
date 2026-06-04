import { NextResponse } from "next/server";
import { resolveCheckoutInit } from "@/lib/stripe-checkout";

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Plan slug is required" }, { status: 400 });
    }

    const result = resolveCheckoutInit(slug);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { status: "unavailable", reason: "stripe_not_connected" },
      { status: 500 },
    );
  }
}
