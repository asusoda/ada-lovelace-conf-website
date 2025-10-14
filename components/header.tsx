"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Agenda", href: "/agenda" },
    { name: "Speakers", href: "/speakers" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Map route paths to section IDs
    const sectionMap: { [key: string]: string } = {
      "/about": "#about",
      "/agenda": "#agenda",
      "/speakers": "#speakers"
    }

    const sectionId = sectionMap[href]
    if (sectionId) {
      const element = document.querySelector(sectionId)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <header className="font-lejour">
      <div className="absolute top-0 left-0 w-full h-[10%] 2xl:h-[10%] bg-[var(--color-light-purple)] items-center flex justify-between px-[8%]">
        <div className="font-lejour flex space-x-[25%] xl:space-x-[30%]  2xl:space-x-[40%] hidden md:flex ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[var(--color-blue)] hover:text-blue-900 uppercase text-3xl 2xl:text-[3.2rem] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link href="/" className="text-xl text-[var(--color-blue)]">
          Club Name
        </Link>
      </div>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center"></div>
        </div>
      </nav>

    </header>
  )
}
