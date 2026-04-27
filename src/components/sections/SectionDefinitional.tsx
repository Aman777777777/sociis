const SectionDefinitional = () => {
  return (
    <section className="py-24 text-center border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-primary"></div>
            <p className="font-sans text-[10px] font-medium tracking-[0.3em] text-primary uppercase">
              What SociisGroup is
            </p>
            <div className="w-8 h-px bg-primary"></div>
          </div>
          <h2 className="font-display font-light text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug tracking-tight">
            SociisGroup is the independent institution for individuals and communities committed to a <em className="text-primary italic">more sustainable</em> standard of behaviour. For the leaders, founders, citizens and collectives whose conduct already anticipates the world that has to come.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SectionDefinitional;
