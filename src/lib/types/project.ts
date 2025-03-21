export type Project = {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    featured: boolean;
    technologies: string[];
    date: string;
    category: "mobile" | "web" | "backend" | "other";
  };