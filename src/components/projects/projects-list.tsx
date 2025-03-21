"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Project } from "@/lib/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CategoryType = "all" | "mobile" | "web" | "backend" | "other";

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="mb-8 flex justify-center">
        <Tabs
          defaultValue="all"
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as CategoryType)}
          className="w-full max-w-xl"
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group"
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute right-2 top-2">
                    <Badge className="bg-yellow-500/90 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                >
                  Details
                </Button>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="icon">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild variant="outline" size="icon">
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.externalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Details Dialog */}
      {selectedProject && (
        <Dialog
          open={selectedProject !== null}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <Badge className="mr-2 mt-2">{selectedProject.category}</Badge>
                <Badge variant="outline">{selectedProject.date}</Badge>
              </DialogDescription>
            </DialogHeader>

            <div className="relative mb-6 h-64 w-full overflow-hidden rounded-md">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              <div>
                <h4 className="mb-2 font-medium">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedProject.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icons.github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                )}
                {selectedProject.demoUrl && (
                  <Button asChild size="sm">
                    <Link
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icons.externalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {selectedProject.appStoreUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={selectedProject.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      App Store
                    </Link>
                  </Button>
                )}
                {selectedProject.playStoreUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={selectedProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Play Store
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
