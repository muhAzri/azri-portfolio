"use client";

import { useEffect, useState } from "react";
import { Download, ExternalLink, Expand, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile, resumeFilename, resumeUrl } from "@/lib/content";

const btnGhost =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-2 active:scale-[0.98]";
const btnSolid =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]";

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
    <section id="resume" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:self-center">
          <SectionHeading
            title="The full résumé"
            blurb="Preview it here, open it full screen to zoom, or download the PDF."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <a href={resumeUrl} download={resumeFilename} className={btnSolid}>
              <Download className="size-4" />
              Download PDF
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              <ExternalLink className="size-4" />
              Open
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`${btnGhost} hidden md:inline-flex`}
            >
              <Expand className="size-4" />
              Full screen
            </button>
          </Reveal>
        </div>

        {/* Desktop preview only. Mobile browsers rarely render PDFs inline. */}
        <Reveal delay={0.08} className="hidden md:block">
          <iframe
            title={`${profile.name} Résumé`}
            src={`${resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
            className="mx-auto aspect-[1/1.414] w-full max-w-xl rounded-card border border-line-strong bg-white"
          />
        </Reveal>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Résumé full screen"
          className="fixed inset-0 z-50 flex flex-col bg-bg"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="font-mono text-xs text-subtle">{resumeFilename}</span>
            <div className="flex items-center gap-2">
              <a href={resumeUrl} download={resumeFilename} className={btnSolid}>
                <Download className="size-4" />
                Download PDF
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid size-11 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:bg-surface-2"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>
          <iframe
            title={`${profile.name} Résumé (full screen)`}
            src={`${resumeUrl}#view=FitH`}
            className="min-h-0 flex-1 bg-white"
          />
        </div>
      )}
    </section>
  );
}
