import { NextRequest, NextResponse } from "next/server";
import { HubspotNotConfiguredError, submitToHubspot } from "@/lib/hubspot";

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.includes("@")
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await submitToHubspot("HUBSPOT_TAROT_FORM_ID", [
      { name: "firstname", value: name },
      { name: "email", value: email },
    ]);
  } catch (err) {
    if (err instanceof HubspotNotConfiguredError) {
      console.error("Tarot workshop RSVP received but HubSpot isn't configured yet:", {
        name,
        email,
      });
      return NextResponse.json(
        { error: "RSVPs aren't connected yet. Try again soon." },
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
