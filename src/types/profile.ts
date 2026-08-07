export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  summary: string;
  socials: SocialLink[];
}

export interface Competency {
  title: string;
  description: string;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  date?: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  dateRange: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Publication {
  citation: string;
  venue: string;
}
