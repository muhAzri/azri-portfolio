import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon, GooglePlayIcon } from "./icons";
import { profile, socials } from "@/lib/content";

const links = [
  { label: "GitHub", href: socials.github, icon: GitHubIcon },
  { label: "LinkedIn", href: socials.linkedin, icon: LinkedInIcon },
  { label: "Google Play", href: socials.googlePlay, icon: GooglePlayIcon },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28 md:py-40">
      <Reveal>
        <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tighter text-fg sm:text-6xl md:text-8xl">
          Have a mobile project in mind?
        </h2>
        <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl">
          Open to mobile engineering roles and freelance work. Email is the fastest way to
          reach me.
        </p>

        <a
          href={socials.email}
          className="group mt-10 inline-flex max-w-full items-center gap-3 rounded-full bg-accent-solid px-6 py-4 text-base font-semibold text-on-accent transition-transform duration-200 hover:-translate-y-px active:scale-[0.98] sm:px-8 sm:py-5 sm:text-2xl"
        >
          <Mail className="size-5 shrink-0 sm:size-6" />
          <span className="truncate">{profile.email}</span>
          <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-6" />
        </a>
      </Reveal>

      <Reveal delay={0.1} className="mt-16 flex flex-wrap items-center gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-2 active:scale-[0.98]"
          >
            <l.icon className="size-[18px]" />
            {l.label}
          </a>
        ))}
        <span className="px-2 text-sm text-subtle">{profile.location}</span>
      </Reveal>
    </section>
  );
}
