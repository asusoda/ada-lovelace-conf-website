import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Suspense } from "react"
import { Header } from "../../components/header"
import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { AgendaSection } from "@/components/agenda"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

const leJourSerif = localFont({
  src: "../../public/fonts/le-jour-serif.otf",
  variable: "--font-lejour",
  display: "swap",
})

const luciditySansSerif = localFont({
  src: "../../public/fonts/lucidity-expand.ttf",
  variable: "--font-lucidity",
  display: "swap",
})

const poppinsSansSerif = localFont({
  src: "../../public/fonts/poppins-regular.ttf",
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ada Lovelace Summit III",
  description: "Ada Lovelace Summit III, the third annual Women in Tech Conference hosted by ./SoDA and WiCS at ASU",
  generator: "v0.app",
}

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${leJourSerif.variable} ${poppinsSansSerif.variable} ${luciditySansSerif.variable}`}>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
            <AboutSection />
            <AgendaSection />
            <Footer />
        
          </Suspense>
        </main>
        <BackToTop />

      </body>
    </html>
  )
}
