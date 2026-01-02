import { Link } from "react-router-dom";
import SociisSymbol from "./SociisSymbol";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <SociisSymbol size={28} className="text-foreground" />
              <span className="font-sans text-base tracking-wide-brand text-foreground font-light">
                SOCIIS<sup className="text-xs">™</sup>
              </span>
            </Link>
            <p className="font-sans text-base text-muted-foreground max-w-xs">
              A private society turning sustainable behaviour into global Impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-base tracking-wide-brand text-foreground mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/#impact" className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="/#experiences" className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="/#network" className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors">
                  Network
                </a>
              </li>
              <li>
                <Link to="/who-is-inside" className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors">
                  Who Is Inside
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-base tracking-wide-brand text-foreground mb-6">
              LEGAL
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-base text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
            <p className="font-sans text-sm text-muted-foreground mt-8">
              SOCIIS™ is the society. SociisGroup™ is the governing institute.
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-2">
              SociisGroup™ — Benefit Corporation
              <br />
              Brussels, Belgium
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} SociisGroup™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
