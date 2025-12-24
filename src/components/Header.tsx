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
            className="flex items-center gap-3"
          >
            <img 
              src={sociisLogo} 
              alt="Sociis Group" 
              className="h-8 w-auto invert brightness-0"
            />
            <span className="font-sans text-lg tracking-wide-brand text-foreground font-light">
              SOCIIS GROUP<sup className="text-xs">™</sup>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-sans text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
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
                  className="font-sans text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Access CTA */}
          <div className="hidden lg:block">
            <a
              href="#access"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/#access");
              }}
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Access
              <span className="text-primary">→</span>
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
                href="#access"
                className="inline-flex items-center gap-2 font-sans text-lg text-foreground hover:text-primary transition-colors mt-4 pt-4 border-t border-border"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("/#access");
                }}
              >
                Request Access
                <span className="text-primary">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
