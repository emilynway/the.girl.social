import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Oslo Girl Social",
  description:
    "Why Emily started Oslo Girl Social: a warm, easy way for women to make friends in Oslo.",
};

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
          When I moved to Oslo for work, I had a job, a flat and a lot of
          quiet weekends. Oslo is beautiful, but making real friends here
          takes time, and I honestly didn&apos;t know where to start.
        </p>
        <p>
          So I did the simplest thing I could think of: I asked a few women
          to join me for a Sunday walk. It turned out so many of us felt the
          same way: new in town or not, we all wanted more people to call
          when the weekend came around.
        </p>
        <p>
          Those walks grew into Oslo Girl Social. Coffee, yoga, workshops,
          long walks and good conversations, for women building a life here,
          whether you arrived last month or have been here for years. Come
          alone, bring a friend, and leave with a few more.
        </p>
      </div>
      <p className="mt-8 max-w-2xl font-serif text-xl italic text-accent">
        See you there. Emily 💘
      </p>

      <div className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          In the news
        </h2>
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
      </div>
    </div>
  );
}
