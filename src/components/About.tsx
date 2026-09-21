import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { highlights, profile } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading title="Mobile-first, shipping-focused" />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-8">
          <p className="text-xl leading-snug tracking-tight text-fg md:text-2xl">
            {profile.summary}
          </p>
          <p className="mt-6 max-w-[65ch] leading-relaxed text-muted">
            I care about clean architecture and idiomatic platform code, and I
            build native Android and iOS apps with MVVM. Past work includes multi-role banking flows, an NFC/BLE access-control
            bridge, and a local-first utility that keeps user data on the
            device.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4">
          <ul className="grid gap-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm leading-relaxed text-fg">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-solid text-on-accent">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
