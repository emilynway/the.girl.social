import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Membership | Oslo Girl Social",
};

const tiers = [
  {
    name: "Social",
    price: "Free",
    description: "Get started and see what Oslo Girl Social is about.",
    features: ["Newsletter with event listings", "Access to public events", "Community updates"],
  },
  {
    name: "Member",
    price: "kr 199/mo",
    description: "For regulars who want the full experience.",
    features: [
      "Everything in Social",
      "Priority RSVP for events",
      "Access to member-only meetups",
      "Partner discounts around Oslo",
    ],
    highlighted: true,
  },
  {
    name: "Founding Member",
    price: "kr 490/mo",
    description: "Support the community and get the VIP treatment.",
    features: [
      "Everything in Member",
      "Invites to founding member dinners",
      "First access to new partnerships",
      "Name listed as a founding supporter",
    ],
  },
];

export default function MembershipPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Membership options
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        We&apos;re opening membership soon. Here&apos;s what each level will
        include — join the newsletter to be first in line when sign-ups open.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              tier.highlighted
                ? "border-accent bg-card shadow-sm"
                : "border-border bg-card"
            }`}
          >
            <h2 className="text-lg font-semibold">{tier.name}</h2>
            <p className="mt-1 text-2xl font-semibold text-accent-dark">{tier.price}</p>
            <p className="mt-2 text-sm text-muted">{tier.description}</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-xl font-semibold">Be first to know when membership opens</h2>
        <div className="mt-4">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
