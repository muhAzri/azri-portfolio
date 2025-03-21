"use client";

import React from "react";
import { motion } from "framer-motion";

import { skills } from "@/lib/data/skills";
import { SkillCategory } from "@/lib/types/skill";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Group skills by category
const groupedSkills: Record<SkillCategory, typeof skills> = {
  "Mobile Development": [],
  "Backend Development": [],
  "Frontend Development": [],
  "Database": [],
  "DevOps": [],
  "Design": [],
  "Language": [],
  "Other": [],
};

skills.forEach((skill) => {
  groupedSkills[skill.category].push(skill);
});

// Filter out empty categories
const categories = Object.keys(groupedSkills).filter(
  (category) => groupedSkills[category as SkillCategory].length > 0
) as SkillCategory[];

export function SkillsShowcase() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
          <p className="mb-12 max-w-3xl text-center text-muted-foreground">
            Technologies and tools I&apos;ve worked with throughout my career.
          </p>

          <div className="grid w-full gap-8 md:grid-cols-2">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <h3 className="mb-4 text-xl font-medium">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills[category].map((skill) => (
                    <Badge
                      key={skill.id}
                      variant="secondary"
                      className={cn(
                        "px-3 py-1 text-sm",
                        skill.level === "Advanced" && "bg-primary/20",
                        skill.level === "Intermediate" && "bg-blue-500/20",
                        skill.level === "Beginner" && "bg-muted"
                      )}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}