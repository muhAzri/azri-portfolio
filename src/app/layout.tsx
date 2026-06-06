import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, profile, socials } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.summary,
  applicationName: `${profile.shortName} — Portfolio`,
  authors: [{ name: profile.name, url: socials.github }],
  creator: profile.name,
  keywords: [
    "Muhammad Azri Fatihah Susanto",
    "Mobile Developer",
    "Flutter Developer",
    "Android Developer",
    "iOS Developer",
    "Kotlin Multiplatform",
    "React Native",
    "Jakarta",
    "Zrif Apps",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title,
    description: profile.tagline,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  url: SITE_URL,
  image: `${SITE_URL}${profile.photo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  sameAs: [socials.github, socials.linkedin, socials.googlePlay],
  knowsAbout: [
    "Flutter",
    "Kotlin",
    "Swift",
    "Kotlin Multiplatform",
    "React Native",
    "Mobile Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
