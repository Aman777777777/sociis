// v7
const SectionInfrastructure = () => {
  const steps = [
    { num: "01", label: "Interface", desc: "Behavioural Engine of Ethics (BEE)" },
    { num: "02", label: "Rooms", desc: "Controlled leadership environments" },
    { num: "03", label: "Culture", desc: "Film, media, distribution" },
    { num: "04", label: "Standard", desc: "Sustainable Behavioural Standard (SBS)" },
  ];

  return (
    <section id="infrastructure" className="py-12 sm:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase">
            The Source
          </p>
          <p className="text-body-lg text-foreground">
            Everything starts with behaviour.
          </p>
          <p className="text-body text-muted-foreground">
            Every institution that has lost its way did so before the numbers showed it. The cause was always behavioural. What people chose to prioritise, to ignore, to tolerate, and to reward.
          </p>
          <p className="text-body text-foreground">
            SociisGroup intervenes at the source.
          </p>

          <div className="pt-4 space-y-4">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-2">
              How It Works
            </p>
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-6">
                <span className="text-accent text-sm tracking-widest w-8 shrink-0">{step.num}</span>
                <div>
                  <p className="text-body text-foreground font-medium">{step.label}</p>
                  <p className="text-body-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body text-muted-foreground italic pt-2">
            Not in training programmes. Not in reports. At the source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionInfrastructure;

