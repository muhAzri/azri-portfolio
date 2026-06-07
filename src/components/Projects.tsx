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
  const links =
    project.links ??
    (project.href
      ? [{ href: project.href, label: project.hrefLabel ?? "Visit site" }]
      : []);
  // Keep the whole card clickable when there's a single destination;
  // multiple links need separate anchors (no nested <a>), so use a div.
  const singleLink = links.length === 1 ? links[0] : null;
  const Wrapper = singleLink ? "a" : "div";
  const linkProps = singleLink
    ? { href: singleLink.href, target: "_blank", rel: "noopener noreferrer" }
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
        {singleLink && (
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

      {singleLink ? (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          {singleLink.label}
          <ArrowUpRight className="size-4" />
        </span>
      ) : (
        links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 text-sm font-medium text-accent"
              >
                {l.label}
                <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ))}
          </div>
        )
      )}
    </Wrapper>
  );
}
