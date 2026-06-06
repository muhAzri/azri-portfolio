"use client";

import { useEffect, useState } from "react";
import { Download, ExternalLink, Expand, FileText, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile, resumeUrl } from "@/lib/content";

export function Resume() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="resume" className="border-t border-line bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="Résumé"
          title="The full résumé"
          blurb="Preview my CV here, open it full screen to zoom, or download the PDF."
        />

        <Reveal>
          <div className="overflow-hidden rounded-card border border-line bg-surface">
            {/* toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-subtle">
                <FileText className="size-4 text-accent" />
                resume.pdf
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="hidden items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg md:inline-flex"
                >
                  <Expand className="size-4" />
                  Full screen
                </button>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
                >
                  <ExternalLink className="size-4" />
                  <span className="hidden sm:inline">Open</span>
                </a>
                <a
                  href={resumeUrl}
                  download="Muhammad-Azri-Fatihah-Susanto-CV.pdf"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-fg px-3 py-1.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                >
                  <Download className="size-4" />
                  Download
                </a>
              </div>
            </div>

            {/* desktop preview */}
            <div className="hidden bg-surface-2 p-4 md:block">
              <iframe
                title={`${profile.name} — Résumé`}
                src={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
                className="mx-auto aspect-[1/1.414] w-full max-w-2xl rounded-lg border border-line bg-white"
              />
            </div>

            {/* mobile fallback (mobile browsers rarely render PDF inline) */}
            <div className="flex flex-col items-center gap-3 p-10 text-center md:hidden">
              <span className="grid size-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <FileText className="size-6" />
              </span>
              <p className="text-sm text-muted">
                Open or download the PDF to view it on mobile.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* fullscreen modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-bg/95 backdrop-blur">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-subtle">
              <FileText className="size-4 text-accent" />
              {profile.name} — Résumé
            </span>
            <div className="flex items-center gap-2">
              <a
                href={resumeUrl}
                download="Muhammad-Azri-Fatihah-Susanto-CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg bg-fg px-3 py-1.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                <Download className="size-4" />
                Download
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-fg"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
          <iframe
            title={`${profile.name} — Résumé (full screen)`}
            src={`${resumeUrl}#view=FitH`}
            className="min-h-0 flex-1 bg-white"
          />
        </div>
      )}
    </section>
  );
}
