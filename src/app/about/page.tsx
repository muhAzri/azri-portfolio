import { Metadata } from "next";
import Image from "next/image";
import { Biography } from "@/components/about/biography";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Muhammad Azri Fatihah Susanto, a Fullstack Mobile App Engineer specializing in Flutter and Golang development.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mb-16 flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="max-w-3xl text-xl text-muted-foreground">
          Get to know me, my journey, and what drives me as a developer.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg border">
            <Image
              src="/images/profile.jpg"
              alt="Muhammad Azri Fatihah Susanto"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <Biography />
      </div>
    </div>
  );
}
