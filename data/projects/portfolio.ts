import { Project } from "./types";

export const portfolioProject: Project = {
  id: "Portfolio2",
  title: "Nouveau portfolio",
  description:
    "Nouveau portfolio personnel, avec une nouvelle idendité visuelle et des animations modernes.",
  image: "/Portfolio2/home.png",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Zod",
    "Nodemailer",
    "Vercel",
  ],
  githubUrl: "https://github.com/mtelli4/portfolio.git",
  situation:
    "Besoin de présenter mes projets et compétences de manière professionnelle et interactive pour les potentiels employeurs et clients.",
  task: "Concevoir et développer un portfolio responsive qui met en valeur mes projets et compétences avec une expérience utilisateur fluide et moderne.",
  action: [
    "Conception d'une architecture basée sur Next.js pour optimiser le référencement",
    "Utilisation de Tailwind CSS pour un design responsive et personnalisé",
    "Intégration de Framer Motion pour des animations fluides améliorant l'expérience utilisateur",
    "Mise en place d'un système de présentation de projets détaillé",
    "Déploiement sur Vercel pour une haute disponibilité",
  ],
  result:
    "Un portfolio moderne, responsive et performant qui présente efficacement mes projets et compétences. Le site obtient d'excellents scores de performance sur Lighthouse et offre une expérience utilisateur fluide sur tous les appareils.",
  screenshots: [
    {
      url: "/Portfolio/home.png",
      caption: "Page d'accueil du portfolio",
    },
    {
      url: "/Portfolio/projects.png",
      caption: "Section des projets",
    },
  ],
  challenges: [
    "Optimisation des performances pour garantir des temps de chargement rapides",
    "Conception d'animations fluides sans compromettre les performances",
    "Création d'un design responsive qui fonctionne sur tous les appareils",
  ],
  learnings: [
    "Approfondissement des connaissances sur Next.js et son système de routing",
    "Maîtrise des animations avec Framer Motion",
    "Techniques d'optimisation des performances web",
    "Amélioration des compétences en UI/UX design",
  ],
};
