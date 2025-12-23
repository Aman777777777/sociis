const SectionCalendar = () => {
  const events = [
    {
      date: "December 2025",
      location: "London",
      items: ["Let There Be Light™ private premiere and gathering."]
    },
    {
      date: "April 2026",
      location: "London",
      items: [
        "2. The 22 — sovereign lunch at The Connaught.",
        "3. The 64 — evening experience at Club TwentyTwo."
      ]
    },
    {
      date: "May 2026",
      location: "Cannes",
      items: [
        "4. The 22 — Sociis delegation at the Global Gift Foundation Gala, supporting women, dignity, philanthropy and children with special needs."
      ]
    },
    {
      date: "June 2026",
      location: "Paris",
      items: [
        "5. The 22 — leadership experience at Le Meurice.",
        "6. The 64 — LIME Book launch journey aboard the Orient Express."
      ]
    },
    {
      date: "July 22, 2026",
      location: "Brussels",
      items: ["7. The 64 — The Invocation™ at Corinthia Brussels."]
    },
    {
      date: "July 26, 2026",
      location: "Tomorrowland",
      items: ["8. The 300 — Immersive Experience with Love Tomorrow."]
    },
    {
      date: "September 2026",
      location: "Madrid",
      items: ["9. The 300 — Circle Gathering at Mandarin Oriental Ritz."]
    },
    {
      date: "September 2026",
      location: "New York Climate Week",
      items: [
        "10. The 22 — climate, finance and governance leaders, introducing SBS™ as the missing B in ESG."
      ]
    },
    {
      date: "November 2026",
      location: "Geneva",
      items: [
        "11. The 22 — Sovereign Lunch at La Réserve.",
        "12. The 64 — Sovereign Evening at La Réserve."
      ]
    },
    {
      date: "December 2026",
      location: "Abu Dhabi",
      items: ["13. The 300 — Circle Experience at Mandarin Oriental Emirates Palace."]
    }
  ];

  return (
    <section id="calendar" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-4">
            Global Rhythm 2025–2026
          </h2>
          <p className="text-body text-muted-foreground mb-16">
            13 key Experiences across Europe, the Middle East and the US.
          </p>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="grid md:grid-cols-[200px_1fr] gap-6 pb-12 border-b border-border/50 last:border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <p className="font-sans text-sm tracking-wide-brand text-foreground mb-1">
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
            Each moment is a proof point feeding Sociis House™, Sociis Impact™
            and the one billion mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionCalendar;
