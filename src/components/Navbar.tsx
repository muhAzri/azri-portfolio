"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { nav, profile, socials } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line glass">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="Home">
          <span className="grid size-9 place-items-center rounded-lg border border-line-strong bg-surface-2 transition-colors group-hover:border-accent/40">
            <LogoMark className="size-5" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-fg">
            {profile.shortName}
            <span className="text-subtle">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={socials.email}
          className="hidden rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-9 place-items-center rounded-lg border border-line text-fg md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface-2 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={socials.email}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-fg px-4 py-2.5 text-center text-sm font-semibold text-bg"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
