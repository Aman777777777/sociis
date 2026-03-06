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
              <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
                Founding Moment
              </p>
              <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
                Calendar
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-16"></div>

              {/* SIGNAL */}
              <div className="space-y-20 mb-20">
                <div>
                  <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    Signal
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                    2023
                  </p>
                  <p className="font-sans text-base text-foreground font-medium mb-1">
                    Marbella, Spain
                  </p>
                  <p className="font-sans text-sm text-foreground mb-1">
                    Puente Romano
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    In collaboration with Global Gift Foundation
                  </p>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>The behavioural thesis that would become SociisGroup™ was first articulated publicly within a philanthropic gathering.</p>
                    <p>It was not yet an institution.<br />It was a signal.</p>
                    <p>No more, no less.</p>
                    <p>We do not overstate.<br />We do not inflate.<br />We state precisely.</p>
                  </div>
                </div>

                {/* FORMATION */}
                <div>
                  <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    Formation
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                    2024–2025
                  </p>
                  <p className="font-sans text-base text-foreground font-medium mb-6">
                    London · Paris · Brussels
                  </p>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>The institutional architecture takes form, governance, culture, behavioural infrastructure.</p>
                  </div>
                </div>

                {/* CULTURAL EXPRESSION */}
                <div>
                  <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    Cultural Expression
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                    24 December 2025
                  </p>
                  <p className="font-sans text-base text-foreground font-medium mb-1">
                    London
                  </p>
                  <p className="font-sans text-sm text-muted-foreground mb-6">
                    Let There Be Light™ Preview
                  </p>
                  <div className="space-y-4 text-body text-muted-foreground">
                    <p>In collaboration with Jean Bosco Safari and aligned cultural collaborators.</p>
                    <p>Behaviour translated into cultural form.<br />The institutional thesis entered narrative distribution.</p>
                  </div>
                </div>

                {/* INAUGURATION */}
                <div>
                  <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    Institutional Inauguration
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                    22 July 2026
                  </p>
                  <p className="font-sans text-base text-foreground font-medium mb-1">
                    Brussels, Belgium
                  </p>
                  <p className="font-sans text-sm text-foreground mb-1">
                    Corinthia Grand Hotel Astoria Brussels
                  </p>
                  <p className="font-sans text-sm text-muted-foreground mb-6">
                    The 64, Founding Boutique Gala
                  </p>
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
                  <p className="font-sans text-sm tracking-[0.25em] text-muted-foreground uppercase mb-2">
                    Institutional Inauguration
                  </p>
                  <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-3">
                    23 July 2026
                  </p>
                  <p className="font-sans text-base text-foreground font-medium mb-1">
                    Tomorrowland Premises, Belgium
                  </p>
                  <p className="font-sans text-sm text-muted-foreground mb-6">
                    Shape Tomorrow Today™, The 300
                  </p>
                  <div className="space-y-4 text-body text-muted-foreground mb-6">
                    <p>The Institutional Inauguration establishes the centre of gravity.</p>
                  </div>
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
              </div>

              {/* CONTINENTAL ANCHORING */}
              <div className="mb-20">
                <p className="text-xs sm:text-sm tracking-[0.25em] text-muted-foreground uppercase mb-10">
                  Continental Anchoring
                </p>

                <div className="space-y-14">
                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">2026</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Cape Town, South Africa</p>
                    <p className="font-sans text-sm text-muted-foreground">Mount Nelson, A Belmond Hotel</p>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">2027</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Cape Town, South Africa</p>
                    <p className="font-sans text-sm text-muted-foreground">Mount Nelson, A Belmond Hotel</p>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">2028</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Rabat, Kingdom of Morocco</p>
                    <p className="font-sans text-sm text-muted-foreground">Royal Mansour Rabat</p>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">2029</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">Abu Dhabi, United Arab Emirates</p>
                    <p className="font-sans text-sm text-muted-foreground">Mandarin Oriental Emirates Palace</p>
                  </div>

                  <div>
                    <p className="font-sans text-2xl sm:text-3xl font-light text-foreground mb-2">2030</p>
                    <p className="font-sans text-base text-foreground font-medium mb-1">New York, United States</p>
                    <p className="font-sans text-sm text-muted-foreground">Aman New York</p>
                  </div>
                </div>
              </div>

              {/* Doctrinal Close */}
              <div className="pt-8 border-t border-border/50">
                <div className="space-y-4 text-body text-muted-foreground">
                  <p>Expansion follows institutional anchoring and sovereign readiness, never visibility for its own sake.</p>
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
