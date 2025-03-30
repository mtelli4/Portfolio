import SectionHeading from "@/components/atoms/section-heading";
import ContactForm from "@/components/molecules/contact-form";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
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
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">{t("contact.formTitle")}</h3>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">
                {t("contactSection.title")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:tellimohamed91@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tellimohamed91@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t("contactSection.phone")}</h4>
                    <a
                      href="tel:+33767636358"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +33 7 67 63 63 58
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {t("contactSection.location")}
                    </h4>
                    <p className="text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">
                {t("contactSection.availability")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("contactSection.availabilitySubtitle")}
              </p>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm font-medium">
                  {t("contactSection.status")}
                </p>
                <p className="text-primary font-bold">
                  {t("contactSection.statusSubtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
