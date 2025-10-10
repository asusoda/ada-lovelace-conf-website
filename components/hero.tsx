import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AdaLovelace from "@/public/ada-lovelace.svg";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-[var(--color-white)] flex items-center justify-center overflow-visible">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 h-[calc(100vh-80px)]">
          {/* Left side - Portrait illustration */}
          <div className="w-full lg:w-1/2">
            <img
              src="/ada-lovelace.svg"
              alt="Ada Lovelace Portrait"
              className="absolute xl:-left-38 2xl:-left-18 xl:top-8 w-[clamp(320px,70vw,1500px)] max-w-none object-contain pointer-events-none"
            />
            {/* invisible placeholder to preserve flow */}
            <div className="border w-full h-[500px] lg:h-[700px]" />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 text-[var(--color-blue)] space-y-5 2xl:pt-[3%] xl:pt-[1%] border bg-pink-200 h-full lg:pr-5 ">
            {/* Event details */}
            <div className="flex w-full justify-between text-sm 2xl:text-lg font-lucidity uppercase tracking-wider border 2xl:ml-[8%]">
              <span>October 18</span>
              <span>•</span>
              <span>3-5PM</span>
              <span>•</span>
              <span>Memorial Union</span>
            </div>

            {/* Title */}
            <div className="space-y-10 mt-[10%] ml-10">
              <h1 className="font-lejour text-[var(--color-blue)] font-bold leading-none
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7.5rem] 2xl:text-[10rem] 2xl:tracking-wider 2xl:ml-[10%]">
                <span className="xl:ml-[3%]">ADA<br /></span>
                <span className = "">LOVELACE<br /></span>
                <span className="xl:ml-[3%] 2xl:ml-0 whitespace-nowrap">
                  <span className="font-lejour">SUMMIT</span>
                  <span className="opacity-50 font-lejour">2025</span>
                </span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full"
              >
                REGISTER NOW
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-full bg-transparent"
              >
                LEARN MORE
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Small device illustration */}
            <div className="pt-8">
              {/* PLACEHOLDER: Insert your small device/phone illustration SVG here */}
              <div className="w-24 h-32 bg-white/10 rounded-lg flex items-center justify-center text-white/30 text-xs">
                Device SVG
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
}
