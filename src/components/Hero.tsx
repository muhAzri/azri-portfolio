"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, GooglePlayIcon } from "./icons";
import { profile, resumeUrl, socials, stats } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="aurora pointer-events-none -left-20 -top-24 size-[26rem] bg-accent/40" />
      <div
        className="aurora pointer-events-none -right-10 top-10 size-[22rem] bg-accent-2/25"
        style={{ animationDelay: "-6s" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div {...rise(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-medium text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to mobile engineering roles
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            <span className="text-fg">Muhammad </span>
            <span className="text-gradient">Azri</span>
            <br />
            <span className="text-fg">Fatihah Susanto</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-5 font-mono text-sm text-accent">
            {profile.roleLong}
          </motion.p>

          <motion.p
            {...rise(0.22)}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowDown className="size-4" />
            </a>
            <a
              href={resumeUrl}
              download="Muhammad-Azri-Fatihah-Susanto-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <div className="flex items-center gap-2">
              <IconLink href={socials.github} label="GitHub">
                <GitHubIcon className="size-[18px]" />
              </IconLink>
              <IconLink href={socials.linkedin} label="LinkedIn">
                <LinkedInIcon className="size-[18px]" />
              </IconLink>
              <IconLink href={socials.googlePlay} label="Google Play">
                <GooglePlayIcon className="size-[18px]" />
              </IconLink>
            </div>
          </motion.div>

          <motion.p {...rise(0.36)} className="mt-6 inline-flex items-center gap-2 text-sm text-subtle">
            <MapPin className="size-4" />
            {profile.location}
          </motion.p>
        </div>

        {/* portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-tr from-accent/30 to-accent-2/20 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-line-strong bg-surface p-2 shadow-[var(--shadow-glow)]">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={640}
              height={640}
              priority
              className="aspect-square w-full rounded-[1.25rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-line bg-surface-2/90 px-4 py-3 backdrop-blur">
            <p className="font-mono text-[11px] text-subtle">currently building</p>
            <p className="text-sm font-semibold text-fg">GoService · KMP</p>
          </div>
        </motion.div>
      </div>

      {/* stats */}
      <motion.div
        {...rise(0.45)}
        className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line px-0 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-surface px-5 py-6 text-center sm:text-left">
            <div className="text-3xl font-bold tracking-tight text-fg">{s.value}</div>
            <div className="mt-1 text-xs text-muted">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {children}
    </a>
  );
}
