export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null; 
  repoUrl: string;
  siteUrl: string | null;  
  technologies: string[];
}