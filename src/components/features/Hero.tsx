import { LinkButton } from "@/components/ui/Button";
import { profile } from "@/lib/content/profile";

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center gap-6 py-24">
      <p className="font-mono text-accent">whoami</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="max-w-xl text-lg text-foreground/80">{profile.title}</p>
      <p className="max-w-2xl text-foreground/70">{profile.summary}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <LinkButton href="#projects" variant="primary">
          View projects
        </LinkButton>
        <LinkButton href="#contact" variant="ghost">
          Get in touch
        </LinkButton>
      </div>
    </section>
  );
}
