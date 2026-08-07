import { profile } from "@/lib/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center font-mono text-xs text-foreground/60">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </p>
    </footer>
  );
}
