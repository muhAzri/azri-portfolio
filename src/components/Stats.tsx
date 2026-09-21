import { Reveal } from "./Reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section aria-label="At a glance" className="border-y border-line">
      <Reveal>
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse justify-end gap-1 py-8 md:py-10 ${i % 2 === 1 ? "pl-5 md:pl-0" : ""} ${
                i > 0 ? "md:border-l md:border-line md:pl-8" : ""
              }`}
            >
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="font-mono text-4xl font-medium tracking-tighter text-fg md:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
