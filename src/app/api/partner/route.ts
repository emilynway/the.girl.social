import { NextRequest, NextResponse } from "next/server";
import { HubspotNotConfiguredError, submitToHubspot } from "@/lib/hubspot";

export async function POST(request: NextRequest) {
  const { name, email, company, message } = await request.json();

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof company !== "string" ||
    !company.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await submitToHubspot("HUBSPOT_PARTNER_FORM_ID", [
      { name: "firstname", value: name },
      { name: "email", value: email },
      { name: "company", value: company },
      { name: "message", value: message },
    ]);
  } catch (err) {
    if (err instanceof HubspotNotConfiguredError) {
      console.error("Partner inquiry received but HubSpot isn't configured yet:", {
        name,
        email,
        company,
      });
      return NextResponse.json(
        { error: "Partner inquiries aren't connected yet — try again soon." },
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
