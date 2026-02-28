import { Link } from "react-router-dom";

const SectionCharter = () => {
  return (
    <div className="py-12 border-t border-border/50">
      <div className="max-w-3xl">
        <h3 className="font-sans text-lg text-foreground font-medium mb-4">
          Institutional Charter
        </h3>
        <p className="text-body text-muted-foreground mb-8">
          The governing document that defines SociisGroup's mandate, safeguards, and institutional structure. It sets the rules that protect independence, integrity, and long-term trust.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/charter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-sans text-base tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Read the Charter
          </Link>
          <a
            href="/charter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-sans text-base tracking-wide hover:bg-foreground hover:text-background transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionCharter;
