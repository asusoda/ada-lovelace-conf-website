"use client"

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const handleLearnMoreClick = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="bg-[var(--color-white)] flex items-center justify-center mb-[7%] lg:mb-[3%] 2xl:mb-[1.8%] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 h-[21rem] lg:h-[calc(100vh-80px)] pt-[3%]">
          {/* Left side - Portrait illustration */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image
              src="/ada-lovelace.svg"
              alt="Ada Lovelace Portrait"
              width={900}
              height={900}
              className="absolute h-screen w-auto xl:-left-38 2xl:-left-50 xl:top-8 max-w-none object-contain h-pointer-events-none"
            />

            {/* invisible placeholder to preserve flow */}
            <div className="w-full h-[500px] lg:h-[700px]" />
          </div>
          
          {/* Right side - Content */}
          <div className=" flex-1 w-full text-[var(--color-blue)] space-y-5 2xl:pt-[3%] xl:pt-[1%] h-full lg:pr-5 px-10">
            {/* Event details */}
            <div className="lg:px-0 flex w-full gap-5 lg:gap-10 2xl:gap-20 justify-center lg:justify-between text-[0.5rem] xl:text-sm 2xl:text-lg font-lucidity uppercase tracking-wider xl:ml-[2%] 2xl:ml-[9%] whitespace-nowrap">
              <div className="flex-0 lg:flex-2 -mr-5 lg:-mr-0"></div>
              <span className="text-left">October 18</span>
              <span className="hidden lg:block">•</span>
              <span>3-5PM</span>
              <span className="hidden lg:block">•</span>
              <span className="text-right lg:left-left">Memorial Union</span>
            </div>

            {/* Title */}
            <div className="space-y-10 mt-[10%] lg:ml-10 2xl:ml-[13%] flex justify-center">
              <h1 className="font-lejour text-[var(--color-blue)] font-bold leading-none
                  text-[3rem] sm:text-lg md:text-6xl lg:text-7xl xl:text-[7.5rem] 2xl:text-[9rem] 2xl:tracking-wider 2xl:ml-[10%]">
                <span className="xl:ml-[7%] 2xl:ml-[10%]">ADA<br /></span>
                <span className = "2xl:ml-[6%]">LOVELACE<br /></span>
                <span className="xl:ml-[3%] 2xl:ml-[6%] whitespace-nowrap">
                  <span className="font-lejour">SUMMIT</span>
                  <span className="opacity-50 font-lejour">2025</span>
                </span>
              </h1>
            </div>


              <div className="flex lg:px-10 ">
                {/* mobile layout ada lovelace svg */}
                <div className="min-w-20 lg:hidden">
                  <Image
                    src="/ada-lovelace.svg"
                    alt="Ada Lovelace Portrait"
                    width={400}
                    height={400}
                    className="absolute w-55 -left-10 bottom-60 object-contain h-pointer-events-none"
                  />
                </div>
                
                            {/* CTA Buttons */}
               <div className="flex flex-col gap-4 pt-4 justify-center px-2 lg:px-10 lg:pl-[40%] 2xl:mt-[3%]">
                <Button
                  size="lg"
                  asChild
                  className="text-[var(--color-white)] bg-[var(--color-blue)] font-lucidity hover:bg-blue-500 hover:scale-105 transition-transform font-semibold lg:px-40 lg:py-10 2xl:py-15 text-[0.5rem] lg:text-md lg:text-2xl 2xl:text-3xl rounded-full w-[80%] 2xl:ml-[18%]"
                >
                  <a href="https://sundevilcentral.eoss.asu.edu/SoDA/rsvp_boot?id=384609" target="_blank" rel="noopener noreferrer">
                    REGISTER NOW
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleLearnMoreClick}
                  className="font-lucidity border-2 border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-white hover:text-primary font-semibold lg:px-9 2xl:py-10 text-[0.5rem] lg:text-xl rounded-full bg-transparent w-[80%] 2xl:ml-[18%]"
                >
                  LEARN MORE
                  <div className="animate-bounce text-[var(--color-blue)]">
                  <ArrowDown size={5}/>
                  </div>
                </Button>
                            </div>
              </div>


          </div>
        </div>
      </div>

      {/* Scroll indicator */}

    </section>
  );
}
