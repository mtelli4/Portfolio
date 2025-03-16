"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  label: string
  className?: string
  onClick?: () => void
}

export default function NavLink({ href, label, className, onClick }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (href === "#") {
        setIsActive(window.scrollY < 100)
        return
      }

      try {
        const section = document.querySelector(href)
        if (!section) return

        const rect = section.getBoundingClientRect()
        const isInView = rect.top <= 100 && rect.bottom >= 100
        setIsActive(isInView)
      } catch (error) {
        console.error("Error in scroll handler:", error)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initially

    return () => window.removeEventListener("scroll", handleScroll)
  }, [href])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      try {
        const element = document.querySelector(href)
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      } catch (error) {
        console.error("Error scrolling to element:", error)
      }
    }

    if (onClick) onClick()
  }

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "text-primary" : "text-foreground/70 hover:text-foreground",
        className,
      )}
      onClick={handleClick}
    >
      {label}
      {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
    </Link>
  )
}

