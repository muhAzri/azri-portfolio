"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function CTASection() {
  return (
    <section className="container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-lg bg-primary/5 p-8 md:p-12"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            I&apos;m currently available for freelance work and open to new
            opportunities. If you have a project in mind or want to collaborate,
            feel free to reach out!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Me
                <Icons.mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
                <Icons.download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
