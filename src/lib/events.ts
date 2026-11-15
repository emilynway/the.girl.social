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
  /** Leave out when there is no price to show */
  price?: string;
  blurb: string;
  /** Event page on this site, or an external ticket link. Leave out if there is no page. */
  href?: string;
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
  {
    slug: "board-game-meetup-3",
    title: "Board Game Meetup #3",
    date: "2026-09-02",
    start: "19:00",
    where: "Spilloteket, Kongens gate 7",
    price: "70 kr (50 kr students)",
    blurb: "Easy, social board games and a chance to meet new people.",
  },
  {
    slug: "board-game-meetup-4",
    title: "Board Game Meetup #4",
    date: "2026-09-17",
    start: "18:00",
    where: "Spilloteket, Kongens gate 7",
    price: "70 kr (50 kr students)",
    blurb: "Easy, social board games and a chance to meet new people.",
  },
  {
    slug: "clothing-swap-kulturhuset",
    title: "Clothing swap at Kulturhuset",
    date: "2026-11-04",
    start: "18:00",
    where: "Kulturhuset, Oslo",
    blurb:
      "A swap hosted by a community member, with room for an upcycle corner for ideas on fixing and reworking old pieces.",
  },
  {
    slug: "board-game-meetup-5",
    title: "Board Game Meetup #5",
    date: "2026-10-01",
    start: "18:00",
    where: "Spilloteket, Kongens gate 7",
    price: "70 kr (50 kr students)",
    blurb: "Easy, social board games and a chance to meet new people.",
  },
  {
    slug: "board-game-meetup-6",
    title: "Board Game Meetup #6",
    date: "2026-10-15",
    start: "18:00",
    where: "Spilloteket, Kongens gate 7",
    price: "70 kr (50 kr students)",
    blurb: "Easy, social board games and a chance to meet new people.",
  },
  {
    slug: "board-game-meetup-7",
    title: "Board Game Meetup #7",
    date: "2026-10-29",
    start: "18:00",
    where: "Spilloteket, Kongens gate 7",
    price: "70 kr (50 kr students)",
    blurb: "Easy, social board games and a chance to meet new people.",
  },
  {
    slug: "board-game-meetup-8",
    title: "Board Game Meetup #8",
    date: "2026-11-19",
    start: "18:00",
    where: "Spilloteket, Kongens gate 7",
    price: "70 kr (50 kr students)",
    blurb:
      "Easy, social board games and a chance to make new friends. Entry is paid at the bar, and you can bring your own food.",
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
