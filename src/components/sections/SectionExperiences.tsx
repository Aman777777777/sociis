import experienceDinner from "@/assets/experience-dinner.jpg";
import experienceGala from "@/assets/experience-gala.jpg";
import experienceFestival from "@/assets/experience-festival.jpg";

const SectionExperiences = () => {
  const experiences = [
    {
      name: "The 22",
      subtitle: "Leadership Table",
      description: "One table. One conversation. Leadership clarity.",
      image: experienceDinner,
    },
    {
      name: "The 64",
      subtitle: "A curated boutique gathering",
      description: "An intentionally limited circle where culture and conduct meet.",
      image: experienceGala,
    },
    {
      name: "The 300",
      subtitle: "Immersive cultural experience",
      description: "Where light, sound and story converge to amplify behaviour at scale. In collaboration with Love Tomorrow, a We Are One World experience, on the Tomorrowland premises.",
      image: experienceFestival,
    },
  ];

  return (
    <section id="experiences" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Curated Gatherings
            </p>
            <h2 className="font-sans font-light text-4xl md:text-5xl text-foreground tracking-tight mb-6">
              Sociis Experiences™
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-20 mb-20">
            {experiences.map((exp, index) => (
              <div 
                key={exp.name} 
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center opacity-0 animate-[fade-in_0.8s_ease-out_forwards]`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Image - alternating sides */}
                <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105 rounded-2xl"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Decorative line */}
                  <div className={`absolute top-1/2 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-8 h-px bg-accent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${index % 2 === 1 ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}></div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                  <span className="inline-block text-accent text-base tracking-widest mb-3 opacity-60">
                    0{index + 1}
                  </span>
                  <h3 className="font-accent text-3xl md:text-4xl text-foreground italic mb-2 hover:text-accent transition-colors duration-300">
                    {exp.name}
                  </h3>
                  <p className="text-base text-muted-foreground tracking-wide mb-4">
                    {exp.subtitle}
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                  {/* Animated underline */}
                  <div className={`mt-6 h-px bg-border overflow-hidden ${index % 2 === 1 ? 'ml-auto' : ''}`} style={{ width: '60px' }}>
                    <div className="h-full w-full bg-accent transform -translate-x-full animate-[slide-right_2s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.3}s` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Humanity in Action Section */}
          <div className="opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
            <div className="relative mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent"></div>
                <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
                  Purpose in Practice
                </p>
              </div>
              <h3 className="font-accent text-2xl md:text-3xl text-foreground italic mb-2">
                Humanity in Action
              </h3>
              <p className="text-body text-muted-foreground max-w-lg">
                Behaviour translated into lived responsibility through culture and aligned humanitarian collaborations.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-20 pt-12 border-t border-border/50 opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
            <div className="flex items-start gap-6">
              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-accent to-transparent mt-3"></div>
              <div>
                <p className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-4">
                  These are not "events".
                </p>
                <p className="text-body text-muted-foreground italic">
                  They are environments engineered to test and reinforce sustainable behaviour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe for slide animation */}
      <style>{`
        @keyframes slide-right {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default SectionExperiences;
