"use client";

import { useState } from "react";
import MaybeLink from "@/components/MaybeLink";
import type { EventItem } from "@/lib/events";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function iso(year: number, month: number, day: number) {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

const monthFormat = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const dayFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

function formatDay(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return dayFormat.format(new Date(Date.UTC(y, m - 1, d)));
}

function formatTime(e: EventItem) {
  return e.end ? `${e.start}–${e.end}` : e.start;
}

export default function EventsCalendar({
  events,
  today,
}: {
  events: EventItem[];
  /** Today's date in Oslo, YYYY-MM-DD. Passed in so server and client agree. */
  today: string;
}) {
  // Open on the month of the next upcoming event, or this month if none.
  const next = events.find((e) => e.date >= today);
  const startDate = (next?.date ?? today).split("-").map(Number);
  const [view, setView] = useState({
    year: startDate[0],
    month: startDate[1] - 1,
  });

  const { year, month } = view;
  const firstWeekday = (new Date(Date.UTC(year, month, 1)).getUTCDay() + 6) % 7; // Monday first
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells: (number | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const monthPrefix = `${year}-${pad(month + 1)}`;
  const monthEvents = events.filter((e) => e.date.startsWith(monthPrefix));

  function shift(delta: number) {
    setView(({ year, month }) => {
      const d = new Date(Date.UTC(year, month + delta, 1));
      return { year: d.getUTCFullYear(), month: d.getUTCMonth() };
    });
  }

  const todayDate = today.split("-").map(Number);
  const isCurrentMonth = todayDate[0] === year && todayDate[1] - 1 === month;

  const navButton =
    "rounded-lg border border-border px-3 py-2 text-sm transition hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-serif text-2xl font-normal tracking-[-0.015em]">
          {monthFormat.format(new Date(Date.UTC(year, month, 1)))}
        </h2>
        <div className="flex gap-2">
          {!isCurrentMonth && (
            <button
              type="button"
              className={navButton}
              onClick={() => setView({ year: todayDate[0], month: todayDate[1] - 1 })}
            >
              Today
            </button>
          )}
          <button
            type="button"
            className={navButton}
            onClick={() => shift(-1)}
            aria-label="Previous month"
          >
            ←
          </button>
          <button
            type="button"
            className={navButton}
            onClick={() => shift(1)}
            aria-label="Next month"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-7 border-b border-border bg-card text-center text-xs font-medium uppercase tracking-[0.14em] text-muted">
          {WEEKDAYS.map((d) => (
            <div key={d} className="py-2">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((day, i) => {
            const date = day ? iso(year, month, day) : "";
            const dayEvents = day ? events.filter((e) => e.date === date) : [];
            const isToday = date === today;
            const isWeekend = i % 7 >= 5;
            return (
              <div
                key={i}
                className={`min-h-16 border-b border-r border-border p-1.5 sm:min-h-28 sm:p-2 [&:nth-child(7n)]:border-r-0 ${
                  day ? "" : "bg-card/60"
                } ${isWeekend && day ? "bg-card/40" : ""}`}
              >
                {day && (
                  <>
                    <span
                      className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-xs ${
                        isToday
                          ? "bg-foreground font-medium text-background"
                          : "text-muted"
                      }`}
                    >
                      {day}
                    </span>
                    <div className="mt-1 flex flex-col gap-1">
                      {dayEvents.map((e) => {
                        const past = e.date < today;
                        return (
                          <MaybeLink
                            key={e.slug}
                            href={e.href}
                            title={`${e.title}, ${formatTime(e)}`}
                            className={`rounded-md px-1.5 py-1 text-[11px] leading-tight transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-xs ${
                              past
                                ? "bg-card text-muted hover:text-foreground"
                                : "bg-soft text-foreground hover:bg-soft/70"
                            }`}
                          >
                            <span className="block font-medium">{e.start}</span>
                            <span className="hidden sm:block">{e.title}</span>
                            <span className="sr-only sm:hidden">{e.title}</span>
                          </MaybeLink>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
          This month
        </h3>
        {monthEvents.length === 0 ? (
          <p className="mt-4 text-sm text-muted">
            Nothing on the calendar for this month yet.
          </p>
        ) : (
          <ul className="mt-4 flex flex-col divide-y divide-border border-y border-border">
            {monthEvents.map((e) => (
              <li key={e.slug}>
                <MaybeLink
                  href={e.href}
                  className="flex flex-col gap-1 py-4 transition sm:flex-row sm:items-baseline sm:gap-6 [a&]:hover:text-accent"
                >
                  <span className="w-56 shrink-0 text-sm text-muted">
                    {formatDay(e.date)} · {formatTime(e)}
                  </span>
                  <span className="font-medium">{e.title}</span>
                  <span className="text-sm text-muted sm:ml-auto">{e.where}</span>
                </MaybeLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
