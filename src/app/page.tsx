import { Metadata } from "next";
import { siteConfig } from "@/config/site";

import { Hero } from "@/components/home/hero";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { CTASection } from "@/components/home/cta-section";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { LatestAchievement } from "@/components/home/latest-experience";
import { FeaturedProjects } from "@/components/home/featured-project";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Mobile App Engineer`,
  description: siteConfig.description,
  keywords: [
    "flutter developer",
    "mobile app engineer",
    "golang",
    "portfolio",
    "fullstack developer",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `Mobile App Development Portfolio | ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Mobile App Development Portfolio | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@muhAzri",
  },
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
