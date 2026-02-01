const SectionMedia = () => {
  const outlets = [
    {
      category: "EDITORIAL ROOMS WE RESPECT",
      names: "TIME · Financial Times · Bloomberg · Forbes · Monocle · Vanity Fair"
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
          <h2 className="font-sans font-light text-2xl sm:text-3xl text-foreground tracking-brand mb-3 sm:mb-4">
            Media & Storytelling
          </h2>
          <p className="text-body-sm text-muted-foreground mb-8 sm:mb-12">
            Depth over noise.
          </p>

          <div className="space-y-8 mb-16">
            {outlets.map((outlet, index) => (
              <div 
                key={outlet.category} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-sans text-body-sm tracking-wide-brand text-foreground mb-2 sm:mb-3">
                  {outlet.category}
                </h3>
                <p className="font-sans text-body-sm text-muted-foreground break-words">
                  {outlet.names}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 sm:pt-12">
            <h3 className="font-sans text-body-sm tracking-wide-brand text-foreground mb-4 sm:mb-6">
              OUR MEDIA STRATEGY IS SIMPLE
            </h3>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              {strategy.map((item, index) => (
                <li key={index} className="text-body-sm text-muted-foreground flex items-start gap-2 sm:gap-3">
                  <span className="text-primary flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-body text-muted-foreground mb-6">
            We speak about behaviour, sustainability and legitimacy — not ego.
          </p>

          <p className="font-accent text-body-lg text-foreground italic">
            Where others push messages,
            we let conduct, culture and Impact speak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionMedia;
