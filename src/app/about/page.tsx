import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Girl Social",
};

// Replace with real coverage once you have links. Each item just needs a
// publication name, a headline/title, and the URL. Delete the placeholders
// below and add real ones in the same { publication, title, url } shape.
const pressLinks: { publication: string; title: string; url: string }[] = [
  {
    publication: "NRK",
    title: "Ett skritt foran ensomheten",
    url: "https://www.nrk.no/norge/emily-northway-startet-gaklubb-for-a-utfordre-ensomheten-1.17582171",
  },
  {
    publication: "Utrop",
    title: "Kan søndagstur føre til vennskap?",
    url: "https://www.utrop.no/nyheter/ansikt-i-fokus/373910/",
  },
  {
    publication: "Business Insider",
    title: "I Moved to Norway for Work. Being an American Has Helped Me Get Ahead.",
    url: "https://www.businessinsider.com/moving-to-norway-business-experience-american-expat-2023-8",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-serif text-3xl font-black uppercase tracking-[-0.035em] sm:text-4xl">
        Why I started this
      </h1>

      <div className="mt-8 flex flex-col gap-4 max-w-2xl text-muted">
        <p>
          [YOUR STORY: What brought you to Oslo, and what was missing when you
          got here? Keep it specific and personal: the moment or feeling
          that made you realize other women probably felt the same way.]
        </p>
        <p>
          [What made you decide to actually organize the first walk or
          meetup, instead of just wishing something like this existed?]
        </p>
        <p>
          [What has surprised you about how it&apos;s grown, or what you want
          people to know before they show up to their first one.]
        </p>
      </div>

      <p className="mt-8 max-w-2xl font-serif text-xl italic text-accent">
        [OPTIONAL: a short, personal one-line sign-off, five words or fewer,
        in your own voice.]
      </p>

      <div className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          In the news
        </h2>
        {pressLinks.length > 0 ? (
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {pressLinks.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 hover:text-accent"
                >
                  {item.publication}: {item.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 max-w-2xl text-sm text-muted">
            [No press links added yet. Add them to the pressLinks array in
            this file once you have them, and this placeholder will
            disappear.]
          </p>
        )}
      </div>
    </div>
  );
}
