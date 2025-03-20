import { Project } from "./types";

export const cardgameProject: Project = {
  id: "Cardgame",
  title: "Jeu de cartes",
  description:
    "Développement d'un jeu de cartes type 'Yu-Gi-Oh' dans un terminal.",
  image: "/Cardgame/Cartes.png",
  tags: ["C++"],
  situation: "Projet de première année de BUT Informatique.",
  task: "Développer un jeu de cartes type 'Yu-Gi-Oh' dans un terminal.",
  action: [
    "Conception des classes pour les cartes et les joueurs",
    "Implémentation des règles du jeu",
    "Développement d'une interface utilisateur en ligne de commande",
  ],
  result:
    "Un jeu de cartes fonctionnel dans un terminal, avec des règles de jeu respectant le jeu 'Yu-Gi-Oh'.",
  screenshots: [
    {
      url: "/Cardgame/Cartes.png",
      caption: "Cartes",
    },
    {
      url: "/Cardgame/Début_partie.png",
      caption: "Début de partie",
    },
    {
      url: "/Cardgame/Fin_partie.png",
      caption: "Fin de partie",
    },
    {
      url: "/Cardgame/Génération_cartes.png",
      caption: "Génération du deck",
    },
    {
      url: "/Cardgame/Initialisation.png",
      caption: "Initialisation de la partie",
    },
    {
      url: "/Cardgame/Règles.png",
      caption: "Règles du jeu",
    },
  ],
  challenges: [
    "Conception des classes pour les cartes et les joueurs",
    "Implémentation des règles du jeu",
    "Développement d'une interface utilisateur en ligne de commande",
  ],
  learnings: [
    "Conception de classes pour modéliser des objets du monde réel",
    "Implémentation des règles d'un jeu de cartes",
    "Développement d'une interface utilisateur en ligne de commande",
  ],
};
