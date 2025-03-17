"use client";
import SectionHeading from "@/components/atoms/section-heading";
import SkillCard from "@/components/molecules/skill-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  ChevronDown,
  Clock,
  Code,
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

  const toolsSkills: Skill[] = [
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
      icon: Users,
      projects: [
        {
          title: "Projet collaboratif",
          description: "Application web e-commerce",
          argumentation: "",
          img: "/api/placeholder/300/200",
          path: "ecommerce-platform",
        },
        {
          title: "Hackathon 2024",
          description: "Solution innovante en 48h",
          argumentation:
            "Participation à un hackathon où notre équipe a développé une application de suivi environnemental en utilisant des APIs publiques et React Native. Nous avons remporté le prix de l'innovation technique.",
          img: "/api/placeholder/300/200",
          path: "hackathon-2024",
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
          title: "Optimisation de performance",
          description: "Réduction de 70% du temps de chargement",
          argumentation:
            "J'ai identifié et résolu des problèmes de performance majeurs sur une application React existante. En utilisant des techniques comme le code splitting, la mémorisation et l'optimisation des requêtes API, j'ai réduit le temps de chargement initial de 70% et amélioré l'expérience utilisateur de manière significative.",
          img: "/api/placeholder/300/200",
          path: "performance-optimization",
        },
      ],
    },
    {
      id: "admin",
      title: "Administrer des systèmes informatiques communicants complexes",
      description:
        "Capacité à organiser efficacement les tâches, respecter les délais et maximiser la productivité.",
      level: 2,
      icon: Clock,
      projects: [
        {
          title: "Projet sous contrainte de temps",
          description: "Livraison d'un MVP en 2 semaines",
          argumentation:
            "J'ai conçu et développé un MVP fonctionnel pour un client dans un délai serré de 2 semaines. En utilisant une méthodologie agile adaptée et en priorisant efficacement les fonctionnalités essentielles, j'ai pu livrer le projet à temps tout en maintenant une qualité de code élevée.",
          img: "/api/placeholder/300/200",
          path: "mvp-project",
        },
      ],
    },
    {
      id: "gest-data",
      title: "Gérer des données de l'information",
      description:
        "Concevoir et administrer des bases de données, gérer les données de l'entreprise",
      level: 2,
      icon: Briefcase,
      projects: [
        {
          title: "Portfolio Personnel",
          description: "Conception et développement de A à Z",
          argumentation:
            "J'ai géré l'ensemble du cycle de vie de mon portfolio professionnel, de la conception initiale au déploiement final. Ce projet m'a permis de mettre en pratique mes compétences en gestion de projet tout en créant une vitrine pour mon travail qui reflète mes capacités techniques et créatives.",
          img: "/api/placeholder/300/200",
          path: "portfolio",
        },
      ],
    },
    {
      id: "gestion-projet",
      title: "Conduire un projet",
      description:
        "Gérer un projet informatique en respectanat les besoins clients et les contraintes",
      level: 3,
      icon: Briefcase,
      projects: [
        {
          title: "Projet de fin d'études",
          description: "Application de gestion de stock",
          argumentation: "",
          img: "/api/placeholder/300/200",
          path: "stock-management",
        },
      ],
    },
    {
      id: "teamwork",
      title: "Travailler dans une équipe informatique",
      description:
        "Collaborer efficacement au sein d'une équipe de développement",
      level: 3,
      icon: Briefcase,
      projects: [
        {
          title: "Projet de fin d'études",
          description: "Application de gestion de stock",
          argumentation: "",
          img: "/api/placeholder/300/200",
          path: "stock-management",
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
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-background/50 border border-border">
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
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
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Bases de données
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              DevOps
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Outils
            </TabsTrigger>
            <TabsTrigger
              value="soft-skills"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
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
              {toolsSkills.map((skill, index) => (
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
                          style={{ width: `${(skill.level / 3) * 100}%` }}
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
                                        className="py-2 px-4 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-full inline-flex items-center justify-center transition-colors hover:opacity-90"
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
