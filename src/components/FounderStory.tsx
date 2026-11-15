import Link from "next/link";

// Short version of the story on /about. To add a founder photo later, drop a
// file in public/ and put an <Image> in a left column here.
export default function FounderStory() {
  return (
    <div>
      <span className="tag">Meet the founder</span>
      <h2 className="mt-6 font-serif text-4xl font-normal tracking-[-0.015em] sm:text-5xl">
        Hi, I&apos;m Emily
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
        I&apos;ve moved a lot, so I know what it&apos;s like to build your
        circle from scratch. When a knee injury took me off my runs, I started
        walking instead, and I&apos;d learned how much community matters too.
        So I put the two together, invited women to walk with me, and Oslo
        Girl Social was born. Today it&apos;s thousands of women strong, and
        it runs on the power of the amazing members who show up, organise
        their own events and put themselves out there.
      </p>
      <Link
        href="/about"
        className="mt-8 inline-block text-sm font-medium underline decoration-1 underline-offset-4 transition hover:text-muted"
      >
        Read the full story
      </Link>
    </div>
  );
}
