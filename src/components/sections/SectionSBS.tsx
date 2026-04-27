const SectionSBS = () => {
  return (
    <section className="py-24 bg-muted/10 border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <div className="mono-kicker mb-4">The Standard</div>
            <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground leading-tight">
              SBS.<br />The Sustainable Behavioural Standard.
            </h2>
            <div className="rule mt-8 mb-0"></div>
          </div>
          <div className="space-y-8">
            <p className="text-body-lg text-foreground leading-relaxed">
              SBS, the Sustainable Behavioural Standard, is the reference frame that individuals and communities conduct themselves against. It names the standard. It makes the standard visible. It holds.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              SBS operates upstream of disclosure, regulation and reporting. At the level where behaviour is formed. It is the framework today. The standard in formation.
            </p>
            <p className="font-display italic text-2xl text-foreground pt-4">
              Built from lived behavioural proof, not declared doctrine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSBS;
