import { NextRequest, NextResponse } from "next/server";
import { getReaderPaymentStatus } from "@/lib/stripe-terminal-server";

export async function GET(request: NextRequest) {
  try {
    const readerId = request.nextUrl.searchParams.get("reader_id");
    const paymentIntentId = request.nextUrl.searchParams.get("payment_intent_id");

    if (!readerId || !paymentIntentId) {
      return NextResponse.json(
        { error: "reader_id and payment_intent_id are required" },
        { status: 400 },
      );
    }

    const status = await getReaderPaymentStatus(readerId, paymentIntentId);
    return NextResponse.json(status);
  } catch (error) {
    console.error("Error polling terminal charge:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not check payment status",
      },
      { status: 500 },
    );
  }
}
