"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage: string
  speed?: number
  className?: string
  height?: string
}

export default function ParallaxSection({
  children,
  bgImage,
  speed = 0.5,
  className = "",
  height = "100vh",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      // Only apply parallax when the section is in view
      if (scrollPosition + window.innerHeight >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const yPos = (scrollPosition - sectionTop) * speed
        section.style.backgroundPositionY = `${-yPos}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      ref={sectionRef}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
      }}
    >
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}

