const SectionWhat = () => {
  return (
    <section id="what" className="py-5 sm:py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Institutional Mandate
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            What SociisGroup Does
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <div className="space-y-6 mb-10">
            <p className="text-body-lg text-foreground">
              <span className="text-primary mr-3">1.</span>
              Sets and governs the standard for trustworthy, sustainable behaviour.
            </p>
            <p className="text-body-lg text-foreground">
              <span className="text-primary mr-3">2.</span>
              Deploys leaders into environments that test and calibrate that behaviour under pressure.
            </p>
            <p className="text-body-lg text-foreground">
              <span className="text-primary mr-3">3.</span>
              Distributes behavioural standards through culture until they reach one billion people.
            </p>
          </div>

          <p className="text-body text-muted-foreground">
            Everything else is infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWhat;
