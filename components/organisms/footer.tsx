import SocialIcon from "@/components/atoms/social-icon";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Un développeur passionné par la création d&apos;expériences web
              modernes et immersives.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Développement Web
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Design UI/UX
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Applications Mobiles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Réseaux sociaux</h3>
            <div className="flex gap-3">
              <SocialIcon
                href="https://github.com"
                icon={Github}
                label="GitHub"
              />
              <SocialIcon
                href="https://linkedin.com"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://twitter.com"
                icon={Twitter}
                label="Twitter"
              />
              <SocialIcon
                href="mailto:contact@example.com"
                icon={Mail}
                label="Email"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Tous droits réservés.
          </p>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
