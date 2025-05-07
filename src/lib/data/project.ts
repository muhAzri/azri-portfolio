import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "edukita-frontend",
    title: "Edukita (Frontend)",
    description:
      "Flutter-based mobile app for university exam preparation (UTBK/SNBT) with Google Sign-In authentication.",
    longDescription:
      "Edukita is a mobile app designed to help students prepare for university entrance exams in Indonesia (UTBK/SNBT). It includes practice quizzes, study materials, and performance tracking. Authentication is handled exclusively through Google Sign-In for a seamless and secure experience. Winner of Dicoding Idcamp 2024.",
    tags: [
      "Education",
      "Quiz App",
      "Award-winning",
      "Mobile App",
      "Google Sign-In",
    ],
    imageUrl: "/images/projects/edukita.webp",
    githubUrl: "https://github.com/muhAzri/edukita",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.zrifapps.edukita",
    featured: true,
    technologies: ["Flutter", "Dart", "Firebase", "Google Sign-In"],
    date: "2024",
    category: "mobile",
  },
  {
    id: "edukita-backend",
    title: "Edukita (Backend)",
    description:
      "Golang-based backend for Edukita with PostgreSQL, Firebase, and Google Sign-In authentication.",
    longDescription:
      "The backend for Edukita powers the mobile app by handling authentication, quiz management, and user progress tracking. User authentication is implemented exclusively with Google Sign-In via Firebase Authentication, ensuring a secure and frictionless login experience. Built with Golang, PostgreSQL, and Firebase for scalability and performance.",
    tags: ["Backend", "Education", "Quiz App", "API", "Google Sign-In"],
    imageUrl: "/images/projects/edukita.webp",
    githubUrl: "https://github.com/muhAzri/EduKita",
    featured: true,
    technologies: ["Golang", "PostgreSQL", "Firebase", "Google Sign-In"],
    date: "2024",
    category: "backend",
  },
  {
    id: "floating-timer",
    title: "Floating Timer",
    description:
      "Minimalist popup timer with Picture-in-Picture support built using Kotlin and Jetpack Compose.",
    longDescription:
      "Floating Timer is a lightweight and distraction-free popup timer app for Android. Built with Kotlin and Jetpack Compose, it features Picture-in-Picture (PiP) support so the timer can float above other apps—perfect for multitasking during workouts, studying, cooking, or Pomodoro sessions. The app supports dark mode, sound alerts, offline usage, and is designed to be battery-efficient and lightweight.",
    tags: [
      "Timer",
      "Productivity",
      "Popup",
      "PiP",
      "Focus Tool",
      "Android App",
    ],
    imageUrl: "/images/projects/floating-timer.webp",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.zrifapps.floatingtimer",
    featured: false,
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Android",
      "Picture-in-Picture",
    ],
    date: "2025",
    category: "mobile",
  },
];
