import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
];

const announcement = ["Real-life events", "A genuine community", "Oslo, Norway"];

export default function Nav() {
  return (
    <header>
      <div className="bg-foreground px-6 py-2.5 text-center text-xs text-background">
        {announcement.join("  ·  ")}
      </div>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="whitespace-nowrap font-serif text-xl tracking-tight sm:text-2xl">
          Oslo Girl Social
        </Link>
        <div className="flex gap-7 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-muted ${
                link.href === "/" ? "hidden sm:inline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
