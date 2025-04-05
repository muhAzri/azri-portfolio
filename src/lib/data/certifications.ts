// src/lib/data/certifications.ts

import { Certification } from "../types/certifications";

export const certifications: Certification[] = [
  {
    id: "flutter-developer-expert",
    title: "Flutter Developer Expert",
    issuer: "Dicoding Indonesia",
    issueDate: "April 8, 2024",
    expiryDate: "April 8, 2027",
    verificationUrl: "https://dicoding.com/certificates/0LZ06DD63Z65",
    description:
      "Advanced Flutter development course covering best practices for developing production-ready applications with clean architecture, test-driven development, and secure implementation.",
    skills: [
      "Clean Architecture",
      "Test-Driven Development (TDD)",
      "Advanced UI",
      "Modularization",
      "Reactive Programming",
      "Continuous Integration",
      "Performance Optimization",
      "Security Implementation",
      "App Deployment",
    ],
    duration: "70 hours",
    category: "Mobile Development",
    image: "/images/certifications/flutter-expert.webp",
  },
  {
    id: "flutter-developer-intermediate",
    title: "Flutter Developer Intermediate",
    issuer: "Dicoding Indonesia",
    issueDate: "March 21, 2024",
    expiryDate: "March 21, 2027",
    verificationUrl: "https://dicoding.com/certificates/0LZ06DD63Z65",
    description:
      "Intermediate-level Flutter course with focus on fundamental principles, state management, backend integration, and application architecture suitable for production apps.",
    skills: [
      "Flutter Fundamentals",
      "State Management (Provider)",
      "REST API Integration",
      "JSON Serialization",
      "Clean Code Principles",
      "App Theming",
      "Navigation",
      "Firebase Integration",
      "Testing",
    ],
    duration: "50 hours",
    category: "Mobile Development",
    image: "/images/certifications/flutter-intermediate.webp",
  },
  {
    id: "android-fundamental",
    title: "Belajar Fundamental Aplikasi Android",
    issuer: "Dicoding Indonesia",
    issueDate: "April 14, 2024",
    expiryDate: "April 14, 2027",
    verificationUrl: "https://dicoding.com/certificates/QLZ9786J9P5D",
    description:
      "Covers Android app fundamentals, including UI building with RecyclerView, data persistence using Room, networking with Web API, background tasks, and automated testing.",
    skills: [
      "Android Fundamentals",
      "RecyclerView & Layouts",
      "Navigation Components",
      "Room Database",
      "DataStore & File Storage",
      "ViewModel & LiveData",
      "Background Thread & WorkManager",
      "Unit & Instrumentation Testing",
      "REST API Integration",
    ],
    duration: "140 hours",
    category: "Mobile Development",
    image: "/images/certifications/android-fundamental.webp",
  },
  {
    id: "android-jetpack-compose",
    title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
    issuer: "Dicoding Indonesia",
    issueDate: "April 14, 2024",
    expiryDate: "April 14, 2027",
    verificationUrl: "https://dicoding.com/certificates/2VX3RN583ZYQ",
    description:
      "Hands-on course in Jetpack Compose, Android's modern UI toolkit. Covers composables, layouts, state, lazy lists, navigation, testing, and interoperability.",
    skills: [
      "Jetpack Compose",
      "Composable Functions",
      "Declarative UI Programming",
      "Layouts & Modifiers",
      "State Management",
      "Lazy Lists",
      "Navigation",
      "UI Testing",
      "Interoperability with XML",
    ],
    duration: "50 hours",
    category: "Mobile Development",
    image: "/images/certifications/jetpack-compose.webp",
  },
];

// Helper function to get latest certification
export function getLatestCertification(): Certification {
  // Sort by issue date (most recent first) and return the first item
  return [...certifications].sort(
    (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
  )[0];
}

// Helper function to get certifications by category
export function getCertificationsByCategory(category: string): Certification[] {
  return certifications.filter((cert) => cert.category === category);
}

// Helper function to get certifications by issuer
export function getCertificationsByIssuer(issuer: string): Certification[] {
  return certifications.filter((cert) => cert.issuer === issuer);
}
