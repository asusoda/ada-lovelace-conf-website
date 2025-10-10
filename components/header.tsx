"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Agenda", href: "/agenda" },
    { name: "Speakers", href: "/speakers" },
  ]

  return (
    <header className="font-lejour">
      <div className="fixed top-0 left-0 w-full h-[9%] bg-[var(--color-light-purple)] items-center flex justify-between px-10">
        <div className="font-lejour flex space-x-[25%] hidden md:flex ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[var(--color-blue)] hover:text-blue-900 uppercase text-3xl transition-colors"
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
