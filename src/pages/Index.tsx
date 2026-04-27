const Index = () => {
  return (
    <main
      className="min-h-screen bg-background flex flex-col items-center justify-center px-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* SG Mark */}
      <div className="mb-10 flex flex-col items-center gap-5">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" stroke="#9F7D2A" strokeWidth="1.2" fill="none" />
          <circle cx="24" cy="24" r="17" stroke="#9F7D2A" strokeWidth="0.6" strokeDasharray="2 4" fill="none" />
          <line x1="24" y1="8" x2="24" y2="40" stroke="#0F1624" strokeWidth="1.5" strokeLinecap="square" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="#0F1624" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.01em",
            color: "#0F1624",
          }}
        >
          SociisGroup<sup style={{ fontSize: "0.4em", color: "#9F7D2A", verticalAlign: "super" }}>™</sup>
        </p>
      </div>

      {/* Divider */}
      <div style={{ width: "44px", height: "1px", background: "#9F7D2A", marginBottom: "40px" }} />

      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 400,
          lineHeight: 1.15,
          color: "#0F1624",
          textAlign: "center",
          maxWidth: "560px",
          marginBottom: "24px",
          letterSpacing: "-0.01em",
        }}
      >
        Under Maintenance.
      </h1>

      {/* Body */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "#4A4A3A",
          textAlign: "center",
          maxWidth: "440px",
          marginBottom: "48px",
        }}
      >
        The institution is currently undergoing scheduled updates. We will return shortly.
      </p>

      {/* Contact */}
      <a
        href="mailto:info@sociisgroup.com"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#9F7D2A",
          textDecoration: "none",
          borderBottom: "1px solid #9F7D2A",
          paddingBottom: "2px",
        }}
      >
        info@sociisgroup.com
      </a>

      {/* Footer note */}
      <p
        style={{
          position: "fixed",
          bottom: "28px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#9F7D2A",
          opacity: 0.6,
        }}
      >
        SociisGroup™ — The independent behavioural institution
      </p>
    </main>
  );
};

export default Index;

