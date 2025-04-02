"use client";

import SectionHeading from "@/components/atoms/section-heading";
import ProjectCard from "@/components/molecules/project-card";
import { useEffect, useRef } from "react";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = sectionRef.current?.querySelectorAll(".project-card");
    projects?.forEach((project) => {
      project.classList.add("opacity-0");
      observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Nouveau Portfolio",
      description:
        "Un portfolio moderne avec des effets de parallaxe et une interface utilisateur élégante.",
      image: "/Portfolio2/home.png",
      tags: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Zod",
        "Nodemailer",
        "Vercel",
      ],
      detailsUrl: "/Portfolio2",
      githubUrl: "https://github.com/mtelli4/Portfolio.git",
    },
    {
      title: "Eiffel Time",
      description: `Une appplication de gestion universitaire multiplateforme, permettant de centraliser et faciliter l'accès à l'emploi du temps, la gestion des notes,
      les moyennes, la gestion des absences, le suivi des présences et la messagerie pour l'Université Gustave Eiffel.`,
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
      detailsUrl: "/EiffelTime",
    },
    {
      title: "Ancien Portfolio",
      description: "Mon premier site portfolio.",
      image: "/Portfolio1/home.jpg",
      tags: ["Astro", "TypeScript", "CSS"],
      detailsUrl: "/Portfolio1",
      demoUrl: "https://oldportfolio-pied.vercel.app",
      githubUrl: "https://github.com/mtelli4/telli-mohamed.me.git",
    },
    {
      title: "CogTel",
      description:
        "Une application android de stimulation cognitive, pour l'AP-HP, dans le cadre de mon stage de 3 mois chez Dynseo, en deuxième année de BUT.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      tags: ["Kotlin", "Java", "Jetpack Compose", "Android"],
    },
    {
      title: "Arithmetic Arena",
      description:
        "Un jeu vidéo ludique pour faciliter l'apprentissage des mathématiques.",
      image: "/ArithmeticArena/home.jpg",
      tags: ["Unity", "C#", ".NET"],
      detailsUrl: "/ArithmeticArena",
    },
    {
      title: "Bella Crosta",
      description:
        "Application de gestion des commandes, des clients et des stocks d'ingrédients d'une pizzeria.",
      image: "/BellaCrosta/home.jpeg",
      tags: ["Java", "JDBC", "SQL", "JavaFX"],
      detailsUrl: "/BellaCrosta",
      githubUrl:
        "https://github.com/mtelli4/Application-Commandes-Pizzaiolo.git",
    },
    {
      title: "Trellolite",
      description: "Application de gestion de projets.",
      image: "/Trellite/Tableau_de_bord.png",
      tags: ["Java", "Swing"],
      detailsUrl: "/Trellolite",
      githubUrl: "https://github.com/mtelli4/trellolite.git",
    },
    {
      title: "Raspberry Pi",
      description:
        "Installation et configuration d'un serveur Apache2 pour héberger des sites web sur un Raspberry Pi.",
      image: "/raspberrypi-apache-logo.png",
      tags: ["Raspberry Pi", "Apache2", "Linux"],
      detailsUrl: "/RaspberryPi",
    },
    {
      title: "Jeu de cartes",
      description:
        'Développement d\'un jeu de cartes type "Yu-Gi-Oh" dans un terminal.',
      image: "/Cardgame/Cartes.png",
      tags: ["C++"],
      detailsUrl: "/Cardgame",
      githubUrl: "https://github.com/mtelli4/Yu-Gi-Oh_cards_game.git",
    },
    {
      title: "Car Connect",
      description:
        "Développement d'un site web présentant les produits et services d'une entreprise fictive de location de voitures.",
      image: "/CarConnect/Voiture2vidéo.png",
      tags: ["HTML", "CSS", "JavaScript"],
      detailsUrl: "/CarConnect",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Mes projets"
          subtitle="Découvrez une sélection de mes travaux récents"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
