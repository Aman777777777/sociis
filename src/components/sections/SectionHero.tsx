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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-24 lg:pt-24 lg:pb-12 overflow-hidden">
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
        
        {/* Floating particles - hidden on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Left: Text with staggered animations */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            {/* Animated accent line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
              <div className="w-12 h-px bg-accent animate-[shimmer_2s_ease-in-out_infinite]" style={{ backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--accent)), transparent)' }}></div>
              <span className="text-body-sm tracking-[0.3em] text-muted-foreground uppercase">Est. 2023</span>
            </div>
            
            {/* Position 1: SociisGroup definition */}
            <p 
              className="text-body-lg text-foreground mb-4 lg:mb-6 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]"
            >
              <span className="font-medium">SociisGroup™</span> is a private behavioural institution and benefit corporation building behavioural infrastructure for sustainability, hospitality and humanity, making Impact at Scale real and accountable.
            </p>
            
            {/* Position 2: Operations line */}
            <p 
              className="text-body text-muted-foreground mb-8 lg:mb-10 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]"
            >
              We operate on standards (SBS™), measurement (BEE™), public learning (House™), culture, and sovereign alliances to embed accountable conduct into institutions and organisations.
            </p>
            
            {/* Position 3: Sociis Explanation Block */}
            <div className="mb-8 lg:mb-10 p-6 border border-border/50 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards]">
              <h2 className="font-sans font-light text-2xl sm:text-3xl text-foreground tracking-brand mb-3">
                Sociis
              </h2>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-body-sm text-muted-foreground tracking-wide">
                  /ˈsoː.t͡ʃiːs/
                </span>
                <button
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance("so tchees");
                    utterance.rate = 0.8;
                    utterance.pitch = 1.1;
                    speechSynthesis.speak(utterance);
                  }}
                  className="p-1.5 rounded-full hover:bg-foreground/10 transition-colors"
                  aria-label="Play pronunciation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                </button>
              </div>
              <p className="text-body text-muted-foreground">
                Sociis are the people.<br />
                SociisGroup is the governing institute.
              </p>
            </div>
            
            <a
              href="#house"
              className="inline-flex items-center gap-3 font-sans text-body-sm tracking-wide px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]"
            >
              Join Sociis House
            </a>
          </div>

          {/* Right: Minimal symbol with subtle animation */}
          <div className="flex flex-col items-center justify-center order-2 lg:order-2 py-4 lg:py-0">
            <div className="relative opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
              {/* Main symbol - clean, minimal - responsive */}
              <div className="relative">
                <SociisSymbol size={140} className="text-foreground/80 sm:hidden" />
                <SociisSymbol size={200} className="text-foreground/80 hidden sm:block lg:hidden" />
                <SociisSymbol size={300} className="text-foreground/80 hidden lg:block" />
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
              <p className={`text-body-sm tracking-widest text-muted-foreground uppercase mb-2 sm:mb-3 transition-all duration-700 delay-200 ${
                isMarkVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                The Mark — ◎ II (1 | 1)
              </p>
              <p className={`text-body-sm text-muted-foreground/80 leading-relaxed transition-all duration-700 delay-500 ${
                isMarkVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                Two complete individuals, equal, side by side. No one above, no one below. 
                Impact created with people, not on top of people.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
          <div className="flex flex-col items-center gap-2 text-muted-foreground group cursor-pointer">
            <span className="text-body-sm tracking-widest group-hover:text-accent transition-colors duration-300">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-[scroll-line_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;