const SectionInvestors = () => {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <div className="font-sans text-[10px] font-medium tracking-[0.3em] text-primary uppercase mb-6">
              For those who allocate capital
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl text-background leading-tight">
              What you see first.
            </h2>
            <div className="w-12 h-px bg-primary mt-8 mb-0"></div>
          </div>
          <div className="space-y-6">
            <p className="text-body-lg text-background/90 leading-relaxed">
              You see institutional behaviour shifting before the numbers do. You see conduct reprice risk before disclosure catches up. <strong className="text-background">SociisGroup builds the infrastructure that makes that signal legible, manageable, and defensible.</strong>
            </p>
            <p className="text-body text-background/70 leading-relaxed">
              For family offices, European investment funds, institutional capital and the principals who allocate it personally, behavioural infrastructure is the layer that sits upstream of every ESG, disclosure and governance framework already in place.
            </p>
            <p className="text-body text-background/70 leading-relaxed">
              <strong className="text-background">One billion individuals and communities behaving more sustainably is also a <span className="text-primary italic">new peer group</span>.</strong> A blue ocean of consumption, capital allocation and political will. The individuals who shape this layer first, and the companies they lead, are the ones whose growth, revenue and credibility compound from it.
            </p>
            <p className="font-display italic text-xl text-primary pt-4">
              The question is no longer what an institution discloses, but how it behaves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInvestors;
