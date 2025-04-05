import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function Biography() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Muhammad Azri Fatihah Susanto</h2>
      <p className="text-lg text-muted-foreground">
        Fullstack Mobile App Developer &bull; Android, Flutter, Golang
      </p>

      <div className="space-y-4">
        <p>
          I&apos;m a passionate Fullstack Mobile App Developer with over two
          years of experience building both cross-platform and native
          applications. My journey began with Flutter, where I&apos;ve built and
          shipped several products — including a national competition-winning
          app — and has expanded into native Android development using Jetpack
          Compose and Kotlin. In the near future, I plan to explore iOS native
          development using Swift.
        </p>

        <p>
          While mobile development is my primary focus, I&apos;m also actively
          deepening my backend skills, particularly with Golang. I&apos;ve built
          APIs and backend systems to support my mobile apps, giving me a strong
          foundation in fullstack product development. I enjoy working on
          end-to-end solutions — from crafting intuitive user interfaces to
          designing efficient server-side logic.
        </p>

        <p>
          I believe in mastering the full spectrum of mobile and backend
          technologies — not just for flexibility, but to deliver better,
          integrated experiences. My approach emphasizes high-quality code,
          performance, and long-term maintainability.
        </p>

        <p>
          One of my recent highlights is winning the Dicoding IDCamp 2024
          competition with <strong>Edukita</strong>, an educational app designed
          for university entrance exam preparation. I built the frontend with
          Flutter and handled the backend using Golang, demonstrating my ability
          to manage fullstack architecture.
        </p>

        <p>
          I&apos;m always looking to grow, collaborate, and contribute to
          impactful projects that challenge me and help me level up as a
          well-rounded software engineer.
        </p>
      </div>

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <Button asChild>
          <Link href="/contact">
            Contact Me
            <Icons.mail className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
            <Icons.download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
