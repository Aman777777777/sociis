import problemImage from "@/assets/problem-texture.jpg";

const SectionProblem = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl">
          {/* Image */}
          <div className="relative group order-2 lg:order-1 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={problemImage}
                alt="The governance gap"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/30"></div>
          </div>

          {/* Content — Fix 3: ESG line removed from here, Fix 4: measurement line updated */}
          <div className="order-1 lg:order-2">
            <p className="text-body text-muted-foreground mb-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.15s_forwards]">
              We do not measure sustainability outcomes.
            </p>
            <p className="text-body text-muted-foreground opacity-0 animate-[fade-in_0.8s_ease-out_0.25s_forwards]">
              We improve the decisions that create them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProblem;
