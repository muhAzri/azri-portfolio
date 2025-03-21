"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { experiences } from "@/lib/data/experience";
import { calculateExperienceDuration } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ExperienceList() {
  return (
    <div className="space-y-12">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-md">
                    {experience.logoUrl ? (
                      <Image
                        src={experience.logoUrl}
                        alt={experience.company}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <Icons.briefcase className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      {experience.position}
                    </CardTitle>
                    <CardDescription>
                      {experience.companyUrl ? (
                        <Link
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {experience.company}
                        </Link>
                      ) : (
                        experience.company
                      )}
                      {" • "}
                      {experience.location}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="whitespace-nowrap">
                    {experience.startDate} - {experience.endDate}
                  </Badge>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {calculateExperienceDuration(
                      experience.startDate,
                      experience.endDate
                    )}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{experience.description}</p>

              {/* Conditionally render Responsibilities for full-time roles */}
              {experience.responsibilities && (
                <div>
                  <h3 className="mb-2 font-medium">Responsibilities:</h3>
                  <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conditionally render Projects for freelance roles */}
              {experience.projects && (
                <div>
                  <h3 className="mb-2 font-medium">Projects:</h3>
                  <ul className="space-y-4">
                    {experience.projects.map((project, i) => (
                      <li key={i} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="mb-2 font-medium">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            {experience.companyUrl && (
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Company Website
                    <Icons.externalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
