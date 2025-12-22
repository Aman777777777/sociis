import SociisSymbol from "../SociisSymbol";

const SectionMark = () => {
  return (
    <section id="mark" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Large faint symbol */}
          <div className="flex justify-center mb-12">
            <SociisSymbol size={160} className="text-foreground" faint />
          </div>

          <p className="text-body-lg text-foreground mb-8 animate-fade-in-up">
            Our symbol is a circle with two pillars — <span className="font-medium">1 | 1</span>.
          </p>

          <p className="text-body text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Two whole individuals, equal, side by side.
            <br />
            Not one above the other.
            <br />
            Not one absorbed by the other.
          </p>

          <p className="text-body text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            That is the ethic behind SOCIIS™:
            <br />
            leaders meet as equals to create Impact,
            <br />
            not as winners and losers of a system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionMark;
