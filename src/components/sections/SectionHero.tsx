import SociisSymbol from "../SociisSymbol";

const SectionHero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <h1 className="font-sans font-extralight text-4xl md:text-5xl lg:text-6xl text-foreground tracking-brand leading-tight mb-8">
              SOCIIS<sup className="text-lg">™</sup>
            </h1>
            <p className="font-accent text-2xl md:text-3xl text-foreground font-light italic mb-8">
              A private society turning sustainable behaviour into global Impact.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              We bring together leaders across Sustainability, Hospitality and Humanity
              to influence one billion people by 2030.
            </p>
            <p className="text-body text-muted-foreground mb-10">
              We do not sell a club.
              <br />
              We sell <span className="text-foreground font-medium">Impact</span> — behavioural, cultural and institutional.
            </p>
            <a
              href="#access"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-wide text-foreground border-b border-primary pb-1 hover:text-primary transition-colors group"
            >
              <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              Request Access
            </a>
          </div>

          {/* Right: Abstract visual / Symbol */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <SociisSymbol size={280} className="text-foreground opacity-10" faint />
              <div className="absolute inset-0 flex items-center justify-center">
                <SociisSymbol size={120} className="text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
