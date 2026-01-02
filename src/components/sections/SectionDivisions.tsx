const SectionDivisions = () => {
  const divisions = [
    {
      name: "Sociis Impact™",
      description: "Home of SBS™ and BEE™ — where sustainable behaviour becomes data and value.",
    },
    {
      name: "Sociis Experiences™",
      description: "The 22 · The 64 · The 300 — our live behavioural laboratories.",
    },
    {
      name: "Sociis House™",
      description: "The learning and storytelling environment distributed through strategic media collaborations, including Podeo.",
    },
    {
      name: "Sociis Network™",
      description: "Long-term institutional collaborators carrying the language into the world.",
    },
    {
      name: "Sociis Collections™",
      description: "Anthem, book, apparel, objects and collaborations that carry the LIME Code™ into daily life.",
    },
  ];

  return (
    <section id="divisions" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8 justify-items-start text-left">
          {divisions.map((division, index) => (
            <div
              key={division.name}
              className="w-full border-t border-border pt-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-sans font-medium text-base tracking-wide text-foreground mb-3">
                {division.name}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
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
