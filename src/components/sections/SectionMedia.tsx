const SectionMedia = () => {
  const outlets = [
    {
      category: "EDITORIAL ROOMS WE RESPECT",
      names: "TIME · Financial Times · Bloomberg · Forbes · Monocle · Vanity Fair"
    }
  ];

  const strategy = [
    "deploy institutional conduct and behavioural evidence as source material",
    "place it in outlets that combine reach with editorial intelligence",
    "communicate behaviour and governance, not personality"
  ];

  return (
    <section id="media" className="py-5 sm:py-10 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Media & Institutional Narrative
          </h2>
          <p className="text-body text-muted-foreground mb-10">
            Depth over noise. Conduct over commentary.
          </p>

          <div className="space-y-8 mb-16">
            {outlets.map((outlet, index) => (
              <div 
                key={outlet.category} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-sans text-xs sm:text-sm tracking-wide-brand text-foreground mb-3">
                  {outlet.category}
                </h3>
                <p className="text-body text-muted-foreground break-words">
                  {outlet.names}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="font-sans text-xs sm:text-sm tracking-wide-brand text-foreground mb-6">
              INSTITUTIONAL MEDIA STRATEGY
            </h3>
            <ul className="space-y-4 mb-10">
              {strategy.map((item, index) => (
                <li key={index} className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-primary flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic">
            Where others push messages,
            SociisGroup lets conduct and institutional Impact speak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionMedia;
