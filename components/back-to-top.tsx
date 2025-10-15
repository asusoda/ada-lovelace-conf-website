"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  if (!isVisible) {
    return null
  }

  return (
    <Button
      type="button"
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 z-30 h-12 w-12 rounded-full bg-[var(--color-blue)] text-white shadow-lg transition-transform hover:scale-105"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </Button>
  )
}
