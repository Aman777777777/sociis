const SectionAccess = () => {
  return (
    <section id="access" className="py-24 sm:py-32 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground mb-8 leading-tight">
          Access
        </h2>

        <div className="space-y-6 max-w-2xl">
          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
            This institution is not open to everyone.
            It is open to those willing to change how they behave.
          </p>

          <p className="font-sans text-base text-muted-foreground mt-6">
            <a
              href="mailto:contact@sociisgroup.com"
              className="text-foreground hover:text-accent transition-colors"
            >
              contact@sociisgroup.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAccess;
