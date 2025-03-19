"use client";

import { Project } from "@/data/projects/types";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  // Ajoutez cette fonction dans votre composant ProjectDetailsPage

  const handleNavigateHome = (sectionId?: string) => {
    // Stocker l'ID de section dans le localStorage si fourni
    if (sectionId) {
      localStorage.setItem("scrollToSection", sectionId);
    }

    // Naviguer vers la page d'accueil
    router.push("/");
  };
  useEffect(() => {
    const fetchProjectDetails = async () => {
      setLoading(true);

      try {
        if (params.projectId) {
          const response = await fetch(`/api/projects/${params.projectId}`);

          if (!response.ok) {
            throw new Error("Project not found");
          }

          const projectData = await response.json();
          setProject(projectData);
        }
      } catch (error) {
        console.error("Error fetching project details:", error);
        router.push("/projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [params.projectId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Chargement...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Projet non trouvé</h1>
        <button
          onClick={() => handleNavigateHome("projects")}
          className="flex items-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
        >
          <ChevronLeft size={16} className="mr-2" />
          Retour aux projets
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 md:px-6 pt-24">
      <div className="container mx-auto max-w-5xl">
        {/* En-tête et navigation */}
        <div className="mb-8">
          <button
            onClick={() => handleNavigateHome("projects")}
            className="flex items-center mb-6 text-primary hover:underline"
          >
            <ChevronLeft size={16} className="mr-2" />
            Retour aux projets
          </button>

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

          <p className="text-lg text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
              >
                <ExternalLink size={16} className="mr-2" />
                Démo
              </a>
            )}
          </div>
        </div>

        {/* Image principale */}
        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Section S.T.A.R. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Situation</h2>
            <p className="text-card-foreground">{project.situation}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Tâche</h2>
            <p className="text-card-foreground">{project.task}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-md md:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Actions</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.action.map((item, index) => (
                <li key={index} className="text-card-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl p-6 shadow-md md:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Résultat</h2>
            <p className="text-card-foreground">{project.result}</p>
          </motion.div>
        </div>

        {/* Galerie de captures d'écran */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Captures d&apos;écran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={screenshot.url}
                      alt={screenshot.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <p className="text-center text-sm text-card-foreground">
                      {screenshot.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Section défis et apprentissages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Défis rencontrés
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-card-foreground">
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Apprentissages
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index} className="text-card-foreground">
                  {learning}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
