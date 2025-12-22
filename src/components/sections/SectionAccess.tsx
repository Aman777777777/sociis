const SectionAccess = () => {
  return (
    <section id="access" className="py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-accent text-2xl text-foreground italic mb-8">
            You already lead.
            <br />
            The question is how.
          </p>

          <p className="text-body text-muted-foreground mb-8">
            At SOCIIS™, you join a society that treats behaviour as the foundation of Impact,
            and an institute building the standard the world has been missing.
          </p>

          <p className="text-body text-muted-foreground mb-12">
            Access is by request, reviewed for alignment and values,
            approved by invitation.
          </p>

          <a
            href="mailto:access@sociisgroup.com"
            className="inline-flex items-center gap-3 font-sans text-base tracking-wide text-foreground border-b-2 border-primary pb-2 hover:text-primary transition-colors group"
          >
            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionAccess;
