import { Card } from "@/components/ui/Card";
import {
  certifications,
  competencies,
  education,
  profile,
  publications,
} from "@/lib/content/profile";

export function About() {
  return (
    <section id="about" className="py-20">
      <p className="font-mono text-accent">cat about.md</p>
      <h2 className="mt-2 text-2xl font-semibold">About</h2>
      <p className="mt-4 max-w-2xl text-foreground/80">{profile.summary}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {competencies.map((competency) => (
          <Card key={competency.title}>
            <h3 className="font-mono text-sm text-accent">{competency.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{competency.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-sm text-accent">Education</h3>
          <ul className="mt-3 space-y-4">
            {education.map((item) => (
              <li key={item.institution} className="text-sm">
                <p className="font-medium">{item.degree}</p>
                <p className="text-foreground/70">
                  {item.institution} · {item.dateRange}
                </p>
                {item.details && (
                  <p className="mt-1 text-foreground/60">{item.details}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-sm text-accent">Certifications</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {certifications.map((cert) => (
              <li key={cert.name} className="text-foreground/70">
                <span className="font-medium text-foreground">{cert.name}</span> —{" "}
                {cert.issuer}, {cert.date}
              </li>
            ))}
          </ul>

          {publications.length > 0 && (
            <>
              <h3 className="mt-6 font-mono text-sm text-accent">Publications</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                {publications.map((pub) => (
                  <li key={pub.citation}>
                    {pub.citation} <span className="italic">{pub.venue}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
