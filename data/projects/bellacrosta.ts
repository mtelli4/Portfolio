import { Project } from "./types";

export const bellacrostaProject: Project = {
  id: "BellaCrosta",
  title: "Bella Crosta",
  description:
    "Application de gestion des commandes, des clients et des stocks d'ingrédients pour une pizzeria.",
  image: "/BellaCrosta/home.jpeg",
  tags: ["Java", "JavaFX", "SQLite", "MVC"],
  situation:
    "Besoin de gérer les commandes, les clients et les stocks d'ingrédients d'une pizzeria de manière efficace.",
  task: "Développer une application de gestion des commandes, des clients et des stocks d'ingrédients pour une pizzeria.",
  action: [
    "Conception d'une architecture MVC pour séparer les données, la logique et l'interface",
    "Création d'une interface utilisateur avec JavaFX pour une expérience utilisateur intuitive",
    "Développement d'une base de données SQLite pour stocker les commandes, les clients et les stocks d'ingrédients",
    "Implémentation des requêtes sur la base de données avec l’API JDBC (Java Database Connectivity), pour gérer les commandes et les stocks d’ingrédients.",
    "Mise en place d'un système de gestion des stocks pour suivre les quantités d'ingrédients disponibles",
    "Implémentation d'un système de gestion des commandes pour enregistrer les commandes des clients",
    "Création d'un système de gestion des clients pour enregistrer les informations des clients",
    "Développement de l'application Android de commandes et de réservation pour les clients, avec réseau concurrent (threads) pour gérer les commandes simultanées",
  ],
  result:
    "Une application de gestion des commandes, des clients et des stocks d'ingrédients pour une pizzeria, offrant une interface intuitive pour les employés et une application Android pour les clients. L'application permet de gérer les commandes, les clients et les stocks d'ingrédients de manière efficace",
  challenges: [
    "Concevoir une interface utilisateur intuitive pour les employés de la pizzeria",
    "Développer un système de gestion des stocks pour suivre les quantités d'ingrédients disponibles",
    "Implémenter un système de gestion des commandes pour enregistrer les commandes des clients",
    "Créer une application Android pour les clients avec un réseau concurrent pour gérer les commandes simultanées",
  ],
  learnings: [
    "Maîtrise de JavaFX pour le développement d'interfaces utilisateur",
    "Utilisation de SQLite pour la gestion des données",
    "Conception d'une architecture MVC pour séparer les données, la logique et l'interface",
    "Développement d'une application Android pour les clients",
    "Mise en pratique de JDBC pour les requêtes sur la base de données",
  ],
};
