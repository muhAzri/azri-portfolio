import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function Biography() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Muhammad Azri Fatihah Susanto</h2>
      <p className="text-lg text-muted-foreground">
        Fullstack Mobile App Engineer
      </p>

      <div className="space-y-4">
        <p>
          I am a Junior Fullstack Flutter Developer with professional experience
          in hybrid mobile app development using Flutter. Over the past year, I
          have dedicated myself to mastering the Flutter framework and Bloc
          State Management, showcasing my commitment to continuous learning and
          skill enhancement.
        </p>

        <p>
          My passion for coding is reflected in my disciplined work ethic,
          evident in the several applications and websites I&apos;ve developed using
          Flutter, all available on my GitHub page and personal website. I
          thrive on the challenge of expanding my knowledge base and skill set,
          believing that ongoing growth is key to delivering valuable
          contributions to any company I work for.
        </p>

        <p>
          I am known for my dedication, enthusiasm for learning, and a drive to
          further improve my craft, eager to leverage my skills to create
          innovative solutions and contribute meaningfully to the success of any
          project or team.
        </p>

        <p>
          Recently, I won the Dicoding Idcamp 2024 competition with my project
          &quot;Edukita&quot;, an educational app designed for University Exam Preparation
          (UTBK/SNBT). This project showcases my ability to develop complete
          solutions using Flutter for the frontend and Golang for the backend.
        </p>
      </div>

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <Button asChild>
          <Link href="/contact">
            Contact Me
            <Icons.mail className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
            <Icons.download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
