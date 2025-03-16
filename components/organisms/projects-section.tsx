"use client"

import { useRef, useEffect } from "react"
import SectionHeading from "@/components/atoms/section-heading"
import ProjectCard from "@/components/molecules/project-card"

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const projects = sectionRef.current?.querySelectorAll(".project-card")
    projects?.forEach((project) => {
      project.classList.add("opacity-0")
      observer.observe(project)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Portfolio Créatif",
      description: "Un portfolio moderne avec des effets de parallaxe et une interface utilisateur élégante.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Minimaliste",
      description: "Une plateforme e-commerce avec une expérience utilisateur fluide et intuitive.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Application de Gestion",
      description: "Un tableau de bord administratif pour gérer les utilisateurs et les données.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["TypeScript", "React", "Firebase", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Moderne",
      description: "Un blog avec un système de gestion de contenu personnalisé et un design élégant.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "Sanity.io", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Application Mobile",
      description: "Une application mobile cross-platform avec une interface utilisateur native.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      tags: ["React Native", "Expo", "Firebase"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Plateforme SaaS",
      description: "Une solution SaaS complète avec abonnements et tableau de bord utilisateur.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Mes projets" subtitle="Découvrez une sélection de mes travaux récents" align="center" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

