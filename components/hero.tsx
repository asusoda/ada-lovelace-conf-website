import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-section bg-[var(--color-white)] text-[var(--color-blue)]">
      <div className="hero-layout">
        <div className="hero-portrait">
          <Image src="/ada-lovelace.svg" alt="Ada Lovelace Portrait" width={1200} height={900} priority className="hero-portrait-image" />
        </div>
        <div className="hero-content">
          <div className="font-poppins flex flex-wrap items-center gap-x-5 gap-y-2 text-sm leading-relaxed sm:text-base xl:text-lg">
            <span>September 25, 2026</span>
            <span>11 AM–5 PM</span>
            <span>Memorial Union</span>
          </div>
          <h1 className="font-lejour my-8 text-[clamp(2.65rem,6vw,8rem)] leading-[1.12] sm:my-10">
            ADA<br />LOVELACE<br />
            <span className="whitespace-nowrap">SUMMIT <span className="opacity-60">III</span></span>
          </h1>
          <div className="font-lucidity flex max-w-md flex-col gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjvCQ_8rXlkl5nea6JkLgCWKSJ7a_IlqCOH2rn4IqWTVJeBA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-blue)] px-6 py-4 text-center text-sm text-white transition-colors hover:bg-[var(--color-dark-purple)] sm:min-h-16 sm:text-base xl:text-xl">REGISTER NOW</a>
            <a href="#about" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-[var(--color-blue)] px-6 py-4 text-center text-sm transition-colors hover:bg-[var(--color-light-purple)] sm:min-h-16 sm:text-base xl:text-xl">LEARN MORE <ArrowDown size={20} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
