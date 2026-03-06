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

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
                Calendar
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-16"></div>

              {/* PAST */}
              <div className="space-y-20 mb-20">
                <div>
                  <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-10">
                    Past
                  </p>

                  <div className="space-y-14">
                    <div>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                        2023
                      </p>
                      <p className="font-sans text-base text-foreground font-medium mb-1">
                        Marbella, Spain
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Puente Romano · Global Gift Foundation
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                        24 December 2025
                      </p>
                      <p className="font-sans text-base text-foreground font-medium mb-1">
                        London
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Let There Be Light™ Preview
                      </p>
                    </div>
                  </div>
                </div>

                {/* PRESENT */}
                <div>
                  <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-10">
                    Present
                  </p>

                  <div className="space-y-14">
                    {/* 22 July */}
                    <div>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                        22 July 2026
                      </p>
                      <p className="font-sans text-base text-foreground font-medium mb-1">
                        Brussels
                      </p>
                      <p className="font-sans text-sm text-foreground mb-1">
                        Corinthia Grand Hotel Astoria Brussels
                      </p>
                      <div className="mt-4 space-y-2 text-body text-muted-foreground mb-6">
                        <p>The 64</p>
                        <p>Founding Boutique Gala</p>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <a
                          href="/the-300-deck.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      <p className="text-xs text-muted-foreground/70 italic">Attendance by private confirmation only.</p>
                    </div>

                    {/* 23 July */}
                    <div>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                        23 July 2026
                      </p>
                      <p className="font-sans text-base text-foreground font-medium mb-1">
                        Belgium
                      </p>
                      <div className="mt-4 space-y-2 text-body text-muted-foreground mb-6">
                        <p>Shape Tomorrow Today™</p>
                        <p>The 300 Immersive Experience</p>
                        <p>in collaboration with Love Tomorrow</p>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <a
                          href="/the-300-deck.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
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
                    </div>

                    {/* September */}
                    <div>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                        September 2026
                      </p>
                      <p className="font-sans text-base text-foreground font-medium mb-1">
                        Madrid, Spain
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Circle Gathering
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Mandarin Oriental Madrid
                      </p>
                    </div>

                    {/* November */}
                    <div>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                        November 2026
                      </p>
                      <p className="font-sans text-base text-foreground font-medium mb-1">
                        Cape Town, South Africa
                      </p>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        Sovereign Gathering
                      </p>
                      <div className="space-y-2 text-body text-muted-foreground">
                        <p>The 22 — Sovereign Lunch</p>
                        <p>The 64 — Evening Gathering</p>
                      </div>
                    </div>

                    {/* December */}
                    <div>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                        December 2026
                      </p>
                      <p className="font-sans text-base text-foreground font-medium mb-1">
                        Abu Dhabi
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Circle Gathering
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Mandarin Oriental Abu Dhabi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORWARD */}
              <div className="mb-20">
                <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-10">
                  Forward
                </p>

                <div className="space-y-14">
                  {forwardYears.map((item) => (
                    <div key={item.year}>
                      <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-4">
                        {item.year}
                      </p>
                      <div className="space-y-2">
                        {item.events.map((evt, i) => (
                          <p key={i} className="font-sans text-sm text-muted-foreground">
                            {evt}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing */}
              <div className="pt-8 border-t border-border/50">
                <div className="space-y-4 text-body text-muted-foreground">
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
