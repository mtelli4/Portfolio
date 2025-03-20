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
    "Le projet a été un tel succès que nous avons pu entamer l'ajoute de fonctionnalités secondaires, notamment un thème sombre. La quasi totalité des fonctionnalités demandées ont été implémenté, à l'exception du QR Code pour le pointage des présences d'un cours, et l'implémentation de la logique pour les notifications.",
  screenshots: [
    {
      url: "/EiffelTime/home.png",
      caption: "Page de connexion",
    },
    {
      url: "/EiffelTime/Light/Schedule.png",
      caption: "Emploi du temps",
    },
    {
      url: "/EiffelTime/Light/Grades.png",
      caption: "Notes",
    },
    {
      url: "/EiffelTime/Light/Absences.png",
      caption: "Absences",
    },
    {
      url: "/EiffelTime/Light/Averages.png",
      caption: "Moyennes",
    },
    {
      url: "/EiffelTime/Light/Messagerieb.png",
      caption: "Messagerie",
    },
    {
      url: "/EiffelTime/Light/Admin.png",
      caption: "Administration",
    },
    {
      url: "/EiffelTime/Light/Settingsb.png",
      caption: "Paramètres",
    },
    {
      url: "/EiffelTime/Light/Notifications.png",
      caption: "Notifications",
    },
    {
      url: "/EiffelTime/Dark/Schedule.png",
      caption: "Emploi du temps",
    },
    {
      url: "/EiffelTime/Dark/Scheduledetails.png",
      caption: "Détails d'un cours",
    },
    {
      url: "/EiffelTime/Dark/Grades.png",
      caption: "Notes",
    },
    {
      url: "/EiffelTime/Dark/AbsencesManagement.png",
      caption: "Absences",
    },
    {
      url: "/EiffelTime/Dark/Averages.png",
      caption: "Moyennes",
    },
    {
      url: "/EiffelTime/Dark/Messagerie.png",
      caption: "Messagerie",
    },
    {
      url: "/EiffelTime/Dark/Admin.png",
      caption: "Administration",
    },
    {
      url: "/EiffelTime/Dark/Settings.png",
      caption: "Paramètres",
    },
  ],
  challenges: [
    "Configuration du monorepo pour assurer le partage de code entre les applications web et mobile.",
    "Gestion des dépendances spécifiques à chaque plateforme",
    "Conception d'une interface adaptée aux différentes tailles d'écran",
    "Gestion des droits d'accès selon les différents rôles (étudiants, professeurs, administration)",
  ],
  learnings: [
    "Importance de l'architecture pour les applications multiplateformes",
    "Découverte de React, React Native, Tailwind CSS, Vite.js, PostgreSQL, Prisma, Babel, Metro",
    "Techniques de gestion d'état avancées avec React",
  ],
};
