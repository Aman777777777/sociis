import { Link } from "react-router-dom";
import heroEarth from "@/assets/hero-earth-new.jpg";

const Index = () => {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "hsl(36 35% 91%)" }}
    >
      {/* Faint earth background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroEarth}
          alt=""
          className="w-full h-full object-cover grayscale"
          style={{ opacity: 0.06 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-xl mx-auto animate-[fade-in-up_0.9s_ease-out_0.1s_both]">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl text-foreground mb-16 inline-block"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          SociisGroup™
        </Link>

        {/* Divider */}
        <div
          className="mx-auto mb-10 mt-8"
          style={{ width: "40px", height: "1px", background: "hsl(38 58% 39%)" }}
        />

        <h1
          className="font-display font-light leading-tight mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            color: "hsl(220 26% 10%)",
          }}
        >
          Under Maintenance
        </h1>

        <p
          className="font-sans leading-relaxed mb-4"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "1.0625rem",
            color: "hsl(220 10% 38%)",
          }}
        >
          We are currently updating the site.
        </p>

        <p
          className="font-sans leading-relaxed mb-10"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "1.0625rem",
            color: "hsl(220 10% 38%)",
          }}
        >
          SociisGroup™ — The independent behavioural institution.
        </p>

        {/* Contact */}
        <a
          href="mailto:contact@sociisgroup.com"
          className="font-sans text-sm tracking-widest uppercase transition-colors"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            color: "hsl(38 58% 39%)",
            letterSpacing: "0.15em",
          }}
        >
          contact@sociisgroup.com
        </a>
      </div>

      {/* Bottom copyright */}
      <div
        className="absolute bottom-8 left-0 right-0 text-center"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <p className="font-sans text-xs" style={{ color: "hsl(220 10% 55%)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} SociisGroup™
        </p>
      </div>
    </main>
  );
};

export default Index;
