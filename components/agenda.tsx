import Image from "next/image"

export function AgendaSection() {
  const scheduleItems = [
    { time: "9:00 AM", title: "KICKOFF & SPEECHES" },
    { time: "9:15 AM", title: "KEYNOTE SPEECH / Q & A PANEL" },
    { time: "10:30 AM", title: "SCAI MENTAL HEALTH ADVISORY WORKSHOP" },
    { time: "11:00 AM", title: "AIS RESUME WORKSHOP" },
    { time: "12:00 AM", title: "NETWORKING LUNCH" },
    { time: "1:15 AM", title: "DISC INTERNSHIP PANEL" },
    { time: "2:30 AM", title: "PORTFOLIO WORKSHOP - GREG VANNONI" },
    { time: "3:30 PM", title: "SHPE WORKSHOP" },
    { time: "4:30 PM", title: "CLOSING CEREMONY" },
  ]

  return (
    <section id="agenda" className="max-h-[calc(100vh+15rem)] 2xl:max-h-[calc(100vh+10rem)] bg-[var(--color-white)] py-6 sm:py-8 xl:py-30 2xl:py-16 px-4 sm:px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
      <div className="w-[80%] lg:max-w-6xl 2xl:max-w-[70%] mx-auto">
        <div className="relative">
          {/* Date + location Header */}
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between mb-6 2xl:mb-10 pt-5 2xl:pt-10">
            <div className="hidden lg:block font-lejour text-left text-[var(--color-blue)] mt-auto mb-2 text-sm lg:text-[clamp(1rem,1.3vw+0.25rem,5rem)]">
              <p className="font-bold tracking-wider uppercase">
                SATURDAY, OCTOBER 18TH
              </p>
              <p className="font-medium tracking-wider uppercase">
                MEMORIAL UNION - TURQUOISE ROOM 220
              </p>
            </div>
            {/* Large AGENDA title */}
            <h1 className="font-lejour text-[clamp(3rem,6vw+1rem,8rem)] font-bold text-[var(--color-blue)] tracking-wider xl:text-right mb-none pb-none leading-none">
              AGENDA
            </h1>

            {/* mobile view date and time */}
            <div className="lg:hidden font-lejour text-left text-[var(--color-blue)] mt-auto mb-0 lg:mb-2">
              <p className="text-sm sm:text-base xl:text-xl 2xl:text-3xl font-medium tracking-wider uppercase">
                SATURDAY, OCTOBER 18TH
              </p>
              <p className="text-sm sm:text-base xl:text-xl 2xl:text-3xl font-medium tracking-wider uppercase">
                MEMORIAL UNION - TURQUOISE ROOM 220
              </p>
            </div>

          </div>

          <div className="relative">

            <div className="bg-[var(--color-light-purple)] rounded-xl xl:rounded-2xl p-4 sm:p-6 xl:p-10 2xl:p-10 pr-32 xl:pr-48 2xl:pr-64 backdrop-blur-sm font-lucidity text-[var(--color-blue)]">
              <div className="hidden lg:flex flex-col text-[clamp(1rem,1vw+0.25rem,2rem)] gap-3 xl:gap-4 px-5 lg:px-10 pb-10 -ml-6 xl:-ml-10 2xl:-ml-12">
                {/* Left column - Times */}
              {scheduleItems.map((item, index) => (
                <div key={index} className="flex flex-row items-start gap-8 xl:gap-16 2xl:gap-20">
                  <span className="font-bold w-[10rem] shrink-0 text-right">
                    {item.time}
                  </span>
                  <span className="font-bold flex-1 text-left break-words">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

              
              {/* mobile layout times */}
              <div className="lg:hidden space-y-2 sm:space-y-3 xl:space-y-4 2xl:space-y-5">
                {scheduleItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 xl:gap-6 py-1 sm:py-2"
                  >
                    <span className="text-[0.5rem] sm:text-lg xl:text-xl 2xl:text-2xl font-bold sm:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px]">
                      {item.time}
                    </span>
                    <span className="text-[0.5rem] sm:text-base xl:text-lg 2xl:text-xl font-medium uppercase tracking-wide">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Illustration placeholders */}
          {/* Spacer to push down illustrations */}
          <div className="hidden lg:block h-40 xl:h-64 2xl:h-80 bg-[var(--color-light-purple)] rounded-xl xl:rounded-2xl p-4 sm:p-6 xl:p-10 2xl:p-10 pr-32 xl:pr-48 2xl:pr-64 backdrop-blur-sm"></div>

          <div className="relative mt-8 hidden lg:block">
            {/* Left figure - person sitting/reclining */}
            <div className="absolute bottom-70 2xl:bottom-0 left-0 w-48 xl:w-70 2xl:w-80 h-60 xl:h-80 2xl:h-96 rounded-lg flex items-center justify-center">
                {/* susan kare */}
                <div className="w-full">
                  <Image
                    src="/susan-kare.svg"
                    alt="Susan Kare Portrait"
                    width={400}
                    height={400}
                    className="hidden md:block md:relative right-50 2xl:right-90 -bottom-60 2xl:bottom-30 w-250 2xl:w-350 object-contain max-w-none h-pointer-events-none"
                  />
                </div>
            </div>

            {/* Right figure - person standing with books */}
            <div className="absolute bottom-80 2xl:bottom-0 right-0 w-48 xl:w-64 2xl:w-80 h-72 xl:h-96 2xl:h-[28rem] rounded-lg flex items-center justify-center">
                {/* margarent ham*/}
                <div className="w-full">
                  <Image
                    src="/margaret-ham.svg"
                    alt="Margaret Ham Portrait"
                    width={450}
                    height={450}
                    className="hidden md:block md:relative right-157 2xl:right-210 -bottom-100 2xl:-bottom-10 w-380 2xl:w-500 object-contain max-w-none h-pointer-events-none"
                  />
                </div>
            </div>
          </div>

          {/* Spacer for absolute positioned elements */}
          <div className="hidden xl:block h-80 xl:h-96 2xl:h-[28rem]"></div>
        </div>
      </div>
    </section>
  )
}
