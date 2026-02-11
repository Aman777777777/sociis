const SectionCalendar = () => {
  const events = [
    {
      date: "Winter 2025",
      location: "London",
      items: ["Let There Be Light private premiere and gathering."]
    },
    {
      date: "Spring 2026",
      location: "London",
      items: [
        "The 22, leadership lunch at The Connaught.",
        "Evening experience at Club TwentyTwo."
      ]
    },
    {
      date: "Summer 2026",
      location: "Paris",
      items: [
        "The 22, leadership experience at Le Meurice.",
        "LIME Book launch journey aboard the Orient Express."
      ]
    },
    {
      date: "Summer 2026",
      location: "Brussels",
      items: ["A curated boutique gathering at Corinthia Brussels."]
    },
    {
      date: "Summer 2026",
      location: "Love Tomorrow",
      items: ["The immersive experience created with Love Tomorrow, a We Are One World experience."]
    },
    {
      date: "Autumn 2026",
      location: "Madrid",
      items: ["Circle experience at Mandarin Oriental Ritz."]
    },
    {
      date: "Winter 2026",
      location: "Dubai",
      items: ["Circle experience, private gathering and institutional alignment."]
    }
  ];

  return (
    <section id="calendar" className="py-5 sm:py-10 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-2">
            Global Rhythm, examples
          </h2>
          <p className="text-body text-muted-foreground mb-16">
            Illustrative moments, not a fixed schedule.
          </p>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="grid md:grid-cols-[200px_1fr] gap-6 pb-12 border-b border-border/50 last:border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <p className="font-sans text-base tracking-wide-brand text-foreground mb-1">
                    {event.date}
                  </p>
                  <p className="font-accent text-lg text-primary italic">
                    {event.location}
                  </p>
                </div>
                <div className="space-y-3">
                  {event.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-body text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-body text-muted-foreground mt-16 pt-8 border-t border-border">
            Each moment is a proof point feeding Sociis House, Sociis Impact
            and the one billion mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionCalendar;
