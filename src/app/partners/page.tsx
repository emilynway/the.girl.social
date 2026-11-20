import type { Metadata } from "next";
import PartnerForm from "@/components/PartnerForm";

export const metadata: Metadata = {
  title: "Partners | The Girl Social",
};

// Businesses we have already worked with. Swap a name for a logo once a partner sends one.
const partnerGroups = [
  {
    title: "Brands we've worked with",
    names: [
      "Studio13",
      "Smykbar",
      "MATINÉ",
      "Upower Coaching",
      "Spilloteket",
      "Dee Harlow Art",
    ],
  },
  {
    title: "Where we meet",
    names: ["Java Espressobar", "Åpent Bakeri", "Hakone"],
  },
];

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="tag">Let&apos;s work together</span>
      <h1 className="mt-4 font-serif text-3xl font-normal tracking-[-0.015em] sm:text-4xl">
        Partner with The Girl Social
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        We collaborate with local businesses to bring our members exclusive
        experiences, discounts, and events. If you run a café, studio, shop,
        or service in Oslo and want to reach an engaged local community,
        we&apos;d love to hear from you.
      </p>

      <div className="mt-12 flex flex-col gap-10 border-y border-border py-10">
        {partnerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {group.title}
            </h2>
            <ul className="mt-4 flex flex-wrap items-baseline gap-x-10 gap-y-3">
              {group.names.map((name) => (
                <li
                  key={name}
                  className="font-serif text-xl tracking-[-0.01em] text-foreground/70 sm:text-2xl"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            What partnership can look like
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <li>• Featured discounts for our members</li>
            <li>• Co-hosted events at your venue</li>
            <li>• Shoutouts in our newsletter and social channels</li>
            <li>• A listing in our member partner directory</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Tell us about your business
          </h2>
          <div className="mt-4">
            <PartnerForm />
          </div>
        </div>
      </div>
    </div>
  );
}
