"use client";

import React from "react";
import Link from "next/link";
import { domAnimation, LazyMotion, m } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background shapes (static, no animation) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* LazyMotion for optimized animations */}
      <LazyMotion features={domAnimation} strict>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center md:py-32">
          {/* Subtitle */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-8 inline-block rounded-full bg-muted px-6 py-2 text-sm font-medium"
          >
            Fullstack Mobile App Engineer
          </m.div>

          {/* Title */}
          <m.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Muhammad Azri
            </span>
          </m.h1>

          {/* Description */}
          <m.p
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl opacity-100"
          >
            I develop mobile applications and backend systems using modern
            technologies, focusing on high-performance, scalable, and
            user-friendly solutions. Passionate about building intuitive digital
            experiences that solve real-world problems.
          </m.p>

          {/* CTA Buttons (no animation for instant interactivity) */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Projects
                <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get In Touch
                <Icons.mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </LazyMotion>
    </div>
  );
}
