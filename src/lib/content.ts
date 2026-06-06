/** All portfolio content, sourced from resume.tex. Single source of truth. */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://azrifatihah.dev"
).replace(/\/$/, "");

export const profile = {
  name: "Muhammad Azri Fatihah Susanto",
  shortName: "Azri",
  role: "Mobile Developer",
  roleLong: "Mobile Developer — Flutter · Android · iOS",
  location: "Jakarta, Indonesia",
  email: "muhammad.azri.f.s@gmail.com",
  phone: "+62 887 0967 2250",
  photo: "/azri.webp",
  tagline:
    "I build cross-platform mobile apps that ship — from fintech and smart-building products to award-winning learning platforms.",
  summary:
    "Mobile developer with 2+ years of cross-platform delivery experience and Dicoding Expert-level certifications across Flutter, Android (Kotlin), iOS (Swift), and React. I ship production apps on Google Play under the Zrif Apps profile — including a Dicoding IdCamp 2024 winning project — and review professional Flutter & iOS submissions as an External Code Reviewer at Dicoding Indonesia.",
} as const;

export const socials = {
  github: "https://github.com/muhAzri",
  linkedin: "https://linkedin.com/in/muhammad-azri-fatihah-susanto",
  googlePlay: "https://play.google.com/store/apps/developer?id=Zrif+Apps",
  email: "mailto:muhammad.azri.f.s@gmail.com",
} as const;

export const stats = [
  { value: "2+", label: "Years shipping mobile" },
  { value: "4", label: "Dicoding Expert certs" },
  { value: "1", label: "IdCamp 2024 win" },
  { value: "4", label: "Apps on Google Play" },
] as const;

export const highlights = [
  "Dicoding Expert across Flutter, Android, iOS & React",
  "External Code Reviewer at Dicoding Indonesia",
  "Published on Google Play as Zrif Apps",
  "Winner — Dicoding IdCamp 2024",
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "External Code Reviewer",
    company: "Dicoding Indonesia",
    period: "Sept 2025 — Present",
    type: "Part-Time",
    points: [
      "Review Flutter and iOS (Swift) submissions across Dicoding's professional mobile learning paths — evaluating architecture, state management, dependency injection, and test coverage.",
      "Deliver written technical feedback focused on actionable improvements in code structure, naming, and idiomatic platform usage.",
    ],
    tags: ["Flutter", "iOS / Swift", "Architecture", "Code Review"],
  },
  {
    role: "Mobile App Engineer",
    company: "Teravin Technovation",
    period: "Mar 2023 — Mar 2025",
    type: "Full-Time",
    points: [
      "Delivered two consecutive ~1-year cross-platform vendor engagements for enterprise clients, working alongside a senior mobile lead on a small team; codebase used Redux and React Context with a modular, separation-of-concerns structure.",
      "Fintech / Digital Banking: built 4 feature areas across ~24 screens & 14 bottom sheets — User & Company Management, Early Wage Access, Withdrawal flows, and multi-role Transaction History with rich filters.",
      "Built a reusable Multi-Factor Authentication component (biometrics, Approov, email/phone OTP) reused across EWA and withdrawal flows; integrated Intercom for in-app support.",
      "Smart Building / VMS: contributed to the user-facing app in a multi-app ecosystem — QR visitor flows, real-time messaging, and smart-lock / gate access via NFC and BLE.",
      "Implemented the React Native bridge for the ICT access-control vendor protocol (NFC/BLE), and integrated Linphone-based VoIP & video calling with the native team.",
      "Implemented OAuth2 social sign-in (Google & Apple) with JWT session management.",
    ],
    tags: ["React Native", "Redux", "NFC / BLE", "VoIP", "OAuth2", "Fintech"],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile (Primary)",
    items: [
      "Flutter / Dart",
      "Android / Kotlin",
      "Jetpack Compose",
      "iOS / Swift",
      "SwiftUI",
      "UIKit",
      "Kotlin Multiplatform",
    ],
  },
  {
    title: "State Management",
    items: ["BLoC", "Riverpod", "Redux"],
  },
  {
    title: "Backend & Data",
    items: ["Golang", "PostgreSQL", "Firebase", "Supabase", "RESTful APIs"],
  },
  {
    title: "Tooling",
    items: [
      "Git",
      "GitHub Actions",
      "Codemagic",
      "SwiftLint",
      "Play Store Deploy",
    ],
  },
];

/** Flat list for the marquee strip. */
export const marqueeSkills = [
  "Flutter",
  "Kotlin",
  "Swift",
  "Jetpack Compose",
  "SwiftUI",
  "BLoC",
  "Riverpod",
  "Redux",
  "Golang",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Kotlin Multiplatform",
  "GitHub Actions",
];

export type Project = {
  name: string;
  blurb: string;
  badge: string;
  featured?: boolean;
  tags: string[];
  href?: string;
  hrefLabel?: string;
};

export const projects: Project[] = [
  {
    name: "GoService",
    blurb:
      "Vehicle service-reminder app for motorcycle & car owners. Kotlin Multiplatform + Compose, local-first (no login), with a Next.js landing page and Supabase-backed feedback admin.",
    badge: "Latest · KMP",
    featured: true,
    tags: ["Kotlin Multiplatform", "Compose", "Next.js", "Supabase"],
    href: "https://www.goservis.my.id/",
    hrefLabel: "Visit site",
  },
  {
    name: "EduKita — Educational Platform",
    blurb:
      "Full-stack UTBK/SNBT exam-prep app with Google Sign-In, progress tracking, and interactive modules. Flutter client (BLoC + Clean Architecture) on a Golang + PostgreSQL backend built from scratch.",
    badge: "Winner · IdCamp 2024",
    featured: true,
    tags: ["Flutter", "BLoC", "Golang", "PostgreSQL"],
  },
  {
    name: "PokedexPocket — iOS Native",
    blurb:
      "Open-source iOS app with Clean Architecture across Presentation / Domain / Data, Swinject DI, SwiftUI + RxSwift, SwiftData persistence, debounced search, infinite scroll, and two-tier image caching.",
    badge: "Open Source",
    tags: ["Swift", "SwiftUI", "RxSwift", "Swinject"],
    href: "https://github.com/muhAzri/PokedexPocket",
    hrefLabel: "View on GitHub",
  },
  {
    name: "CashFlow — Finance Manager",
    blurb:
      "Offline-first personal finance app with BLoC, multi-currency (7 currencies), encrypted local storage, budget alerts, and an analytics dashboard. Zero-backend, privacy-first architecture.",
    badge: "On Google Play",
    tags: ["Flutter", "BLoC", "Offline-first"],
    href: "https://play.google.com/store/apps/developer?id=Zrif+Apps",
    hrefLabel: "Google Play",
  },
  {
    name: "Floating Timer",
    blurb:
      "Android utility using a Picture-in-Picture overlay — a focused demo of Jetpack Compose working with platform-specific Android APIs.",
    badge: "On Google Play",
    tags: ["Kotlin", "Jetpack Compose", "PiP"],
    href: "https://play.google.com/store/apps/developer?id=Zrif+Apps",
    hrefLabel: "Google Play",
  },
];

export type Certification = {
  title: string;
  path: string;
  issued: string;
  validUntil: string;
  credentialId: string;
  url: string;
  blurb: string;
};

export const certifications: Certification[] = [
  {
    title: "Flutter Developer Expert",
    path: "Menjadi Flutter Developer Expert",
    issued: "Apr 2024",
    validUntil: "Apr 2027",
    credentialId: "0LZ06DD63Z65",
    url: "https://www.dicoding.com/certificates/0LZ06DD63Z65",
    blurb: "Clean Architecture, test-driven development, and app security.",
  },
  {
    title: "Android Developer Expert",
    path: "Menjadi Android Developer Expert",
    issued: "Jul 2025",
    validUntil: "Jul 2028",
    credentialId: "1OP8JDWJLPQK",
    url: "https://www.dicoding.com/certificates/1OP8JDWJLPQK",
    blurb: "Clean Architecture, reactive programming, and dependency injection.",
  },
  {
    title: "iOS Developer Expert",
    path: "Menjadi iOS Developer Expert",
    issued: "Aug 2025",
    validUntil: "Aug 2028",
    credentialId: "1OP8JD92VPQK",
    url: "https://www.dicoding.com/certificates/1OP8JD92VPQK",
    blurb: "Clean Architecture across Presentation / Domain / Data in Swift.",
  },
  {
    title: "React Web Developer Expert",
    path: "Menjadi React Web Developer Expert",
    issued: "Jul 2025",
    validUntil: "Jul 2028",
    credentialId: "98XWO6Q79ZM3",
    url: "https://www.dicoding.com/certificates/98XWO6Q79ZM3",
    blurb: "Clean code, Redux, automated testing, and CI/CD deployment.",
  },
];

export const education = [
  {
    school: "Telkom University, Bandung",
    detail: "B.S. Informatics Engineering — Distance Learning Program",
    period: "Starting Sept 2026",
  },
  {
    school: "SMAN 15 Kota Bekasi",
    detail: "High School Diploma — Natural Sciences",
    period: "",
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Proficient (reading & writing), Conversational" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
