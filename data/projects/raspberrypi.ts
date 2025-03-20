import { Project } from "./types";

export const raspberrypiProject: Project = {
  id: "RaspberryPi",
  title: "Raspberry Pi",
  description:
    "Installation et configuration d'un serveur Apache2 pour héberger des sites web sur un Raspberry Pi.",
  image: "/raspberrypi-apache-logo.png",
  tags: ["Raspberry Pi", "Apache2", "Linux"],
  situation:
    "Besoin d'un serveur web pour héberger des sites web personnels et des projets de développement.",
  task: "Installer et configurer un serveur Apache2 sur un Raspberry Pi pour héberger des sites web personnels et des projets de développement.",
  action: [
    "Installation de Raspbian OS sur une carte SD pour le Raspberry Pi",
    "Configuration du serveur Apache2 pour héberger des sites web",
    "Mise en place de la redirection des ports pour accéder au serveur",
    "Déploiement de sites web statiques et dynamiques sur le serveur Apache2",
  ],
  result:
    "Un serveur web fonctionnel sur un Raspberry Pi, capable d'héberger des sites web personnels et des projets de développement.",
  challenges: [
    "Configuration du serveur Apache2 pour héberger des sites web statiques et dynamiques",
    "Mise en place de la redirection des ports pour accéder au serveur",
    "Déploiement de sites web sur le serveur Apache2",
  ],
  learnings: [
    "Installation et configuration d'un serveur Apache2 sur un Raspberry Pi",
    "Gestion des sites web statiques et dynamiques sur un serveur Apache2",
    "Mise en place de la redirection des ports pour accéder au serveur",
  ],
};
