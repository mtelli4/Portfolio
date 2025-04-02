"use client";

import AboutSection from "@/components/organisms/about-section";
import ContactSection from "@/components/organisms/contact-section";
import Footer from "@/components/organisms/footer";
import HeroSection from "@/components/organisms/hero-section";
import ProjectsSection from "@/components/organisms/projects-section";
import SkillsSection from "@/components/organisms/skills-section";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Récupérer la section à faire défiler depuis localStorage
    const sectionId = localStorage.getItem("scrollToSection");

    if (sectionId) {
      // Effacer la valeur stockée
      localStorage.removeItem("scrollToSection");

      // Ajouter un court délai pour s'assurer que le DOM est chargé
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
