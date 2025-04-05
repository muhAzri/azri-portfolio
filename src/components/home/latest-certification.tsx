// src/components/home/latest-achievement.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { getLatestCertification } from "@/lib/data/certifications";

export function LatestCertification() {
  // Get the latest certification from our data
  const latestCertification = getLatestCertification();

  return (
    <section className="bg-muted/30 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Latest Achievement
          </h2>
          <h3 className="mb-12 text-3xl font-bold md:text-4xl">
            Professional Certification
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Card className="overflow-hidden border-2 border-primary/10">
            <CardHeader>
              <div className="flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-left">
                <div>
                  <CardTitle className="text-2xl">
                    {latestCertification.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {latestCertification.issuer} •{" "}
                    {latestCertification.issueDate}
                  </CardDescription>
                </div>
                <Badge className="bg-primary">
                  {latestCertification.category}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">
                {latestCertification.description}
              </p>

              <div className="mt-6">
                <h4 className="mb-2 text-sm font-medium">
                  Key skills covered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {/* Only show the first 4 skills for brevity */}
                  {latestCertification.skills
                    .slice(0, 4)
                    .map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  {latestCertification.skills.length > 4 && (
                    <Badge variant="outline">
                      +{latestCertification.skills.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/certifications">
                  View All Certifications
                  <Icons.arrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
