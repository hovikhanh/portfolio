import { Badge } from "@/components/ui/Badge";
import { skills } from "@/lib/content/profile";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <p className="font-mono text-accent">cat skills.json</p>
      <h2 className="mt-2 text-2xl font-semibold">Skills</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-sm text-foreground/60">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
