export type Experience = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities?: string[];
  projects?: Project[];
  technologies: string[];
  logoUrl?: string;
  companyUrl?: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
};
