import Link from "next/link";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 font-mono text-sm">
        <Link href="/" className="text-accent">
          ~/portfolio
        </Link>
        <ul className="flex flex-wrap gap-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-foreground/80 hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
