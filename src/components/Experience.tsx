import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          blurb="Two years of cross-platform delivery for enterprise clients, plus reviewing professional mobile submissions."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[9px]" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.08}>
                <div className="relative pl-8 md:pl-12">
                  <span className="absolute left-0 top-1.5 grid size-4 place-items-center rounded-full bg-accent ring-4 ring-accent/15 md:size-[18px]" />
                  <div className="rounded-card border border-line bg-surface p-6 card-hover">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-bold text-fg">{exp.role}</h3>
                      <span className="font-mono text-xs text-subtle">{exp.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {exp.company}
                      <span className="text-subtle"> · {exp.type}</span>
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {exp.points.map((p, idx) => (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/60" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
