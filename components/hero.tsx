import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[var(--color-white)] px-5 py-12 text-[var(--color-blue)] sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        <div className="hidden overflow-hidden rounded-[2rem] bg-[var(--color-light-purple)] lg:block">
          <Image src="/ada-lovelace.svg" alt="Ada Lovelace portrait" width={900} height={675} priority className="h-auto w-full" />
        </div>
        <div>
          <p className="font-poppins mb-6 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">Third annual · Women in Tech Conference</p>
          <h1 className="font-lejour text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.15]">
            ADA<br />LOVELACE<br />SUMMIT <span className="text-[var(--color-dark-purple)]">III</span>
          </h1>
          <p className="font-poppins mt-6 max-w-lg text-base leading-relaxed sm:text-lg">Connect with women in tech, discover new possibilities, and take your next step forward.</p>
          <div className="font-poppins mt-8 space-y-2 border-l-2 border-[var(--color-blue)]/25 pl-5 text-sm leading-relaxed sm:text-base">
            <p className="font-semibold">September 25, 2026 · 11 AM–5 PM</p>
            <p>Memorial Union · Pima Auditorium</p>
          </div>
          <div className="font-poppins mt-8 flex flex-wrap gap-3">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjvCQ_8rXlkl5nea6JkLgCWKSJ7a_IlqCOH2rn4IqWTVJeBA/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--color-blue)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-dark-purple)]">Register now <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href="#about" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[var(--color-blue)]/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--color-light-purple)]">Explore the summit <ArrowDown size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
