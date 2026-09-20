import Image from "next/image"

const highlights = [
  { title: "Expert panel discussions", description: "Hear from industry professionals and discover different pathways into tech." },
  { title: "Hands-on workshops", description: "Build new skills and explore new technologies through practical sessions." },
  { title: "Meaningful connections", description: "Meet fellow students, top professionals, and researchers who share your curiosity." },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-[var(--color-blue)] px-5 py-16 text-[var(--color-light-purple)] sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 id="about-heading" className="font-lejour text-[clamp(2rem,4vw,3.75rem)] leading-tight">WHAT IS THE<br />ADA LOVELACE<br />SUMMIT?</h2>
          <div className="font-poppins space-y-5 text-base leading-relaxed sm:text-lg">
            <p>Join us this fall semester for the third annual Ada Lovelace Summit, a Women in Tech Conference hosted by the Software Developers Association (./SoDA) in collaboration with Women in Computer Science (WiCS).</p>
            <p>This event brings together women and underrepresented groups in tech to network, discover new career pathways, and build meaningful connections with industry leaders.</p>
            <p>Whether you&apos;re exploring your options or ready to launch your career, this summit is designed for you!</p>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--color-light-purple)]/30 pt-10 sm:mt-16">
          <h3 className="font-poppins mb-6 text-xl font-semibold sm:text-2xl">What to expect</h3>
          <ul className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-[var(--color-light-purple)]/30 p-6">
                <span aria-hidden="true" className="font-lejour text-3xl">0{index + 1}</span>
                <h4 className="font-poppins mt-5 text-lg font-semibold">{item.title}</h4>
                <p className="font-poppins mt-3 text-sm leading-relaxed sm:text-base">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 hidden grid-cols-3 gap-6 md:grid" aria-label="Pioneering women in technology">
          {[
            { src: "/annie-easley.svg", name: "Annie Easley" },
            { src: "/hedy-lamarr.svg", name: "Hedy Lamarr" },
            { src: "/grace-hopper.svg", name: "Grace Hopper" },
          ].map((person) => (
            <figure key={person.name} className="text-center">
              <Image src={person.src} alt={`${person.name} portrait`} width={400} height={300} className="h-auto w-full" />
              <figcaption className="font-poppins mt-2 text-sm">{person.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
