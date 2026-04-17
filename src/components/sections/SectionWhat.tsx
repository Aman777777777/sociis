const SectionWhat = () => {
  return (
    <section id="what" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            THE SYSTEM
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground tracking-tight mb-6">
            How It Works
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <div className="space-y-10">
            <div>
              <p className="text-body-lg text-foreground mb-4">
                Sociis Impact builds:
              </p>
              <ul className="space-y-4">
                <li className="text-body text-muted-foreground">
                  <span className="text-foreground font-medium">SBS, the Sociis Behavioural Standard.</span> SBS, the Sociis Behavioural Standard, defines the ethical and behavioural reference frame for how institutions conduct themselves.
                </li>
                <li className="text-body text-muted-foreground">
                  <span className="text-foreground font-medium">BEE, the Behavioural Engine of Ethics.</span> BEE is a behavioural interface layer powered by AI that helps individuals discover the gap between their judgement and the behaviour they are actually producing.
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
                  Rooms, The 22, The 64, The 300. Controlled environments where behaviour becomes visible and is calibrated without public exposure.
                </li>
                <li className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-accent mt-0.5">·</span>
                  House, The continuous environment where Sociis stay connected through conversations, signals and shared narratives.
                </li>
                <li className="text-body text-muted-foreground flex items-start gap-3">
                  <span className="text-accent mt-0.5">·</span>
                  Culture, Media, book, Let There Be Light. The cultural channels through which the Sociis Behavioural Standard reaches the world.
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
