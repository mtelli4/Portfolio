export interface Project {
  title: string;
  description: string;
  argumentation: string;
  img: string;
  path: string;
}

export interface SoftSkill {
  id: string;
  title: string;
  description: string;
  level: number;
  // icon: LucideIcon;
  projects: Project[];
}
