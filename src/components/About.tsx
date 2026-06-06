import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { highlights, profile } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="About" title="Mobile-first, shipping-focused" />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-5 leading-relaxed text-muted">
            I care about clean architecture, idiomatic platform code, and apps
            that survive contact with real users — whether that&apos;s a
            multi-role banking flow, an NFC/BLE access-control bridge, or a
            local-first utility that respects privacy.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-3">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-fg">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
