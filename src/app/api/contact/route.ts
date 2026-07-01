import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  brokerage?: string;
  message: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Wire this up to Formspree, Resend, or another email service — the
  // form on the client only cares about the { ok } shape returned below.
  console.log("New lead:", body);

  return NextResponse.json({ ok: true });
}
