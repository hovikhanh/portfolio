import { experience } from "@/lib/content/profile";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <p className="font-mono text-accent">cat experience.log</p>
      <h2 className="mt-2 text-2xl font-semibold">Experience</h2>

      <div className="mt-8 space-y-8 border-l border-border pl-6">
        {experience.map((item) => (
          <div key={`${item.organization}-${item.startDate}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-foreground/60">
              {item.startDate} – {item.endDate}
            </p>
            <h3 className="mt-1 font-medium">
              {item.role} · {item.organization}
            </h3>
            <p className="text-sm text-foreground/60">{item.location}</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
