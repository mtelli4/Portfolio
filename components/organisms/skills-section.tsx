"use client";
import SectionHeading from "@/components/atoms/section-heading";
import SkillCard from "@/components/molecules/skill-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Brain,
  Cable,
  ChevronDown,
  Circle,
  CircleUserRound,
  ClipboardList,
  Code,
  Coffee,
  Columns,
  Container,
  CornerRightUp,
  Cpu,
  Database,
  FileCode,
  FileJson,
  FileText,
  GithubIcon,
  Gitlab,
  Hash,
  Hexagon,
  Layers,
  LayoutGrid,
  ListTodo,
  LucideIcon,
  Network,
  Package,
  Palette,
  PlusSquare,
  Repeat,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Users,
  UserSquare2,
  Wind,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

// Type definitions
interface Skill {
  name: string;
  icon: LucideIcon;
}

interface Project {
  title: string;
  description: string;
  argumentation: string;
  img: string;
  path?: string;
}

interface SoftSkill {
  id: string;
  title: string;
  description: string;
  level: number;
  icon: LucideIcon;
  projects: Project[];
}

type AccordionState = Record<string, boolean>;

export default function SkillsSection() {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { language } = useLanguage();
  const t = translations[language].skills;

  const technologiesSkills: Skill[] = [
    { name: "HTML", icon: FileText }, // Au lieu de Layout
    { name: "CSS", icon: Palette }, // Au lieu de Layout
    { name: "JavaScript/TypeScript", icon: FileCode }, // Au lieu de Code
    { name: "React", icon: Atom }, // Au lieu de Globe
    { name: "Next.js", icon: CornerRightUp }, // Au lieu de Globe
    { name: "Java", icon: Coffee }, // Au lieu de Code (coffee = tasse de café, clin d'œil à Java)
    { name: "Python", icon: TerminalSquare }, // Au lieu de Code
    { name: "C", icon: Circle }, // Icône circulaire avec C
    { name: "C++", icon: PlusSquare }, // Représente le "++" de C++
    { name: "C#", icon: Hash }, // Représente le "#" de C#
    { name: "PHP", icon: FileJson }, // Au lieu de Code
    { name: "ASM", icon: Cpu }, // Au lieu de Code (représente le bas niveau)
    { name: "Kotlin", icon: Hexagon }, // Au lieu de Code (ressemble au logo K de Kotlin)
    { name: "XML", icon: Braces }, // Au lieu de Code (évoque les balises)
    { name: ".NET", icon: Network }, // Au lieu de Code
    { name: "Jetpack Compose", icon: Sparkles }, // Au lieu de Palette (évoque l'UI dynamique)
    { name: "Astro", icon: Rocket }, // Au lieu de Globe (évoque le logo d'Astro)
    { name: "React Native", icon: Smartphone }, // Bien adapté, peut être conservé
    { name: "Vite.js", icon: Zap }, // Au lieu de Globe (évoque la vitesse de Vite)
    { name: "Node", icon: Server }, // Au lieu de Server (plus spécifique)
    { name: "Bootstrap", icon: LayoutGrid }, // Au lieu de Layout (représente la grille)
    { name: "Tailwind CSS", icon: Wind }, // Au lieu de Palette (évoque le nom "Tailwind")
  ];

  const dbSkills = [
    { name: "SQL", icon: Database }, // Représente bien une base de données relationnelle
    { name: "MySQL", icon: Database }, // Base de données relationnelle standard
    { name: "MongoDB", icon: Layers }, // Représente le stockage de documents JSON empilés
    { name: "PostgreSQL", icon: Database }, // Base de données relationnelle avancée
    { name: "PL/SQL", icon: FileCode }, // Langage de programmation SQL avec du code
    { name: "JDBC", icon: Cable }, // Représente la connectivité/interface
  ];
  const devopsSkills: Skill[] = [
    { name: "Github", icon: GithubIcon }, // Au lieu de Code
    { name: "Gitlab", icon: Gitlab }, // Au lieu de Code
    { name: "Docker", icon: Container }, // Au lieu de Settings
    { name: "Jenkins (Pipeline CI/CD)", icon: Workflow }, // Au lieu de Settings
    { name: "Maven", icon: Package }, // Au lieu de Settings
    { name: "Gradle", icon: Layers }, // Au lieu de Settings
  ];

  const projectSkills: Skill[] = [
    { name: "Figma", icon: Palette }, // Bien adapté, peut être conservé
    { name: "Jira", icon: LayoutGrid }, // Au lieu de Briefcase
    { name: "Notion", icon: FileText }, // Au lieu de Layout
    { name: "Trello", icon: ListTodo }, // Au lieu de Layout
    { name: "Agile", icon: Repeat }, // Au lieu de Users (évoque les cycles itératifs)
    { name: "Scrum", icon: CircleUserRound }, // Au lieu de Users (évoque les daily scrums)
    { name: "Kanban", icon: Columns }, // Au lieu de Layout (représente les colonnes Kanban)
    { name: "RACI", icon: UserSquare2 }, // Au lieu de Briefcase (évoque la matrice de responsabilités)
  ];

  const softSkills: SoftSkill[] = [
    {
      id: "dev-app",
      title: "Réaliser un développement d'application",
      description:
        "Concevoir, coder, tester et intégrer des solutions informatiques répondant aux besoins des clients",
      level: 3,
      icon: Code,
      projects: [
        {
          title: "Nouveau portfolio",
          description:
            "Développement d'un portfolio moderne avec des effets de parallaxe et une interface utilisateur élégante.",
          argumentation: `J'ai développé ce portfolio principalement en React, TypeScript et Tailwind, sur la base de Next.js.
          J'y ai intégré des animations Framer Motion pour rendre l'expérience utilisateur plus agréable et dynamique.
          J'ai mis en place un système de présentation de projets détaillés avec une API REST, pour une maintenance et une évolutivité facilitées.
          J'ai créé un formulaire de contact avec validation Zod et envoi de mail avec Nodemailer.
          Enfin, j'ai déployé ce site web sur Vercel.`,
          img: "/Portfolio2/home.png",
          path: "/Portfolio2",
        },
        {
          title: "Eiffel Time",
          description:
            "Développement d'une application web et mobile de gestion scolaire",
          argumentation: `Eiffel Time est un projet de réalisation d'une application web et mobile de gestion scolaire.\n\n
                Dans ce projet, je me suis chargé à la fois du design de l'UI/UX, mais aussi du développement du front-end.\n\n
                Pour la phase de conception et de prototypage, j'ai conçu la majorités des maquettes et des prototypes de l'application web et de l'application mobile dans un premier temps, avant de passer à la phase de développement.\n\n
                Au début de la phase de développement, j'ai mis en place la configuration de la structure du projet et de ses dépendances, pour assurer son bon fonctionnement sur web, iOS et Android, à travers des composants partagés entre chaque plateforme.\n\n
                J'ai ensuite développé la majorité de l'UI de cette application, notamment l'emploi du temps, les notes, les moyennes, les absences et retards, la messagerie, le centre de notification, la partie administration et la barre de navigation latérale sur web, mais aussi celle sur mobile`,

          img: "/EiffelTime/home.png",
          path: "/EiffelTime",
        },
        {
          title: "CoDec",
          description:
            "Développement d'une petite application graphique pour un CoDec (Encodeur/Décodeur) de compression d’image basé sur un codage diﬀérentiel",
          argumentation: `Dans ce projet, j'ai pu développer un encodeur/décodeur de compression d'image basé sur un codage différentiel, permettant de convertir des
          images .pgm au format .dif et inversement. Cet encodeur est développé en C++, et utilise la librairie g2x pour la fenêtre graphique.
          \n\n`,
          img: "/CoDec/image.png",
        },
        {
          title: "Ancien portfolio",
          description: "Développement d'un site web portfolio",
          argumentation: `Ce projet est un projet personnel dans lequel j'ai développé un site web portfolio pour présenter mes projets et mes compétences afin de permettre aux visiteurs de découvrir mon travail.\n\n
                J'ai développé ce site web principalement en Astro, pour permettre une navigation fluide et une expérience utilisateur optimale, mais aussi en TypeScript et en CSS.\n\n
                J'ai également utilisé le format Markdown pour le contenu des fichiers Astro, pour faciliter la rédaction et la mise en forme des textes.\n\n
                Dans ce projet, j'ai aussi pu utilisé la bibliothèque Astro pour la gestion des routes et des composants, pour faciliter la navigation et la réutilisation des composants.\n\n
                Enfin, j'assure l'intégration et le déploiement continu de ce site web avec GitHub Actions pour garantir sa disponibilité et sa mise à jour régulière.`,
          img: "/Portfolio1/home.jpg",
          path: "/Portfolio1",
        },
        {
          title: "Arithmetic Arena",
          description: `Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques`,
          argumentation: `Ce projet m'a permis de concevoir et développer un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques.\n\n
          J'ai développé ce jeu en C# avec Unity, pour permettre une expérience de jeu fluide et agréable.\n\n
          J'ai conçu les différents niveaux de ce jeu, pour permettre une progression adaptée au niveau de l'utilisateur, mais aussi pour permettre une expérience de jeu variée et intéressante.\n\n
          J'ai également développé les différents mécanismes de jeu, pour permettre une expérience de jeu interactive et stimulante, mais aussi pour permettre une expérience de jeu éducative et pédagogique.\n\n`,
          img: "/ArithmeticArena/home.jpg",
          path: "/ArithmeticArena",
        },
        {
          title: "Bella Crosta",
          description:
            "Développement d'une application Java de gestion de commandes d'une pizzeria",
          argumentation: `Ce projet m'a permis d'approfondir mes connaissances en Java, en développant une application de gestion de commandes d'une pizzeria.\n\n
          J'ai développé cette application en Java, pour permettre une gestion efficace des commandes, des clients et des produits, mais aussi pour permettre une expérience utilisateur optimale.\n\n
          J'ai conçu les différentes interfaces de cette application, pour permettre une navigation fluide et une expérience utilisateur agréable.\n\n
          Ce projet a été l'occasion pour moi de mettre en pratique mes compétences en JDBC (Java Database Connectivity) pour la gestion des données, mais aussi pour la gestion des commandes et des clients.\n\n
          J'ai également utilisé JavaFX pour le développement de l'interface graphique de cette application, pour permettre une expérience utilisateur moderne et intuitive.\n\n`,
          img: "/BellaCrosta/home.jpeg",
          path: "/BellaCrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation: `Ce projet m'a permis de développer une application de gestion de projet en Java.\n\n
          Elle permet une gestion efficace des projets, des tâches et des collaborateurs, mais aussi pour permettre une expérience utilisateur optimale.\n\n
          Ce projet a été l'occasion pour moi de mettre en pratique mes compétences en Java Swing pour le développement de l'interface graphique, mais aussi pour la gestion des événements et des interactions utilisateur.\n\n`,
          img: "/Trellite/Tableau_de_bord.png",
          path: "/Trellolite",
        },
        {
          title: "CarConnect",
          description:
            "Développement d'un site web de start-up de location de voitures",
          argumentation: `Ce projet est l'un de mes premiers projet web, il est très basique mais m'a permis d'approfondir mes connaissances en HTML, CSS et JavaScript.\n\n
          J'ai développé ce site web pour une start-up fictive de location de voitures, pour permettre aux visiteurs de découvrir les services proposés et de réserver une voiture en ligne.\n\n
          J'ai également utilisé des animations CSS pour rendre le site web plus dynamique et interactif.\n\n`,
          img: "/CarConnect/Voiture2vidéo.png",
          path: "/CarConnect",
        },
      ],
    },
    {
      id: "opt-app",
      title: "Optimiser des applications informatiques",
      description:
        "Améliorer les performances et l'efficacité des applications",
      level: 3,
      icon: Brain,
      projects: [
        {
          title: "Eiffel Time",
          description:
            "Développement d'une application web et mobile de gestion scolaire",
          argumentation: `Dans ce projet, j'ai optimisé l'application à travers la réutilisation de composants, notamment grâce à un dossier shared contenant les composants, les types, les API, les hooks, la logique et les assets partagés entre chaque plateforme, pour éviter la duplication de code et faciliter la maintenance de l'application.\n\n
          Cette optimisation a permis de réduire le temps de développement de l'application par 3, permettant d'avoir une application disponible sur web, iOS et Android en même temps.\n\n`,
          img: "/EiffelTime/home.png",
          path: "/EiffelTime",
        },
        {
          title: "Bankcrous",
          description: `Tierce maintenance applicative d'une application de gestion bancaire`,
          argumentation: `Dans ce projet, nous devions travailler sur la maintenance applicative d'une application de gestion bancaire, pour corriger les anomalies.\n\n
          Le groupe ayant réalisé ce projet y a introrduit 10 anomalies dont 5 bloquantes et 5 majeures.\n\n
          Nous devions donc nous répartir ces anomalies à 4 et les corriger en respectant les délais et les contraintes.\n\n
          J'ai personnellement corrigé 2 anomalies bloquantes.
          La première était une anomalie empêchant la connexion de l'utilisateur à son compte, et la seconde était une anomalie empêchant l'utilisateur de sélectionner une entreprise dans la page des remises.`,
          img: "/Bankcrous/TMA.webp",
        },
        {
          title: "Genshin circle war",
          description:
            "Le but de ce projet est d'optimiser les performances d'un jeu vidéo réalisé en Python avec la bibliothèque Tkinter.",
          argumentation: `N'ayant pas été présent dans cet IUT en BUT 1, j'ai repris le projet de mon binôme, et j'y ai introduit des optimisations en réduisant le nombre d'appels aux fonctions les plus sollicitées.
                
        Pour donner une idée, voici le nombre d'appels des fonctions avant optimisation :
                
        <pre>
        ncalls         tottime   percall   cumtime   percall  filename:lineno(function)
        829333/829329   0.043     0.000     0.043     0.000  {built-in method builtins.len}
        826412         35.817     0.000    35.845     0.000  {method 'call' of '_tkinter.tkapp' objects}
        826146          0.139     0.000    35.787     0.000  /lib/python3.13/tkinter/__init__.py:1465(update)
        826145          0.137     0.000    35.852     0.000  /Genhsin_circle_war_SAE1/upemtk.py:74(update)
        826145          0.139     0.000    35.991     0.000  /Genhsin_circle_war_SAE1/upemtk.py:158(mise_a_jour)
        826096          0.050     0.000     0.050     0.000  /Genhsin_circle_war_SAE1/upemtk.py:570(type_evenement)
        826096          0.137     0.000     0.180     0.000  /Genhsin_circle_war_SAE1/upemtk.py:556(donne_evenement)
        587124          0.075     0.000     0.075     0.000  Jeu2.py:420(in_cercle)
        360060          0.033     0.000     0.033     0.000  {built-in method time.time}
        101400          0.044     0.000     0.118     0.000  Jeu2.py:413(point_dans_joueur)
        </pre>
                
        Voici le nombre d'appels à ces mêmes fonctions, après optimisations :
                
        <pre>
        ncalls         tottime   percall   cumtime   percall  filename:lineno(function)
        1705/1701      0.001     0.000     0.001     0.000   {built-in method builtins.len}
        1003           1.405     0.001     1.467     0.001   {method 'call' of '_tkinter.tkapp' objects}
        737            0.002     0.000     1.228     0.002   lib/python3.13/tkinter/__init__.py:1465(update)
        736            0.001     0.000     1.159     0.002   /Genhsin_circle_war_SAE1/upemtk.py:74(update)
        736            0.001     0.000     1.161     0.002   /Genhsin_circle_war_SAE1/upemtk.py:158(mise_a_jour)
        687            0.000     0.000     0.000     0.000   /Genhsin_circle_war_SAE1/upemtk.py:575(type_evenement)
        687            0.001     0.000     0.002     0.000   /Genhsin_circle_war_SAE1/upemtk.py:560(donne_evenement)
        118565         0.018     0.000     0.018     0.000   Jeu2.py:441(in_cercle)
        671            0.001     0.000     0.001     0.000   {built-in method time.time}
        22185          0.005     0.000     0.054     0.000   Jeu2.py:433(point_dans_joueur)
        </pre>
        
        La diminution du nombre d'appels aux fonctions met en évidence l'efficacité des optimisations que j'ai réalisées, permettant ainsi d'améliorer considérablement les performances du jeu.`,
          img: "/Circlewar/Ingame.png",
          // path: "nested/eiffeltime",
        },
      ],
    },
    {
      id: "admin-sys",
      title: "Administrer des systèmes informatiques communicants complexes",
      description:
        "Capacité à organiser efficacement les tâches, respecter les délais et maximiser la productivité.",
      level: 2,
      icon: Server,
      projects: [
        {
          title: "Apache2",
          description:
            "Installation et configuration d'un serveur web Apache2 sur un raspberry pi",
          argumentation: `Ce projet m'a permis de mettre en place un serveur web Apache2 sur un raspberry pi, pour héberger plusieurs site web statiques.`,
          img: "/Apache2/raspberrypi-apache-logo.png",
          path: "/RaspberryPi",
        },
      ],
    },
    {
      id: "gest-data",
      title: "Gérer des données de l'information",
      description:
        "Concevoir et administrer des bases de données, gérer les données de l'entreprise",
      level: 2,
      icon: Database,
      projects: [
        {
          title: "Eiffel Time",
          description:
            "Développement d'une application web et mobile de gestion scolaire",
          argumentation: `Derrière ce projet complexe se cache une base de données en Postgresql, qui permet de stocker les informations notamment des utilisateurs, des cours, des notes, \n\n
          des absences, des retards, des moyennes, des salles, des modules, des groupes, des promotions, des enseignants, des élèves, des rôles, \n\n
          des permissions, des notifications, des messages et des fichiers. Dans ce projet, ayant principalement travaillé sur le front-end de l'application,
          j'ai pu réaliser la page d'administration permettant à l'administrateur de gérer les utilisateurs à travers une interface, sans avoir à rentrer dans le code.`,
          img: "/EiffelTime/home.png",
          path: "/EiffelTime",
        },
        {
          title: "Bella Crosta",
          description:
            "Développement d'une application Java de gestion de commandes d'une pizzeria",
          argumentation: `Dans ce projet, j'ai pu concevoir la BDD à travers un MCD (Modèle Conceptuel de Données) ainsi qu'un SR (Schéma Relationnel).\n\n
          J'ai utilisé JDBC (Java Database Connectivity) pour effectuer des requêtes sur la base de données, pour afficher mais aussi mettre à jour automatiquement les données,
          notamment pour la gestion des commandes, et des ingrédients et des stocks.\n\n`,
          img: "/BellaCrosta/home.jpeg",
          path: "/BellaCrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation:
            "Dans ce projet j'ai pu concevoir la BDD à travers un MCD, un SR et un dictionnaires de données.",
          img: "/Trellite/Tableau_de_bord.png",
          path: "/Trellolite",
        },
      ],
    },
    {
      id: "gestion-projet",
      title: "Conduire un projet",
      description:
        "Gérer un projet informatique en respectanat les besoins clients et les contraintes",
      level: 3,
      icon: ClipboardList,
      projects: [
        {
          title: "Eiffel Time",
          description:
            "Développement d'une application web et mobile de gestion scolaire",
          argumentation: `Dans ce projet, j'ai pu recueillir les besoins des principaux futurs utilisateurs concernés par l'application, principalement \n\n
          la secrétaire, le chef du département informatique et les élèves. Suite à ces retours, j'ai analysé ces besoins et le cahier des charges, afin
          de définir les fonctionnalités de l'application à travers un PBS (Product Breakdown Structure).
          J'ai ensuite organisé les étapes du projets en concevant un WBS (Work Breakdown Structure).\n\n
          Ces étapes ont permis de clarifier les tâches à réaliser, donnant ainsi à toute l'équipe une vision claire des objectifs à atteindre.\n\n`,
          img: "/EiffelTime/home.png",
          path: "/EiffelTime",
        },
        {
          title: "Arithmetic Arena",
          description:
            "Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques",
          argumentation: `Dans ce projet, je me suis chargé de réaliser les spécifications techniques et fonctionnelles, de lister les tâches et
          de planifier et organiser le projet à travers un diagramme de GANTT et un PERT.`,
          img: "/ArithmeticArena/home.jpg",
          path: "/ArithmeticArena",
        },
        {
          title: "Bella Crosta",
          description:
            "Développement d'une application Java de gestion de commandes d'une pizzeria",
          argumentation: `Dans ce projet, j'ai pu concevoir le diagramme PBS, le WBS, le diagramme de GANTT et le PERT.`,
          img: "/BellaCrosta/home.jpeg",
          path: "/BellaCrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation: "Dans ce projet, je me suis chargé du PERT.",
          img: "/Trellite/Tableau_de_bord.png",
          path: "/Trellolite",
        },
      ],
    },
    {
      id: "teamwork",
      title: "Travailler dans une équipe informatique",
      description:
        "Collaborer efficacement au sein d'une équipe de développement",
      level: 3,
      icon: Users,
      projects: [
        {
          title: "Eiffel Time",
          description:
            "Développement d'une application web et mobile de gestion scolaire",
          argumentation: `Dans ce projet, j'ai travaillé en collaboration avec 5 personnes, dont 3 développeurs back-end, 1 personne qui s'est chargée de la conception et l'implémentation
          de la BDD, et 1 chef de projet.\n\n
          J'ai pu travailler en étroite collaboration avec le chef de projet qui m'a assisté dans ma tâche de designer UI/UX pour la conception des maquettes et des prototypes.\n\n.
          J'ai également travaillé avec le chargé de BDD pour récupérer réaliser les interactions bdd telles que l'affichage, la mise à jour et la suppression des données, à travers le front-end.\n\n`,
          img: "/EiffelTime/home.png",
          path: "/EiffelTime",
        },
        {
          title: "Arithmetic Arena",
          description:
            "Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques",
          argumentation:
            "Dans ce projet, j'ai travaillé en collaboration avec 3 autres étudiants.",
          img: "/ArithmeticArena/home.jpg",
          path: "/ArithmeticArena",
        },
        {
          title: "Bella Crosta",
          description:
            "Développement d'une application Java de gestion de commandes d'une pizzeria",
          argumentation:
            "Dans ce projet, j'ai pu travailler en collaboration avec 2 autres étudiants.",
          img: "/BellaCrosta/home.jpeg",
          path: "/BellaCrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation:
            "Dans ce projet, j'ai travaillé en collaboration avec 3 autres étudiants.",
          img: "/Trellite/Tableau_de_bord.png",
          path: "/Trellolite",
        },
      ],
    },
  ];

  // État pour gérer l'ouverture/fermeture des accordéons
  const [openAccordions, setOpenAccordions] = useState<AccordionState>({});
  const [openProjects, setOpenProjects] = useState<AccordionState>({});

  // Fonction pour gérer l'ouverture/fermeture d'un accordéon
  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Fonction pour gérer l'ouverture/fermeture d'un projet
  const toggleProject = (skillId: string, projectIndex: number) => {
    const key = `${skillId}-${projectIndex}`;
    setOpenProjects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="skills" ref={skillsRef} className="py-24 bg-muted/30 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title={t.title}
            subtitle={t.subtitle}
            align="center"
          />
        </motion.div>

        <Tabs
          defaultValue="frontend"
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <TabsList className="grid w-full truncate grid-cols-5 mb-8 bg-background/50 border border-border">
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              {t.tabs.technologies}
            </TabsTrigger>
            <TabsTrigger
              value="db"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              {t.tabs.databases}
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              {t.tabs.devops}
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              {t.tabs.tools}
            </TabsTrigger>
            <TabsTrigger
              value="soft-skills"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              {t.tabs.transverse}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {technologiesSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillCard icon={skill.icon} name={skill.name} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="db" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {dbSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillCard icon={skill.icon} name={skill.name} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="devops" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {devopsSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillCard icon={skill.icon} name={skill.name} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="tools" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {projectSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillCard icon={skill.icon} name={skill.name} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="soft-skills" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-border rounded-lg overflow-hidden bg-background/50"
                >
                  {/* En-tête de l'accordéon */}
                  <button
                    className="w-full p-4 flex justify-between items-center text-left"
                    onClick={() => toggleAccordion(skill.id)}
                    aria-expanded={!!openAccordions[skill.id]}
                    aria-controls={`content-${skill.id}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-medium">{skill.title}</h3>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-end"
                          style={{ width: `100%` }}
                        >
                          <span className="text-xs text-white mr-2">
                            Niveau {skill.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform ${
                        openAccordions[skill.id] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Contenu de l'accordéon */}
                  {openAccordions[skill.id] && (
                    <div
                      id={`content-${skill.id}`}
                      className="px-4 pb-4"
                      role="region"
                    >
                      <p className="mb-6 text-muted-foreground">
                        {skill.description}
                      </p>
                      <div className="border-t border-border pt-4">
                        <h4 className="font-medium mb-4">Projets associés</h4>
                        {skill.projects.length > 0 ? (
                          <div className="space-y-4">
                            {skill.projects.map((project, index) => (
                              <div
                                key={index}
                                className="border border-border rounded-lg overflow-hidden"
                              >
                                {/* En-tête du projet */}
                                <button
                                  className="w-full grid grid-cols-[15%_1fr_auto] gap-3 items-center bg-primary text-primary-foreground"
                                  onClick={() => toggleProject(skill.id, index)}
                                  aria-expanded={
                                    !!openProjects[`${skill.id}-${index}`]
                                  }
                                  aria-controls={`argumentation-${skill.id}-${index}`}
                                >
                                  <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-auto object-cover aspect-[3/2]"
                                  />
                                  <div className="py-1.5 text-left">
                                    <h4 className="font-bold text-xl mb-0.5">
                                      {project.title}
                                    </h4>
                                    <p className="text-lg text-primary-foreground/80">
                                      {project.description}
                                    </p>
                                  </div>
                                  <ChevronDown
                                    className={`h-4 w-4 mr-3 transition-transform ${
                                      openProjects[`${skill.id}-${index}`]
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>

                                {/* Contenu du projet */}
                                {openProjects[`${skill.id}-${index}`] && (
                                  <div
                                    id={`argumentation-${skill.id}-${index}`}
                                    className="p-4 border-t border-dashed border-border/30"
                                    role="region"
                                  >
                                    <h6 className="text-primary font-medium mb-2">
                                      Développement de la compétence
                                    </h6>
                                    <p
                                      className="mb-4"
                                      dangerouslySetInnerHTML={{
                                        __html: project.argumentation,
                                      }}
                                    />
                                    <div className="flex justify-end">
                                      {project.path && (
                                        <Link
                                          href={project.path}
                                          className="py-2 px-4 bg-primary text-primary-foreground rounded-full inline-flex items-center justify-center transition-colors hover:opacity-90"
                                        >
                                          Voir le projet
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground italic">
                            Aucun projet associé pour le moment
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
