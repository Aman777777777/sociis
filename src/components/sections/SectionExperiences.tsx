import { memo } from "react";
import experienceDinner from "@/assets/experience-dinner.jpg";
import experienceGala from "@/assets/experience-gala.jpg";
import experienceFestival from "@/assets/experience-festival.jpg";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const SectionExperiences = memo(() => {
  const { shouldReduceAnimations } = useMobilePerformance();
  
  const experiences = [
    {
      name: "The 22",
      subtitle: "Leadership Table",
      description: "One table. One conversation. Leadership conduct calibrated in private.",
      image: experienceDinner,
    },
    {
      name: "The 64",
      subtitle: "Sovereign Gathering",
      description: "An intentionally limited environment where institutional conduct and culture converge.",
      image: experienceGala,
    },
    {
      name: "The 300",
      subtitle: "Immersive Format",
      description: "The Sustainable Behavioural Standard (SBS™) deployed at cultural scale. In collaboration with Love Tomorrow, a We Are One World experience, on the Tomorrowland premises.",
      image: experienceFestival,
    },
  ];

  return (
    <section id="experiences" className="py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
              Controlled Environments
            </p>
            <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
              Sociis Experiences
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 sm:space-y-20 mb-12 sm:mb-20">
            {experiences.map((exp, index) => (
              <div 
                key={exp.name} 
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ${
                  shouldReduceAnimations ? 'opacity-100' : 'opacity-0 animate-[fade-in_0.8s_ease-out_forwards]'
                }`}
                style={shouldReduceAnimations ? undefined : { animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      loading="lazy"
                      decoding="async"
                      className={`w-full aspect-[4/3] object-cover grayscale rounded-2xl ${
                        shouldReduceAnimations 
                          ? '' 
                          : 'hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105'
                      }`}
                    />
                    {!shouldReduceAnimations && (
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </div>
                  {!shouldReduceAnimations && (
                    <div className={`absolute top-1/2 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-8 h-px bg-accent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${index % 2 === 1 ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}></div>
                  )}
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                  <span className="inline-block text-accent text-sm sm:text-base tracking-widest mb-2 sm:mb-3 opacity-60">
                    0{index + 1}
                  </span>
                  <h3 className={`font-accent text-2xl sm:text-3xl md:text-4xl text-foreground italic mb-2 ${
                    shouldReduceAnimations ? '' : 'hover:text-accent transition-colors duration-300'
                  }`}>
                    {exp.name}
                  </h3>
                  <p className="text-body text-muted-foreground tracking-wide mb-4">
                    {exp.subtitle}
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed max-w-md mb-4">
                    {exp.description}
                  </p>
                  <a
                    href={`/${exp.name.toLowerCase().replace(/\s/g, '-')}-deck.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    View Experience Deck (PDF)
                  </a>
                  <div className={`mt-6 h-px bg-border overflow-hidden ${index % 2 === 1 ? 'ml-auto' : ''}`} style={{ width: '60px' }}>
                    {shouldReduceAnimations ? (
                      <div className="h-full w-full bg-accent"></div>
                    ) : (
                      <div className="h-full w-full bg-accent transform -translate-x-full animate-[slide-right_2s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.3}s` }}></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Humanity in Action */}
          <div className={shouldReduceAnimations ? '' : 'opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]'}>
            <div className="relative mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-accent"></div>
                <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase">
                  Purpose in Practice
                </p>
              </div>
              <h3 className="font-accent text-xl sm:text-2xl md:text-3xl text-foreground italic mb-2">
                Humanity in Action
              </h3>
              <p className="text-body text-muted-foreground max-w-lg">
                Behaviour translated into lived responsibility through culture and aligned humanitarian collaborations.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-border/50 opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="hidden md:block w-12 sm:w-16 h-px bg-gradient-to-r from-accent to-transparent mt-3"></div>
              <div>
                <p className="text-body text-muted-foreground italic">
                  Environments engineered to test and reinforce sustainable behaviour under institutional conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-right {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
});

SectionExperiences.displayName = "SectionExperiences";

export default SectionExperiences;
