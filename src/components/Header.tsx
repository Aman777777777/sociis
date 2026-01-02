import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import sociisLogo from "@/assets/sociis-logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Impact", href: "/#impact" },
    { name: "Experiences", href: "/#experiences" },
    { name: "House", href: "/#house" },
    { name: "Network", href: "/#network" },
    { name: "Collections", href: "/#collections" },
    { name: "Media", href: "/#media" },
    { name: "Who's Inside", href: "/who-is-inside", isPage: true },
    { name: "Access", href: "/#access" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      // If not on home page, navigate to home first then scroll
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={sociisLogo} 
              alt="Sociis Group" 
              className="h-10 w-auto brightness-0 invert-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-sans text-base tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-sans text-base tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* House CTA - Primary */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://www.sociis.house/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-sans text-base tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Join Sociis House
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm py-8 px-6 animate-fade-in border-t border-border">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-sans text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-sans text-lg text-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href="https://www.sociis.house/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-sans text-lg hover:bg-foreground/90 transition-colors mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Sociis House
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
