import { eiffelTimeProject } from "./eiffeltime";
import { portfolioProject } from "./portfolio";
import { Project } from "./types";
// Importer d'autres projets au fur et à mesure

export const projectsData: Record<string, Project> = {
  [eiffelTimeProject.id]: eiffelTimeProject,
  [portfolioProject.id]: portfolioProject,
  // Ajouter d'autres projets ici
};

export const getAllProjects = (): Project[] => {
  return Object.values(projectsData);
};

export const getProjectById = (id: string): Project | undefined => {
  return projectsData[id];
};
