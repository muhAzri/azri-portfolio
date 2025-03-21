import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "edukita",
    title: "Edukita",
    description: "Educational app for University Exam Preparation (UTBK/SNBT)",
    longDescription:
      "Edukita is a comprehensive educational app designed to help students prepare for university entrance exams in Indonesia (UTBK/SNBT). The app features practice quizzes, study materials, and performance tracking. Winner of Dicoding Idcamp 2024.",
    tags: ["Education", "Quiz App", "Award-winning", "Mobile App"],
    imageUrl: "/images/projects/edukita.jpg",
    githubUrl: "https://github.com/muhAzri/edukita",
    demoUrl: "https://edukita.app", // Replace with actual URL if available
    featured: true,
    technologies: ["Flutter", "Dart", "Golang", "PostgreSQL", "Firebase"],
    date: "2024",
    category: "mobile",
  },
  {
    id: "noveler",
    title: "Noveler",
    description:
      "Comprehensive mobile application for novel and comic enthusiasts",
    longDescription:
      "Noveler is a feature-rich platform for novel and comic enthusiasts. It offers seamless reading experiences with JWT token-based authentication, bookmarking, and content management. The app includes personalized preferences, a customizable interface, and Unity Ads integration.",
    tags: ["Reading App", "Novels", "Comics", "Mobile App"],
    imageUrl: "/images/projects/noveler.jpg",
    githubUrl: "https://github.com/muhAzri/noveler",
    featured: true,
    technologies: [
      "Flutter",
      "Golang",
      "Gin",
      "Gorm",
      "PostgreSQL",
      "Unity Ads",
    ],
    date: "2023",
    category: "mobile",
  },
  {
    id: "wallpaper-changer",
    title: "LockScreen Wallpaper Changer",
    description: "Android app to schedule and change lockscreen wallpapers",
    longDescription:
      "A scheduled Android LockScreen Wallpaper Changer utilizing Flutter. The app integrates functionality to fetch wallpapers from an HTTP server, allowing users to automatically change their lockscreen wallpapers on a schedule.",
    tags: ["Android", "Wallpaper", "Customization"],
    imageUrl: "/images/projects/wallpaper.jpg",
    githubUrl: "https://github.com/muhAzri/wallpaper-changer",
    featured: false,
    technologies: ["Flutter", "Dart", "HTTP API"],
    date: "2023",
    category: "mobile",
  },
  {
    id: "ble-tracker",
    title: "BLE Tracker & Location Reporter",
    description:
      "Extension for a wallpaper app with Bluetooth Low Energy tracking",
    longDescription:
      "Enhanced an existing wallpaper app by integrating Bluetooth Low Energy (BLE) tracking and location reporting capabilities. The implementation ensures seamless user experience while providing additional utility through location-based features.",
    tags: ["Bluetooth", "Location", "Mobile"],
    imageUrl: "/images/projects/ble-tracker.jpg",
    githubUrl: "https://github.com/muhAzri/ble-tracker",
    featured: false,
    technologies: ["Flutter", "Dart", "BLE", "Location Services"],
    date: "2023",
    category: "mobile",
  },
  {
    id: "hangout-app",
    title: "Hangout Planner",
    description: "Mobile app to simplify organizing hangout plans",
    longDescription:
      "A Fullstack Mobile Hangout App designed to simplify the organization of hangout plans. Users can seamlessly share various hangout ideas such as dining experiences or exploring the town, fostering social interaction and coordination for joint activities.",
    tags: ["Social", "Planning", "Mobile"],
    imageUrl: "/images/projects/hangout.jpg",
    githubUrl: "https://github.com/muhAzri/hangout-app",
    featured: true,
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    date: "2023-Present",
    category: "mobile",
  },
];
