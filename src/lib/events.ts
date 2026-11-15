export type EventItem = {
  slug: string;
  title: string;
  /** Local Oslo date, YYYY-MM-DD */
  date: string;
  /** Local Oslo time, e.g. "14:00" */
  start: string;
  end?: string;
  /** Short place name; exact address stays on the event page where needed */
  where: string;
  price: string;
  blurb: string;
  /** Event page on this site, or an external ticket link */
  href: string;
};

/**
 * The list of events shown on /events and in its calendar.
 *
 * To add an event: copy one entry, change the fields, save. The calendar and
 * the "Coming up" / "Past events" lists sort themselves by date. Past events
 * stay on the calendar so people can see what we have done, they just move to
 * the "Past events" list once the day has passed.
 */
export const events: EventItem[] = [
  {
    slug: "tarot-reading",
    title: "The Journey Within: Tarot Workshop",
    date: "2026-09-20",
    start: "14:00",
    end: "16:00",
    where: "Østerås",
    price: "400 kr",
    blurb:
      "A 2-hour workshop with Melissa from Up Power Coaching, exploring the Major Arcana as a mirror for self-reflection.",
    href: "/events/tarot-reading",
  },
  {
    slug: "sunday-yin",
    title: "In for some yin? Free class with Studio13",
    date: "2026-10-11",
    start: "12:15",
    where: "Kuro, Grünerløkka",
    price: "Free",
    blurb:
      "Coffee at Kuro, a walk to the studio together, then a free yin class gifted by Studio13.",
    href: "/events/sunday-yin",
  },
];

export function sortedEvents(list: EventItem[] = events) {
  return [...list].sort((a, b) =>
    `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`)
  );
}

/** Today's date in Oslo as YYYY-MM-DD, independent of the server's timezone. */
export function todayInOslo(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Oslo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
