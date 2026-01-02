const SectionMedia = () => {
  const outlets = [
    {
      category: "INSTITUTIONAL & BUSINESS",
      names: "TIME · Financial Times · Bloomberg · Forbes · Inc."
    },
    {
      category: "CULTURE & STYLE",
      names: "Monocle · Vanity Fair · GQ-level longform"
    },
    {
      category: "HOSPITALITY & EXPERIENCE",
      names: "Select hospitality and design titles aligned with Aman, Orient Express, Corinthia, Mandarin Oriental and others."
    }
  ];

  const strategy = [
    "use iconic experiences and human stories as the raw material",
    "place them in outlets that combine reach with intelligence",
    "speak about behaviour, not ego"
  ];

  return (
    <section id="media" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-4">
            Media & Storytelling
          </h2>
          <p className="text-body text-muted-foreground mb-12">
            Depth over noise. A small circle of outlets that understand substance:
          </p>

          <div className="space-y-8 mb-16">
            {outlets.map((outlet, index) => (
              <div 
                key={outlet.category} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-sans text-base tracking-wide-brand text-foreground mb-3">
                  {outlet.category}
                </h3>
                <p className="font-sans text-muted-foreground">
                  {outlet.names}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-12">
            <h3 className="font-sans text-base tracking-wide-brand text-foreground mb-6">
              OUR MEDIA STRATEGY IS SIMPLE
            </h3>
            <ul className="space-y-4 mb-12">
              {strategy.map((item, index) => (
                <li key={index} className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-primary">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="font-accent text-xl text-foreground italic">
            Where others push messages,
            we let conduct, culture and Impact speak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionMedia;
