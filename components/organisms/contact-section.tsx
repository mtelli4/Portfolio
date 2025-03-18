import SectionHeading from "@/components/atoms/section-heading";
import ContactForm from "@/components/molecules/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Me contacter"
          subtitle="Vous avez un projet en tête ou des besoins au sein de votre entreprrise ? N'hésitez pas à me contacter"
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">
                Informations de contact
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
                    <h4 className="font-medium">Téléphone</h4>
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
                    <h4 className="font-medium">Localisation</h4>
                    <p className="text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Disponibilité</h3>
              <p className="text-muted-foreground mb-4">
                Je suis actuellement disponible pour une alternance, dans le
                cadre de mes études en cycle ingénieur au sein de l&apos;EPITA.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm font-medium">Statut actuel:</p>
                <p className="text-primary font-bold">
                  Disponible pour de nouveaux projets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
