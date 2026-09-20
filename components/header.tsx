import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-[var(--color-light-purple)] px-5 text-[var(--color-blue)] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="Ada Lovelace Summit home" className="flex items-center gap-2 rounded-lg">
          <Image src="/soda-logo-blue.svg" alt="./SoDA" width={80} height={80} className="h-14 w-14 sm:h-20 sm:w-20" />
          <Image src="/wics-logo-blue.svg" alt="WiCS" width={80} height={80} className="h-14 w-14 sm:h-20 sm:w-20" />
        </Link>
        <nav aria-label="Main navigation" className="font-poppins flex items-center gap-5 text-sm font-semibold sm:gap-8 sm:text-base">
          <a href="#about" className="rounded py-3 underline-offset-4 hover:underline">About</a>
          <a href="#agenda" className="rounded py-3 underline-offset-4 hover:underline">Agenda</a>
        </nav>
      </div>
    </header>
  )
}
