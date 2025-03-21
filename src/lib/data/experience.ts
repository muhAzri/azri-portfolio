import { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: "teravin",
    company: "Teravin Technovation",
    position: "Hybrid Mobile App Engineer",
    location: "Jakarta, Indonesia",
    startDate: "Mar 2023",
    endDate: "Present",
    description:
      "Working on developing fintech mobile applications using Flutter framework with a focus on performance and security.",
    responsibilities: [
      "Developed Fintech Mobile App and contributed to major features",
      "Implemented Customer Service functionality using Intercomm",
      "Built Withdrawal feature with secure transaction processing",
      "Developed EWA (Earned Wage Access) Withdrawals functionality",
      "Created Company User Management systems",
    ],
    technologies: ["Flutter", "Dart", "Bloc", "RESTful API", "Intercomm"],
    logoUrl: "/images/logos/teravin.png",
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
      "Working as a freelance developer on various Flutter projects, meeting client requirements and delivering high-quality applications.",
    responsibilities: [
      "Developed a scheduled Android LockScreen Wallpaper Changer using Flutter",
      "Integrated HTTP server connectivity for wallpaper fetching",
      "Expanded existing wallpaper app with BLE Tracker functionality",
      "Added Location Reporting capabilities to enhance user experience",
      "Currently developing a Fullstack Mobile Hangout App to simplify social planning",
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
