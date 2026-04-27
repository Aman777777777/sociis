const SectionDomains = () => {
  return (
    <section className="py-20 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mono-kicker mb-4">The Three Domains</div>
        <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground mb-4">
          Where SociisGroup operates.
        </h2>
        <div className="rule mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          <div className="space-y-4">
            <p className="font-sans text-[10px] font-medium tracking-[0.3em] text-primary uppercase">
              Sustainability
            </p>
            <p className="font-display italic text-xl text-foreground">The outcome.</p>
            <p className="text-body text-muted-foreground">
              How individuals and communities conduct themselves toward the highest standards.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-sans text-[10px] font-medium tracking-[0.3em] text-primary uppercase">
              Hospitality
            </p>
            <p className="font-display italic text-xl text-foreground">The environments.</p>
            <p className="text-body text-muted-foreground">
              Controlled environments where behaviour becomes visible among peers.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-sans text-[10px] font-medium tracking-[0.3em] text-primary uppercase">
              Humanity
            </p>
            <p className="font-display italic text-xl text-foreground">The centre.</p>
            <p className="text-body text-muted-foreground">
              The standard exists to serve human beings, not systems. Dignity is not an afterthought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDomains;
