"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { ThemeToggle } from "./ThemeToggle";
import { nav, profile } from "@/lib/content";

const CONTACT_HREF = "#contact";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  // Wayfinding: highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="glass fixed inset-x-0 top-0 z-40 border-b border-line">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="Home">
          <span className="grid size-9 place-items-center rounded-[10px] bg-[#0d0e10] text-[#ff8a4c] transition-transform duration-300 group-hover:rotate-[-8deg]">
            <LogoMark className="size-5" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-fg">
            {profile.shortName}
            <span className="text-subtle">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isContact = item.href === CONTACT_HREF;
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={
                  isContact
                    ? "ml-2 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]"
                    : `rounded-full px-3.5 py-2 text-sm transition-colors ${
                        isActive ? "bg-surface-2 text-fg" : "text-muted hover:text-fg"
                      }`
                }
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-full border border-line-strong text-fg md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        </div>
      </nav>

      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        />
      )}

      {open && (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => {
              const isContact = item.href === CONTACT_HREF;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    isContact
                      ? "mt-2 rounded-full bg-fg px-4 py-3 text-center text-sm font-semibold text-bg"
                      : "rounded-full px-4 py-3 text-sm text-muted hover:bg-surface-2 hover:text-fg"
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
