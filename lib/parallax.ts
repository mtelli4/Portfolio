"use client"

export function setupParallax() {
  if (typeof window === "undefined") return

  const handleScroll = () => {
    const scrollY = window.scrollY
    const parallaxElements = document.querySelectorAll("[data-parallax]")

    parallaxElements.forEach((element) => {
      const speed = Number.parseFloat(element.getAttribute("data-parallax-speed") || "0.5")
      const yPos = -(scrollY * speed)
      element.setAttribute("style", `transform: translate3d(0, ${yPos}px, 0)`)
    })
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}

