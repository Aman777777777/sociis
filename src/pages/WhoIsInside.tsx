import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const WhoIsInside = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="font-accent text-2xl md:text-3xl text-foreground italic max-w-2xl">
            It is not about how many. It is about how aligned.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-wide-brand text-foreground mb-8">FOUNDER & INSTITUTE</h2>
          <p className="text-body text-muted-foreground">
            <span className="text-foreground font-medium">Jeremie</span> — Founder, SOCIIS™
            <br />
            <span className="text-foreground font-medium">SociisGroup™</span> — Benefit Corporation, Brussels
          </p>
        </div>
      </section>

      {/* Ethical Council */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-wide-brand text-foreground mb-4">SOCIIS ETHICAL COUNCIL™</h2>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            The independent guardians of the LIME Code™ and SBS™ deployment.
          </p>
          <p className="text-body text-muted-foreground">
            Council members to be announced.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-body text-muted-foreground mb-6">
            To connect with the network, request access on the main page.
          </p>
          <Link
            to="/#access"
            className="inline-flex items-center gap-3 font-sans text-sm text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">→</span>
            Request Access
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhoIsInside;
