import type { Metadata } from "next";
import EventsCalendar from "@/components/EventsCalendar";
import MaybeLink from "@/components/MaybeLink";
import NewsletterForm from "@/components/NewsletterForm";
import { events, sortedEvents, todayInOslo } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Oslo Girl Social",
  description:
    "Upcoming Oslo Girl Social events, with a calendar of what is coming up and what we have done so far.",
};

// The page is static, so re-check once an hour which events count as past.
export const revalidate = 3600;

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

function formatDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return dateFormat.format(new Date(Date.UTC(y, m - 1, d)));
}

export default function EventsPage() {
  const today = todayInOslo();
  const all = sortedEvents(events);
  const upcoming = all.filter((e) => e.date >= today);
  const past = all.filter((e) => e.date < today).reverse();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <span className="tag">Events</span>
      <h1 className="mt-4 font-serif text-4xl font-normal tracking-[-0.015em] sm:text-5xl">
        Come alone, most people do.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Your new friends are planning things, all you need to do is show up
        and be willing to say hello 🙂
      </p>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Have an idea for an event you&apos;d like to host? Email{" "}
        <a
          href="mailto:emily@thegirlsocial.com"
          className="underline decoration-border underline-offset-4 hover:text-accent"
        >
          emily@thegirlsocial.com
        </a>{" "}
        or reach out via{" "}
        <a
          href="https://www.instagram.com/oslogirlsocial/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-border underline-offset-4 hover:text-accent"
        >
          Instagram
        </a>
        .
      </p>

      <section className="mt-12" aria-labelledby="coming-up">
        <h2
          id="coming-up"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          Coming up
        </h2>
        {upcoming.length > 0 ? (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {upcoming.map((e) => (
              <li key={e.slug}>
                <MaybeLink
                  href={e.href}
                  className="block h-full rounded-xl border border-border p-6 transition [a&]:hover:bg-card"
                >
                  <p className="text-sm text-accent">
                    {formatDate(e.date)} · {e.start}
                    {e.end ? `–${e.end}` : ""}
                  </p>
                  <p className="mt-2 font-serif text-xl tracking-[-0.01em]">
                    {e.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">{e.blurb}</p>
                  <p className="mt-4 text-xs text-muted">
                    {e.price ? `${e.where} · ${e.price}` : e.where}
                  </p>
                </MaybeLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="font-serif text-xl tracking-[-0.01em]">
              Nothing is booked right now.
            </p>
            <p className="mt-2 max-w-xl text-sm text-muted">
              The next date is on its way. Join the list and you will hear about
              it first, or follow along on Instagram.
            </p>
            <div className="mt-6 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        )}
      </section>

      <section className="mt-16" aria-label="Calendar">
        <EventsCalendar events={all} today={today} />
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Most of our events are planned and organised by community members.
          You&apos;ll find more info, and plenty of spontaneous plans, in our
          WhatsApp community. Not in it yet?{" "}
          <a
            href="https://www.instagram.com/oslogirlsocial/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:text-accent"
          >
            Send us a DM on Instagram
          </a>{" "}
          and we&apos;ll add you.
        </p>
      </section>

      {past.length > 0 && (
        <section className="mt-16" aria-labelledby="past-events">
          <h2
            id="past-events"
            className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            Past events
          </h2>
          <ul className="mt-4 flex flex-col divide-y divide-border border-y border-border">
            {past.map((e) => (
              <li key={e.slug}>
                <MaybeLink
                  href={e.href}
                  className="flex flex-col gap-1 py-4 text-muted transition sm:flex-row sm:items-baseline sm:gap-6 [a&]:hover:text-foreground"
                >
                  <span className="w-32 shrink-0 text-sm">{formatDate(e.date)}</span>
                  <span className="font-medium text-foreground">{e.title}</span>
                  <span className="text-sm sm:ml-auto">{e.where}</span>
                </MaybeLink>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
