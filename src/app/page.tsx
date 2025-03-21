import { Metadata } from "next";
import { siteConfig } from "@/config/site";

import { Hero } from "@/components/home/hero";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { CTASection } from "@/components/home/cta-section";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { LatestAchievement } from "@/components/home/latest-experience";
import { FeaturedProjects } from "@/components/home/featured-project";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestAchievement />
      <FeaturedProjects />
      <ExperiencePreview />
      <SkillsShowcase />
      <CTASection />
    </>
  );
}
