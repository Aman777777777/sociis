const SectionInstitutionalEnvironments = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Operational Context
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Selected Institutional Environments
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="text-body text-muted-foreground mb-12">
            SociisGroup operates within selected institutional environments and cultural platforms aligned with its standard.
          </p>

          {/* Institutional Environments */}
          <div className="mb-10">
            <h3 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-4">
              Institutional Environments
            </h3>
            <p className="text-body text-muted-foreground leading-loose">
              The Connaught · Orient Express · Corinthia Brussels · Aman · Mandarin Oriental · La Réserve Geneva · Le Meurice Paris
            </p>
          </div>

          {/* Cultural & Media Platforms */}
          <div>
            <h3 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-4">
              Cultural & Media Platforms
            </h3>
            <p className="text-body text-muted-foreground leading-loose">
              Tomorrowland · Love Tomorrow · TIME · Financial Times · Bloomberg · Forbes · Monocle · Vanity Fair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInstitutionalEnvironments;
