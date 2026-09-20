import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media | The Girl Social",
};

type PressItem = {
  outlet: string;
  date: string;
  language?: string;
  headline: string;
  quote: string;
  href: string;
};

const press: PressItem[] = [
  {
    outlet: "NRK",
    date: "September 2025",
    language: "Norwegian",
    headline: "Emily Northway startet gåklubb for å utfordre ensomheten",
    quote:
      "Jeg har møtt kvinner som sier de har funnet sine nærmeste venner gjennom dette.",
    href: "https://www.nrk.no/norge/emily-northway-startet-gaklubb-for-a-utfordre-ensomheten-1.17582171",
  },
  {
    outlet: "Utrop",
    date: "October 2025",
    language: "Norwegian",
    headline: "Kan søndagstur føre til vennskap?",
    quote:
      "Av og til får jeg meldinger som sier at de har møtt bestevenninnen sin gjennom Oslo Girl Social, og det gjør meg så utrolig glad, sier Northway.",
    href: "https://www.utrop.no/nyheter/ansikt-i-fokus/373910/",
  },
  {
    outlet: "Business Insider",
    date: "August 2023",
    headline:
      "I Moved to Norway for Work. Being an American Has Helped Me Get Ahead.",
    quote:
      "Making friends was really, really difficult here. That became a second job for me.",
    href: "https://www.businessinsider.com/moving-to-norway-business-experience-american-expat-2023-8",
  },
];

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        As seen in
      </p>
      <h1 className="mt-2 font-serif text-3xl font-black uppercase tracking-[-0.035em] sm:text-4xl">
        Media
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Where The Girl Social — and the story behind it — has been covered.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {press.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-accent"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {item.outlet}
              </span>
              <span className="text-xs text-muted">{item.date}</span>
            </div>
            <h2 className="mt-3 font-serif text-lg font-black leading-snug tracking-[-0.015em]">
              {item.headline}
            </h2>
            <p className="mt-3 flex-1 text-sm italic text-muted">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted">
              {item.language ? <span>In {item.language}</span> : <span />}
              <span className="font-semibold uppercase tracking-[0.15em] text-accent">
                Read article ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">
        Want to write about or feature The Girl Social? Reach out via our{" "}
        <a href="/partners" className="text-accent underline underline-offset-4">
          partners page
        </a>
        .
      </p>
    </div>
  );
}
