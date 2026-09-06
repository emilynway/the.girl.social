import type { Metadata } from "next";
import TarotRsvpForm from "@/components/TarotRsvpForm";

export const metadata: Metadata = {
  title: "The Journey Within: Tarot Workshop | Oslo Girl Social",
};

const details = [
  { label: "When", value: "Sunday, 20 September · 14:00–16:00" },
  { label: "Where", value: "Østerås. Exact location shared after registration." },
  { label: "Price", value: "400 kr per person" },
  { label: "Spots", value: "Limited to 15" },
];

export default function TarotReadingEventPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-serif text-3xl font-black uppercase tracking-[-0.035em] sm:text-4xl">
        The Journey Within: Personal Growth Through Tarot
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Join Melissa from Up Power Coaching for a 2-hour workshop exploring
        the Major Arcana as a mirror for self-reflection, growth, and
        transformation. No experience needed.
      </p>

      <dl className="mt-10 grid gap-6 border-y border-border py-8 sm:grid-cols-4">
        {details.map((item) => (
          <div key={item.label}>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What to expect
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
            <li>
              • Understand the symbolic journey of the Major Arcana as a
              personal development path (the Fool&apos;s Journey)
            </li>
            <li>• Identify where you are in your own life</li>
            <li>
              • Use tarot cards to reflect on personal challenges, growth,
              and transformation
            </li>
            <li>
              • Leave with a journaling tool or spread to continue the work
              on your own
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reserve your spot
          </h2>
          <div className="mt-4">
            <TarotRsvpForm />
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          About Melissa
        </h2>
        <div className="mt-4 flex flex-col gap-4 max-w-2xl text-muted">
          <p>
            Hi, I&apos;m Melissa, a lifelong student of personal growth and a
            passionate tarot practitioner. I hold a coaching degree and
            combine my formal training with tarot practice, especially the
            wisdom of the Major Arcana, to support self-reflection,
            transformation, and deeper inner connection.
          </p>
          <p>
            My approach is grounded, intuitive, and inclusive, focusing on
            how symbolism and archetypes can empower real-life growth.
            Whether you&apos;re new to tarot or reconnecting with it, I aim
            to create a safe, inspiring space where insight and personal
            truth can emerge.
          </p>
        </div>
        <p className="mt-4 text-sm text-muted">
          Follow Melissa:{" "}
          <a
            href="https://www.instagram.com/upower_coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:text-accent"
          >
            @upower_coaching on Instagram
          </a>{" "}
          and{" "}
          <a
            href="https://www.tiktok.com/@upower_coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:text-accent"
          >
            TikTok
          </a>
          .
        </p>
      </div>
    </div>
  );
}
