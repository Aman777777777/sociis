import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded border border-cream/30 flex items-center justify-center">
                <span className="text-cream font-serif text-xl font-semibold">
                  S
                </span>
              </div>
              <span className="font-serif text-xl tracking-elegant text-cream">
                <span className="font-light">sociis</span>
                <span className="font-medium">group</span>
              </span>
            </Link>
            <p className="font-sans text-sm text-cream/70 max-w-sm leading-relaxed">
              The World's Leading Private Society For Trustworthy Leadership.
              Networking with Purpose, Growth with Impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="font-sans text-sm text-cream/70 hover:text-gold transition-colors underline-hover"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="font-sans text-sm text-cream/70 hover:text-gold transition-colors underline-hover"
                >
                  Who Is Inside
                </Link>
              </li>
              <li>
                <a
                  href="#partners"
                  className="font-sans text-sm text-cream/70 hover:text-gold transition-colors underline-hover"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="font-sans text-sm text-cream/70">
              Brussels, Belgium
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/50">
            © {new Date().getFullYear()} Sociis Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="font-sans text-xs text-cream/50 hover:text-cream transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-xs text-cream/50 hover:text-cream transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
