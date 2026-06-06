import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon, GooglePlayIcon } from "./icons";
import { profile, socials } from "@/lib/content";

const links = [
  { label: "Email", value: profile.email, href: socials.email, icon: Mail },
  { label: "GitHub", value: "github.com/muhAzri", href: socials.github, icon: GitHubIcon },
  {
    label: "LinkedIn",
    value: "in/muhammad-azri...",
    href: socials.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Google Play",
    value: "Zrif Apps",
    href: socials.googlePlay,
    icon: GooglePlayIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="aurora pointer-events-none left-1/2 top-0 size-[28rem] -translate-x-1/2 bg-accent/30" />
      <div className="relative mx-auto max-w-6xl px-5 py-28">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">people actually ship</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Open to mobile engineering roles and freelance work. The fastest way
            to reach me is email.
          </p>
          <a
            href={socials.email}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            Say hello
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 card-hover"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-surface-2 text-muted transition-colors group-hover:text-fg">
                  <l.icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-subtle">{l.label}</p>
                  <p className="truncate text-sm font-medium text-fg">{l.value}</p>
                </div>
                <ArrowUpRight className="size-4 text-subtle transition-colors group-hover:text-fg" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
