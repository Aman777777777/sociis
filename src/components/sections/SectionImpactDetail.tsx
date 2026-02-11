const SectionImpactDetail = () => {
  return (
    <section id="impact-detail" className="py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            Governance & Measurement
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Sociis Impact™
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

          <p className="text-body text-muted-foreground mb-8">
            Sociis Impact™ develops and governs <span className="text-foreground font-medium">SBS</span>,
            the Sustainable Behavioural Standard, the institutional framework that makes leadership conduct visible, accountable and repeatable.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            It is supported by <span className="text-foreground font-medium">BEE</span>, the Behavioural Engine of Ethics:
            a data infrastructure of signals, patterns and dashboards that tracks how leaders and institutions behave
            over time, not how they present themselves.
          </p>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic">
            Sustainable behaviour ceases to be a statement
            and becomes an accountable, institutional asset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionImpactDetail;
