import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export interface SubscriptionRequestPayload {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  planSlug: string;
  planName: string;
  amountLabel: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<SubscriptionRequestPayload>;

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const company = body.company?.trim() || undefined;
    const message = body.message?.trim() || undefined;
    const planSlug = body.planSlug?.trim();
    const planName = body.planName?.trim();
    const amountLabel = body.amountLabel?.trim();

    if (!fullName || fullName.length < 2) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    if (!phone || phone.length < 7) {
      return NextResponse.json({ error: "A valid phone number is required." }, { status: 400 });
    }

    if (!planSlug || !planName || !amountLabel) {
      return NextResponse.json({ error: "Plan information is missing." }, { status: 400 });
    }

    const referenceId = crypto.randomUUID().slice(0, 8).toUpperCase();
    const submittedAt = new Date().toISOString();

    const record = {
      referenceId,
      submittedAt,
      fullName,
      email,
      phone,
      company,
      message,
      planSlug,
      planName,
      amountLabel,
      billingEmail: site.billingEmail,
    };

    console.log("[subscription-request]", JSON.stringify(record, null, 2));

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        "Your request was received. Our billing team will contact you within 1–2 business days.",
    });
  } catch {
    return NextResponse.json(
      { error: "Could not submit your request. Please try again." },
      { status: 500 },
    );
  }
}
