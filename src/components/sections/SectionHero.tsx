import { useEffect, useRef, useState, memo } from "react";
import SociisSymbol from "../SociisSymbol";
import heroEarth from "@/assets/hero-earth-new.jpg";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const SectionHero = memo(() => {
  const markRef = useRef<HTMLDivElement>(null);
  const [isMarkVisible, setIsMarkVisible] = useState(false);
  const { isMobile, shouldReduceAnimations } = useMobilePerformance();

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

  // Simplified animation classes for mobile
  const fadeInClass = shouldReduceAnimations ? "opacity-100" : "opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]";
  const fadeInDelayed = (delay: string) => 
    shouldReduceAnimations ? "opacity-100" : `opacity-0 animate-[fade-in-up_0.8s_ease-out_${delay}_forwards]`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-24 lg:pt-24 lg:pb-12 overflow-hidden">
      {/* Optimized background - reduced animations on mobile */}
      <div className="absolute inset-0">
        {/* Background image - no animation on mobile */}
        <div className={`absolute inset-0 ${!shouldReduceAnimations ? 'animate-[breathe_20s_ease-in-out_infinite]' : ''}`}>
          <img
            src={heroEarth}
            alt=""
            className="w-full h-full object-cover opacity-10 grayscale"
            loading="eager"
            decoding="async"
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80"></div>
        
        {/* Floating particles - HIDDEN on mobile for performance */}
        {!isMobile && !shouldReduceAnimations && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent/40 rounded-full"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${60 + (i % 2) * 15}%`,
                  animation: `particle-float ${10 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>
        )}
        
        {/* Animated gradient line - simplified on mobile */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent ${!shouldReduceAnimations ? 'animate-[shimmer_3s_ease-in-out_infinite]' : ''}`} style={{ backgroundSize: '200% 100%' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left: Text with staggered animations */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            {/* Animated accent line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
              <div className="w-12 h-px bg-accent animate-[shimmer_2s_ease-in-out_infinite]" style={{ backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)' }}></div>
              <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">Est. 2023</span>
            </div>
            
            <h1 
              className="font-sans font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-brand leading-tight mb-2 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]"
            >
              <span className="inline-block hover:text-accent transition-colors duration-500">SOCIIS</span>
            </h1>
            
            <p className="text-sm text-muted-foreground tracking-wide mb-2 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.3s_forwards]">
              pronounced "So-chees"
            </p>
            
            <p className="text-sm text-muted-foreground/70 italic mb-4 lg:mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.35s_forwards]">
              From Latin socius: ally, companion, one who stands with another.
            </p>
            
            <p 
              className="text-body-lg text-foreground mb-4 lg:mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]"
            >
              <span className="font-medium">SociisGroup™</span> is a sovereign independent behavioural institution and benefit corporation. It builds behavioural infrastructure for sustainability, hospitality and humanity, making Impact at Scale real and accountable.
            </p>
            <p 
              className="text-body text-muted-foreground mb-8 lg:mb-10 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards]"
            >
              SociisGroup operates on standards (SBS), measurement (BEE), public learning (House), culture, and sovereign alliances to embed accountable conduct into institutions and organisations.
            </p>
            {/* Join button removed - layout balanced with existing content */}
          </div>

          {/* Right: Minimal symbol with subtle animation */}
          <div className="flex flex-col items-center justify-center order-2 lg:order-2 py-4 lg:py-0">
            <div className="relative opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
              {/* Main symbol - clean, minimal - responsive */}
              <div className="relative">
                <SociisSymbol size={140} className="text-foreground/80 sm:hidden" animated />
                <SociisSymbol size={200} className="text-foreground/80 hidden sm:block lg:hidden" animated />
                <SociisSymbol size={300} className="text-foreground/80 hidden lg:block" animated />
              </div>
            </div>
            
            {/* The Mark explanation - responsive */}
            <div 
              ref={markRef}
              className={`mt-6 lg:mt-8 text-center max-w-xs sm:max-w-sm px-4 transition-all duration-1000 ease-out ${
                isMarkVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p className={`text-sm sm:text-base tracking-widest text-muted-foreground uppercase mb-3 sm:mb-4 transition-all duration-700 delay-200 ${
                isMarkVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                THE MARK
              </p>
              <div className={`text-sm sm:text-base text-muted-foreground/80 leading-relaxed space-y-1 transition-all duration-700 delay-500 ${
                isMarkVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <p>Two complete individuals, equal, side by side.</p>
                <p>No one above, no one below.</p>
                <p>Impact created with people, not on top of people.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
          <div className="flex flex-col items-center gap-2 text-muted-foreground group cursor-pointer">
            <span className="text-sm tracking-widest group-hover:text-accent transition-colors duration-300">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-[scroll-line_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
});

SectionHero.displayName = "SectionHero";

export default SectionHero;