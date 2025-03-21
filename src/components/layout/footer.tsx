import * as React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Muhammad Azri Fatihah Susanto. All
            rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row md:gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icons.github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icons.linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href={`mailto:${siteConfig.links.email}`}
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icons.mail className="h-4 w-4" />
            <span>Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
