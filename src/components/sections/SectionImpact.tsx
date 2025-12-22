const SectionImpact = () => {
  return (
    <section id="impact" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="font-accent text-2xl text-foreground italic mb-10">
            Our hero product is Impact.
          </p>

          <div className="space-y-4 mb-10">
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">Impact on people</span> — how leaders behave when nobody is watching.
            </p>
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">Impact on institutions</span> — how decisions are made, not just reported.
            </p>
            <p className="text-body text-muted-foreground">
              <span className="text-foreground font-medium">Impact on culture</span> — what is admired, copied and remembered.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <p className="text-body-lg text-foreground mb-2">
              SBS™ — the Sustainable Behavioural Standard
            </p>
            <p className="text-body text-muted-foreground">
              is the framework that makes this visible, measurable and repeatable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImpact;
