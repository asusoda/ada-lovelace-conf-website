const scheduleItems = [
  { time: "11:15 AM", dateTime: "11:15", title: "Kickoff and Speeches" },
  { time: "11:30 AM", dateTime: "11:30", title: "Keynote Speaker" },
  { time: "11:45 AM", dateTime: "11:45", title: "Cross-Sector Q&A Panel (AMEX, Biotech)" },
  { time: "12:15 PM", dateTime: "12:15", title: "Resume Roast Workshop with DevLabs" },
  { time: "12:45 PM", dateTime: "12:45", title: "Lunch & Networking (Cochise)" },
  { time: "2:00 PM", dateTime: "14:00", title: "Industry Misc." },
  { time: "3:00 PM", dateTime: "15:00", title: "Soft Skills Workshop with CVS" },
  { time: "3:30 PM", dateTime: "15:30", title: "Hard Skills Workshop with Hacker Devils" },
  { time: "4:30 PM", dateTime: "16:30", title: "Closing Ceremony" },
]

export function AgendaSection() {
  const scheduleItems = [
    { time: "11:00 AM", title: "Kickoff and Speeches" },
    { time: "11:15 AM", title: "Keynote Speaker" },
    { time: "11:45 AM", title: "Cross-Sector Q&A panel (AMEX, Biotech)" },
    { time: "12:30 PM", title: "Resume roast workshop with Devlabs" },
    { time: "1:00 PM", title: "Lunch & Networking @ Cochise" },
    { time: "2:00 PM", title: "Academia Workshop" },
    { time: "3:00 PM", title: "Soft skills workshop with CVS" },
    { time: "3:45 PM", title: "Hard skills workshop with Hacker Devils" },
    { time: "4:30 PM", title: "Closing Ceremony" },
  ]

  return (
    <section id="agenda" className="bg-[var(--color-white)] py-6 sm:py-8 xl:py-30 2xl:py-16 pb-[2rem] px-4 sm:px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
      <div className="w-[80%] lg:max-w-6xl 2xl:max-w-[70%] mx-auto">
        <div className="relative">
          {/* Date + location Header */}
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between mb-6 2xl:mb-10 pt-5 2xl:pt-10">
            <div className="hidden lg:block font-lejour text-left text-[var(--color-blue)] mt-auto mb-2 text-sm lg:text-[clamp(1rem,1.3vw+0.25rem,5rem)]">
              <p className="font-bold tracking-wider uppercase">
                FRIDAY, SEPTEMBER 25TH
              </p>
              <p className="font-medium tracking-wider uppercase">
                MEMORIAL UNION - PIMA AUDITORIUM
              </p>
            </div>
            {/* Large AGENDA title */}
            <h1 className="font-lejour text-[clamp(3rem,6vw+1rem,8rem)] font-bold text-[var(--color-blue)] tracking-wider xl:text-right mb-none pb-none leading-none">
              AGENDA
            </h1>

            {/* mobile view date and time */}
            <div className="lg:hidden font-lejour text-left text-[var(--color-blue)] mt-auto mb-0 lg:mb-2">
              <p className="text-sm sm:text-base xl:text-xl 2xl:text-3xl font-medium tracking-wider uppercase">
                FRIDAY, SEPTEMBER 25TH
              </p>
              <p className="text-sm sm:text-base xl:text-xl 2xl:text-3xl font-medium tracking-wider uppercase">
                MEMORIAL UNION - PIMA AUDITORIUM
              </p>
            </div>

          </div>

          <div className="relative">

            <div className="bg-[var(--color-light-purple)] rounded-xl xl:rounded-2xl p-4 sm:p-6 xl:p-10 2xl:p-10 pr-32 xl:pr-48 2xl:pr-64 backdrop-blur-sm font-lucidity text-[var(--color-blue)]">
              <div className="hidden lg:flex flex-col text-[clamp(1rem,1vw+0.25rem,2rem)] gap-3 xl:gap-4 px-5 lg:px-10 pb-10 -ml-6 xl:-ml-10 2xl:-ml-12">
              {scheduleItems.map((item, index) => (
                <div key={index} className="flex flex-row items-start gap-8 xl:gap-16 2xl:gap-20">
                  <span className="font-bold w-[10rem] shrink-0 text-right">{item.time}</span>
                  <span className="font-bold flex-1 text-left break-words">{item.title}</span>
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
                    <span className="text-[0.5rem] sm:text-lg xl:text-xl 2xl:text-2xl font-bold sm:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px]">{item.time}</span>
                    <span className="text-[0.5rem] sm:text-base xl:text-lg 2xl:text-xl font-medium uppercase tracking-wide">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--color-blue)]/15 bg-[var(--color-light-purple)] sm:rounded-3xl">
          <div className="border-b border-[var(--color-blue)]/15 px-5 py-5 sm:px-8 lg:px-10">
            <p className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
              A day of connection &amp; discovery
            </p>
          </div>
          <ol className="divide-y divide-[var(--color-blue)]/15 px-5 sm:px-8 lg:px-10">
            {scheduleItems.map((item) => (
              <li
                key={item.dateTime}
                className="grid gap-2 py-5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:py-6 lg:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <time
                  dateTime={item.dateTime}
                  className="font-poppins whitespace-nowrap text-sm font-semibold tabular-nums sm:text-base"
                >
                  {item.time}
                </time>
                <p className="font-poppins min-w-0 text-base leading-relaxed font-semibold break-words sm:text-lg lg:text-xl">
                  {item.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
