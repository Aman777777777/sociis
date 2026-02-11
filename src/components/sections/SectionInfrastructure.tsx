const SectionInfrastructure = () => {
  const pillars = [
    {
      label: "STANDARD",
      name: "SBS™",
    },
    {
      label: "MEASUREMENT",
      name: "BEE™",
    },
    {
      label: "EDUCATION",
      name: "House™",
    },
    {
      label: "SOVEREIGN",
      name: "Alliances",
    },
  ];

  return (
    <section id="infrastructure" className="py-4 sm:py-6">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.name}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2">
                {pillar.label}
              </p>
              <p className="font-sans font-medium text-lg sm:text-xl text-foreground">
                {pillar.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionInfrastructure;
