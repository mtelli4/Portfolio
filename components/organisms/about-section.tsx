import Button from "@/components/atoms/button";
import SectionHeading from "@/components/atoms/section-heading";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="À propos de moi"
          subtitle="Découvrez mon parcours et ma passion pour le développement web"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop"
                alt="Portrait du développeur"
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-2xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-2xl z-0" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Développeur passionné par la création d&apos;expériences web
              modernes
            </h3>

            <p className="text-muted-foreground">
              Bonjour ! Je suis un développeur full-stack spécialisé dans la
              création d&apos;applications web modernes et performantes. Avec
              plus de 5 ans d&apos;expérience, j&apos;ai travaillé sur divers
              projets allant des sites vitrines aux applications complexes.
            </p>

            <p className="text-muted-foreground">
              Ma passion pour les technologies web m&apos;a amené à maîtriser
              diverses technologies comme React, Next.js, Node.js et les bases
              de données modernes. J&apos;aime particulièrement créer des
              interfaces utilisateur intuitives et des expériences interactives
              qui captivent les utilisateurs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium mb-2">Formation</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Master en Développement Web</li>
                  <li>Certification React Advanced</li>
                  <li>Certification UX/UI Design</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Intérêts</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Nouvelles technologies</li>
                  <li>Design d&apos;interface</li>
                  <li>Performance web</li>
                  <li>Accessibilité</li>
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <Button>
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="w-full h-full flex items-center justify-center"
                >
                  Télécharger mon CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
