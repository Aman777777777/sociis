const SectionOneBillion = () => {
  const channels = [
    {
      name: "Love Tomorrow",
      description: "The 300 Immersive Experience, in collaboration with Love Tomorrow, a We Are One World experience, on the Tomorrowland premises.",
    },
    {
      name: "Podeo",
      description: "Podeo, audio distribution at scale.",
    },
    {
      name: "Sociis Experiences",
      description: "22 · 64 · 300, controlled formats generating behavioural proof under pressure.",
    },
    {
      name: "Sociis House",
      description: "Journeys and stories scaled from sovereign gatherings to public learning.",
    },
    {
      name: "Sociis Culture",
      description: "Anthem, book, objects, cultural anchors that embed behavioural standards into daily life.",
    },
    {
      name: "Institutional Alliances",
      description: "Long-term collaborators carrying SociisGroup standards into their own institutions and cultures.",
    },
    {
      name: "Media",
      description: "TIME, Financial Times, Bloomberg, Forbes, Monocle, Vanity Fair. Translating conduct into narratives the world can see.",
    },
  ];

  return (
    <section id="onebillion" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Scale Architecture
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            How SociisGroup Reaches One Billion
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {channels.map((channel, index) => (
            <div key={channel.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <h3 className="font-sans font-medium text-body text-foreground mb-2">
                  {channel.name}
                </h3>
                <p className="text-body text-muted-foreground">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic text-left border-t border-border pt-10">
            One behavioural standard. One institutional language. One billion people by 2030.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOneBillion;
