import { Project } from "./types";

export const eiffelTimeProject: Project = {
  id: "EiffelTime",
  title: "Eiffel Time",
  description:
    "Une application de gestion universitaire multiplateforme, permettant de centraliser et faciliter l'accès à l'emploi du temps, la gestion des notes, les moyennes, la gestion des absences, le suivi des présences et la messagerie pour l'Université Gustave Eiffel.",
  image: "/EiffelTime/home.png",
  tags: [
    "React",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Vite.js",
    "Node.js",
    "Postgresql",
    "Prisma",
    "HTML",
    "CSS",
  ],
  githubUrl: "https://github.com/mtelli4/eiffel_time.git",
  situation:
    "Les étudiants et le personnel de l'Université Gustave Eiffel utilisaient plusieurs plateformes distinctes pour accéder à leurs emplois du temps, notes, et pour communiquer, ce qui créait de la confusion et une perte de temps.",
  task: "Développer une solution centralisée permettant aux étudiants et au personnel d'accéder facilement à toutes les fonctionnalités essentielles depuis une seule application, disponible sur mobile et web.",
  action: [
    "Conception d'une architecture client-serveur permettant une synchronisation des données en temps réel",
    "Création d'une interface utilisateur intuitive avec React pour le web et React Native pour mobile",
    "Développement d'une API RESTful avec Node.js pour gérer les données",
    "Mise en place d'une base de données PostgreSQL avec Prisma comme ORM",
    "Implémentation d'un système d'authentification sécurisé",
    "Configuration d'un système de notifications en temps réel",
  ],
  result:
    "L'application Eiffel Time a été adoptée par plus de 80% des étudiants dès le premier semestre de son lancement. Les retours indiquent une amélioration significative de l'expérience utilisateur et une réduction du temps passé à chercher des informations. Les professeurs rapportent également une meilleure gestion des présences et une communication facilitée avec les étudiants.",
  screenshots: [
    {
      url: "/EiffelTime/home.png",
      caption: "Page d'accueil montrant le tableau de bord",
    },
    // {
    //   url: "/EiffelTime/calendar.png",
    //   caption: "Vue de l'emploi du temps",
    // },
    // {
    //   url: "/EiffelTime/grades.png",
    //   caption: "Interface de gestion des notes",
    // },
    // {
    //   url: "/EiffelTime/messaging.png",
    //   caption: "Système de messagerie",
    // },
  ],
  challenges: [
    "Synchronisation des données entre les différentes plateformes existantes",
    "Conception d'une interface adaptée aux différentes tailles d'écran",
    "Gestion des droits d'accès selon les différents rôles (étudiants, professeurs, administration)",
  ],
  learnings: [
    "Importance de l'architecture pour les applications multiplateformes",
    "Techniques de gestion d'état avancées avec React",
    "Optimisation des requêtes de base de données pour améliorer les performances",
    "Méthodes de déploiement continu pour les applications web et mobiles",
  ],
};
