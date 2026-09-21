import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionHeading title="Tools of the trade" />

        <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.06}>
              <h3 className="border-b border-line-strong pb-3 font-mono text-sm text-accent">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-2xl font-medium tracking-tight text-fg transition-colors hover:text-accent md:text-3xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
