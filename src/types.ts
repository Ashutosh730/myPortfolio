export interface Project {
  title: string;
  description: string;
  techStack: string[];
}

export interface Experience {
  title: string;
  period: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}