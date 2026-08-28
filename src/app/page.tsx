import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          A social club for women building a life in Oslo.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Events, connection, and community for the women of Oslo — new and
          longtime locals alike. Join the newsletter to hear about upcoming
          meetups first.
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:grid-cols-3">
          <div>
            <h2 className="font-semibold">Real-life events</h2>
            <p className="mt-2 text-sm text-muted">
              Monthly meetups, workshops, and socials around Oslo.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">A genuine community</h2>
            <p className="mt-2 text-sm text-muted">
              Meet women who get what it&apos;s like building a life here.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Membership perks</h2>
            <p className="mt-2 text-sm text-muted">
              Unlock exclusive events and partner discounts around the city.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Curious about membership?</h2>
            <p className="mt-1 text-sm text-muted">
              See what&apos;s included at each level.
            </p>
          </div>
          <Link
            href="/membership"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            View membership options
          </Link>
        </div>
      </section>
    </div>
  );
}
