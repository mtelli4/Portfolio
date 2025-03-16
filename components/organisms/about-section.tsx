import Button from "@/components/atoms/button";
import SectionHeading from "@/components/atoms/section-heading";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="À propos de moi"
          subtitle="Découvrez mon parcours et ma passion pour le développement d'application"
          align="center"
        />

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">
            Développeur passionné par la conception, le développement
            d&apos;applications et les technologies modernes
          </h3>

          <p className="text-muted-foreground">
            Bonjour ! Étudiant en dernière année de BUT Informatique à
            l&apos;IUT de Marne-la-Vallée, j&apos;ai été admis en cycle
            ingénieur à l&apos;EPITA pour la rentrée de septembre 2025.
            J&apos;ai commencé le développement d&apos;application il y a
            maintenant 5 ans, au lycée, ce qui m&apos;a permis de développer des
            compétences solides en programmation, et en gestion de projets, à
            travers plusieurs projets et deux stages, un de 3 mois en BUT 2, et
            un de 5 mois en BUT 3.
          </p>

          <p className="text-muted-foreground">
            Ma passion pour les technologies modernes m&apos;amène à effectuer
            une veille technologique assez souvent, ce qui me permet d&apos;être
            à jour et force de proposition. J&apos;aime particulièrement créer
            des interfaces utilisateur intuitives, et je cherche à me renseigner
            sur les meilleures pratiques en terme d&apos;UI/UX, afin de proposer
            des expériences interactives qui captivent les utilisateurs.
          </p>

          <p className="text-muted-foreground">
            Je ne me lasse pas du développement d&apos;application, et je
            cherche perpétuellement à apprendre et à m&apos;améliorer.
            C&apos;est pourquoi j&apos;aime me lancer dans de nouveaux projets,
            en explorant de nouvelles technologies, et en cherchant à me
            perfectionner.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="font-medium mb-2">Formation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  Diplôme d&apos;ingénieur en informatique (prochainement)
                </li>
                <li>
                  Bachelor Universitaire de Technologie en Informatique (en
                  cours)
                </li>
                <li>Baccaulauréat général</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Intérêts</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Nouvelles technologies</li>
                <li>Design d&apos;interface</li>
                <li>Développement d&apos;applications</li>
                <li>Innovation</li>
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
    </section>
  );
}
