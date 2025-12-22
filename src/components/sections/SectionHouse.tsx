const SectionHouse = () => {
  return (
    <section id="house" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-10">
            Sociis House™
          </h2>

          <p className="font-accent text-2xl text-foreground italic mb-8">
            Sociis House™ is where Impact scales.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            Leaders and learners enter journeys, watch films, listen to deep conversations,
            and reflect using the LIME Code™ as compass.
          </p>

          <p className="text-body text-muted-foreground">
            In collaboration with <span className="text-foreground font-medium">Podeo</span> and their 350M audience,
            House content — audio, stories, reflections —
            reaches far beyond the private rooms where it was born.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionHouse;
