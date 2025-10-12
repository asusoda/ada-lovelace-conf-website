export function AgendaSection() {
  return (
    <section id="agenda" className="min-h-screen bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Date, Location, and Title Row */}
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-2">
            <div className="font-lucidity text-[var(--color-blue)] uppercase text-sm lg:text-base tracking-wider">
              SATURDAY OCTOBER 18TH
            </div>
            <div className="font-lucidity text-[var(--color-blue)] uppercase text-sm lg:text-base tracking-wider">
              MEMORIAL UNION TURQUOISE 220
            </div>
          </div>
          
          <h2 className="font-lejour text-[var(--color-blue)] text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            AGENDA
          </h2>
        </div>

        {/* Purple Background Container with Timeline */}
        <div className="bg-[var(--color-light-purple)] rounded-lg p-8 lg:p-12 relative">
          {/* Background illustrations */}
          <div className="absolute bottom-8 left-8 w-16 h-20 opacity-20">
            <div className="w-full h-full bg-[var(--color-blue)] rounded"></div>
          </div>
          
          <div className="absolute bottom-8 right-8 w-12 h-24 opacity-20">
            <div className="w-full h-full bg-[var(--color-blue)] rounded"></div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-14 h-16 opacity-20">
            <div className="w-full h-full bg-[var(--color-blue)] rounded"></div>
          </div>

          {/* Schedule */}
          <div className="space-y-6">
            {/* 9:00 AM */}
            <div className="flex items-start gap-6">
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base min-w-[80px]">
                9:00 AM
              </div>
              <div className="flex-1">
                <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base">
                  KICKOFF & SPEECHES
                </div>
                <div className="font-lucidity text-[var(--color-blue)] text-xs lg:text-sm opacity-70 mt-1">
                  MORE SPEAKER INFORMATION COMING SOON!
                </div>
              </div>
            </div>

            {/* 9:15 AM */}
            <div className="flex items-start gap-6">
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base min-w-[80px]">
                9:15 AM
              </div>
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base">
                KEYNOTE SPEECH / Q & A
              </div>
            </div>

            {/* 10:00 AM */}
            <div className="flex items-start gap-6">
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base min-w-[80px]">
                10:00 AM
              </div>
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base">
                WORKSHOPS BEGIN
              </div>
            </div>

            {/* 11:00 AM */}
            <div className="flex items-start gap-6">
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base min-w-[80px]">
                11:00 AM
              </div>
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base">
                LUNCH / FREE TIME
              </div>
            </div>

            {/* 1:00 PM */}
            <div className="flex items-start gap-6">
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base min-w-[80px]">
                1:00 PM
              </div>
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base">
                PANEL Q & A
              </div>
            </div>

            {/* 2:00 PM */}
            <div className="flex items-start gap-6">
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base min-w-[80px]">
                2:00 PM
              </div>
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base">
                CLOSING NOTES
              </div>
            </div>

            {/* 2:15 PM */}
            <div className="flex items-start gap-6">
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base min-w-[80px]">
                2:15 PM
              </div>
              <div className="font-lucidity text-[var(--color-blue)] font-semibold text-sm lg:text-base">
                CAREER FAIR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
