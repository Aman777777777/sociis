const SectionWhat = () => {
  return (
    <section id="what" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-body text-muted-foreground mb-8">
            In simple terms, SOCIIS™ does three things:
          </p>

          <div className="space-y-6 mb-10">
            <p className="text-body-lg text-foreground">
              <span className="text-primary mr-3">1.</span>
              We define a standard for trustworthy, sustainable behaviour.
            </p>
            <p className="text-body-lg text-foreground">
              <span className="text-primary mr-3">2.</span>
              We place leaders in experiences that test and shape that behaviour.
            </p>
            <p className="text-body-lg text-foreground">
              <span className="text-primary mr-3">3.</span>
              We bring these behaviours into culture until they reach one billion people.
            </p>
          </div>

          <p className="text-body text-muted-foreground">
            Everything else is scaffolding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWhat;
