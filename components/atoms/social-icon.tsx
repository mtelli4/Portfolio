import Link from "next/link"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SocialIconProps {
  href: string
  icon: LucideIcon
  label: string
  className?: string
}

export default function SocialIcon({ href, icon: Icon, label, className }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground transition-all hover:bg-primary hover:text-primary-foreground",
        className,
      )}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}

