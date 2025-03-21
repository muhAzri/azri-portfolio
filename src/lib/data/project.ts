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
];
