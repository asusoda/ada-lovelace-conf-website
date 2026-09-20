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
  return (
    <section
      id="agenda"
      aria-labelledby="agenda-heading"
      className="bg-[var(--color-white)] px-5 py-16 text-[var(--color-blue)] sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2
            id="agenda-heading"
            className="font-lejour text-[clamp(2.5rem,6vw,6rem)] leading-tight"
          >
            AGENDA
          </h2>
          <div className="font-poppins text-sm leading-relaxed sm:text-base lg:text-right">
            <p className="mb-1 font-semibold uppercase tracking-wider">
              Friday, September 25th
            </p>
            <p>Memorial Union &middot; Pima Auditorium</p>
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
