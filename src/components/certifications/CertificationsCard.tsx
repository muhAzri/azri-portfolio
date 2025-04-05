// src/components/certifications/certification-card.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CertificationCardProps {
  certification: {
    id: string;
    title: string;
    issuer: string;
    issueDate: string;
    expiryDate: string;
    verificationUrl: string;
    description: string;
    skills: string[];
    duration?: string;
    image?: string;
  };
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-md">
        {certification.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={certification.image}
              alt={certification.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">{certification.title}</CardTitle>
            <Badge variant="outline" className="ml-2">
              {certification.issuer}
            </Badge>
          </div>
          <CardDescription className="mt-2 flex flex-col space-y-1">
            <span>Issued: {certification.issueDate}</span>
            <span>Valid until: {certification.expiryDate}</span>
            {certification.duration && <span>Course duration: {certification.duration}</span>}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <p className="mb-4 text-muted-foreground">{certification.description}</p>
          
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium">Skills & Topics Covered:</h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button asChild variant="outline" size="sm">
            <Link href={certification.verificationUrl} target="_blank" rel="noopener noreferrer">
              Verify Certificate
              <Icons.externalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}