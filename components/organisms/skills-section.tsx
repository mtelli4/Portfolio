import { Code, Database, Globe, Layout, Palette, Server, Settings, Smartphone } from "lucide-react"
import SectionHeading from "@/components/atoms/section-heading"
import SkillCard from "@/components/molecules/skill-card"

export default function SkillsSection() {
  const skills = [
    { name: "HTML/CSS", icon: Layout, level: 95 },
    { name: "JavaScript/TypeScript", icon: Code, level: 90 },
    { name: "React/Next.js", icon: Globe, level: 92 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Node.js", icon: Server, level: 80 },
    { name: "Bases de données", icon: Database, level: 75 },
    { name: "Responsive Design", icon: Smartphone, level: 95 },
    { name: "DevOps", icon: Settings, level: 70 },
  ]

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Mes compétences"
          subtitle="Les technologies et outils que j'utilise au quotidien"
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  )
}

