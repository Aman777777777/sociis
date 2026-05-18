import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-gold/30 bg-background/80 backdrop-blur-md text-gold shadow-lg transition-all duration-500 group hover:border-gold hover:bg-background ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp 
        size={20} 
        className="transition-transform duration-300 group-hover:-translate-y-1" 
      />
      
      {/* Decorative ring */}
      <span className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
    </button>
  );
};

export default ScrollToTop;

