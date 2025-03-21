import { Metadata } from "next";
import { ExperienceList } from "@/components/experience/experience-list";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Explore my professional journey as a Fullstack Mobile App Engineer, including my work at Teravin Technovation, Help A Paw, and freelance projects.",
};

export default function ExperiencePage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mb-16 flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Work Experience</h1>
        <p className="max-w-3xl text-xl text-muted-foreground">
          My professional journey and contributions in mobile app development.
        </p>
      </div>

      <ExperienceList />
    </div>
  );
}