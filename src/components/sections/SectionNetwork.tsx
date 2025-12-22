const SectionNetwork = () => {
  return (
    <section id="network" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-10">
            Sociis Network™
          </h2>

          <p className="font-accent text-xl text-foreground italic mb-12">
            The Sociis Network™ is the alliance that carries the standard.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-sans font-medium text-foreground mb-2">
                The Circle™ — 100 leaders
              </h3>
              <p className="text-body text-muted-foreground mb-2">
                €15.000/year
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Early Circle Members retain their €2.500 rate for life.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-sans font-medium text-foreground mb-2">
                Sovereign Partners — 8 seats
              </h3>
              <p className="text-body text-muted-foreground mb-2">
                €150.000/year · 4-year commitment
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Sector giants co-shaping SBS™ and global deployments.
              </p>
            </div>

            <div className="border-l border-border pl-6">
              <h3 className="font-sans font-medium text-foreground mb-2">
                Trusted Advisors
              </h3>
              <p className="text-body text-muted-foreground">
                €2.500
              </p>
            </div>

            <div className="border-l border-border pl-6">
              <h3 className="font-sans font-medium text-foreground mb-2">
                Trusted Companies
              </h3>
              <p className="text-body text-muted-foreground">
                €5.000 / 10 credits
              </p>
            </div>
          </div>

          <p className="text-body text-muted-foreground">
            Every introduction is curated.
            <br />
            <span className="text-foreground font-medium">Trust is the only credential.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionNetwork;
