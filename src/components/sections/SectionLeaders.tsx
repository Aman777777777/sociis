const SectionLeaders = () => {
  const reasons = [
    {
      title: "Risk Reduction",
      description: "Behavioural accountability reduces governance, reputational and compliance risk before it becomes public.",
    },
    {
      title: "Governance Resilience",
      description: "SBS™ provides a behavioural layer that strengthens institutional governance beyond disclosure and reporting.",
    },
    {
      title: "Reputation Protection",
      description: "Conduct under pressure defines institutional credibility. SociisGroup builds the framework to sustain it.",
    },
    {
      title: "ESG Preparedness",
      description: "Regulatory enforcement is shifting from what organisations report to how their leaders behave. SociisGroup addresses the gap.",
    },
    {
      title: "Leadership Credibility",
      description: "Leaders are assessed not by their statements but by their conduct. Behavioural infrastructure makes credibility verifiable.",
    },
    {
      title: "Behaviour Under Pressure",
      description: "Controlled environments reveal and calibrate leadership conduct, the foundation of sustainable institutional trust.",
    },
  ];

  return (
    <section id="leaders" className="py-5 sm:py-10 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Institutional Relevance
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Why Leaders and Institutions Engage with SociisGroup
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-12"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="border-t border-border/50 pt-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="font-sans font-medium text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic">
            The question is no longer what an institution discloses, but how it behaves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionLeaders;
