export type CertificationIssuer =
  | "Dicoding Indonesia"
  | "Google"
  | "Microsoft"
  | "AWS"
  | "Udemy"
  | "Coursera"
  | "edX"
  | "freeCodeCamp"
  | "Other";

export type CertificationCategory =
  | "Mobile Development"
  | "Web Development"
  | "Cloud Computing"
  | "Data Science"
  | "Machine Learning"
  | "DevOps"
  | "Software Architecture"
  | "Programming Language"
  | "Security"
  | "Other";

export type Certification = {
  id: string;
  title: string;
  issuer: CertificationIssuer;
  issueDate: string;
  expiryDate: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  duration?: string;
  category: CertificationCategory;
  image?: string;
};
