import { Link } from "react-router-dom";
import { useState } from "react";

const ambassadors = [
  {
    name: "Dr. Ilham Kadri",
    slug: "ilham-kadri",
    label: "Ambassador",
  },
  {
    name: "Iris van der Veken",
    slug: "iris-van-der-veken",
    label: "Ambassador",
  },
];

const SectionAmbassadors = () => {
  return (
    <section id="ambassadors" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Institutional Voice
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Ambassadors
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {ambassadors.map((ambassador) => (
              <AmbassadorCard key={ambassador.slug} ambassador={ambassador} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AmbassadorCard = ({
  ambassador,
}: {
  ambassador: (typeof ambassadors)[number];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/ambassadors/${ambassador.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl mb-5 bg-muted/30 aspect-[3/4]">
        {/* Placeholder portrait area */}
        <div className="w-full h-full flex items-center justify-center bg-muted/20">
          <div className="w-24 h-24 rounded-full bg-muted/40 flex items-center justify-center">
            <span className="text-muted-foreground/50 text-xs tracking-widest uppercase">
              Portrait
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-sans text-lg text-foreground font-medium mb-1 group-hover:text-accent transition-colors duration-300">
        {ambassador.name}
      </h3>
      <p className="font-sans text-sm text-muted-foreground tracking-wide">
        {ambassador.label}
      </p>
      <p className="font-sans text-xs text-muted-foreground/70 mt-2 italic">
        Personal statement forthcoming.
      </p>
    </Link>
  );
};

export default SectionAmbassadors;
