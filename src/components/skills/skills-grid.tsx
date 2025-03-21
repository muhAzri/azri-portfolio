"use client";

import React from "react";
import { motion } from "framer-motion";

import { skills as allSkills } from "@/lib/data/skills";
import { SkillCategory } from "@/lib/types/skill";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

// Group skills by category
const groupedSkills: Record<SkillCategory, typeof allSkills> = {
  "Mobile Development": [],
  "Backend Development": [],
  "Frontend Development": [],
  Database: [],
  DevOps: [],
  Design: [],
  Language: [],
  Other: [],
};

allSkills.forEach((skill) => {
  groupedSkills[skill.category].push(skill);
});

// Filter out empty categories
const categories = Object.keys(groupedSkills).filter(
  (category) => groupedSkills[category as SkillCategory].length > 0
) as SkillCategory[];

// Get the proficiency level percentage
const getLevelPercentage = (level: string): number => {
  switch (level) {
    case "Advanced":
      return 90;
    case "Intermediate":
      return 65;
    case "Beginner":
      return 35;
    default:
      return 0;
  }
};

export function SkillsGrid() {
  return (
    <div className="space-y-16">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold">{category}</h2>
            <div className="mt-1 h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {groupedSkills[category].map((skill, skillIndex) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: skillIndex * 0.05 + categoryIndex * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium">
                      {skill.name}
                    </CardTitle>
                    <div className="rounded bg-primary/10 px-2 py-1 text-xs font-medium">
                      {skill.level}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 text-sm text-muted-foreground">
                      {skill.years} {skill.years === 1 ? "year" : "years"}{" "}
                      experience
                    </div>
                    <Progress
                      value={getLevelPercentage(skill.level)}
                      className={cn(
                        "h-2",
                        skill.level === "Advanced" && "bg-primary/20",
                        skill.level === "Intermediate" && "bg-blue-500/20",
                        skill.level === "Beginner" && "bg-muted"
                      )}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
