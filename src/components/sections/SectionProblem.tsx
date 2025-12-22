const SectionProblem = () => {
  return (
    <section id="problem" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-body-lg text-foreground mb-8">
            The world measures emissions, capital, performance and risk.
            <br />
            It does not measure <span className="underline-electric">behaviour</span>.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            Institutions lose trust.
            <br />
            People burn out.
            <br />
            Sustainability becomes a logo, not a lived practice.
          </p>

          <p className="font-accent text-2xl text-foreground italic mb-8">
            Behaviour is the missing "B" in ESG.
          </p>

          <p className="text-body text-muted-foreground">
            SOCIIS™ exists to make that measurable, teachable and scalable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionProblem;
