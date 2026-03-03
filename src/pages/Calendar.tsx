import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Calendar = () => {
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
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

              <div className="space-y-2 text-body text-muted-foreground mb-16">
                <p>SociisGroup builds through anchored moments, not touring circuits.</p>
                <p>Signal → Proof → Structure → Scale.</p>
              </div>

              {/* PAST */}
              <div className="mb-20">
                <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-10">Past</p>

                <div className="space-y-16">
                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">2023</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Marbella, Spain</p>
                    <p className="font-sans text-sm text-muted-foreground mb-6">Puente Romano, in collaboration with Global Gift Foundation</p>
                    <div className="space-y-4 text-body text-muted-foreground">
                      <p>The behavioural thesis that would become SociisGroup™ was articulated publicly within a philanthropic environment.</p>
                      <p>It was not yet an institution.<br />It was a signal.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">24 December 2025</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">London</p>
                    <p className="font-sans text-sm text-muted-foreground mb-6">Let There Be Light™ Preview</p>
                    <div className="space-y-4 text-body text-muted-foreground">
                      <p>In collaboration with Jean Bosco Safari and aligned cultural partners.</p>
                      <p>Behaviour translated into cultural form.<br />The institutional thesis entered narrative distribution.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PRESENT */}
              <div className="mb-20">
                <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-10">Present</p>

                <div className="space-y-16">
                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">22 July 2026</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Brussels, Belgium</p>
                    <p className="font-sans text-sm text-foreground mb-1">Corinthia Grand Hotel Astoria Brussels</p>
                    <p className="font-sans text-sm text-muted-foreground mb-6">The 64, Founding Boutique Gala</p>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <a
                        href="/the-300-deck.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                      >
                        Download Institutional Deck (PDF)
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

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">23 July 2026</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Belgium</p>
                    <p className="font-sans text-sm text-muted-foreground mb-6">Shape Tomorrow Today™, The 300</p>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <a
                        href="/the-300-deck.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                      >
                        Download Institutional Deck (PDF)
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

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">October 2026</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Cape Town, South Africa</p>
                    <p className="font-sans text-sm text-foreground mb-1">Mount Nelson, A Belmond Hotel</p>
                    <p className="text-body text-muted-foreground">Africa Anchor. SociisGroup establishes its permanent Africa pillar.</p>
                  </div>
                </div>
              </div>

              {/* FORWARD */}
              <div className="mb-16">
                <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-10">Forward</p>

                <div className="space-y-10">
                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-4">2027</p>
                    <div className="space-y-2 text-body text-muted-foreground">
                      <p>May — London</p>
                      <p>July — Brussels</p>
                      <p>October — Cape Town</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-4">2028</p>
                    <div className="space-y-2 text-body text-muted-foreground">
                      <p>May — London</p>
                      <p>July — Brussels</p>
                      <p>October — Cape Town</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-4">2029</p>
                    <div className="space-y-2 text-body text-muted-foreground">
                      <p>May — Abu Dhabi</p>
                      <p>July — Brussels</p>
                      <p>October — Cape Town</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-4">2030</p>
                    <div className="space-y-2 text-body text-muted-foreground">
                      <p>May — New York</p>
                      <p>July — Brussels</p>
                      <p>October — Cape Town</p>
                    </div>
                  </div>
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
