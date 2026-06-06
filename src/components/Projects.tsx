import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        blurb="From an award-winning learning platform to open-source iOS and privacy-first utilities on Google Play."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={(i % 2) * 0.08}
            className={p.featured ? "md:col-span-1" : ""}
          >
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? "a" : "div";
  const linkProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group relative flex h-full flex-col rounded-card border border-line bg-surface p-6 card-hover"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${
            project.featured
              ? "bg-accent/15 text-accent ring-1 ring-accent/30"
              : "bg-surface-2 text-muted"
          }`}
        >
          {project.badge}
        </span>
        {project.href && (
          <ArrowUpRight className="size-5 text-subtle transition-colors group-hover:text-fg" />
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-fg">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {project.hrefLabel && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          {project.hrefLabel}
          <ArrowUpRight className="size-4" />
        </span>
      )}
    </Wrapper>
  );
}
