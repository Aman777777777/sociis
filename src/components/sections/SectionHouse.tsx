const SectionHouse = () => {
  return (
    <section id="house" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Public Entry Point
          </p>
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-10">
            Sociis House™
          </h2>

          <p className="font-accent text-2xl text-foreground italic mb-8">
            Sociis House™ is where Impact scales.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            Leaders and learners enter journeys, watch films, listen to deep conversations,
            and reflect using the LIME Code™ as compass.
          </p>

          <p className="text-body text-muted-foreground mb-12">
            In collaboration with <span className="text-foreground font-medium">Podeo</span> and their 350M audience,
            House content — audio, stories, reflections —
            reaches far beyond the private rooms where it was born.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#house-join"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-sm tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Join Sociis House
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">Explore</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                Journeys
              </a>
              <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                Listen
              </a>
              <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                Watch
              </a>
              <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                Read
              </a>
              <a href="#" className="text-sm text-foreground hover:text-primary transition-colors">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHouse;
