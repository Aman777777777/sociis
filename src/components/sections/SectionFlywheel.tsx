const SectionFlywheel = () => {
  const steps = [
    "Experience",
    "Story", 
    "House",
    "Access",
    "Standard",
    "Impact",
  ];

  return (
    <section id="flywheel" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            The Institutional Flywheel
          </h2>

          {/* Visual flywheel */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4 mb-12">
            {steps.map((step, index) => (
              <span key={step} className="flex items-center">
                <span className="font-sans text-xs sm:text-sm text-foreground whitespace-nowrap">{step}</span>
                {index < steps.length - 1 && (
                  <span className="text-primary mx-1 sm:mx-3">→</span>
                )}
              </span>
            ))}
            <span className="text-primary mx-1 sm:mx-3">→</span>
            <span className="font-sans text-xs sm:text-sm text-foreground whitespace-nowrap">Experience</span>
          </div>

          <div className="space-y-4 text-body text-muted-foreground">
            <p>A controlled environment generates behavioural evidence.</p>
            <p>Evidence becomes story.</p>
            <p>Story becomes learning in House.</p>
            <p>Learning spreads through Access.</p>
            <p>The Standard converts it into accountable infrastructure.</p>
            <p>Impact becomes institutional and visible.</p>
            <p>Higher-calibre environments are created.</p>
          </div>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic mt-10">
            That is the SociisGroup™ flywheel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFlywheel;
