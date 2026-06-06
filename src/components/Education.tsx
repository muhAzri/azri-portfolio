import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { education, languages } from "@/lib/content";

export function Education() {
  return (
    <section className="border-t border-line bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-card border border-line bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-accent/15 text-accent">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                Education
              </h3>
            </div>
            <div className="mt-5 space-y-4">
              {education.map((e) => (
                <div key={e.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-semibold text-fg">{e.school}</p>
                    {e.period && (
                      <span className="font-mono text-xs text-subtle">{e.period}</span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{e.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-card border border-line bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-accent/15 text-accent">
                <LanguagesIcon className="size-5" />
              </span>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                Languages
              </h3>
            </div>
            <div className="mt-5 space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <p className="font-semibold text-fg">{l.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{l.level}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
