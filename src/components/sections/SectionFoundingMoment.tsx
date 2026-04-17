const SectionFoundingMoment = () => {
  const milestones = [
    {
      year: "2023",
      label: "Origin",
      location: "Marbella, Spain",
      venue: "Puente Romano",
      collaboration: "In collaboration with Global Gift Foundation",
      paragraphs: [
        "The behavioural thesis that would become SociisGroup™ was first articulated publicly within a philanthropic gathering.",
        "It was not yet an institution.\nIt was a signal.",
        "No more, no less.",
        "We do not overstate.\nWe do not inflate.\nWe state precisely."
      ]
    },
    {
      year: "2024–2025",
      label: "Formation",
      location: "London · Paris · Brussels",
      venue: null,
      collaboration: null,
      paragraphs: [
        "The institutional architecture takes form — governance, culture, behavioural infrastructure."
      ]
    },
    {
      year: "22 July 2026",
      label: "Institutional Inauguration",
      location: "Brussels",
      venue: "Corinthia Grand Hotel Astoria Brussels",
      collaboration: null,
      paragraphs: [
        "The 64 — Founding Boutique Gala"
      ],
      showButtons: true
    },
    {
      year: "23 July 2026",
      label: "Institutional Inauguration",
      location: "Belgium",
      venue: null,
      collaboration: null,
      paragraphs: [
        "Shape Tomorrow Today™ — The 300",
        "The Institutional Inauguration establishes the centre of gravity."
      ],
      showButtons: true
    }
  ];

  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Founding Moment
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground tracking-tight mb-6">
            Institutional Arc
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-16"></div>

          <div className="space-y-20">
            {milestones.map((m, i) => (
              <div key={i}>
                <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-2">
                  {m.label}
                </p>
                <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                  {m.year}
                </p>
                <p className="font-sans text-base text-foreground font-medium mb-1">
                  {m.location}
                </p>
                {m.venue && (
                  <p className="font-sans text-sm text-foreground mb-1">
                    {m.venue}
                  </p>
                )}
                {m.collaboration && (
                  <p className="text-sm text-muted-foreground mb-6">
                    {m.collaboration}
                  </p>
                )}
                {!m.venue && !m.collaboration && <div className="mb-6" />}

                <div className="space-y-4">
                  {m.paragraphs.map((p, j) => (
                    <p key={j} className="text-body text-muted-foreground whitespace-pre-line">
                      {p}
                    </p>
                  ))}
                </div>

                {(m as any).showButtons && (
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-4 mb-3">
                      <a
                        href="/SociisGroup_Institutional_Charter (2).pdf"
                        download="SociisGroup_Institutional_Charter.pdf"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                      >
                        Download Institutional Deck
                      </a>
                      <a
                        href="mailto:access@sociisgroup.com?subject=Alignment%20Conversation%20Request"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                      >
                        Request Alignment Conversation
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground/70 italic">
                      Attendance by private confirmation only.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFoundingMoment;
