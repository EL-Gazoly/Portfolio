export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  hasCode?: boolean;
  hasDemo?: boolean;
  codeLink?: string;
  demoLink?: string;
}
