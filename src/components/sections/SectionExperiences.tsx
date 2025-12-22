const SectionExperiences = () => {
  const experiences = [
    {
      name: "The 22",
      description: "One table. Twenty-two leaders. High-stakes, sovereign conversations.",
    },
    {
      name: "The 64",
      description: "Intimate, cultural evenings — hospitality as a stage for conduct.",
    },
    {
      name: "The 300",
      description: "Immersive experiences where light, sound and story merge at sites like Tomorrowland with Love Tomorrow.",
    },
  ];

  return (
    <section id="experiences" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-12">
            Sociis Experiences™
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {experiences.map((exp, index) => (
              <div key={exp.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-accent text-2xl text-foreground italic mb-4">
                  {exp.name}
                </h3>
                <p className="text-body text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-body text-muted-foreground border-t border-border pt-8">
            These are not "events".
            <br />
            They are environments engineered to test and reinforce sustainable behaviour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionExperiences;
