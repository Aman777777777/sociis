const SectionOneBillion = () => {
  const channels = [
    {
      name: "Love Tomorrow",
      description: "The 300 Immersive Experience — in collaboration with Love Tomorrow, a We Are One World experience, on the Tomorrowland premises.",
    },
    {
      name: "Podeo",
      description: "Podeo — audio distribution at scale.",
    },
    {
      name: "Sociis Experiences™",
      description: "22 · 64 · 300 formats on four continents — proof under pressure, captured and shared.",
    },
    {
      name: "Sociis House™",
      description: "Journeys and stories that can serve hundreds of thousands, then millions.",
    },
    {
      name: "Sociis Collections™",
      description: "Anthem, book, objects — emotional anchors in daily life.",
    },
    {
      name: "Sociis Network™",
      description: "Long-term institutional collaborators carrying this language into the world.",
    },
    {
      name: "Media",
      description: "TIME, Financial Times, Bloomberg, Forbes, Inc., Monocle, Vanity Fair and others translate this into narratives the world can see.",
    },
  ];

  return (
    <section id="onebillion" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-12">
            How We Reach One Billion
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {channels.map((channel, index) => (
              <div key={channel.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <h3 className="font-sans font-medium text-sm text-foreground mb-2">
                  {channel.name}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-accent text-xl text-foreground italic text-center border-t border-border pt-10">
            This is how one behavioural language
            can reach one billion people by 2030.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOneBillion;
