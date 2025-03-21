import { Metadata } from "next";
import { SkillsGrid } from "@/components/skills/skills-grid";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore my technical skills in Flutter, Dart, Golang, and more as a Fullstack Mobile App Engineer.",
};

export default function SkillsPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mb-16 flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Skills & Expertise
        </h1>
        <p className="max-w-3xl text-xl text-muted-foreground">
          The technologies, tools, and languages I work with.
        </p>
      </div>

      <SkillsGrid />
    </div>
  );
}
