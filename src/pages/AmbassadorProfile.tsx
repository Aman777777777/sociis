import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ambassadorData: Record<string, { name: string; label: string; bio: string; statement: string }> = {
  "ilham-kadri": {
    name: "Dr. Ilham Kadri",
    label: "Ambassador",
    bio: "Dr. Ilham Kadri is a global industrial leader and advocate for sustainable transformation. With decades of experience at the intersection of science, governance, and corporate leadership, she has consistently championed ethical conduct and institutional accountability. Her work spans multinational organisations where she has led initiatives to embed behavioural integrity into corporate strategy at scale. As an Ambassador of SociisGroup™, she brings a rigorous, evidence-based perspective on how institutions can align profit with purpose without compromising on standards or independence.",
    statement: "Sustainability is not a programme. It is how institutions choose to behave when no one is watching. That is the standard worth building.",
  },
  "iris-van-der-veken": {
    name: "Iris van der Veken",
    label: "Ambassador",
    bio: "Iris van der Veken is a recognised voice in sustainability, responsible business, and institutional engagement. With a career dedicated to bridging industry, policy, and civil society, she has shaped frameworks that hold organisations accountable beyond disclosure. Her expertise lies in translating complex sustainability mandates into actionable institutional practice. As an Ambassador of SociisGroup™, she reinforces the institution's commitment to making the Sustainable Behavioural Standard (SBS™) a governing framework rather than a reporting exercise.",
    statement: "Standards only matter when they change how decisions are made. Everything else is documentation.",
  },
};

const AmbassadorProfile = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !ambassadorData[slug]) {
    return <Navigate to="/" replace />;
  }

  const ambassador = ambassadorData[slug];

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-2">
                {ambassador.name}
              </h1>
              <p className="font-sans text-sm text-muted-foreground tracking-wide mb-10">
                {ambassador.label}
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

              {/* Biography */}
              <div className="mb-12">
                <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-4">
                  Biography
                </h2>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {ambassador.bio}
                </p>
              </div>

              {/* Personal Statement */}
              <div className="border-t border-border pt-10">
                <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-4">
                  Personal Statement
                </h2>
                <p className="font-accent text-xl sm:text-2xl text-foreground italic leading-relaxed">
                  {ambassador.statement}
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default AmbassadorProfile;
