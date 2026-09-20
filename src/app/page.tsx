import NewsletterForm from "@/components/NewsletterForm";
import VibeQuiz from "@/components/VibeQuiz";
import FounderStory from "@/components/FounderStory";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h1 className="max-w-2xl font-serif text-4xl font-black uppercase leading-[0.96] tracking-[-0.035em] sm:text-5xl">
          A social club for women building a life in Oslo.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Events, connection, and community for the women of Oslo, new and
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
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Real-life events
            </h2>
            <p className="mt-2 text-sm text-muted">
              Monthly meetups, workshops, and socials around Oslo.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              A genuine community
            </h2>
            <p className="mt-2 text-sm text-muted">
              Meet women who get what it&apos;s like building a life here.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Membership perks
            </h2>
            <p className="mt-2 text-sm text-muted">
              Unlock exclusive events and partner discounts around the city.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Find your fit
        </p>
        <h2 className="mt-2 max-w-lg font-serif text-2xl font-black uppercase leading-tight tracking-[-0.025em] sm:text-3xl">
          What kind of Oslo Girl are you?
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Three quick questions to figure out which of our events you&apos;ll
          love first.
        </p>
        <div className="mt-8">
          <VibeQuiz />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <FounderStory />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <h2 className="font-serif text-xl font-black uppercase tracking-[-0.025em] sm:text-2xl">
            Stay in the loop
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted">
            First word on new meetups, workshops, and members-only news.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
