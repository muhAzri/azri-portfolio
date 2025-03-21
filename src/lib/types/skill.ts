export type SkillCategory =
  | "Mobile Development"
  | "Backend Development"
  | "Frontend Development"
  | "Database"
  | "DevOps"
  | "Design"
  | "Program Language"
  | "Language"
  | "Other";

export type Skill = {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: SkillCategory;
  iconUrl?: string;
  years: number;
};
