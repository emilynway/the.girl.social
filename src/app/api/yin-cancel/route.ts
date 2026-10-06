import { NextRequest, NextResponse } from "next/server";
import { HubspotNotConfiguredError, submitToHubspot } from "@/lib/hubspot";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
  }

  try {
    await submitToHubspot("HUBSPOT_YIN_CANCEL_FORM_ID", [{ name: "email", value: email }]);
  } catch (err) {
    if (err instanceof HubspotNotConfiguredError) {
      console.error("Yin class cancellation received but HubSpot isn't configured yet:", { email });
      return NextResponse.json(
        { error: "This isn't connected yet. Please reply to your confirmation email instead." },
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
