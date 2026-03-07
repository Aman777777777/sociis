import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Calendar = () => {
  const forwardYears = [
    { year: "2027", events: ["May — London, UK", "July — Brussels, Belgium", "October — Cape Town, South Africa"] },
    { year: "2028", events: ["May — London, UK", "July — Brussels, Belgium", "October — Cape Town, South Africa"] },
    { year: "2029", events: ["May — Abu Dhabi, UAE", "July — Brussels, Belgium", "October — Cape Town, South Africa"] },
    { year: "2030", events: ["May — New York, USA", "July — Brussels, Belgium", "October — Cape Town, South Africa"] },
  ];

  const ActionButtons = () => (
    <div className="mt-6">
      <div className="flex flex-wrap gap-4 mb-3">
        <a
          href="/the-300-deck.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
        >
          Download Institutional Deck
        </a>
        <a
          href="mailto:access@sociisgroup.com?subject=Alignment%20Conversation%20Request"
          className="inline-flex items-center px-6 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
        >
          Request Alignment Conversation
        </a>
      </div>
      <p className="text-xs text-muted-foreground/70 italic">Attendance by private confirmation only.</p>
    </div>
  );

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 sm:pb-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">

              {/* Page Title */}
              <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
                Calendar
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-20"></div>

              {/* ─── PAST ─── */}
              <div className="mb-24">
                <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase mb-16">
                  Past
                </p>

                <div className="space-y-20">
                  {/* Formation */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-3">
                      Formation
                    </p>
                    <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                      2023
                    </p>
                    <p className="text-base text-foreground font-medium">Marbella, Spain</p>
                    <p className="text-sm text-foreground">Puente Romano</p>
                    <p className="text-sm text-muted-foreground mt-1 mb-6">
                      In collaboration with Global Gift Foundation
                    </p>
                    <p className="text-body text-muted-foreground">
                      The behavioural thesis that would become SociisGroup™ was first articulated publicly within a philanthropic gathering.
                    </p>
                  </div>

                  {/* Institutional Development */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-3">
                      Institutional Development
                    </p>
                    <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                      2024–2025
                    </p>
                    <p className="text-base text-foreground font-medium mb-6">Brussels, Belgium</p>
                    <p className="text-body text-muted-foreground">
                      The institutional architecture takes form, including governance, culture, and behavioural infrastructure.
                    </p>
                  </div>

                  {/* Cultural Expression */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-3">
                      Cultural Expression
                    </p>
                    <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                      December 2025
                    </p>
                    <p className="text-base text-foreground font-medium">London, UK</p>
                    <p className="text-sm text-muted-foreground mt-1 mb-6">
                      Let There Be Light™ Preview
                    </p>
                    <div className="space-y-3 text-body text-muted-foreground">
                      <p>In collaboration with Jean Bosco Safari and aligned cultural collaborators.</p>
                      <p>
                        Behaviour translated into cultural form.<br />
                        The institutional thesis entered narrative distribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── PRESENT ─── */}
              <div className="mb-24">
                <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase mb-16">
                  Present
                </p>

                <div className="space-y-20">
                  {/* 22 July */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-3">
                      Institutional Inauguration
                    </p>
                    <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                      22 July 2026
                    </p>
                    <p className="text-base text-foreground font-medium">Brussels, Belgium</p>
                    <p className="text-sm text-foreground">Corinthia Grand Hotel Astoria Brussels</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      The 64 — Founding Boutique Gala
                    </p>
                    <ActionButtons />
                  </div>

                  {/* 23 July */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-3">
                      Institutional Inauguration
                    </p>
                    <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                      23 July 2026
                    </p>
                    <p className="text-base text-foreground font-medium mb-1">Belgium</p>
                    <p className="text-sm text-foreground">Shape Tomorrow Today™</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      The 300 Immersive Experience<br />
                      In collaboration with Love Tomorrow
                    </p>
                    <ActionButtons />
                  </div>

                  {/* September */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-3">
                      Circle
                    </p>
                    <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                      September 2026
                    </p>
                    <p className="text-base text-foreground font-medium">Madrid, Spain</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Circle Gathering<br />
                      Mandarin Oriental Madrid
                    </p>
                  </div>

                  {/* December */}
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-3">
                      Sovereign
                    </p>
                    <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                      December 2026
                    </p>
                    <p className="text-base text-foreground font-medium">Cape Town, South Africa</p>
                  </div>
                </div>
              </div>

              {/* ─── FORWARD ─── */}
              <div className="mb-24">
                <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase mb-4">
                  Forward
                </p>
                <p className="text-body text-muted-foreground mb-16">
                  Future institutional rhythm.
                </p>

                <div className="space-y-14">
                  {forwardYears.map((item) => (
                    <div key={item.year}>
                      <p className="font-accent text-2xl sm:text-3xl font-light text-foreground mb-4">
                        {item.year}
                      </p>
                      <div className="space-y-2">
                        {item.events.map((evt, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {evt}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ─── CLOSING ─── */}
              <div className="pt-10 border-t border-border/50 text-center">
                <div className="space-y-2 text-body-lg text-muted-foreground">
                  <p>Expansion follows institutional readiness and sovereign alignment.</p>
                  <p>SociisGroup establishes anchored environments.<br />It does not tour.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Calendar;
