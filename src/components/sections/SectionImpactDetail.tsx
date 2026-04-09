const SectionImpactDetail = () => {
  return (
    <section id="impact-detail" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Behavioural Intelligence
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            BEE. Behavioural Engine of Ethics.
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="text-body text-muted-foreground mb-12">
            BEE is a behavioural interface layer powered by AI that helps individuals discover the gap between their judgement and the behaviour they are actually producing.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="border-t border-border/50 pt-6">
              <p className="font-sans font-medium text-foreground mb-2">Detect</p>
              <p className="text-body text-muted-foreground">
                Identifies tension between intention and action.
              </p>
            </div>
            <div className="border-t border-border/50 pt-6">
              <p className="font-sans font-medium text-foreground mb-2">Guide</p>
              <p className="text-body text-muted-foreground">
                Reframes conduct in real time.
              </p>
            </div>
            <div className="border-t border-border/50 pt-6">
              <p className="font-sans font-medium text-foreground mb-2">Improve</p>
              <p className="text-body text-muted-foreground">
                Builds stronger behavioural patterns over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionImpactDetail;
