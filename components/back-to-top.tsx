"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <Button
        type="button"
        onClick={handleClick}
        size="lg"
        className="font-poppins cursor-pointer rounded-full bg-[var(--color-light-purple)] px-6 text-[var(--color-blue)] hover:bg-white"
      >
        <ArrowUp size={18} aria-hidden="true" />
        Back to Top
      </Button>
    </div>
  )
}
