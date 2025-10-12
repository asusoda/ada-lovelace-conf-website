import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="min-h-screen bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background illustrations - Ada Lovelace figures on left and right */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-96 opacity-20 hidden lg:block">
        <div className="w-full h-full bg-[var(--color-blue)] rounded-lg"></div>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-96 opacity-20 hidden lg:block">
        <div className="w-full h-full bg-[var(--color-blue)] rounded-lg"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Main heading */}
          <h2 className="font-lucidity text-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight max-w-4xl">
            READY TO INNOVATE IN TECH?
          </h2>

          {/* Register button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="text-white bg-[var(--color-blue)] font-lucidity hover:bg-blue-700 hover:scale-105 transition-all font-semibold px-12 py-6 lg:py-8 text-lg lg:text-xl 2xl:text-2xl rounded-full shadow-lg"
            >
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
