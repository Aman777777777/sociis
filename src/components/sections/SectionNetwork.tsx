import networkImage from "@/assets/network-space.jpg";

const SectionNetwork = () => {
  return (
    <section id="network" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Curated Connections
              </p>
              <h2 className="font-sans font-light text-4xl text-foreground tracking-tight mb-6">
                Sociis Network™
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-accent to-transparent mb-8"></div>
              <p className="font-accent text-xl text-foreground italic">
                The alliance that carries the language into institutions.
              </p>
            </div>
            
            <div className="relative group opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={networkImage}
                  alt="Leaders in conversation"
                  className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-accent/40"></div>
            </div>
          </div>

          {/* Network Description */}
          <div className="max-w-2xl opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
            <p className="text-body text-muted-foreground mb-8">
              Engagement requires a significant commitment and is discussed after alignment.
            </p>
          </div>

          {/* Closing */}
          <div className="flex items-center gap-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
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
