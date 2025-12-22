const SectionAlliances = () => {
  return (
    <section id="alliances" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-6">
            Selected Collaborations & Allies
          </h2>
          <p className="text-body text-muted-foreground mb-12">
            We collaborate with institutions whose environments, audiences and ethics magnify sustainable behaviour.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-sans text-sm tracking-wide-brand text-foreground mb-4">VENUES & HOSPITALITY</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                The Connaught · Club TwentyTwo · Orient Express · Corinthia Brussels · Mandarin Oriental · La Réserve Geneva · Aman · Hôtel de Paris Monte-Carlo · Le Meurice Paris
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm tracking-wide-brand text-foreground mb-4">CULTURE & MEDIA</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Tomorrowland · Love Tomorrow · Podeo · TIME · Financial Times · Bloomberg · Forbes · Inc. · Monocle · Vanity Fair
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm tracking-wide-brand text-foreground mb-4">HUMANITY & PHILANTHROPY</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Global Gift Foundation · Under One Sky · The Diana Award · We Do It Together
              </p>
            </div>
          </div>

          <p className="text-body text-muted-foreground border-t border-border pt-8">
            Each collaboration exists for one purpose: to amplify Impact through behaviour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAlliances;
