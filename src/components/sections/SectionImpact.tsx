import impactImage from "@/assets/impact-leadership.jpg";

const SectionImpact = () => {
  return (
    <section id="impact" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
              What We Create
            </p>
            <p className="font-accent text-3xl md:text-4xl text-foreground italic mb-10 opacity-0 animate-[fade-in_0.8s_ease-out_0.1s_forwards]">
              Our hero product is Impact.
            </p>

            <div className="space-y-6 mb-10">
              <div className="group opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-sm mt-1.5">01</span>
                  <div>
                    <p className="text-foreground font-medium mb-1">Impact on people</p>
                    <p className="text-body text-muted-foreground">
                      How leaders behave when nobody is watching.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-sm mt-1.5">02</span>
                  <div>
                    <p className="text-foreground font-medium mb-1">Impact on institutions</p>
                    <p className="text-body text-muted-foreground">
                      How decisions are made, not just reported.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-sm mt-1.5">03</span>
                  <div>
                    <p className="text-foreground font-medium mb-1">Impact on culture</p>
                    <p className="text-body text-muted-foreground">
                      What is admired, copied and remembered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-accent opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
              <p className="text-body-lg text-foreground mb-2">
                SBS™ — the Sustainable Behavioural Standard
              </p>
              <p className="text-body text-muted-foreground">
                is the framework that makes this visible, measurable and repeatable.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative group opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
            <div className="relative overflow-hidden">
              <img
                src={impactImage}
                alt="Leadership and contemplation"
                className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l-2 border-b-2 border-accent/20"></div>
            <div className="absolute top-8 -right-4 w-8 h-px bg-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImpact;