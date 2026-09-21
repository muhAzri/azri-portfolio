import { Reveal } from "./Reveal";

export function SectionHeading({ title, blurb }: { title: string; blurb?: string }) {
  return (
    <Reveal className="max-w-3xl">
      <h2 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-fg sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {blurb && (
        <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted md:text-lg">
          {blurb}
        </p>
      )}
    </Reveal>
  );
}
