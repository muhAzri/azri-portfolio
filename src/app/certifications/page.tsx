// src/app/certifications/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { CertificationCard } from "@/components/certifications/CertificationsCard";

export const metadata: Metadata = {
  title: `Certifications | ${siteConfig.name}`,
  description: "Professional certifications and achievements in mobile development and software engineering",
  keywords: [
    "flutter certification",
    "developer certifications",
    "mobile app development certifications",
    "software engineering certifications",
    "dicoding certification",
  ],
  alternates: {
    canonical: `${siteConfig.url}/certifications`,
  },
  openGraph: {
    title: `Professional Certifications | ${siteConfig.name}`,
    description: "View my professional certifications and achievements in mobile development and software engineering",
    url: `${siteConfig.url}/certifications`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Certifications`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Professional Certifications | ${siteConfig.name}`,
    description: "View my professional certifications and achievements in mobile development and software engineering",
    images: [siteConfig.ogImage],
    creator: "@muhAzri",
  },
};

export default function CertificationsPage() {
  // You can expand this array with more certifications
  const certifications = [
    {
      id: "flutter-expert",
      title: "Flutter Developer Expert",
      issuer: "Dicoding Indonesia",
      issueDate: "April 8, 2024",
      expiryDate: "April 8, 2027",
      verificationUrl: "https://dicoding.com/certificates/0LZ06DD63Z65",
      description: "Advanced Flutter development with clean architecture, TDD, advanced UI, modularization, reactive programming, CI, performance, security, and deployment best practices.",
      skills: [
        "Clean Architecture",
        "Test-Driven Development (TDD)",
        "Advanced UI",
        "Modularization",
        "Reactive Programming",
        "Continuous Integration",
        "Performance Optimization",
        "Security Implementation",
        "App Deployment"
      ],
      duration: "70 hours",
      image: "/images/certifications/flutter-expert.png" // You'll need to create this image
    },
    // You can add more certifications here following the same structure
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
}