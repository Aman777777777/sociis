import heroImage from "@/assets/hero-earth-light.jpg";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Global network of lights from space at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream font-light leading-tight mb-8 animate-fade-in-up">
            The World's Leading Private Society For{" "}
            <span className="text-gold italic">Trustworthy Leadership</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Where Sustainability, Hospitality, and Humanity reinforce each other
            to shape the behaviour of one billion people by 2030.
          </p>

          <p className="font-sans text-base text-cream/70 max-w-xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            We unite leaders who prove that trust is earned through character —
            never through performance alone.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#request"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-elegant uppercase hover:bg-gold-light transition-all duration-300 group"
            >
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
              Request Access
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
