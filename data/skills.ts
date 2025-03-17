// import { SoftSkill } from "../types/types";

// // export interface SoftSkill {
// //   id: string;
// //   title: string;
// //   description: string;
// //   level: number;
// //   icon: LucideIcon;
// //   projects: Project[];
// // }
// export const skills: SoftSkill[] = [
//   [
//     {
//       id: "dev-app",
//       title: "Réaliser un développement d'application",
//       description:
//         "Concevoir, coder, tester et intégrer des solutions informatiques répondant aux besoins des clients",
//       level: 3,
//       projects: [
//         {
//           title: "Eiffel Time",
//           description:
//             "Développement d'une application web et mobile de gestion scolaire",
//           argumentation: `Eiffel Time est un projet de réalisation d'une application web et mobile de gestion scolaire.\n\n
//               Dans ce projet, je me suis chargé à la fois du design de l'UI/UX, mais aussi du développement du front-end.\n\n
//               Pour la phase de conception et de prototypage, j'ai conçu la majorités des maquettes et des prototypes de l'application web et de l'application mobile dans un premier temps, avant de passer à la phase de développement.\n\n
//               Au début de la phase de développement, j'ai mis en place la configuration de la structure du projet et de ses dépendances, pour assurer son bon fonctionnement sur web, iOS et Android, à travers des composants partagés entre chaque plateforme.\n\n
//               J'ai ensuite développé la majorité de l'UI de cette application, notamment l'emploi du temps, les notes, les moyennes, les absences et retards, la messagerie, le centre de notification, la partie administration et la barre de navigation latérale sur web, mais aussi celle sur mobile`,

//           img: "/assets/EiffelTime/Login_screen.png",
//           path: "nested/eiffeltime",
//         },
//         {
//           title: "portfolio",
//           description: "Développement d'un site web portfolio",
//           argumentation: `Ce projet est un projet personnel dans lequel j'ai développé un site web portfolio pour présenter mes projets et mes compétences afin de permettre aux visiteurs de découvrir mon travail.\n\n
//               J'ai développé ce site web principalement en Astro, pour permettre une navigation fluide et une expérience utilisateur optimale, mais aussi en TypeScript et en CSS.\n\n
//               J'ai également utilisé le format Markdown pour le contenu des fichiers Astro, pour faciliter la rédaction et la mise en forme des textes.\n\n
//               Dans ce projet, j'ai aussi pu utilisé la bibliothèque Astro pour la gestion des routes et des composants, pour faciliter la navigation et la réutilisation des composants.\n\n
//               Enfin, j'assure l'intégration et le déploiement continu de ce site web avec GitHub Actions pour garantir sa disponibilité et sa mise à jour régulière.`,
//           img: "/assets/stock-1.jpg",
//           path: "site-portfolio",
//         },
//         {
//           title: "Arithmetic Arena",
//           description: `Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques`,
//           argumentation: `Ce projet m'a permis de concevoir et développer un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques.\n\n
//               J'ai développé ce jeu en C# avec Unity, pour permettre une expérience de jeu fluide et agréable.\n\n
//               J'ai conçu les différents niveaux de ce jeu, pour permettre une progression adaptée au niveau de l'utilisateur, mais aussi pour permettre une expérience de jeu variée et intéressante.\n\n
//               J'ai également développé les différents mécanismes de jeu, pour permettre une expérience de jeu interactive et stimulante, mais aussi pour permettre une expérience de jeu éducative et pédagogique.\n\n`,
//           img: "/assets/ArithmeticArena/stock-2.jpg",
//           path: "arithmeticarena",
//         },
//         {
//           title: "Bella Crosta",
//           description:
//             "Développement d'une application Java de gestion de commandes d'une pizzeria",
//           argumentation: `Ce projet m'a permis d'approfondir mes connaissances en Java, en développant une application de gestion de commandes d'une pizzeria.\n\n
//               J'ai développé cette application en Java, pour permettre une gestion efficace des commandes, des clients et des produits, mais aussi pour permettre une expérience utilisateur optimale.\n\n
//               J'ai conçu les différentes interfaces de cette application, pour permettre une navigation fluide et une expérience utilisateur agréable.\n\n
//               Ce projet a été l'occasion pour moi de mettre en pratique mes compétences en JDBC (Java Database Connectivity) pour la gestion des données, mais aussi pour la gestion des commandes et des clients.\n\n
//               J'ai également utilisé JavaFX pour le développement de l'interface graphique de cette application, pour permettre une expérience utilisateur moderne et intuitive.\n\n`,
//           img: "/assets/BellaCrosta/ConnexionPizzaiolo.jpeg",
//           path: "bellacrosta",
//         },
//         {
//           title: "Trellite",
//           description:
//             "Développement d'une application Java de gestion de projet",
//           argumentation: `Ce projet m'a permis de développer une application de gestion de projet en Java.\n\n
//               Elle permet une gestion efficace des projets, des tâches et des collaborateurs, mais aussi pour permettre une expérience utilisateur optimale.\n\n
//               Ce projet a été l'occasion pour moi de mettre en pratique mes compétences en Java Swing pour le développement de l'interface graphique, mais aussi pour la gestion des événements et des interactions utilisateur.\n\n`,
//           img: "/assets/Trellite/Tableau_de_bord.png",
//           path: "trellite",
//         },
//         {
//           title: "CarConnect",
//           description:
//             "Développement d'un site web de start-up de location de voitures",
//           argumentation: `Ce projet est l'un de mes premiers projet web, il est très basique mais m'a permis d'approfondir mes connaissances en HTML, CSS et JavaScript.\n\n
//               J'ai développé ce site web pour une start-up fictive de location de voitures, pour permettre aux visiteurs de découvrir les services proposés et de réserver une voiture en ligne.\n\n
//               J'ai également utilisé des animations CSS pour rendre le site web plus dynamique et interactif.\n\n`,
//           img: "/assets/CarConnect/Voiture2vidéo.png",
//           path: "trellite",
//         },
//       ],
//     },
//     {
//       id: "opt-app",
//       title: "Optimiser des applications informatiques",
//       description:
//         "Améliorer les performances et l'efficacité des applications",
//       level: 3,
//       projects: [
//         {
//           title: "Eiffel Time",
//           description:
//             "Développement d'une application web et mobile de gestion scolaire",
//           argumentation: `Dans ce projet, j'ai optimisé l'application à travers la réutilisation de composants, notamment grâce à un dossier shared contenant les composants, les types, les API, les hooks, la logique et les assets partagés entre chaque plateforme, pour éviter la duplication de code et faciliter la maintenance de l'application.\n\n
//               Cette optimisation a permis de réduire le temps de développement de l'application par 3, permettant d'avoir une application disponible sur web, iOS et Android en même temps.\n\n`,
//           img: "/assets/EiffelTime/Login_screen.png",
//           path: "nested/eiffeltime",
//         },
//       ],
//     },
//     {
//       id: "admin-sys",
//       title: "Administrer des systèmes informatiques communicants complexes",
//       description: "Gérer et maintenir des infrastructures système et réseau",
//       level: 2,
//       projects: [
//         {
//           title: "Apache2",
//           description:
//             "Installation et configuration d'un serveur web Apache2 sur un raspberry pi",
//           argumentation: `Ce projet m'a permis de mettre en place un serveur web Apache2 sur un raspberry pi, pour héberger plusieurs site web statiques.`,
//           img: "/assets/Apache2/raspberrypi-apache-logo.png",
//           path: "apache",
//         },
//       ],
//     },
//     {
//       id: "gest-data",
//       title: "Gérer des données de l'information",
//       description:
//         "Concevoir et administrer des bases de données, gérer les données de l'entreprise",
//       level: 2,
//       projects: [
//         {
//           title: "Eiffel Time",
//           description:
//             "Développement d'une application web et mobile de gestion scolaire",
//           argumentation: `Derrière ce projet complexe se cache une base de données en Postgresql, qui permet de stocker les informations notamment des utilisateurs, des cours, des notes, \n\n
//               des absences, des retards, des moyennes, des salles, des modules, des groupes, des promotions, des enseignants, des élèves, des rôles, \n\n
//               des permissions, des notifications, des messages et des fichiers. Dans ce projet, ayant principalement travaillé sur le front-end de l'application,
//               j'ai pu réaliser la page d'administration permettant à l'administrateur de gérer les utilisateurs à travers une interface, sans avoir à rentrer dans le code.`,
//           img: "/assets/EiffelTime/Login_screen.png",
//           path: "nested/eiffeltime",
//         },
//         {
//           title: "Bella Crosta",
//           description:
//             "Développement d'une application Java de gestion de commandes d'une pizzeria",
//           argumentation: `Dans ce projet, j'ai pu concevoir la BDD à travers un MCD (Modèle Conceptuel de Données) ainsi qu'un SR (Schéma Relationnel).\n\n
//               J'ai utilisé JDBC (Java Database Connectivity) pour effectuer des requêtes sur la base de données, pour afficher mais aussi mettre à jour automatiquement les données,
//               notamment pour la gestion des commandes, et des ingrédients et des stocks.\n\n`,
//           img: "/assets/BellaCrosta/ConnexionPizzaiolo.jpeg",
//           path: "bellacrosta",
//         },
//         {
//           title: "Trellite",
//           description:
//             "Développement d'une application Java de gestion de projet",
//           argumentation:
//             "Dans ce projet j'ai pu concevoir la BDD à travers un MCD, un SR et un dictionnaires de données.",
//           img: "/assets/Trellite/Tableau_de_bord.png",
//           path: "trellite",
//         },
//       ],
//     },
//     {
//       id: "gestion-projet",
//       title: "Conduire un projet",
//       description:
//         "Gérer un projet informatique en respectant les besoins clients et les contraintes",
//       level: 3,
//       projects: [
//         {
//           title: "Eiffel Time",
//           description:
//             "Développement d'une application web et mobile de gestion scolaire",
//           argumentation: `Dans ce projet, j'ai pu recueillir les besoins des principaux futurs utilisateurs concernés par l'application, principalement \n\n
//               la secrétaire, le chef du département informatique et les élèves. Suite à ces retours, j'ai analysé ces besoins et le cahier des charges, afin
//               de définir les fonctionnalités de l'application à travers un PBS (Product Breakdown Structure).
//               J'ai ensuite organisé les étapes du projets en concevant un WBS (Work Breakdown Structure).\n\n
//               Ces étapes ont permis de clarifier les tâches à réaliser, donnant ainsi à toute l'équipe une vision claire des objectifs à atteindre.\n\n`,
//           img: "/assets/EiffelTime/Login_screen.png",
//           path: "nested/eiffeltime",
//         },
//         {
//           title: "Arithmetic Arena",
//           description:
//             "Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques",
//           argumentation: `Dans ce projet, je me suis chargé de réaliser les spécifications techniques et fonctionnelles, de lister les tâches et
//               de planifier et organiser le projet à travers un diagramme de GANTT et un PERT.`,
//           img: "/assets/ArithmeticArena/stock-2.jpg",
//           path: "arithmeticarena",
//         },
//         {
//           title: "Bella Crosta",
//           description:
//             "Développement d'une application Java de gestion de commandes d'une pizzeria",
//           argumentation: `Dans ce projet, j'ai pu concevoir le diagramme PBS, le WBS, le diagramme de GANTT et le PERT.`,
//           img: "/assets/BellaCrosta/ConnexionPizzaiolo.jpeg",
//           path: "bellacrosta",
//         },
//         {
//           title: "Trellite",
//           description:
//             "Développement d'une application Java de gestion de projet",
//           argumentation: "Dans ce projet, je me suis chargé du PERT.",
//           img: "/assets/Trellite/Tableau_de_bord.png",
//           path: "trellite",
//         },
//       ],
//     },
//     {
//       id: "travail-equipe",
//       title: "Travailler dans une équipe informatique",
//       description:
//         "Collaborer efficacement au sein d'une équipe de développement",
//       level: 3,
//       projects: [
//         {
//           title: "Eiffel Time",
//           description:
//             "Développement d'une application web et mobile de gestion scolaire",
//           argumentation: `Dans ce projet, j'ai travaillé en collaboration avec 5 personnes, dont 3 développeurs back-end, 1 personne qui s'est chargée de la conception et l'implémentation
//               de la BDD, et 1 chef de projet.\n\n
//               J'ai pu travailler en étroite collaboration avec le chef de projet qui m'a assisté dans ma tâche de designer UI/UX pour la conception des maquettes et des prototypes.\n\n.
//               J'ai également travaillé avec le chargé de BDD pour récupérer réaliser les interactions bdd telles que l'affichage, la mise à jour et la suppression des données, à travers le front-end.\n\n`,
//           img: "/assets/EiffelTime/Login_screen.png",
//           path: "nested/eiffeltime",
//         },
//         {
//           title: "Arithmetic Arena",
//           description:
//             "Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques",
//           argumentation:
//             "Dans ce projet, j'ai travaillé en collaboration avec 3 autres étudiants.",
//           img: "/assets/ArithmeticArena/stock-2.jpg",
//           path: "arithmeticarena",
//         },
//         {
//           title: "Bella Crosta",
//           description:
//             "Développement d'une application Java de gestion de commandes d'une pizzeria",
//           argumentation:
//             "Dans ce projet, j'ai pu travailler en collaboration avec 2 autres étudiants.",
//           img: "/assets/BellaCrosta/ConnexionPizzaiolo.jpeg",
//           path: "bellacrosta",
//         },
//         {
//           title: "Trellite",
//           description:
//             "Développement d'une application Java de gestion de projet",
//           argumentation:
//             "Dans ce projet, j'ai travaillé en collaboration avec 3 autres étudiants.",
//           img: "/assets/Trellite/Tableau_de_bord.png",
//           path: "trellite",
//         },
//       ],
//     },
//   ],
// ];
