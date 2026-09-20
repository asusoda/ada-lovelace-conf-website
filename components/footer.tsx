import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[var(--color-blue)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">./SoDA & WiCS</h3>
            <p className="text-sm leading-relaxed">Ada Lovelace Summit III</p>
          </div>

          <div>
            <h4 className="font-semibold font-poppins mb-4">Quick Links</h4>
            <div className="text-sm flex flex-col space-y-2">
              <Link href="https://thesoda.io/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-purple)] hover:text-[var(--color-white)]">
                About ./SoDA
              </Link>
              <Link href="https://asuwics.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-purple)] hover:text-[var(--color-white)]">
                About WiCS
              </Link>    
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="text-sm flex flex-col space-y-2">
              <Link href="https://discord.gg/QYhj56GU" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-purple)] hover:text-[var(--color-white)]">
                ./SoDA Discord
              </Link>
              <Link href="https://www.instagram.com/soda.asu/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-purple)] hover:text-[var(--color-white)]">
                ./SoDA Instagram
              </Link>
              <Link href="https://www.instagram.com/wics.asu/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-purple)] hover:text-[var(--color-white)]">
                WiCS Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-light-purple)] mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Software Developers Association at ASU. All rights reserved.</p>
          <p>Made by Jubilee and Justin :D</p>
        </div>
      </div>
    </footer>
  )
}
