import { NextRequest, NextResponse } from "next/server";

const POS_COOKIE = "pos_auth";
const COOKIE_MAX_AGE = 60 * 60 * 12; // 12 hours

export async function POST(request: NextRequest) {
  const accessPassword = process.env.POS_ACCESS_PASSWORD;

  if (!accessPassword) {
    return NextResponse.json(
      { error: "POS access is not configured on the server" },
      { status: 503 },
    );
  }

  try {
    const { password } = await request.json();

    if (!password || password !== accessPassword) {
      return NextResponse.json({ error: "Invalid access code" }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(POS_COOKIE, "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: COOKIE_MAX_AGE,
      path: "/pos",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  const authenticated = request.cookies.get(POS_COOKIE)?.value === "1";
  return NextResponse.json({ authenticated });
}
