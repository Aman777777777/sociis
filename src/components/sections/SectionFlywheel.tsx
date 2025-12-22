const SectionFlywheel = () => {
  const steps = [
    "Experience",
    "Story", 
    "House",
    "Network",
    "Standard",
    "Impact",
  ];

  return (
    <section id="flywheel" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-12">
            The Flywheel
          </h2>

          {/* Visual flywheel */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {steps.map((step, index) => (
              <span key={step} className="flex items-center">
                <span className="font-sans text-sm text-foreground">{step}</span>
                {index < steps.length - 1 && (
                  <span className="text-primary mx-3">→</span>
                )}
              </span>
            ))}
            <span className="text-primary mx-3">→</span>
            <span className="font-sans text-sm text-foreground">Experience</span>
          </div>

          <div className="space-y-4 text-body text-muted-foreground">
            <p>An experience creates emotion.</p>
            <p>Emotion becomes story.</p>
            <p>Story becomes learning in House.</p>
            <p>Learning spreads through the Network.</p>
            <p>The Standard turns it into something measurable.</p>
            <p>Impact becomes visible.</p>
            <p>New, higher experiences are created.</p>
          </div>

          <p className="font-accent text-xl text-foreground italic mt-10">
            That is the Sociis flywheel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFlywheel;
