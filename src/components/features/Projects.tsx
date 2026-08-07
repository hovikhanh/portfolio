import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/content/profile";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <p className="font-mono text-accent">ls ./projects</p>
      <h2 className="mt-2 text-2xl font-semibold">Selected Projects</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium">{project.name}</h3>
              {project.date && (
                <span className="shrink-0 font-mono text-xs text-foreground/50">
                  {project.date}
                </span>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm text-foreground/70">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            {(project.repoUrl || project.demoUrl) && (
              <div className="mt-4 flex gap-4 font-mono text-xs">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Repo →
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live demo →
                  </a>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
