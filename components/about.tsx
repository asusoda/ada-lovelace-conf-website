import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="min-h-screen bg-[var(--color-blue)] py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Title and Description */}
          <div className="space-y-8">
            <h2 className="font-lejour text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
              WHAT IS<br />
              THE ADA<br />
              LOVELACE<br />
              SUMMIT?
            </h2>

            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Join us this fall semester for the Ada Lovelace Summit, 
                hosted by the University of Wisconsin-Madison Women in 
                the Software Developers Association (SODA) in 
                collaboration with Diversity and Inclusion in Computer Science 
                (DICS) and We in Computer Science.
              </p>

              <p>
                This event brings together women and underrepresented people in tech to network, 
                discover new career pathways, and build meaningful industry connections.
              </p>

              <p>
                Whether you're seeking your options in open-source, startups, or Fortune 500s, this event offers 
                great networking opportunities as you explore diverse career pathways and build 
                meaningful connections with industry leaders.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-display text-2xl font-semibold text-primary">
                What to Expect:
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-primary">Expert Panel Discussions</strong> from dynamic, industry professionals in tech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-primary">Hands-On Workshops</strong> to build new skills and explore new technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong className="text-primary">Networking Opportunities</strong> to connect directly with top employers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Top left portrait */}
              <div className="aspect-[3/4] bg-primary/10 rounded-2xl overflow-hidden">
                {/* PLACEHOLDER: Insert portrait SVG/image here */}
                <div className="w-full h-full flex items-center justify-center text-primary/30">
                  Portrait 1
                </div>
              </div>

              {/* Top right portrait */}
              <div className="aspect-[3/4] bg-primary/10 rounded-2xl overflow-hidden mt-12">
                {/* PLACEHOLDER: Insert portrait SVG/image here */}
                <div className="w-full h-full flex items-center justify-center text-primary/30">
                  Portrait 2
                </div>
              </div>

              {/* Bottom featured portrait - spans full width */}
              <div className="col-span-2 aspect-[16/10] bg-primary rounded-2xl overflow-hidden relative">
                {/* PLACEHOLDER: Insert featured portrait SVG/image here */}
                <div className="w-full h-full flex items-center justify-center text-white/30">
                  Featured Portrait
                </div>
                
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 border-4 border-white/20 rounded-bl-2xl"></div>
              </div>

              {/* Bottom right portrait */}
              <div className="aspect-square bg-primary/10 rounded-2xl overflow-hidden -mt-20 ml-auto w-3/4">
                {/* PLACEHOLDER: Insert portrait SVG/image here */}
                <div className="w-full h-full flex items-center justify-center text-primary/30">
                  Portrait 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
