import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          <div>
            <h3 className="text-lg font-semibold mb-4">SoDA & WICS</h3>
            <p className="text-gray-400 text-sm">

            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="text-sm flex flex-col space-y-2">
              <Link href="https://thesoda.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                About SoDA
              </Link>
              <Link href="https://asuwics.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                About WICS
              </Link>    
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="text-sm flex flex-col space-y-2">
              <Link href="https://discord.gg/QYhj56GU" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                SoDA Discord
              </Link>
              <Link href="https://www.instagram.com/soda.asu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                SoDA Instagram
              </Link>
              <Link href="https://www.instagram.com/wics.asu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                WICS Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Software Developers Association at ASU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
