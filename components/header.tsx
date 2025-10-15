"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Agenda", href: "/agenda" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Map route paths to section IDs
    const sectionMap: { [key: string]: string } = {
      "/about": "#about",
      "/agenda": "#agenda",
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
      <div style={{alignContent: "center", justifyContent: "space-between"}} className="top-0 left-0 w-full h-[10%] 2xl:h-[10%] bg-[var(--color-light-purple)] items-center flex justify-between px-[8%]">
          <div className="flex flex-3 w-[80%] gap-[30%]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hidden md:block text-[var(--color-blue)] hover:text-blue-900 uppercase text-3xl 2xl:text-[3.2rem] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        <Link href="/" className="flex">
          <Image
            src="/soda-logo-blue.svg"
            alt="./SoDA Logo"
            width={160}
            height={160}
            className="w-20 lg:w-40"
            />
          <Image
            src="/wics-logo-blue.svg"
            alt="WiCS Logo"
            width={160}
            height={160}
            className="w-20 lg:w-40"
            />
        </Link>
      </div>
    </header>
  )
}
