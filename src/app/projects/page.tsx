import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of mobile and web development projects built with Flutter, Golang, and more.",
};

import { ProjectsList } from "@/components/projects/projects-list";
import { projects } from "@/lib/data/project";

export default function ProjectsPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mb-16 flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          My Projects
        </h1>
        <p className="max-w-3xl text-xl text-muted-foreground">
          A showcase of my work, including mobile applications, web projects,
          and backend systems.
        </p>
      </div>
      <ProjectsList projects={projects} />
    </div>
  );
}
