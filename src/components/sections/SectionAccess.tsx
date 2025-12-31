const SectionAccess = () => {
  return (
    <section id="access" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
            High-Trust Entry
          </p>
          <h2 className="font-sans font-light text-3xl text-foreground tracking-brand mb-10">
            Access
          </h2>

          <p className="font-accent text-2xl text-foreground italic mb-8">
            You already lead.
            <br />
            The question is how.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            Access exists for Experiences, deeper institutional collaboration,
            and serious alignment conversations.
          </p>

          <p className="text-body text-muted-foreground mb-12">
            It is selective. There are no forms. Human judgement is the filter.
          </p>

          <div className="border-t border-border pt-10">
            <p className="text-sm text-muted-foreground mb-4">Contact</p>
            <a
              href="mailto:info@sociisgroup.com"
              className="font-sans text-foreground hover:text-primary transition-colors"
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
