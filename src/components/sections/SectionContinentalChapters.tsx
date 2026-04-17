const SectionContinentalChapters = () => {
  const anchors = [
    {
      year: "2026",
      city: "Cape Town, South Africa",
      venue: "Mount Nelson, A Belmond Hotel"
    },
    {
      year: "2028",
      city: "Rabat, Kingdom of Morocco",
      venue: "Royal Mansour Rabat"
    },
    {
      year: "2029",
      city: "Abu Dhabi, United Arab Emirates",
      venue: "Mandarin Oriental Emirates Palace"
    },
    {
      year: "2030",
      city: "New York, United States",
      venue: "Aman New York"
    }
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground tracking-tight mb-6">
            Continental Chapters
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="text-body text-muted-foreground mb-16">
            SociisGroup establishes sovereign chapters in selected regions.
          </p>

          {/* Confirmed Institutional Anchors */}
          <p className="text-xs sm:text-sm tracking-[0.25em] text-muted-foreground uppercase mb-10">
            Confirmed Institutional Anchors
          </p>

          <div className="space-y-14 mb-16">
            {anchors.map((a, i) => (
              <div key={i}>
                <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">
                  {a.year}
                </p>
                <p className="font-sans text-base text-foreground font-medium mb-1">
                  {a.city}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {a.venue}
                </p>
              </div>
            ))}
          </div>

          {/* Doctrinal Close */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-body text-muted-foreground mb-4">
              Expansion follows institutional anchoring and sovereign readiness — never visibility for its own sake.
            </p>
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
