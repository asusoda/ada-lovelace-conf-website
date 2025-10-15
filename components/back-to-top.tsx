"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 300

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      type="button"
      onClick={handleClick}
      size="lg"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={cn(
        "fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-light-purple)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-xl transition-all duration-300",
        "hover:scale-105 hover:shadow-2xl",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
      Back to Top
    </Button>
  )
}
