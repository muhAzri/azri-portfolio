import { Award, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/lib/content";

export function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Certifications"
        title="Dicoding Expert — all four paths"
        blurb="Expert level (highest tier) across every professional mobile learning path at Dicoding Indonesia. Each is independently verifiable."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.credentialId} delay={(i % 2) * 0.07}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 card-hover"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
                  <Award className="size-5" />
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-subtle transition-colors group-hover:text-fg">
                  Verify
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-fg">{c.title}</h3>
              <p className="mt-0.5 text-sm text-accent">
                {c.path}
                <span className="text-subtle"> · Dicoding Indonesia</span>
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {c.blurb}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-subtle">
                  <ShieldCheck className="size-3.5 text-accent" />
                  ID {c.credentialId}
                </span>
                <span className="font-mono text-[11px] text-subtle">
                  Issued {c.issued} · valid to {c.validUntil}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
