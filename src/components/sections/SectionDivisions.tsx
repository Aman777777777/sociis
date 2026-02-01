const SectionDivisions = () => {
  const divisions = [
    {
      name: "Sociis Impact™",
      description: "Home of SBS™ and BEE™ — where sustainable behaviour becomes data and value.",
    },
    {
      name: "Sociis Experiences™",
      description: "The 22 · The 64 · The 300 — our private sovereign gatherings.",
    },
    {
      name: "Sociis House™",
      description: "The learning and storytelling environment distributed through strategic media collaborations, including Podeo.",
    },
    {
      name: "Sociis Culture™",
      description: "Anthem, book, apparel, objects and collaborations that carry the LIME Code™ into daily life.",
    },
  ];

  return (
    <section id="divisions" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {divisions.map((division, index) => (
            <div
              key={division.name}
              className="border-t border-border pt-6 animate-fade-in-up text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-sans font-medium text-sm sm:text-base tracking-wide text-foreground mb-2 sm:mb-3 text-left">
                {division.name}
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed text-left">
                {division.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionDivisions;
