"use client";

import { siteConfig } from "@/config/site";
import Script from "next/script";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Fullstack Mobile App Engineer",
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    email: siteConfig.links.email,
    telephone: siteConfig.links.phone,
    image: `${siteConfig.url}/images/profile.jpg`,
    description: siteConfig.description,
    knowsAbout: [
      "Flutter",
      "Dart",
      "Mobile Development",
      "Golang",
      "Backend Development",
      "PostgreSQL",
      "Fullstack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "SMA Negeri 15 Kota Bekasi",
      sameAs: "https://sman15kotabekasi.sch.id/",
    },
    worksFor: {
      "@type": "Organization",
      name: "Teravin Technovation",
      sameAs: "https://teravintech.com",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
