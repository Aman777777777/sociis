const SectionWorlds = () => {
  const worlds = [
    {
      title: "Sustainability",
      description: "Boards, governance, systems, long-term incentives. Where SBS™ turns intent into accountable behaviour.",
    },
    {
      title: "Hospitality",
      description: "Environments where conduct is visible under pressure, from singular tables to global immersions.",
    },
    {
      title: "Humanity",
      description: "Culture, story, philanthropy, education. Because saving the planet means nothing if we forget the people on it.",
    },
  ];

  return (
    <section id="worlds" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {worlds.map((world, index) => (
            <div key={world.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="font-sans font-light text-2xl text-foreground tracking-brand mb-6">
                {world.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {world.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWorlds;
