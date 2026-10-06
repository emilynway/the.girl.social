import Link from "next/link";

// Short version of the story on /about. To add a founder photo later, drop a
// file in public/ and put an <Image> in a left column here.
export default function FounderStory() {
  return (
    <div>
      <span className="sticker tilt-right">Meet the founder</span>
      <h2 className="mt-4 font-serif text-2xl font-black uppercase tracking-[-0.025em] sm:text-3xl">
        Hi, I&apos;m Emily
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        I&apos;ve moved a lot, so I know what it&apos;s like to build your
        circle from scratch. When a knee injury took me off my runs, I started
        walking instead, and I&apos;d learned how much community matters too.
        So I put the two together, invited women to walk with me, and Oslo
        Girl Social was born.
      </p>
      <Link
        href="/about"
        className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent underline decoration-2 underline-offset-4 hover:text-accent-dark"
      >
        Read the full story
      </Link>
    </div>
  );
}
