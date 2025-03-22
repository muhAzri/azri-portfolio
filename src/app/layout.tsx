// app/layout.tsx
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn, ThemeProvider } from "@/lib/utils";

import { siteConfig } from "../config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.metaTags.keywords.split(", "),
  authors: [
    {
      name: siteConfig.metaTags.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.metaTags.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@muhAzri", // Replace with your Twitter handle if applicable
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteConfig.url),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="BiyLL358czZR_kYdvoQF-pFFhBW-2J1pYUyuHLJ_DiY"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {/* Add Schema.org structured data script */}
        <Script
          id="schema-org-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              jobTitle: "Fullstack Mobile App Engineer",
              knowsAbout: [
                "Flutter",
                "Dart",
                "Golang",
                "TypeScript",
                "Firebase",
                "React",
                "Next.js",
              ],
              sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
            }),
          }}
        />

        <ThemeProvider
          //@ts-expect-error asdsa
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
