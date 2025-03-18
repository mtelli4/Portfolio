"use client";
import SectionHeading from "@/components/atoms/section-heading";
import SkillCard from "@/components/molecules/skill-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  ChevronDown,
  ClipboardList,
  Code,
  Database,
  Globe,
  Layout,
  LucideIcon,
  Palette,
  Server,
  Settings,
  Smartphone,
  Users,
} from "lucide-react";
import Image from "next/image";
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
  path: string;
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

  const technologiesSkills: Skill[] = [
    { name: "HTML/CSS", icon: Layout },
    { name: "JavaScript/TypeScript", icon: Code },
    { name: "React/Next.js", icon: Globe },
    { name: "Java", icon: Code },
    { name: "Python", icon: Code },
    { name: "C", icon: Code },
    { name: "C++", icon: Code },
    { name: "C#", icon: Code },
    { name: "PHP", icon: Code },
    { name: "ASM", icon: Code },
    { name: "Kotlin", icon: Code },
    { name: "XML", icon: Code },
    { name: ".NET", icon: Code },
    { name: "Jetpack Compose", icon: Palette },
    { name: "Astro", icon: Globe },
    { name: "React Native", icon: Smartphone },
    { name: "Vite.js", icon: Globe },
    { name: "Node", icon: Server },
    { name: "Bootstrap", icon: Layout },
    { name: "Tailwind CSS", icon: Palette },
  ];

  const dbSkills = [
    { name: "SQL", icon: Server },
    { name: "MySQL", icon: Server },
    { name: "MongoDB", icon: Server },
    { name: "PostgreSQL", icon: Server },
    { name: "PL/SQL", icon: Server },
    { name: "JDBC", icon: Server },
  ];
  // const backendSkills: Skill[] = [
  //   { name: "Node.js", icon: Server, level: 80 },
  //   { name: "Express", icon: Server, level: 78 },
  //   { name: "Python", icon: Code, level: 75 },
  //   { name: "Django", icon: Server, level: 70 },
  //   { name: "MongoDB", icon: Database, level: 75 },
  //   { name: "PostgreSQL", icon: Database, level: 72 },
  //   { name: "Firebase", icon: Database, level: 80 },
  //   { name: "GraphQL", icon: Code, level: 65 },
  // ];

  const devopsSkills: Skill[] = [
    { name: "Github", icon: Code },
    { name: "Gitlab", icon: Code },
    { name: "Docker", icon: Settings },
    { name: "Jenkins (Pipeline CI/CD)", icon: Settings },
    { name: "Maven", icon: Settings },
    { name: "Gradle", icon: Settings },
  ];

  const projectSkills: Skill[] = [
    { name: "Figma", icon: Palette },
    { name: "Jira", icon: Briefcase },
    { name: "Notion", icon: Layout },
    { name: "Trello", icon: Layout },
    { name: "Agile", icon: Users },
    { name: "Scrum", icon: Users },
    { name: "Kanban", icon: Layout },
    { name: "RACI", icon: Briefcase },
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
          title: "Eiffel Time",
          description:
            "Développement d'une application web et mobile de gestion scolaire",
          argumentation: `Eiffel Time est un projet de réalisation d'une application web et mobile de gestion scolaire.\n\n
                Dans ce projet, je me suis chargé à la fois du design de l'UI/UX, mais aussi du développement du front-end.\n\n
                Pour la phase de conception et de prototypage, j'ai conçu la majorités des maquettes et des prototypes de l'application web et de l'application mobile dans un premier temps, avant de passer à la phase de développement.\n\n
                Au début de la phase de développement, j'ai mis en place la configuration de la structure du projet et de ses dépendances, pour assurer son bon fonctionnement sur web, iOS et Android, à travers des composants partagés entre chaque plateforme.\n\n
                J'ai ensuite développé la majorité de l'UI de cette application, notamment l'emploi du temps, les notes, les moyennes, les absences et retards, la messagerie, le centre de notification, la partie administration et la barre de navigation latérale sur web, mais aussi celle sur mobile`,

          img: "/EiffelTime/home.png",
          path: "nested/eiffeltime",
        },
        {
          title: "portfolio",
          description: "Développement d'un site web portfolio",
          argumentation: `Ce projet est un projet personnel dans lequel j'ai développé un site web portfolio pour présenter mes projets et mes compétences afin de permettre aux visiteurs de découvrir mon travail.\n\n
                J'ai développé ce site web principalement en Astro, pour permettre une navigation fluide et une expérience utilisateur optimale, mais aussi en TypeScript et en CSS.\n\n
                J'ai également utilisé le format Markdown pour le contenu des fichiers Astro, pour faciliter la rédaction et la mise en forme des textes.\n\n
                Dans ce projet, j'ai aussi pu utilisé la bibliothèque Astro pour la gestion des routes et des composants, pour faciliter la navigation et la réutilisation des composants.\n\n
                Enfin, j'assure l'intégration et le déploiement continu de ce site web avec GitHub Actions pour garantir sa disponibilité et sa mise à jour régulière.`,
          img: "/Portfolio1/home.jpg",
          path: "site-portfolio",
        },
        {
          title: "Arithmetic Arena",
          description: `Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques`,
          argumentation: `Ce projet m'a permis de concevoir et développer un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques.\n\n
          J'ai développé ce jeu en C# avec Unity, pour permettre une expérience de jeu fluide et agréable.\n\n
          J'ai conçu les différents niveaux de ce jeu, pour permettre une progression adaptée au niveau de l'utilisateur, mais aussi pour permettre une expérience de jeu variée et intéressante.\n\n
          J'ai également développé les différents mécanismes de jeu, pour permettre une expérience de jeu interactive et stimulante, mais aussi pour permettre une expérience de jeu éducative et pédagogique.\n\n`,
          img: "/ArithmeticArena/home.jpg",
          path: "arithmeticarena",
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
          path: "bellacrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation: `Ce projet m'a permis de développer une application de gestion de projet en Java.\n\n
          Elle permet une gestion efficace des projets, des tâches et des collaborateurs, mais aussi pour permettre une expérience utilisateur optimale.\n\n
          Ce projet a été l'occasion pour moi de mettre en pratique mes compétences en Java Swing pour le développement de l'interface graphique, mais aussi pour la gestion des événements et des interactions utilisateur.\n\n`,
          img: "/Trellite/Tableau_de_bord.png",
          path: "trellite",
        },
        {
          title: "CarConnect",
          description:
            "Développement d'un site web de start-up de location de voitures",
          argumentation: `Ce projet est l'un de mes premiers projet web, il est très basique mais m'a permis d'approfondir mes connaissances en HTML, CSS et JavaScript.\n\n
          J'ai développé ce site web pour une start-up fictive de location de voitures, pour permettre aux visiteurs de découvrir les services proposés et de réserver une voiture en ligne.\n\n
          J'ai également utilisé des animations CSS pour rendre le site web plus dynamique et interactif.\n\n`,
          img: "/CarConnect/Voiture2vidéo.png",
          path: "trellite",
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
          path: "nested/eiffeltime",
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
          path: "apache",
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
          path: "nested/eiffeltime",
        },
        {
          title: "Bella Crosta",
          description:
            "Développement d'une application Java de gestion de commandes d'une pizzeria",
          argumentation: `Dans ce projet, j'ai pu concevoir la BDD à travers un MCD (Modèle Conceptuel de Données) ainsi qu'un SR (Schéma Relationnel).\n\n
          J'ai utilisé JDBC (Java Database Connectivity) pour effectuer des requêtes sur la base de données, pour afficher mais aussi mettre à jour automatiquement les données,
          notamment pour la gestion des commandes, et des ingrédients et des stocks.\n\n`,
          img: "/BellaCrosta/home.jpeg",
          path: "bellacrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation:
            "Dans ce projet j'ai pu concevoir la BDD à travers un MCD, un SR et un dictionnaires de données.",
          img: "/Trellite/Tableau_de_bord.png",
          path: "trellite",
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
          path: "nested/eiffeltime",
        },
        {
          title: "Arithmetic Arena",
          description:
            "Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques",
          argumentation: `Dans ce projet, je me suis chargé de réaliser les spécifications techniques et fonctionnelles, de lister les tâches et
          de planifier et organiser le projet à travers un diagramme de GANTT et un PERT.`,
          img: "/ArithmeticArena/home.jpg",
          path: "arithmeticarena",
        },
        {
          title: "Bella Crosta",
          description:
            "Développement d'une application Java de gestion de commandes d'une pizzeria",
          argumentation: `Dans ce projet, j'ai pu concevoir le diagramme PBS, le WBS, le diagramme de GANTT et le PERT.`,
          img: "/BellaCrosta/home.jpeg",
          path: "bellacrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation: "Dans ce projet, je me suis chargé du PERT.",
          img: "/Trellite/Tableau_de_bord.png",
          path: "trellite",
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
          path: "nested/eiffeltime",
        },
        {
          title: "Arithmetic Arena",
          description:
            "Développement d'un jeu vidéo éducatif pour faciliter l'apprentissage des mathématiques",
          argumentation:
            "Dans ce projet, j'ai travaillé en collaboration avec 3 autres étudiants.",
          img: "/ArithmeticArena/home.jpg",
          path: "arithmeticarena",
        },
        {
          title: "Bella Crosta",
          description:
            "Développement d'une application Java de gestion de commandes d'une pizzeria",
          argumentation:
            "Dans ce projet, j'ai pu travailler en collaboration avec 2 autres étudiants.",
          img: "/BellaCrosta/home.jpeg",
          path: "bellacrosta",
        },
        {
          title: "Trellite",
          description:
            "Développement d'une application Java de gestion de projet",
          argumentation:
            "Dans ce projet, j'ai travaillé en collaboration avec 3 autres étudiants.",
          img: "/Trellite/Tableau_de_bord.png",
          path: "trellite",
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
            title="Mes compétences"
            subtitle="Les technologies et outils que j'utilise au quotidien"
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
              Technologies
            </TabsTrigger>
            {/* <TabsTrigger
              value="backend"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Backend
            </TabsTrigger> */}
            <TabsTrigger
              value="db"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              Bases de données
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              DevOps
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              Outils et gestion de projet
            </TabsTrigger>
            <TabsTrigger
              value="soft-skills"
              className="data-[state=active]:bg-primary truncate data-[state=active]:text-primary-foreground"
            >
              Transverse
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
          {/* <TabsContent value="backend" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillCard
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent> */}

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
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
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
                                    <h5 className="font-medium text-sm mb-0.5">
                                      {project.title}
                                    </h5>
                                    <p className="text-xs text-primary-foreground/80">
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
                                    <p className="mb-4">
                                      {project.argumentation}
                                    </p>
                                    <div className="flex justify-end">
                                      <a
                                        href={`/work/${project.path}`}
                                        className="py-2 px-4 bg-primary text-primary-foreground rounded-full inline-flex items-center justify-center transition-colors hover:opacity-90"
                                      >
                                        Voir le projet
                                      </a>
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
