const SectionWorlds = () => {
  const worlds = [
    {
      title: "Sustainability",
      description: "Governance, incentive structures, accountability over the long term. The Sociis Behavioural Standard converts institutional intent into verifiable behavioural conduct. What institutions report is no longer sufficient. How they behave is now the standard.",
    },
    {
      title: "Hospitality",
      description: "Controlled environments where leadership behaviour becomes visible under pressure. From sovereign gatherings to global immersions, the institutions SociisGroup engages with provide the physical ground where conduct is observed, tested and shaped.",
    },
    {
      title: "Humanity",
      description: "Sustainability carries institutional legitimacy only when humanity remains at its centre. Culture and humanitarian initiatives anchor the institutional mission. Behaviour that serves only the institution is incomplete. Behaviour that serves humanity endures.",
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
