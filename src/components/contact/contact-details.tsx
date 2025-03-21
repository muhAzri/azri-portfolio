import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";

export function ContactDetails() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Feel free to contact me through any of these channels.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Icons.mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="font-medium hover:underline"
              >
                {siteConfig.links.email}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Icons.phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <Link
                href={`tel:${siteConfig.links.phone}`}
                className="font-medium hover:underline"
              >
                {siteConfig.links.phone}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Icons.linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Icons.github className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">GitHub</p>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                Follow on GitHub
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Let&apos;s Work Together</CardTitle>
          <CardDescription>
            I&apos;m open to the following opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2">
            <Icons.check className="h-5 w-5 text-green-500" />
            <p>Fullstack Mobile App Development</p>
          </div>
          <div className="flex items-center gap-2">
            <Icons.check className="h-5 w-5 text-green-500" />
            <p>Freelance Projects</p>
          </div>
          <div className="flex items-center gap-2">
            <Icons.check className="h-5 w-5 text-green-500" />
            <p>Remote Job Opportunities</p>
          </div>
          <div className="flex items-center gap-2">
            <Icons.check className="h-5 w-5 text-green-500" />
            <p>Technical Consultation</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
