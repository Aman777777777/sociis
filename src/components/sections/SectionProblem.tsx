import problemImage from "@/assets/problem-texture.jpg";

const SectionProblem = () => {
  return (
    <section id="problem" className="py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl">
          {/* Image */}
          <div className="relative group order-2 lg:order-1 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={problemImage}
                alt="Structural fracture, the governance gap"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/30"></div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-body-lg text-foreground mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
              The global system measures emissions, capital, performance and risk.
              <br />
              It does not measure <span className="relative inline-block">
                <span className="relative z-10">behaviour</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
              </span>.
            </p>

            <div className="space-y-3 mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.15s_forwards]">
              <p className="text-body text-muted-foreground flex items-center gap-3">
                <span className="w-2 h-px bg-accent"></span>
                Institutions face a legitimacy crisis driven by conduct, not reporting.
              </p>
              <p className="text-body text-muted-foreground flex items-center gap-3">
                <span className="w-2 h-px bg-accent"></span>
                Leadership credibility erodes under pressure.
              </p>
              <p className="text-body text-muted-foreground flex items-center gap-3">
                <span className="w-2 h-px bg-accent"></span>
                Sustainability remains declarative, not behavioural.
              </p>
            </div>

            <div className="mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.25s_forwards]">
              <p className="text-body text-muted-foreground">
                <span className="font-semibold text-foreground">Why now:</span> AI accelerates output faster than ethics can govern it. ESG regulation enters the enforcement era. Stakeholder scrutiny shifts from disclosure to conduct. The decade ahead will measure how leaders behave, not what they report.
              </p>
            </div>

            <p className="font-accent text-2xl text-foreground italic mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.35s_forwards]">
              Behaviour is the missing "B" in ESG.
            </p>

            <p className="text-body text-muted-foreground opacity-0 animate-[fade-in_0.8s_ease-out_0.45s_forwards]">
              SociisGroup builds the infrastructure to make it measurable, teachable and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProblem;
