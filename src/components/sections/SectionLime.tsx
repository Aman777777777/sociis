const SectionLime = () => {
  const principles = [
    { name: "Clarity", description: "focus before movement." },
    { name: "Integrity", description: "alignment when unseen." },
    { name: "Restraint", description: "grace over impulse." },
    { name: "Courage", description: "the hard right over the easy wrong." },
    { name: "Discernment", description: "wisdom before speed." },
    { name: "Generosity", description: "influence shared." },
    { name: "Presence", description: "composure under pressure." },
    { name: "Remembrance", description: "humanity before numbers." }
  ];

  const councilRoles = [
    "guard the LIME Code™",
    "review how SBS™ is defined and used",
    "oversee data ethics for BEE™",
    "question any collaboration, event or decision that drifts from this spine."
  ];

  return (
    <section id="lime" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="font-accent text-2xl md:text-3xl text-foreground italic mb-8">
            LIME — The balance between Life and Time, and everything in between.
          </p>
          
          <p className="text-body text-muted-foreground mb-12">
            The LIME Code™ is the ethical and behavioural architecture of SOCIIS™.
            It powers SBS™, shapes leadership decisions,
            and is the reference framework used by the Sociis Ethical Council™.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {principles.map((principle, index) => (
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

          <div className="border-t border-border pt-12">
            <h3 className="font-sans text-base tracking-wide-brand text-foreground mb-6">
              THE ETHICAL COUNCIL'S ROLE
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
            This is how Impact keeps its integrity
            even as Sociis™ scales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionLime;
