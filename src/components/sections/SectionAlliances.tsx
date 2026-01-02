import alliancesImage from "@/assets/alliances-venue.jpg";

const SectionAlliances = () => {
  const alliances = [
    {
      category: "Venues & Hospitality",
      partners: "The Connaught · Club TwentyTwo · Orient Express · Corinthia Brussels · Mandarin Oriental · La Réserve Geneva · Aman · Hôtel de Paris Monte-Carlo · Le Meurice Paris"
    },
    {
      category: "Culture & Media",
      partners: "Tomorrowland · Love Tomorrow · Podeo · TIME · Financial Times · Bloomberg · Forbes · Inc. · Monocle · Vanity Fair"
    },
    {
      category: "Humanity & Philanthropy",
      partners: "Global Gift Foundation · Under One Sky · The Diana Award · We Do It Together"
    }
  ];

  return (
    <section id="alliances" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="relative mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
            <div className="relative overflow-hidden aspect-[21/9] rounded-2xl">
              <img
                src={alliancesImage}
                alt="Luxury venue interior"
                className="w-full h-full object-cover grayscale hover:grayscale-[50%] transition-all duration-700 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-16">
                  <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3">
                    Strategic Partners
                  </p>
                  <h2 className="font-sans font-light text-3xl md:text-5xl text-foreground tracking-tight mb-4">
                    Selected Collaborations
                    <br />
                    <span className="text-accent">&</span> Allies
                  </h2>
                </div>
              </div>
            </div>
            
            {/* Decorative corner */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-accent/30"></div>
          </div>

          {/* Description */}
          <p className="text-body text-muted-foreground mb-12 max-w-2xl opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            We collaborate with institutions whose environments, audiences and ethics magnify sustainable behaviour.
          </p>

          {/* Alliance Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {alliances.map((alliance, index) => (
              <div 
                key={alliance.category}
                className="group opacity-0 animate-[fade-in_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative pb-4 mb-4 border-b border-border/50 group-hover:border-accent/50 transition-colors duration-500">
                  <h3 className="font-sans text-base tracking-[0.2em] text-foreground uppercase">
                    {alliance.category}
                  </h3>
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  {alliance.partners}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="pt-8 border-t border-border/50 flex items-center gap-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
            <div className="w-12 h-px bg-accent"></div>
            <p className="text-body text-muted-foreground italic">
              Each collaboration exists for one purpose: to amplify Impact through behaviour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAlliances;