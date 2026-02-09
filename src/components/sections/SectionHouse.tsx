const SectionHouse = () => {
  return (
    <section id="house" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Public Entry Point
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Sociis House™
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic mb-8">
            Sociis House™ is where Impact scales.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            Leaders and learners enter journeys, watch films, listen to deep conversations,
            and reflect using the LIME Code™ as compass.
          </p>

          <p className="text-body text-muted-foreground mb-10">
            House content — audio, stories, reflections — is distributed through strategic media collaborations, including <span className="text-foreground font-medium">Podeo</span>, reaching far beyond the private rooms where it was born.
          </p>

          {/* CTA to external site */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.sociis.house/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-base tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Join Sociis House
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHouse;
