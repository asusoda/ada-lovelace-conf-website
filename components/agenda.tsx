export function AgendaSection() {
  const scheduleItems = [
    { time: "9:00 AM", title: "KICKOFF & SPEECHES" },
    { time: "9:15 AM", title: "KEYNOTE SPEECH / Q & A" },
    { time: "10:00 AM", title: "WORKSHOPS BEGIN" },
    { time: "11:00 AM", title: "LUNCH / FREE TIME" },
    { time: "1:00 PM", title: "PANEL Q & A" },
    { time: "2:00 PM", title: "CLOSING NOTES" },
    { time: "2:15 PM", title: "CAREER FAIR" },
  ]

  return (
    <section id="agenda" className="min-h-screen bg-[var(--color-white)] py-6 sm:py-8 xl:py-12 2xl:py-16 px-4 sm:px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">

        {/* Date + location Header */}
        <div className="font-lejour text-left mb-4 sm:mb-6 xl:mb-8 text-[var(--color-blue)]">
          <p className=" text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider uppercase">
            SATURDAY, OCTOBER 18TH
          </p>
          <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium tracking-wider uppercase">
            MEMORIAL UNION, TURBOHOUSE - 7:00
          </p>
        </div>

        <div className="relative">
          {/* Large AGENDA title */}
          <h1 className="font-lejour text-5xl sm:text-6xl xl:text-8xl 2xl:text-9xl font-bold text-[var(--color-blue)] mb-6 sm:mb-8 xl:mb-12 2xl:mb-16 tracking-tight text-center xl:text-right">
            AGENDA
          </h1>

          <div className="relative">
            {/* Info box - top right */}
            <div className="absolute -top-12 sm:-top-16 xl:-top-20 2xl:-top-24 right-0 bg-purple-300/50 p-2 sm:p-3 xl:p-4 2xl:p-5 rounded-lg max-w-[140px] sm:max-w-xs z-10">
              <p className="text-blue-600 text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-medium uppercase leading-tight">
                MORE SPEAKER
                <br />
                INFORMATION
                <br />
                COMING
              </p>
            </div>

            <div className="bg-purple-200/60 rounded-xl xl:rounded-2xl p-4 sm:p-6 xl:p-8 2xl:p-10 backdrop-blur-sm">
              <div className="space-y-2 sm:space-y-3 xl:space-y-4 2xl:space-y-5">
                {scheduleItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 xl:gap-6 py-1 sm:py-2"
                  >
                    <span className="text-base sm:text-lg xl:text-xl 2xl:text-2xl font-bold text-blue-600 sm:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] font-mono">
                      {item.time}
                    </span>
                    <span className="text-sm sm:text-base xl:text-lg 2xl:text-xl font-medium text-blue-600 uppercase tracking-wide">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Illustration placeholders */}
          <div className="relative mt-8 hidden xl:block">
            {/* Left figure - person sitting/reclining */}
            <div className="absolute bottom-0 left-0 w-48 xl:w-64 2xl:w-80 h-60 xl:h-80 2xl:h-96 bg-blue-600 rounded-lg opacity-90 flex items-center justify-center">
              <p className="text-white text-center text-xs xl:text-sm 2xl:text-base px-4">
                SVG Placeholder:
                <br />
                Person Sitting/Reclining
              </p>
            </div>

            {/* Right figure - person standing with books */}
            <div className="absolute bottom-0 right-0 w-48 xl:w-64 2xl:w-80 h-72 xl:h-96 2xl:h-[28rem] bg-blue-600 rounded-lg opacity-90 flex items-center justify-center">
              <p className="text-white text-center text-xs xl:text-sm 2xl:text-base px-4">
                SVG Placeholder:
                <br />
                Person Standing
                <br />
                with Stack of Books
              </p>
            </div>

            {/* Stack of books placeholder (separate element) */}
            <div className="absolute bottom-0 right-16 xl:right-20 2xl:right-24 w-24 xl:w-32 2xl:w-40 h-48 xl:h-64 2xl:h-80 bg-blue-600 rounded-lg opacity-80 flex items-center justify-center">
              <p className="text-white text-center text-[10px] xl:text-xs 2xl:text-sm px-2">
                Books
                <br />
                Stack
              </p>
            </div>
          </div>

          {/* Spacer for absolute positioned elements */}
          <div className="hidden xl:block h-80 xl:h-96 2xl:h-[28rem]"></div>
        </div>
      </div>
    </section>
  )
}
