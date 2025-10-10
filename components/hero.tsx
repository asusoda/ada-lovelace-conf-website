import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import AdaLovelace from "@/public/ada-lovelace.svg";

export function HeroSection() {
  return (
    <section className="bg-[var(--color-white)] flex items-center justify-center overflow-visible mb-[3%] 2xl:mb-[1.8%]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 h-[calc(100vh-80px)] pt-[3%]">
          {/* Left side - Portrait illustration */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <img
              src="/ada-lovelace.svg"
              alt="Ada Lovelace Portrait"
              className="absolute h-screen w-auto xl:-left-38 2xl:-left-18 xl:top-8 max-w-none object-contain h-pointer-events-none"
            />

            {/* invisible placeholder to preserve flow */}
            <div className="w-full h-[500px] lg:h-[700px]" />
          </div>

          

                      {/* w-[clamp(320px,70vw,1500px)]  */}

          {/* Right side - Content */}
          <div className="flex-1 w-full text-[var(--color-blue)] space-y-5 2xl:pt-[3%] xl:pt-[1%] h-full lg:pr-5 px-10">
            {/* Event details */}
            <div className="lg:px-0 flex w-full gap-5 lg:gap-0 justify-center lg:justify-between text-xs xl:text-sm 2xl:text-lg font-lucidity uppercase tracking-wider xl:ml-[2%] 2xl:ml-[7%]">
              <span className="text-left">October 18</span>
              <span className="hidden lg:block">•</span>
              <span>3-5PM</span>
              <span className="hidden lg:block">•</span>
              <span className="text-right lg:left-left">Memorial Union</span>
            </div>

            {/* Title */}
            <div className="space-y-10 mt-[10%] lg:ml-10 flex justify-center">
              <h1 className="font-lejour text-[var(--color-blue)] font-bold leading-none
                  text-[3.5rem] sm:text-xl md:text-6xl lg:text-7xl xl:text-[7.5rem] 2xl:text-[10rem] 2xl:tracking-wider 2xl:ml-[10%]">
                <span className="xl:ml-[3%] 2xl:ml-[7%]">ADA<br /></span>
                <span className = "2xl:ml-[4%]">LOVELACE<br /></span>
                <span className="xl:ml-[3%] 2xl:ml-[4%] whitespace-nowrap">
                  <span className="font-lejour">SUMMIT</span>
                  <span className="opacity-50 font-lejour">2025</span>
                </span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-4 justify-center px-10 lg:pl-[40%] 2xl:pl-[49%] 2xl:mt-[3%]">
              <Button 
                size="lg" 
                className="text-[var(--color-white)] bg-[var(--color-blue)] font-lucidity hover:bg-white/90 font-semibold px-9 sm:py-6 lg:py-10 2xl:py-15 sm:text-xs lg:text-md lg:text-2xl 2xl:text-3xl rounded-full"
              >
                REGISTER NOW
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="font-lucidity border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-9 py-6 2xl:py-10 sm:text-xs lg:text-md rounded-full bg-transparent"
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
