export function AgendaSection() {
  const scheduleItems = [
    { time: "9:00 AM", title: "KICKOFF & SPEECHES" },
    { time: "9:15 AM", title: "KEYNOTE SPEECH / Q & A" },
    { time: "10:00 AM", title: "WORKSHOPS BEGIN" },
    { time: "11:00 AM", title: "LUNCH / FREE TIME" },
    { time: "1:00 PM", title: "PANEL Q & A" },
    { time: "2:00 PM", title: "CLOSING NOTES" },
    { time: "2:15 PM", title: "CAREER FAIR" },
  ];

  return (
    <section className="min-h-screen bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Saturday, October 18th<br />
            Memorial Union, UW-Madison - 7:00
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Schedule */}
          <div className="space-y-6">
            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-12">
              AGENDA
            </h2>

            <div className="space-y-1">
              {scheduleItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-baseline gap-8 py-4 border-b border-border/50 hover:bg-secondary/30 transition-colors px-4 -mx-4 rounded-lg group"
                >
                  <span className="text-2xl font-bold font-display text-primary min-w-[140px] group-hover:text-primary/80 transition-colors">
                    {item.time}
                  </span>
                  <span className="text-lg font-medium text-foreground/80 uppercase tracking-wide">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="pt-8 space-y-4">
              <div className="p-6 bg-secondary rounded-xl">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-primary">Lunch will be provided</span> during 
                  the free time session. Dietary restrictions and preferences will be accommodated.
                </p>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-primary">Career Fair participants:</span> Representatives 
                  from leading tech companies will be available for networking and recruitment opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative lg:sticky lg:top-32">
            <div className="aspect-[4/5] bg-primary/10 rounded-2xl overflow-hidden relative">
              {/* PLACEHOLDER: Insert illustration of person with books/laptop SVG here */}
              <div className="w-full h-full flex items-center justify-center text-primary/30 text-center p-8">
                <p>Ada Lovelace with Books/Laptop<br/>Illustration SVG</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
