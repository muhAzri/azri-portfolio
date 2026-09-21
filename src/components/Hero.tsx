"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { profile, resumeFilename, resumeUrl } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section id="top" className="pt-24 pb-16 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div>
          <motion.span
            {...rise(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="relative flex size-2">
              {!reduce && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to mobile engineering roles
          </motion.span>

          <motion.h1
            {...rise(0.08)}
            className="mt-7 text-4xl font-semibold leading-[1] tracking-tighter text-fg sm:text-6xl lg:text-7xl"
          >
            Muhammad Azri
            <span className="block text-subtle">Fatihah Susanto</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl"
          >
            {profile.heroLine}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]"
            >
              View my work
              <ArrowDown className="size-4" />
            </a>
            <a
              href={resumeUrl}
              download={resumeFilename}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2 active:scale-[0.98]"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-card border border-accent"
          />
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={640}
            height={640}
            priority
            className="relative aspect-[4/5] w-full rounded-card object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
