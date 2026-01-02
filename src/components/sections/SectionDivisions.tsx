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
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-x-6 gap-y-8">
          {divisions.map((division, index) => (
            <div
              key={division.name}
              className="w-full md:w-[calc(50%-12px)] lg:w-1/5 lg:flex-1 border-t border-border pt-6 animate-fade-in-up text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-sans font-medium text-base tracking-wide text-foreground mb-3 text-left">
                {division.name}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed text-left">
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
