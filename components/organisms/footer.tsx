import SocialIcon from "@/components/atoms/social-icon";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
  return (
    <footer className="py-12 bg-background border-t border-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.skills")}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.projects")}
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
                  {t("footer.webdev")}
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
                  {t("footer.mobile")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.management")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.software")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t("footer.socialmedia")}</h3>
            <div className="flex gap-3">
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
      </div>
    </footer>
  );
}
