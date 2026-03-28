const SectionWhat = () => {
  return (
    <section id="what" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            THE SYSTEM
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            How It Works
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <div className="space-y-10">
            <div>
              <p className="text-body-lg text-foreground mb-4">
                Sociis Impact builds:
              </p>
              <ul className="space-y-2">
                <li className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-accent mt-0.5">·</span>
                  SBS — the behavioural framework
                </li>
                <li className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-accent mt-0.5">·</span>
                  BEE — the behavioural intelligence platform
                </li>
              </ul>
            </div>

            <div>
              <p className="text-body-lg text-foreground mb-4">
                Sociis Culture scales:
              </p>
              <ul className="space-y-2">
                <li className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-accent mt-0.5">·</span>
                  Rooms — The 22, The 64, The 300
                </li>
                <li className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-accent mt-0.5">·</span>
                  House — continuous connection
                </li>
                <li className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-accent mt-0.5">·</span>
                  Culture — media, book, Let There Be Light
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhat;
