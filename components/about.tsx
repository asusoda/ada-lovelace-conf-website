import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="md:max-h-[calc(100vh+18.47rem)] 2xl:max-h-[calc(100vh+5.7rem)] bg-[var(--color-blue)] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="">
          {/* Left side - Title and Description */}
          <div className="space-y-8">
            <div className="flex flex-col gap-8 md:gap-15 md:flex-row">
              <h2 className="font-lejour text-5xl lg:text-7xl xl:text-8xl font-bold text-[var(--color-light-purple)] leading-tight tracking-wider">
                WHAT IS<br />
                THE ADA<br />
                LOVELACE<br />
                SUMMIT?
              </h2>
              <div className="space-y-6 text-[var(--color-light-purple)] text-poppins xl:text-[1.4rem] 2xl:text-3xl leading-relaxed tracking-wider">
                <p>
                  Join us this fall semester for the Ada Lovelace Summit, a Women in Tech Conference hosted by the Software Developers Association (SODA) in collaboration with Women in Computer Science (WICS).
                </p>
                <p>
                This event brings together women and underrepresented groups in tech to network, discover new career pathways, and build meaningful connections with industry leaders. 
                </p>
                <p>
                Whether you're exploring your options or ready to launch your career, this summit is designed for you!
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-0 md:flex-2 md:min-w-40 overflow-visible">
                {/* annie easley */}
                <div className="w-full">
                  <img
                    src="/annie-easley.svg"
                    alt="Annie Easley Portrait"
                    className="hidden md:block md:relative -left-80 2xl:-left-100 w-150 2xl:w-175 object-contain max-w-none h-pointer-events-none"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-4 text-[var(--color-light-purple)] tracking-wider xl:text-[1.4rem]  2xl:text-3xl leading-relaxed tracking-wider">
                <h3 className="font-poppins font-semibold">
                  What to Expect:
                </h3>
                <ul className="space-y-3">
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
                    <span><strong className="">Networking Opportunities</strong> to connect directly with top employers</span>
                  </li>
                </ul>
              </div>
              <div className="flex-0 md:flex-2 md:min-w-80 overflow-visible">
                {/* hedy lamarr */}
                <div className="w-full">
                  <img
                    src="/hedy-lamarr.svg"
                    alt="Hedy Lamarr Portrait"
                    className="hidden md:block md:relative w-150 2xl:w-175 right-30 2xl:right-50 object-contain max-w-none h-pointer-events-none"
                  />
                </div>
              </div>
              <div className="flex-0 md:flex-1 md:min-w-60 overflow-visible">
                {/* grace hopper */}
                <div className="w-full">
                  <img
                    src="/grace-hopper.svg"
                    alt="Grace Hopper Portrait"
                    className="hidden md:block md:relative right-40 bottom-19 2xl:bottom-21 w-175 2xl:w-205 object-contain max-w-none h-pointer-events-none"
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
