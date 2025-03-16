import HeroSection from "@/components/organisms/hero-section"
import AboutSection from "@/components/organisms/about-section"
import ProjectsSection from "@/components/organisms/projects-section"
import SkillsSection from "@/components/organisms/skills-section"
import ContactSection from "@/components/organisms/contact-section"
import Footer from "@/components/organisms/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

