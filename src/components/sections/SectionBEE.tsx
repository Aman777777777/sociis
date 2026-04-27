const SectionBEE = () => {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mono-kicker mb-6">Behavioural Intelligence</div>
          <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground mb-8">
            BEE.<br />Behavioural Engine of Ethics.
          </h2>
          <div className="rule mb-12"></div>
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-16">
            BEE is a behavioural interface layer powered by AI that helps individuals discover the gaps between their intentions and the behaviour they are actually producing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-12 border-t border-border/50">
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-foreground font-medium">Detect.</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Identifies tension between aspiration and action.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-foreground font-medium">Support.</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Holds the individual accountable to their own standard.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-foreground font-medium">Test.</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Produces behavioural evidence that feeds SBS over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBEE;
