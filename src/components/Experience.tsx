import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experiences } from "@/lib/content";

const VISIBLE_POINTS = 3;

export function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionHeading
          title="Where I've shipped"
          blurb="Cross-platform delivery for enterprise clients, product work on a live marketplace, and code review for Dicoding's professional mobile paths."
        />

        <div className="mt-14 border-t border-line-strong">
          {experiences.map((exp, i) => {
            const shown = exp.points.slice(0, VISIBLE_POINTS);
            const rest = exp.points.slice(VISIBLE_POINTS);
            return (
              <Reveal key={exp.company} delay={i * 0.05}>
                <article className="grid gap-6 border-b border-line py-10 last:border-b-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-16">
                  <header className="lg:sticky lg:top-24 lg:self-start">
                    <p className="font-mono text-xs text-subtle">{exp.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-base font-medium text-accent">{exp.company}</p>
                    <p className="mt-1 text-sm text-muted">{exp.type}</p>
                  </header>

                  <div>
                    <ul className="space-y-3">
                      {shown.map((p, idx) => (
                        <Point key={idx}>{p}</Point>
                      ))}
                    </ul>

                    {rest.length > 0 && (
                      <details className="group mt-3">
                        <summary className="inline-flex cursor-pointer select-none items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-2">
                          <Plus className="size-4 transition-transform duration-300 group-open:rotate-45" />
                          <span className="group-open:hidden">Show {rest.length} more</span>
                          <span className="hidden group-open:inline">Show less</span>
                        </summary>
                        <ul className="mt-5 space-y-3">
                          {rest.map((p, idx) => (
                            <Point key={idx}>{p}</Point>
                          ))}
                        </ul>
                      </details>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Point({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
      <span>{children}</span>
    </li>
  );
}
