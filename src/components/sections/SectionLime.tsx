const SectionLime = () => {
  const innerPrinciples = [
    { name: "Clarity", description: "focus before movement." },
    { name: "Integrity", description: "alignment when unseen." },
    { name: "Restraint", description: "grace over impulse." },
    { name: "Courage", description: "the hard right over the easy wrong." },
  ];

  const outerPrinciples = [
    { name: "Discernment", description: "wisdom before speed." },
    { name: "Generosity", description: "influence shared." },
    { name: "Presence", description: "composure under pressure." },
    { name: "Remembrance", description: "humanity before numbers." },
  ];

  const councilRoles = [
    "guard the LIME Code",
    "review how SBS is defined and governed",
    "oversee data ethics for BEE",
    "question any collaboration, event or decision that drifts from institutional standards."
  ];

  return (
    <section id="lime" className="py-14 sm:py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[720px]">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Governance & Integrity
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            The LIME Code™
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic mb-8">
            The balance between Life and Time, and everything in between.
          </p>
          
          <p className="text-body text-muted-foreground mb-8">
            The LIME Code is the ethical and behavioural architecture governing SociisGroup™.
            It powers SBS, shapes institutional decisions,
            and serves as the reference framework for the Sociis Ethical Council.
          </p>

          <p className="text-body text-foreground mb-4">
            The LIME Code is structured in two layers.
          </p>
          <p className="text-body text-muted-foreground mb-12">
            Four principles govern inner conduct under pressure.
            Four principles govern how power is exercised in relation to others and institutions.
          </p>

          {/* Inner Conduct */}
          <div className="mb-10">
            <h3 className="font-sans text-xs sm:text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6">
              Inner Conduct
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {innerPrinciples.map((principle, index) => (
                <div 
                  key={principle.name} 
                  className="p-6 border border-border/50 hover:border-primary/30 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-sans text-foreground font-medium mb-2">
                    {principle.name}
                  </h3>
                  <p className="font-sans text-base text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outer Conduct */}
          <div className="mb-16">
            <h3 className="font-sans text-xs sm:text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6">
              Outer Conduct
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {outerPrinciples.map((principle, index) => (
                <div 
                  key={principle.name} 
                  className="p-6 border border-border/50 hover:border-primary/30 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <h3 className="font-sans text-foreground font-medium mb-2">
                    {principle.name}
                  </h3>
                  <p className="font-sans text-base text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-12">
            <h3 className="font-sans text-base tracking-wide-brand text-foreground mb-6">
              THE ETHICAL COUNCIL'S MANDATE
            </h3>
            <ul className="space-y-3">
              {councilRoles.map((role, index) => (
                <li key={index} className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-body text-foreground mt-12 pt-8 border-t border-border">
            The LIME Code ensures institutional integrity as SociisGroup scales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionLime;
