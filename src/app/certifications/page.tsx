// src/app/certifications/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { certifications } from "@/lib/data/certifications";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CertificationCard } from "@/components/certifications/CertificationsCard";
import { Certification, CertificationCategory, CertificationIssuer } from "@/lib/types/certifications";

export const metadata: Metadata = {
  title: `Certifications | ${siteConfig.name}`,
  description:
    "Professional certifications and achievements in mobile development and software engineering",
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
    description:
      "View my professional certifications and achievements in mobile development and software engineering",
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
    description:
      "View my professional certifications and achievements in mobile development and software engineering",
    images: [siteConfig.ogImage],
    creator: "@muhAzri",
  },
};

export default function CertificationsPage() {
  // Get unique categories and issuers
  const categories = Array.from(
    new Set(certifications.map((cert) => cert.category))
  );
  const issuers = Array.from(
    new Set(certifications.map((cert) => cert.issuer))
  );

  // Function to group certifications by category
  const getCertsByCategory = (
    category: CertificationCategory
  ): Certification[] => {
    return certifications
      .filter((cert) => cert.category === category)
      .sort(
        (a, b) =>
          new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
      );
  };

  // Function to group certifications by issuer
  const getCertsByIssuer = (issuer: CertificationIssuer): Certification[] => {
    return certifications
      .filter((cert) => cert.issuer === issuer)
      .sort(
        (a, b) =>
          new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
      );
  };

  const groupOptions = [
    { value: "category", label: "By Category" },
    { value: "issuer", label: "By Issuer" },
  ];

  return (
    <div className="container py-12 md:py-16">
      <Tabs defaultValue="issuer" className="mt-10">
        <div className="mb-8 flex justify-center">
          <TabsList>
            {groupOptions.map((option) => (
              <TabsTrigger key={option.value} value={option.value}>
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Group by Category */}
        <TabsContent value="category">
          <Tabs defaultValue={categories[0]} className="mt-6">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid gap-8 md:grid-cols-2">
                  {getCertsByCategory(category as CertificationCategory).map(
                    (cert) => (
                      <CertificationCard key={cert.id} certification={cert} />
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>

        {/* Group by Issuer */}
        <TabsContent value="issuer">
          <Tabs defaultValue={issuers[0]} className="mt-6">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              {issuers.map((issuer) => (
                <TabsTrigger key={issuer} value={issuer}>
                  {issuer}
                </TabsTrigger>
              ))}
            </TabsList>

            {issuers.map((issuer) => (
              <TabsContent key={issuer} value={issuer} className="mt-6">
                <div className="grid gap-8 md:grid-cols-2">
                  {getCertsByIssuer(issuer as CertificationIssuer).map(
                    (cert) => (
                      <CertificationCard key={cert.id} certification={cert} />
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
}
