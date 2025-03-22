import { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: "teravin",
    company: "Teravin Technovation",
    position: "Hybrid Mobile App Engineer",
    location: "Jakarta, Indonesia",
    startDate: "Mar 2023",
    endDate: "Mar 2025",
    description:
      "Developed and enhanced fintech and smart building applications using hybrid mobile technologies while ensuring high performance and security.",
    responsibilities: [
      "Developed fintech mobile applications using hybrid mobile technologies.",
      "Implemented customer service functionality using Intercom.",
      "Built secure withdrawal and Earned Wage Access (EWA) features.",
      "Created a Visitor Pass feature for a smart building app.",
      "Integrated video call support by collaborating with Android and iOS native developers.",
      "Bridged ICT and HID systems for hybrid technology on mobile applications.",
      "Integrated Google Sign-In and Apple Sign-In authentication.",
    ],
    technologies: [
      "Hybrid Mobile App",
      "RESTful API",
      "Intercom",
      "Android Native",
      "iOS Native",
    ],
    logoUrl: "/images/logos/teravin.jpg",
    companyUrl: "https://teravintech.com",
  },
  {
    id: "help-a-paw",
    company: "Help A Paw",
    position: "Flutter App Engineer",
    location: "Sofia, Bulgaria",
    startDate: "Apr 2023",
    endDate: "Oct 2023",
    description:
      "Collaborated with a non-profit organization to develop and enhance their mobile application for animal welfare.",
    responsibilities: [
      "Contributed to the development of a non-profit organization's mobile app",
      "Leveraged technical expertise to support their mission",
      "Spearheaded app localization efforts for global accessibility",
      "Ensured adaptability across diverse cultures and regions",
      "Enhanced accessibility for a global user base",
    ],
    technologies: ["Flutter", "Dart", "Internationalization", "Localization"],
    logoUrl: "/images/logos/help-a-paw.png",
    companyUrl: "https://help-a-paw.org",
  },
  {
    id: "upwork",
    company: "Upwork",
    position: "Freelance Fullstack Flutter Developer",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Present",
    description:
      "Freelance developer delivering high-quality Flutter applications tailored to client requirements across various domains.",
    projects: [
      {
        name: "Scheduled LockScreen Wallpaper Changer",
        description:
          "Developed an Android app that periodically changes the lock screen wallpaper using Flutter.",
        technologies: ["Flutter", "Dart", "Android", "RESTful API"],
      },
      {
        name: "Wallpaper App Enhancement",
        description:
          "Expanded an existing wallpaper app by integrating BLE Tracker functionality and location reporting.",
        technologies: ["Flutter", "BLE", "Location Services", "Firebase"],
      },
      {
        name: "KiraUntung",
        description:
          "Developed and launched KiraUntung, a Flutter-based mobile app that wraps the web version into a native Android experience and published it on Google Play.",
        technologies: ["Flutter", "Dart", "WebView", "Google Play Console"],
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "BLE",
      "Location Services",
      "RESTful API",
    ],
    logoUrl: "/images/logos/upwork.png",
    companyUrl: "https://upwork.com",
  },
];
