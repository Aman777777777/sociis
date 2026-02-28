import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Charter = () => {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
                Governance Document
              </p>
              <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
                Institutional Charter
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

              <p className="text-body text-muted-foreground mb-10">
                The governing document that defines SociisGroup's mandate, safeguards, and institutional structure. It sets the rules that protect independence, integrity, and long-term trust.
              </p>

              <p className="font-sans text-xs text-muted-foreground mb-12">
                Version 1.0 — January 2026
              </p>

              {/* Charter Content Placeholder */}
              <div className="space-y-8 mb-16">
                <div>
                  <h2 className="font-sans text-lg text-foreground font-medium mb-4">
                    Article I — Purpose and Mandate
                  </h2>
                  <p className="text-body text-muted-foreground">
                    SociisGroup™ exists to develop, govern, and deploy the Sustainable Behavioural Standard (SBS™), making trustworthy conduct visible, accountable, and institutional. The institution operates as a sovereign independent behavioural institution, free from external governance capture.
                  </p>
                </div>

                <div>
                  <h2 className="font-sans text-lg text-foreground font-medium mb-4">
                    Article II — Institutional Independence
                  </h2>
                  <p className="text-body text-muted-foreground">
                    SociisGroup maintains sovereign independence from political, commercial, and ideological influence. All collaborations, revenue streams, and institutional decisions are governed by internal mandate and the LIME Code™.
                  </p>
                </div>

                <div>
                  <h2 className="font-sans text-lg text-foreground font-medium mb-4">
                    Article III — Governance Structure
                  </h2>
                  <p className="text-body text-muted-foreground">
                    Authority, oversight, and executive responsibility are intentionally separated. The Board provides strategic direction. The Council safeguards ethical conduct. Trusted Advisors offer independent, non-binding guidance.
                  </p>
                </div>

                <div>
                  <h2 className="font-sans text-lg text-foreground font-medium mb-4">
                    Article IV — Ethical Framework
                  </h2>
                  <p className="text-body text-muted-foreground">
                    The LIME Code™ serves as the ethical and behavioural architecture of the institution. It governs inner conduct under pressure and the exercise of power in relation to others and institutions.
                  </p>
                </div>

                <div>
                  <h2 className="font-sans text-lg text-foreground font-medium mb-4">
                    Article V — Safeguards
                  </h2>
                  <p className="text-body text-muted-foreground">
                    No individual, collaboration, or commercial interest may compromise the integrity of SBS™, the independence of BEE™, or the ethical mandate of the LIME Code. Deviations are subject to Council review.
                  </p>
                </div>
              </div>

              {/* Download */}
              <div className="pt-8 border-t border-border">
                <a
                  href="/charter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-base tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Charter;
