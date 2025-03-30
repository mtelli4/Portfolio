"use client";

import Button from "@/components/atoms/button";
import LanguageSwitcher from "@/components/molecules/language-switcher";
import NavLink from "@/components/molecules/nav-link";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].navbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gradient">
            Mohamed Telli
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#home" label={t.home} />
            <NavLink href="#about" label={t.about} />
            <NavLink href="#skills" label={t.skills} />
            <NavLink href="#projects" label={t.projects} />
            <NavLink href="#contact" label={t.contact} />

            <Button
              variant="default"
              size="sm"
              className="ml-4"
              onClick={() => window.open("/cv.pdf", "_blank")}
            >
              {t.resume}
            </Button>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-6">
            <NavLink
              href="#home"
              label={t.home}
              className="text-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#about"
              label={t.about}
              className="text-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#skills"
              label={t.skills}
              className="text-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#projects"
              label={t.projects}
              className="text-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              href="#contact"
              label={t.contact}
              className="text-xl"
              onClick={() => setIsMenuOpen(false)}
            />

            <Button
              variant="default"
              size="lg"
              className="mt-4"
              onClick={() => window.open("/cv.pdf", "_blank")}
            >
              {t.resume}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
