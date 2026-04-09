import alliancesImage from "@/assets/alliances-venue.jpg";

const SectionAlliances = () => {
  return (
    <section id="alliances" className="py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="relative mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
            <div className="relative overflow-hidden aspect-[21/9] rounded-2xl">
              <img
                src={alliancesImage}
                alt="Institutional environments"
                className="w-full h-full object-cover grayscale hover:grayscale-[50%] transition-all duration-700 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>

              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-16">
                  <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3">
                    Institutional Proof
                  </p>
                  <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
                    Selected Collaborations
                    <br />
                    <span className="text-accent">&</span> Institutional Environments
                  </h2>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-accent/30"></div>
          </div>

          {/* Description */}
          <p className="text-body text-muted-foreground mb-12 max-w-2xl opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            SociisGroup collaborates with institutions whose environments, governance and ethics amplify behavioural standards at scale.
          </p>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Confirmed Institutional Locations */}
            <div className="opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
              <div className="relative pb-4 mb-4 border-b border-border/50">
                <h3 className="font-sans text-base tracking-[0.2em] text-foreground uppercase">
                  Confirmed Institutional Locations
                </h3>
              </div>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Corinthia Grand Hotel Astoria Brussels
              </p>
            </div>

            {/* Institutional Environments */}
            <div className="opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
              <div className="relative pb-4 mb-4 border-b border-border/50">
                <h3 className="font-sans text-base tracking-[0.2em] text-foreground uppercase">
                  Institutional Environments
                </h3>
              </div>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                The Connaught. La Réserve Geneva. Aman. Mandarin Oriental. Le Meurice. Hôtel de Paris Monte Carlo. Orient Express.
              </p>
            </div>

            {/* Cultural & Media Channels */}
            <div className="opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
              <div className="relative pb-4 mb-4 border-b border-border/50">
                <h3 className="font-sans text-base tracking-[0.2em] text-foreground uppercase">
                  Cultural & Media Channels
                </h3>
              </div>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Podeo
              </p>
            </div>

          </div>

          {/* Closing */}
          <div className="pt-8 border-t border-border/50 flex items-center gap-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.7s_forwards]">
            <div className="w-12 h-px bg-accent"></div>
            <p className="text-body text-muted-foreground italic">
              Each collaboration exists to amplify institutional Impact through behavioural standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAlliances;
