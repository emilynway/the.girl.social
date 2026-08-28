import type { Metadata } from "next";
import PartnerForm from "@/components/PartnerForm";

export const metadata: Metadata = {
  title: "Partners | Oslo Girl Social",
};

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Partner with Oslo Girl Social
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        We collaborate with local businesses to bring our members exclusive
        experiences, discounts, and events. If you run a café, studio, shop,
        or service in Oslo and want to reach an engaged local community,
        we&apos;d love to hear from you.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">What partnership can look like</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <li>• Featured discounts for our members</li>
            <li>• Co-hosted events at your venue</li>
            <li>• Shoutouts in our newsletter and social channels</li>
            <li>• A listing in our member partner directory</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Tell us about your business</h2>
          <div className="mt-4">
            <PartnerForm />
          </div>
        </div>
      </div>
    </div>
  );
}
