import { NextRequest, NextResponse } from "next/server";
import { HubspotNotConfiguredError, submitToHubspot } from "@/lib/hubspot";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await submitToHubspot("HUBSPOT_NEWSLETTER_FORM_ID", [
      { name: "email", value: email },
    ]);
  } catch (err) {
    if (err instanceof HubspotNotConfiguredError) {
      console.error(
        "Newsletter signup received but HubSpot isn't configured yet:",
        email
      );
      return NextResponse.json(
        { error: "Signups aren't connected yet — try again soon." },
        { status: 503 }
      );
    }
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
