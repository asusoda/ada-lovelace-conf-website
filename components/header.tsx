import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="font-lejour bg-[var(--color-light-purple)] px-5 text-[var(--color-blue)] sm:px-8 lg:px-[8%]">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 py-3">
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-base sm:gap-12 sm:text-2xl xl:gap-20 xl:text-3xl">
          <a href="#about" className="rounded py-3 underline-offset-8 hover:underline">ABOUT</a>
          <a href="#agenda" className="rounded py-3 underline-offset-8 hover:underline">AGENDA</a>
        </nav>
        <Link href="/" aria-label="Ada Lovelace Summit home" className="flex shrink-0 items-center rounded-lg">
          <Image src="/soda-logo-blue.svg" alt="./SoDA Logo" width={160} height={160} className="w-14 sm:w-20 lg:w-28 xl:w-32" />
          <Image src="/wics-logo-blue.svg" alt="WiCS Logo" width={160} height={160} className="w-14 sm:w-20 lg:w-28 xl:w-32" />
        </Link>
      </div>
    </header>
  )
}
