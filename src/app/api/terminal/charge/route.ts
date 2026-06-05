import { NextRequest, NextResponse } from "next/server";
import { startReaderPayment } from "@/lib/stripe-terminal-server";

export async function POST(request: NextRequest) {
  try {
    const { amount, description } = await request.json();

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const result = await startReaderPayment(amount, description);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error starting terminal charge:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not start payment on reader",
      },
      { status: 500 },
    );
  }
}
