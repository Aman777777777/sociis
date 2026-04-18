import { memo } from "react";
import heroEarth from "@/assets/hero-earth-new.jpg";

const SectionHero = memo(() => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Faint earth background — preserved */}
      <div className="absolute inset-0">
        <img
          src={heroEarth}
          alt=""
          className="w-full h-full object-cover opacity-8 grayscale"
          style={{ opacity: 0.08 }}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1
          className="font-display font-light text-6xl sm:text-7xl md:text-8xl text-foreground tracking-tight mb-8 opacity-0 animate-[fade-in-up_0.9s_ease-out_0.1s_forwards]"
        >
          SociisGroup™
        </h1>
        <p
          className="font-sans text-lg sm:text-xl text-muted-foreground opacity-0 animate-[fade-in-up_0.9s_ease-out_0.35s_forwards]"
        >
          The independent behavioural institution
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards]">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-[scroll-line_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
});

SectionHero.displayName = "SectionHero";

export default SectionHero;