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
  situation: "Besoin d'un portfolio plus moderne, plus attrayant.",
  task: "Concevoir et développer un portfolio responsive qui met en valeur mes projets et compétences avec une expérience utilisateur fluide et moderne.",
  action: [
    "Conception d'une architecture basée sur Next.js pour optimiser le référencement",
    "Utilisation de Tailwind CSS pour un design responsive et personnalisé",
    "Intégration de Framer Motion pour des animations fluides améliorant l'expérience utilisateur",
    "Classification des compétences par catégories pour offrir une meilleure lisibilité",
    "Mise en place d'un système de présentation de projets détaillé avec une API REST, pour une maintenance et une évolutivité facilitées",
    "Création d'un formulaire de contact avec validation côté serveur avec Zod et envoi d'email avec Nodemailer",
    "Déploiement sur Vercel pour une haute disponibilité",
  ],
  result:
    "Un portfolio moderne, responsive et performant qui présente efficacement mes projets et compétences. Le site obtient d'excellents scores de performance sur Lighthouse (entre 90/100 et 100/100 sur web et mobile) et offre une expérience utilisateur fluide sur tous les appareils.",
  challenges: [
    "Création d'une API REST pour gérer les projets",
    "Optimisation des performances pour garantir des temps de chargement rapides",
    "Conception d'animations fluides sans compromettre les performances",
    "Création d'un design responsive qui fonctionne sur tous les appareils",
  ],
  learnings: [
    "Approfondissement des connaissances sur Next.js et son système de routing",
    "Maîtrise des animations avec Framer Motion",
    "Techniques d'optimisation des performances web",
    "Amélioration des compétences en UI/UX design",
    "Utilisation de Zod pour la validation des données",
    "Création d'une API REST pour gérer les projets",
    "Déploiement d'une application Next.js sur Vercel",
    "Mise en place d'un formulaire de contact avec Nodemailer",
  ],
};
