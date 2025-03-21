"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { experiences } from "@/lib/data/experience";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ExperiencePreview() {
  // Get the latest experience
  const latestExperience = experiences[0];

  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Work Experience
        </h2>
        <p className="mb-12 max-w-3xl text-center text-muted-foreground">
          A glimpse of my professional journey and contributions.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl rounded-lg border bg-card p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-medium">
                {latestExperience.position}
              </h3>
              <p className="text-muted-foreground">
                {latestExperience.company} • {latestExperience.location}
              </p>
            </div>
            <Badge variant="outline">
              {latestExperience.startDate} - {latestExperience.endDate}
            </Badge>
          </div>

          <p className="mb-4 text-muted-foreground">
            {latestExperience.description}
          </p>

          <div className="mb-6">
            <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
            <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
              {latestExperience.responsibilities
                .slice(0, 3)
                .map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {latestExperience.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {latestExperience.technologies.length > 5 && (
              <Badge variant="secondary">
                +{latestExperience.technologies.length - 5}
              </Badge>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/experience">
                View Full Experience
                <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
