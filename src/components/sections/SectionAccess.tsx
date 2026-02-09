const SectionAccess = () => {
  return (
    <section id="access" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
            High-Trust Entry
          </p>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Access
          </h2>

          <p className="text-body text-muted-foreground mb-8">
            Access is for experiences, institutional collaboration and alignment conversations.
          </p>

          <p className="font-accent text-xl sm:text-2xl text-foreground italic mb-8">
            You already lead.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            Our role is to give you a circle, a language and a system that keeps you ahead, in presence, in pressure, in proof.
          </p>

          <p className="text-body text-muted-foreground mb-10">
            It is selective. There are no forms. Human judgement is the filter.
          </p>

          <div className="border-t border-border pt-10">
            <p className="text-body text-muted-foreground mb-4">Contact</p>
            <a
              href="mailto:info@sociisgroup.com"
              className="font-sans text-body text-foreground hover:text-primary transition-colors break-all"
            >
              info@sociisgroup.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAccess;
