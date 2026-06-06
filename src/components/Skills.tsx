import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { marqueeSkills, skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="Skills" title="Tools of the trade" />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-card border border-line bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative flex overflow-hidden border-t border-line py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-3 pr-3">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={i}
              className="rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-sm text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
