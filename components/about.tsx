
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-[var(--color-blue)] py-16 sm:py-20 lg:py-28 xl:pb-0 overflow-hidden relative z-50">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12">
        <div className="">
          {/* Left side - Title and Description */}
          <div className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <h2 className="font-lejour text-[clamp(2.5rem,5.5vw,7rem)] font-bold text-[var(--color-light-purple)] leading-tight tracking-wider">
                WHAT IS<br />
                THE ADA<br />
                LOVELACE<br />
                SUMMIT?
              </h2>
              <div className="space-y-6 text-[var(--color-light-purple)] font-poppins text-base sm:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
                <p>
                  Join us this fall semester for the third annual Ada Lovelace Summit, a Women in Tech Conference hosted by the Software Developers Association (./SoDA) in collaboration with Women in Computer Science (WiCS).
                </p>
                <p>
                This event brings together women and underrepresented groups in tech to network, discover new career pathways, and build meaningful connections with industry leaders.
                </p>
                <p>
                Whether you&apos;re exploring your options or ready to launch your career, this summit is designed for you!
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="hidden xl:block flex-0 md:flex-2 md:min-w-20 lg:min-w-20 xl:min-w-40 2xl:min-w-60 overflow-visible">
                {/* annie easley */}
                <div className="w-full">
                  <Image
                    src="/annie-easley.svg"
                    alt="Annie Easley Portrait"
                    width={500}
                    height={500}
                    className="hidden md:block md:relative -left-64 2xl:-left-80 lg:w-130 xl:w-160 2xl:w-190 object-contain max-w-none h-pointer-events-none"
                  />
                </div>
              </div>
              <div className="font-poppins space-y-5 pt-6 text-[var(--color-light-purple)] text-base sm:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
                <h3 className="font-poppins font-semibold">
                  What to Expect:
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="font-bold mt-1">•</span>
                    <span><strong className="">Expert Panel Discussions</strong> from dynamic, industry professionals in tech</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold mt-1">•</span>
                    <span><strong className="">Hands-On Workshops</strong> to build new skills and explore new technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className=" font-bold mt-1">•</span>
                    <span><strong className="">Networking Opportunities</strong> to connect directly with top professionals and researchers</span>
                  </li>
                </ul>
              </div>
              <div className="hidden xl:block flex-0 md:flex-2 md:min-w-80 lg:min-w-60 xl:min-w-80 overflow-visible">
                {/* hedy lamarr */}
                <div className="w-full">
                  <Image
                    src="/hedy-lamarr.svg"
                    alt="Hedy Lamarr Portrait"
                    width={500}
                    height={500}
                    className="hidden md:block md:relative z-10 lg:w-130 xl:w-150 2xl:w-175 right-30 2xl:right-50 object-contain max-w-none h-pointer-events-none"
                  />
                </div>
              </div>
              <div className="hidden xl:block flex-0 md:flex-1 md:min-w-60 overflow-visible xl:-mb-19 2xl:-mb-21">
                {/* grace hopper */}
                <div className="w-full">
                  <Image
                    src="/grace-hopper.svg"
                    alt="Grace Hopper Portrait"
                    width={550}
                    height={550}
                    className="hidden md:block md:relative left-full -translate-x-[80%] 2xl:-translate-x-[70%] bottom-10 lg:bottom-13 xl:bottom-19 2xl:bottom-21 lg:w-150 xl:w-175 2xl:w-205 object-contain max-w-none h-pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
