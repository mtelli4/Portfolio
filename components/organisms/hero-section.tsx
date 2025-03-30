"use client";

import Button from "@/components/atoms/button";
import SocialIcon from "@/components/atoms/social-icon";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // Fonction utilitaire pour accéder aux traductions
  const t = (key: string): string => {
    // Gestion des clés imbriquées (comme 'hero.title')
    const keys = key.split(".");
    // Utilisation d'une approche sans typage spécifique pour naviguer dans l'objet de traductions
    let value: unknown = translations[language as keyof typeof translations];

    for (const k of keys) {
      if (
        value &&
        typeof value === "object" &&
        k in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Retourne la clé si la traduction n'est pas trouvée
      }
    }

    return typeof value === "string" ? value : key;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position as percentage
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;

      // Move background slightly based on mouse position
      const bgElement = heroRef.current.querySelector(
        ".parallax-bg"
      ) as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `translate(${-x * 30}px, ${
          -y * 30
        }px) scale(1.1)`;
      }

      // Move content in opposite direction for parallax effect
      const contentElement = heroRef.current.querySelector(
        ".hero-content"
      ) as HTMLElement;
      if (contentElement) {
        contentElement.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <div
        className="parallax-bg absolute inset-0 transition-transform duration-[0.5s] ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />

      {/* Hero content */}
      <div className="hero-content relative z-10 container mx-auto px-4 transition-transform duration-[0.5s] ease-out">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">{t("hero.title")}</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.subtitle")}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="#projects">
              <Button size="lg">{t("hero.viewProjects")}</Button>
            </Link>

            <Link href="#contact">
              <Button variant="outline" size="lg">
                {t("hero.contactMe")}
              </Button>
            </Link>
          </div>

          <div
            className="flex justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <SocialIcon
              href="https://github.com/mtelli4"
              icon={Github}
              label="GitHub"
            />
            <SocialIcon
              href="https://linkedin.com/in/mohamed-telli"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialIcon
              href="mailto:tellimohamed91@gmail.com"
              icon={Mail}
              label="Email"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-foreground/70" />
        </Link>
      </div>

      {/* Floating elements for modern effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
