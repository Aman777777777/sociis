import { Link } from "react-router-dom";
import SociisSymbol from "./SociisSymbol";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <SociisSymbol size={24} className="text-foreground sm:hidden" />
              <SociisSymbol size={28} className="text-foreground hidden sm:block" />
              <span className="font-sans text-sm sm:text-base tracking-wide-brand text-foreground font-light">
                SOCIIS<sup className="text-xs">™</sup>
              </span>
            </Link>
            <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-xs">
              A sovereign independent behavioural institution turning sustainable behaviour into global Impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm sm:text-base tracking-wide-brand text-foreground mb-4 sm:mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/#impact" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="/#experiences" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="/#house" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  House
                </a>
              </li>
              <li>
                <a href="/#culture" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Culture
                </a>
              </li>
              <li>
                <a href="/#access" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Access
                </a>
              </li>
              <li>
                <Link to="/who-is-inside" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Who Is Inside
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-sm sm:text-base tracking-wide-brand text-foreground mb-4 sm:mb-6">
              LEGAL
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/privacy-policy" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="font-sans text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <p className="font-sans text-sm text-muted-foreground mt-6 sm:mt-8">
              Sociis are the people. SociisGroup is the governing institute.
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-2">
              SociisGroup™, Benefit Corporation.
              Brussels, Belgium.
            </p>
          </div>
        </div>

        {/* Operations Statement */}
        <div className="pt-8 pb-6 border-t border-border">
          <p className="font-sans text-base text-muted-foreground max-w-3xl">
            We operate on standards (SBS), measurement (BEE), public learning (House), culture, and sovereign alliances to embed accountable conduct into institutions and organisations.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <p className="font-sans text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} SociisGroup™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
