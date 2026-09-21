import { Reveal } from "./Reveal";
import { education, languages } from "@/lib/content";

export function Education() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-24 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-fg">Education</h2>
          <div className="mt-6 space-y-6">
            {education.map((e) => (
              <div key={e.school}>
                <p className="font-medium text-fg">{e.school}</p>
                <p className="mt-1 text-sm text-muted">{e.detail}</p>
                {e.period && <p className="mt-1 font-mono text-xs text-subtle">{e.period}</p>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-2xl font-semibold tracking-tight text-fg">Languages</h2>
          <div className="mt-6 space-y-6">
            {languages.map((l) => (
              <div key={l.name}>
                <p className="font-medium text-fg">{l.name}</p>
                <p className="mt-1 text-sm text-muted">{l.level}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
