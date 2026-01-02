const SectionCalendar = () => {
  const events = [
    {
      date: "Winter 2025",
      location: "London",
      items: ["Let There Be Light™ private premiere and gathering."]
    },
    {
      date: "Spring 2026",
      location: "London",
      items: [
        "The 22 — leadership lunch at The Connaught.",
        "The 64 — evening experience at Club TwentyTwo."
      ]
    },
    {
      date: "Spring 2026",
      location: "Cannes",
      items: [
        "The 22 — Sociis delegation at the Global Gift Foundation Gala, supporting women, dignity, philanthropy and children with special needs."
      ]
    },
    {
      date: "Summer 2026",
      location: "Paris",
      items: [
        "The 22 — leadership experience at Le Meurice.",
        "The 64 — LIME Book launch journey aboard the Orient Express."
      ]
    },
    {
      date: "Summer 2026",
      location: "Brussels",
      items: ["The 64 — A Curated Boutique Gathering at Corinthia Brussels."]
    },
    {
      date: "Summer 2026",
      location: "Tomorrowland",
      items: ["The 300 — In collaboration with Love Tomorrow, a We Are One World experience, on the Tomorrowland premises."]
    },
    {
      date: "Autumn 2026",
      location: "Madrid",
      items: ["The 300 — Circle Gathering at Mandarin Oriental Ritz."]
    },
    {
      date: "Autumn 2026",
      location: "New York",
      items: [
        "The 22 — climate, finance and governance leaders, introducing SBS™ as the missing B in ESG."
      ]
    },
    {
      date: "Autumn 2026",
      location: "Geneva",
      items: [
        "The 22 — Leadership Lunch at La Réserve.",
        "The 64 — Evening Experience at La Réserve."
      ]
    },
    {
      date: "Winter 2026",
      location: "Abu Dhabi",
      items: ["The 300 — Circle Experience at Mandarin Oriental Emirates Palace."]
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
            Key Experiences across Europe, the Middle East and the US.
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
