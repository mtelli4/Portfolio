import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  icon: LucideIcon
  name: string
  level?: number
  className?: string
}

export default function SkillCard({ icon: Icon, name, level = 0, className }: SkillCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-xl bg-secondary/50 transition-all duration-300 hover:bg-secondary hover:scale-105",
        className,
      )}
    >
      <Icon className="w-10 h-10 mb-3 text-primary" />
      <h3 className="font-medium text-center">{name}</h3>

      {level > 0 && (
        <div className="w-full mt-2 bg-background/50 rounded-full h-1.5">
          <div className="bg-primary h-1.5 rounded-full" style={{ width: `${level}%` }} />
        </div>
      )}
    </div>
  )
}

