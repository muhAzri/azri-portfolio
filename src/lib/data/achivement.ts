import { Achievement } from "../types/achievements";

export const achievements: Achievement[] = [
  {
    id: "dicoding-idcamp-2024",
    title: "Winner of Dicoding Idcamp 2024",
    description:
      "Developed Edukita, an educational app for University Exam Preparation (UTBK/SNBT) using Flutter and Golang, winning first place in the Dicoding Idcamp 2024 competition.",
    date: "2024",
    imageUrl: "/images/achievements/edukita.webp",
    link: [
      {
        title: "Source Code on GitHub (Mobile App)",
        url: "https://github.com/muhAzri/edukita_mobile",
      },
      {
        title: "Source Code on GitHub (Backend)",
        url: "https://github.com/muhAzri/EduKita",
      },
    ],
  },
];
