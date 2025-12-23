import SociisSymbol from "../SociisSymbol";

const SectionHero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text with staggered animations */}
          <div>
            <h1 
              className="font-sans font-extralight text-4xl md:text-5xl lg:text-6xl text-foreground tracking-brand leading-tight mb-8 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]"
            >
              SOCIIS<sup className="text-lg">™</sup>
            </h1>
            <p 
              className="font-accent text-2xl md:text-3xl text-foreground font-light italic mb-8 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]"
            >
              A private society turning sustainable behaviour into global Impact.
            </p>
            <p 
              className="text-body text-muted-foreground mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards]"
            >
              We bring together leaders across Sustainability, Hospitality and Humanity
              to influence one billion people by 2030.
            </p>
            <p 
              className="text-body text-muted-foreground mb-10 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]"
            >
              We do not sell a club.
              <br />
              We sell <span className="text-foreground font-medium">Impact</span> — behavioural, cultural and institutional.
            </p>
            <a
              href="#access"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-wide text-foreground border-b border-primary pb-1 hover:text-primary transition-colors group opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards]"
            >
              <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              Request Access
            </a>
          </div>

          {/* Right: Animated symbol with floating effect */}
          <div className="flex items-center justify-center">
            <div className="relative opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
              {/* Outer faint ring with slow pulse */}
              <div className="absolute inset-0 flex items-center justify-center animate-[pulse-slow_4s_ease-in-out_infinite]">
                <SociisSymbol size={320} className="text-foreground opacity-5" faint />
              </div>
              
              {/* Middle ring with gentle float */}
              <div className="animate-[float_6s_ease-in-out_infinite]">
                <SociisSymbol size={280} className="text-foreground opacity-10" faint />
              </div>
              
              {/* Inner symbol with subtle rotate */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-[breathe_8s_ease-in-out_infinite]">
                  <SociisSymbol size={120} className="text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-[scroll-line_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
