"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
import { Badge } from "@/components/ui/badge";
import { achievements } from "@/lib/data/achivement";

export function LatestAchievement() {
  const latestAchievement = achievements[0]; // Get the most recent achievement

  if (!latestAchievement) return null;

  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Latest Achievement
        </h2>
        <p className="mb-12 max-w-3xl text-center text-muted-foreground">
          Celebrating recent milestones in my career journey.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl"
        >
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={
                  latestAchievement.imageUrl ||
                  "/images/achievements/default.jpg"
                }
                alt={latestAchievement.title}
                fill
                className="object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute left-6 top-6">
                <Badge className="bg-primary text-primary-foreground">
                  {latestAchievement.date}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center">
                <Icons.trophy className="mr-2 h-5 w-5 text-yellow-500" />
                <CardTitle>{latestAchievement.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {latestAchievement.description}
              </CardDescription>
            </CardContent>
            {latestAchievement.link?.map((item, index) => (
              <CardFooter key={index}>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                    <Icons.externalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
