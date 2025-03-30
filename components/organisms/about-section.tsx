import Button from "@/components/atoms/button";
import SectionHeading from "@/components/atoms/section-heading";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import Link from "next/link";

export default function AboutSection() {
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
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title={t("about.title")}
          subtitle={t("about.subtitle")}
          align="center"
        />

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">{t("about.description")}</h3>

          <p className="text-muted-foreground">{t("about.p.0")}</p>

          <p className="text-muted-foreground">{t("about.p.1")}</p>

          <p className="text-muted-foreground">{t("about.p.2")}</p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="font-medium mb-2">{t("about.education")}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>{t("about.educationItems.0")}</strong>
                </li>
                <li>
                  <strong>{t("about.educationItems.1")}</strong>
                </li>
                <li>
                  <strong>{t("about.educationItems.2")}</strong>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">{t("about.interests")}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>{t("about.interestItems.0")}</strong>
                </li>
                <li>
                  <strong>{t("about.interestItems.1")}</strong>
                </li>
                <li>
                  <strong>{t("about.interestItems.2")}</strong>
                </li>
                <li>
                  <strong>{t("about.interestItems.3")}</strong>
                </li>
                <li>
                  <strong>{t("about.interestItems.4")}</strong>
                </li>
                <li>
                  <strong>{t("about.interestItems.5")}</strong>
                </li>
                <li>
                  <strong>{t("about.interestItems.6")}</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6">
            <Button>
              <Link
                href={t("about.resumeLink")}
                target="_blank"
                className="w-full h-full flex items-center justify-center"
              >
                {t("about.resumeButton")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
