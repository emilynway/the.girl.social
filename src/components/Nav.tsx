import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
];

const tickerItems = [
  "REAL-LIFE EVENTS",
  "A GENUINE COMMUNITY",
  "OSLO, NORWAY",
];

export default function Nav() {
  return (
    <header className="border-b-2 border-foreground">
      <div className="overflow-hidden border-b border-border bg-foreground py-1.5 text-background">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em]">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-8">
                {item}
                <span className="text-accent-2">✦</span>
              </span>
            )
          )}
        </div>
      </div>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="inline-block font-serif text-lg font-black tracking-tight transition hover:-rotate-2"
        >
          Oslo Girl Social
        </Link>
        <div className="flex gap-6 text-sm font-semibold uppercase tracking-[0.1em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-accent hover:-translate-y-0.5 inline-block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
