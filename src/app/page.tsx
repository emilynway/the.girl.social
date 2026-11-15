import NewsletterForm from "@/components/NewsletterForm";
import VibeQuiz from "@/components/VibeQuiz";
import FounderStory from "@/components/FounderStory";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-20 text-center sm:pb-32 sm:pt-28">
        <span className="tag">Est. in Oslo</span>
        <h1 className="mt-8 font-serif text-5xl font-normal leading-[1.08] tracking-[-0.02em] sm:text-6xl">
          Building a life in Oslo hits different with your people around.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted">
          We&apos;re the social club making that part easier: real-life
          meetups, real friendships, and yes, occasional small talk about
          the weather.
        </p>
        <div className="mt-10 flex justify-center">
          <NewsletterForm />
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 py-20 text-center sm:grid-cols-2 sm:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-normal tracking-[-0.01em]">
              Real-life events
            </h2>
            <p className="mx-auto mt-3 max-w-xs text-muted">
              Monthly meetups, workshops, and socials around Oslo. IRL, not
              just in the group chat.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-normal tracking-[-0.01em]">
              A genuine community
            </h2>
            <p className="mx-auto mt-3 max-w-xs text-muted">
              Meet women who get what it&apos;s like building a life here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <span className="tag">Find your fit</span>
        <h2 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-[-0.015em] sm:text-5xl">
          What kind of Oslo Girl are you?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted">
          Three quick questions to figure out which of our events you&apos;ll
          love first.
        </p>
        <div className="mt-10 text-left">
          <VibeQuiz />
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <FounderStory />
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <span className="tag">Don&apos;t miss the next one</span>
        <h2 className="mt-6 font-serif text-4xl font-normal tracking-[-0.015em] sm:text-5xl">
          Stay in the loop
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted">
          First word on new meetups, workshops, and members-only news.
        </p>
        <div className="mt-8 flex justify-center">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
