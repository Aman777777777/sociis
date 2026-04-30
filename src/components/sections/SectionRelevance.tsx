const SectionRelevance = () => {
  const reasons = [
    {
      title: "The standard you hold",
      body: "You already lead to a more sustainable standard than the one the world currently rewards. SociisGroup is the institution that names that standard and stands with you in it."
    },
    {
      title: "The risk you carry",
      body: "Your governance, reputational and compliance risk is behavioural before it is legal. We operate at the source, before the disclosure."
    },
    {
      title: "The credibility you build",
      body: "Your credibility is not what you say. It is how you behave. SociisGroup holds the frame that makes that credibility verifiable."
    },
    {
      title: "The peers you stand with",
      body: "In a Room, you sit next to people who have made the same commitment. The product is not the Room. It is who is in it."
    },
    {
      title: "The institution you help build",
      body: "SBS is a framework in formation. Those who stand with it now shape what it becomes. That is a form of legacy that cannot be bought later."
    },
    {
      title: "The growth that follows",
      body: "Individuals who shift their behaviour first lead lives and companies that compound first. SociisGroup is the standard against which it becomes possible."
    }
  ];

  const tiers = [
    {
      name: "Sovereign Partners",
      meta: "Apex · Flag Holders",
      cap: "Eight institutions. The flag holders.",
      color: "border-primary bg-primary/5",
      accent: "text-primary"
    },
    {
      name: "Founding Partners",
      meta: "Annual · Category Visibility",
      cap: "Four categories. Visible all year.",
      color: "border-border",
      accent: "text-foreground"
    },
    {
      name: "Circle Members",
      meta: "Annual · Practitioners",
      cap: "Twenty-two individuals.",
      color: "border-border",
      accent: "text-foreground"
    }
  ];

  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mono-kicker mb-6">Why you engage</div>
        <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground mb-8">
          What you carry.
        </h2>
        <div className="rule mb-12"></div>
        <p className="text-body text-muted-foreground max-w-2xl mb-16">
          You lead an institution but your conduct is your own. What follows is why individuals at the altitude of real responsibility engage with SociisGroup.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-x-16 sm:gap-y-20 mb-32">
          {reasons.map((item) => (
            <div key={item.title} className="space-y-4">
              <h3 className="font-display text-2xl text-foreground font-medium">{item.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-24 border-t border-border">
          <div className="mb-16">
            <div className="mono-kicker mb-6">How to participate</div>
            <h3 className="font-display font-light text-3xl sm:text-4xl text-foreground mb-4">
              Six ways in. One institution.
            </h3>
            <p className="text-body text-muted-foreground max-w-2xl italic">
              What you are buying is <span className="text-primary not-italic font-medium">proximity</span>. To the Founder. To the Rooms. To the peers who carry the same standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className={`p-8 border rounded-2xl space-y-6 ${tier.color}`}>
                <div className="space-y-1">
                  <p className="font-sans text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">{tier.meta}</p>
                  <h4 className="font-display text-2xl text-foreground">{tier.name}</h4>
                </div>
                <div className="text-3xl font-display font-light text-primary">{tier.price}</div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">{tier.cap}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-12 italic">
            Request access at info@sociisgroup.com · All amounts stated exclusive of 21% Belgian VAT
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionRelevance;
