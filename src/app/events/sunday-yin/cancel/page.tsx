import type { Metadata } from "next";
import Link from "next/link";
import YinCancelForm from "@/components/YinCancelForm";

export const metadata: Metadata = {
  title: "Can't make it? | Sunday yin | Oslo Girl Social",
  robots: { index: false },
};

export default function SundayYinCancelPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-serif text-3xl font-black uppercase tracking-[-0.035em] sm:text-4xl">
        Can&apos;t make it?
      </h1>
      <p className="mt-4 text-muted">
        No worries, plans change. Let us know below and we&apos;ll pass your
        spot for Sunday&apos;s free yin class with Studio13 to a girl on the
        waitlist.
      </p>
      <p className="mt-4 text-muted">
        Studio13 is generously gifting us this class, so thank you for
        freeing up your mat for someone else 💘
      </p>
      <div className="mt-8">
        <YinCancelForm />
      </div>
      <p className="mt-10 text-sm text-muted">
        Changed your mind and can come after all?{" "}
        <Link
          href="/events/sunday-yin"
          className="underline decoration-border underline-offset-4 hover:text-accent"
        >
          Back to the event
        </Link>
      </p>
    </div>
  );
}
