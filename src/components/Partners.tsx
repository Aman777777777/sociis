import { useEffect, useRef, useState } from "react";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Partner company names from SociisGroup
  const partners = [
    "Synergy-W",
    "APLANET",
    "Impact Hub",
    "UN Global Compact",
    "B Corp",
    "World Economic Forum",
    "McKinsey & Company",
    "Deloitte",
  ];

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="py-24 lg:py-32 bg-cream-dark"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <span className="font-sans text-xs tracking-luxury text-primary uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light">
            Our <span className="italic text-primary">Distinguished</span> Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className={`flex items-center justify-center p-6 lg:p-8 bg-background border border-border hover:border-primary transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-serif text-lg lg:text-xl text-muted-foreground text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
