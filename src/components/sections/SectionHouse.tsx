const SectionHouse = () => {
  return (
    <section id="house" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Connection
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground tracking-tight mb-6">
            Sociis House™
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="text-body text-muted-foreground mb-8">
            Sociis House™ is where Sociis stay connected, through conversations, signals and shared narratives.
          </p>

          <p className="text-body text-muted-foreground mb-10">
            Not education. Behaviour in motion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.sociis.house/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-base tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Enter Sociis House
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHouse;
