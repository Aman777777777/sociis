import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamGrid from "@/components/TeamGrid";

const Team = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-charcoal text-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-sans text-xs tracking-luxury text-gold uppercase mb-4 block animate-fade-in">
              Who Is Inside
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 animate-fade-in-up">
              Meet the <span className="text-gold italic">Visionaries</span> Behind Our Society
            </h1>
            <p className="font-sans text-lg text-cream/70 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Our leadership team brings together decades of experience in
              sustainability, hospitality, and human-centered business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <TeamGrid />
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 lg:py-32 bg-cream-dark">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light mb-6">
            Join Our <span className="italic text-primary">Distinguished</span> Culture
          </h2>
          <p className="font-sans text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for exceptional leaders who share our vision
            for a more sustainable and human-centered future.
          </p>
          <a
            href="/#request"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-elegant uppercase hover:bg-accent transition-colors"
          >
            Request Access
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Team;
