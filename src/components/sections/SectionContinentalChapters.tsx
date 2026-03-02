const SectionContinentalChapters = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Continental Chapters — From 2027 Onward
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="text-body text-muted-foreground mb-12">
            Beyond the Founding Season, SociisGroup establishes sovereign chapters in selected regions.
          </p>

          <div className="space-y-10 mb-12">
            <div>
              <h3 className="font-sans text-lg text-foreground font-medium mb-1">
                Southern Africa Chapter
              </h3>
              <p className="font-sans text-sm text-foreground mb-2">The 22 & The 64</p>
              <p className="text-body text-muted-foreground">
                Aligned with sustainability leadership, hospitality excellence and continental economic dialogue.
              </p>
            </div>

            <div>
              <h3 className="font-sans text-lg text-foreground font-medium mb-1">
                Middle East Chapter
              </h3>
              <p className="font-sans text-sm text-foreground mb-2">The 22 & The 64</p>
              <p className="text-body text-muted-foreground">
                A sovereign cross-sector room bridging Europe, Africa and the Gulf through behavioural governance dialogue.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-body text-muted-foreground mb-2">
              Chapters are introduced only when anchoring and institutional readiness are secured.
            </p>
            <p className="text-body text-muted-foreground">
              SociisGroup establishes chapters.
              <br />
              It does not tour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContinentalChapters;
