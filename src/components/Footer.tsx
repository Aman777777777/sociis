import { Link } from "react-router-dom";
import sociisGroupLogo from "@/assets/sociisgroup-logo.png";

const Footer = () => {
  return (
    <>
      {/* Main footer body */}
      <footer className="py-12 sm:py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6">
                <img src={sociisGroupLogo} alt="SociisGroup" className="h-8 sm:h-10 w-auto" />
              </Link>
              <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-xs">
                An independent behavioural institution changing how the world behaves.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-sans text-sm tracking-wide-brand text-foreground mb-4 sm:mb-6 uppercase">
                Explore
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: "Impact", href: "/#impact", isPage: false },
                  { label: "Culture", href: "/#culture", isPage: false },
                  { label: "Governance", href: "/governance", isPage: true },
                  { label: "Calendar", href: "/calendar", isPage: true },
                  { label: "Charter", href: "/charter", isPage: true },
                  { label: "Access", href: "/#access", isPage: false },
                ].map(({ label, href, isPage }) => (
                  <li key={label}>
                    {isPage ? (
                      <Link to={href} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {label}
                      </Link>
                    ) : (
                      <a href={href} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-sans text-sm tracking-wide-brand text-foreground mb-4 sm:mb-6 uppercase">
                Legal
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Service", href: "/terms-of-service" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link to={href} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm text-muted-foreground mt-6 sm:mt-8">
                Sociis are the people. SociisGroup is the independent behavioural institution.
              </p>
              <p className="font-sans text-sm text-muted-foreground mt-2">
                SociisGroup™, Benefit Corporation. Brussels, Belgium.
              </p>
            </div>
          </div>

          <div className="pt-8 pb-6 border-t border-border">
            <p className="font-sans text-base text-muted-foreground max-w-3xl">
              SociisGroup™ changes how the world behaves.
            </p>
          </div>
        </div>
      </footer>

      {/* Dark ink bottom bar — matches reference HTML footer */}
      <div style={{ background: "hsl(220 26% 10%)" }} className="py-10 text-center">
        <p className="font-sans text-sm" style={{ color: "rgba(244,240,232,0.7)" }}>
          © {new Date().getFullYear()} SociisGroup™
        </p>
      </div>
    </>
  );
};

export default Footer;
