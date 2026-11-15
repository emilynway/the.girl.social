import Link from "next/link";
import type { ReactNode } from "react";

/** A link when the event has a page, otherwise a plain block with the same look. */
export default function MaybeLink({
  href,
  className,
  title,
  children,
}: {
  href?: string;
  className: string;
  title?: string;
  children: ReactNode;
}) {
  if (!href) {
    return (
      <div className={className} title={title}>
        {children}
      </div>
    );
  }
  return (
    <Link href={href} className={className} title={title}>
      {children}
    </Link>
  );
}
