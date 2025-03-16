import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, className, align = "left" }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-2 mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className,
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="text-muted-foreground max-w-[600px] mx-auto">{subtitle}</p>}
    </div>
  )
}

