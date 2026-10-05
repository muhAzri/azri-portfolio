import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects, type Project } from "@/lib/content";

/**
 * Bento, 6-col grid, exactly 6 cells: [4 + 2], [2 + 4], then [3 + 3].
 * Cell tone gives real visual variation: accent fill, inverted, dotted, plain surface.
 */
const cells = [
  {
    span: "md:col-span-4",
    card: "bg-accent-solid text-on-accent",
    title: "text-on-accent",
    body: "text-on-accent/85",
    chip: "border-on-accent/40 text-on-accent",
    link: "text-on-accent",
    big: true,
  },
  {
    span: "md:col-span-2",
    card: "bg-fg text-bg",
    title: "text-bg",
    body: "text-bg/75",
    chip: "border-bg/35 text-bg",
    link: "text-bg",
    big: false,
  },
  {
    span: "md:col-span-2",
    card: "border border-line-strong bg-surface",
    title: "text-fg",
    body: "text-muted",
    chip: "border-line-strong text-muted",
    link: "text-accent",
    big: false,
  },
  {
    span: "md:col-span-4",
    card: "border border-line-strong bg-surface bg-dots",
    title: "text-fg",
    body: "text-muted",
    chip: "border-line-strong text-muted",
    link: "text-accent",
    big: false,
  },
  {
    span: "md:col-span-3",
    card: "border border-line-strong bg-surface",
    title: "text-fg",
    body: "text-muted",
    chip: "border-line-strong text-muted",
    link: "text-accent",
    big: false,
  },
  {
    span: "md:col-span-3",
    card: "border border-line-strong bg-surface-2",
    title: "text-fg",
    body: "text-muted",
    chip: "border-line-strong text-muted",
    link: "text-accent",
    big: false,
  },
] as const;

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading
        title="Things I've built"
        blurb="An award-winning learning platform, open-source iOS apps, and privacy-first utilities on Google Play."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-6">
        {projects.slice(0, cells.length).map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.06} className={cells[i].span}>
            <ProjectCell project={p} tone={cells[i]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCell({ project, tone }: { project: Project; tone: (typeof cells)[number] }) {
  const links =
    project.links ??
    (project.href ? [{ href: project.href, label: project.hrefLabel ?? "Visit site" }] : []);
  // Whole cell is a link when there is one destination. Two destinations need
  // separate anchors (no nested <a>), so the wrapper becomes a div.
  const single = links.length === 1 ? links[0] : null;
  const Wrapper = single ? "a" : "div";
  const linkProps = single
    ? { href: single.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group flex h-full min-h-72 flex-col rounded-card p-7 transition-transform duration-300 ease-out-expo hover:-translate-y-1 md:p-8 ${tone.card}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full border px-3 py-1 font-mono text-xs ${tone.chip}`}>
          {project.badge}
        </span>
        {single && (
          <ArrowUpRight
            className={`size-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${tone.link}`}
          />
        )}
      </div>

      <h3
        className={`mt-10 font-semibold tracking-tighter ${tone.title} ${
          tone.big ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
        }`}
      >
        {project.name}
      </h3>
      <p
        className={`mt-3 flex-1 leading-relaxed ${tone.body} ${
          tone.big ? "max-w-[52ch] text-base md:text-lg" : "text-sm"
        }`}
      >
        {project.blurb}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className={`rounded-full border px-3 py-1 font-mono text-xs ${tone.chip}`}>
            {t}
          </span>
        ))}
      </div>

      {single ? (
        <span className={`mt-6 text-sm font-semibold underline underline-offset-4 ${tone.link}`}>
          {single.label}
        </span>
      ) : (
        links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4 ${tone.link}`}
              >
                {l.label}
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>
        )
      )}
    </Wrapper>
  );
}
