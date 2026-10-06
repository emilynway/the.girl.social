import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Oslo Girl Social",
  description:
    "Why Emily started Oslo Girl Social: walking, community and an easy way for women to make friends in Oslo.",
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
          I&apos;ve moved a lot in my life, so I know what it&apos;s like to
          land in a new city and build your circle from scratch.
        </p>
        <p>
          When a knee injury took me off my runs, I started walking instead:
          hot girl walks, mental health walks, long ones with a podcast and
          short ones just to clear my head. I felt the difference straight
          away, and the research agrees. Walking is one of the simplest
          things we can do for both body and mind.
        </p>
        <p>
          I&apos;d also learned how much community matters for our wellbeing.
          So I thought: why not put the two together and see what happens?
          It was a little experiment. I invited women to walk with me and
          waited to see who would show up.
        </p>
        <p>
          They did. Those walks grew into Oslo Girl Social: walks, workshops,
          yoga and good conversations for women building a life in Oslo,
          whether you arrived last month or years ago.
        </p>
        <p>
          I may have started it, but it&apos;s the community that keeps it
          going. There are now thousands of active members, and many of them
          organise their own events and put themselves out there. Like every
          good community, this one runs on the power of the amazing women
          behind it.
        </p>
        <p>
          Come alone or bring a friend. Either way, you&apos;ll leave with a
          few more.
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
