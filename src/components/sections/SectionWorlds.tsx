const SectionWorlds = () => {
  const worlds = [
    {
      title: "Sustainability",
      description: "Governance, incentive structures, long-term accountability. SBS converts institutional intent into verifiable behavioural conduct.",
    },
    {
      title: "Hospitality",
      description: "Controlled environments where leadership behaviour is observed under pressure, from sovereign gatherings to global immersions.",
    },
    {
      title: "Humanity",
      description: "Sustainability has meaning only when humanity remains at its centre. Culture, education and philanthropy anchor the institutional mission.",
    },
  ];

  return (
    <section id="worlds" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {worlds.map((world, index) => (
            <div key={world.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="font-sans font-light text-2xl text-foreground tracking-tight mb-6">
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
