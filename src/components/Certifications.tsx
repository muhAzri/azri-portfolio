import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/lib/content";

export function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionHeading
        title="Dicoding Expert, all four paths"
        blurb="Expert is the highest tier across every professional mobile learning path at Dicoding Indonesia. Each certificate can be verified online."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:pb-12">
        {certifications.map((c, i) => (
          <Reveal
            key={c.credentialId}
            delay={i * 0.06}
            className={i % 2 === 1 ? "lg:translate-y-12" : ""}
          >
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-64 flex-col rounded-card border border-line-strong bg-surface p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-fg">
                  {c.title}
                </h3>
                <ArrowUpRight className="size-5 shrink-0 text-subtle transition-colors group-hover:text-accent" />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.blurb}</p>
              <dl className="mt-6 space-y-1 border-t border-line pt-4 font-mono text-xs text-subtle">
                <div className="flex justify-between gap-2">
                  <dt>Issued</dt>
                  <dd className="text-muted">{c.issued}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Valid to</dt>
                  <dd className="text-muted">{c.validUntil}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>ID</dt>
                  <dd className="text-muted">{c.credentialId}</dd>
                </div>
              </dl>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
