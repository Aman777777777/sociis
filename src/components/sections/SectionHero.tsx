import { useEffect, useRef, useState } from "react";
import SociisSymbol from "../SociisSymbol";
import heroEarth from "@/assets/hero-earth-new.jpg";

const SectionHero = () => {
  const markRef = useRef<HTMLDivElement>(null);
  const [isMarkVisible, setIsMarkVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMarkVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (markRef.current) {
      observer.observe(markRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Background image with slow zoom */}
        <div className="absolute inset-0 animate-[breathe_20s_ease-in-out_infinite]">
          <img
            src={heroEarth}
            alt=""
            className="w-full h-full object-cover opacity-10 grayscale"
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${60 + (i % 3) * 10}%`,
                animation: `particle-float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" style={{ backgroundSize: '200% 100%' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text with staggered animations */}
          <div>
            {/* Animated accent line */}
            <div className="flex items-center gap-4 mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
              <div className="w-12 h-px bg-accent animate-[shimmer_2s_ease-in-out_infinite]" style={{ backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)' }}></div>
              <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">Est. 2023</span>
            </div>
            
            <h1 
              className="font-sans font-extralight text-5xl md:text-6xl lg:text-7xl text-foreground tracking-brand leading-tight mb-8 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]"
            >
              <span className="inline-block hover:text-accent transition-colors duration-500">SOCIIS</span>
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
              We build <span className="text-foreground font-medium relative inline-block group">
                Impact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span> — behavioural, cultural and institutional.
            </p>
            <a
              href="#house"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-wide px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group opacity-0 animate-[fade-in-up_0.8s_ease-out_1s_forwards]"
            >
              Join Sociis House
            </a>
          </div>

          {/* Right: Minimal symbol with subtle animation */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
              {/* Single subtle outer ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full border border-foreground/5"></div>
              </div>
              
              {/* Outer faint symbol - very subtle drift */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="animate-[drift_12s_ease-in-out_infinite]">
                  <SociisSymbol size={380} faint className="text-foreground/30" />
                </div>
              </div>
              
              {/* Main symbol - clean, minimal with animated ellipses */}
              <div className="relative">
                <SociisSymbol size={300} className="text-foreground/80" animated />
              </div>
            </div>
            
            {/* The Mark explanation */}
            <div 
              ref={markRef}
              className={`mt-8 text-center max-w-sm transition-all duration-1000 ease-out ${
                isMarkVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p className={`text-base tracking-widest text-muted-foreground uppercase mb-3 transition-all duration-700 delay-200 ${
                isMarkVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                The Mark — ◎ II (1 | 1)
              </p>
              <p className={`text-base text-muted-foreground/80 leading-relaxed transition-all duration-700 delay-500 ${
                isMarkVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                Two complete individuals, equal, side by side. No one above, no one below. 
                Impact created with people, not on top of people.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
          <div className="flex flex-col items-center gap-2 text-muted-foreground group cursor-pointer">
            <span className="text-sm tracking-widest group-hover:text-accent transition-colors duration-300">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-[scroll-line_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;