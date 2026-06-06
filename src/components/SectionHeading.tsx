import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {blurb && <p className="mt-4 text-base leading-relaxed text-muted">{blurb}</p>}
    </Reveal>
  );
}
