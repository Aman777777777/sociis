import networkImage from "@/assets/network-leaders.jpg";

const SectionNetwork = () => {
  return (
    <section id="network" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Curated Connections
              </p>
              <h2 className="font-sans font-light text-4xl text-foreground tracking-tight mb-6">
                Sociis Network™
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-accent to-transparent mb-8"></div>
              <p className="font-accent text-xl text-foreground italic">
                The alliance that carries the standard.
              </p>
            </div>
            
            <div className="relative group opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
              <div className="relative overflow-hidden">
                <img
                  src={networkImage}
                  alt="Leaders in conversation"
                  className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-accent/40"></div>
            </div>
          </div>

          {/* Network Tiers */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div 
              className="relative p-8 border border-border/50 group hover:border-accent/50 transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className="font-sans font-medium text-foreground mb-2">
                The Circle™ — 100 leaders
              </h3>
              <p className="text-body text-muted-foreground mb-2">
                €15.000/year
              </p>
              <p className="font-sans text-sm text-muted-foreground/70">
                Early Circle Members retain their €2.500 rate for life.
              </p>
            </div>

            <div 
              className="relative p-8 border border-border/50 group hover:border-accent/50 transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className="font-sans font-medium text-foreground mb-2">
                Sovereign Partners — 8 seats
              </h3>
              <p className="text-body text-muted-foreground mb-2">
                €150.000/year · 4-year commitment
              </p>
              <p className="font-sans text-sm text-muted-foreground/70">
                Sector giants co-shaping SBS™ and global deployments.
              </p>
            </div>

            <div 
              className="relative p-6 border-l border-border/50 group hover:border-accent/50 transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]"
            >
              <h3 className="font-sans font-medium text-foreground mb-2">
                Trusted Advisors
              </h3>
              <p className="text-body text-muted-foreground">
                €2.500
              </p>
            </div>

            <div 
              className="relative p-6 border-l border-border/50 group hover:border-accent/50 transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]"
            >
              <h3 className="font-sans font-medium text-foreground mb-2">
                Trusted Companies
              </h3>
              <p className="text-body text-muted-foreground">
                €5.000 / 10 credits
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="flex items-center gap-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.7s_forwards]">
            <div className="w-12 h-px bg-border"></div>
            <p className="text-body text-muted-foreground">
              Every introduction is curated.
              <span className="text-foreground font-medium ml-2">Trust is the only credential.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNetwork;