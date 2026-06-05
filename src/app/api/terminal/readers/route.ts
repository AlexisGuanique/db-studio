import { NextResponse } from "next/server";
import { getOnlineReader } from "@/lib/stripe-terminal-server";

export async function GET() {
  try {
    const reader = await getOnlineReader();

    return NextResponse.json({
      id: reader.id,
      label: reader.label,
      status: reader.status,
      device_type: reader.device_type,
    });
  } catch (error) {
    console.error("Error fetching terminal reader:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not find an online reader",
      },
      { status: 503 },
    );
  }
}
