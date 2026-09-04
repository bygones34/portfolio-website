export interface Project {
  title: string; category: string; shortDescription: string; detailedDescription: string;
  contributions: string[]; technologies: string[]; featured: boolean; professional?: boolean;
  githubUrl?: string; liveDemoUrl?: string;
}
