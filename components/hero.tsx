import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div data-scroll="fadeInUp" data-scroll-delay="0.1">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Our Club</h1>
        </div>
        <div data-scroll="fadeInUp" data-scroll-delay="0.2">
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of passionate individuals working together to make a difference. Discover events, connect
            with members, and be part of something amazing.
          </p>
        </div>
        <div className="space-x-4" data-scroll="fadeInUp" data-scroll-delay="0.3">
          <Link href="/about">
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </Link>
          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              View Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
