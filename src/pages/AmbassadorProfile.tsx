import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import irisPhoto from "@/assets/team/iris-van-der-veken.jpg";

const ambassadorData: Record<string, { name: string; label: string; photo?: string; bio: string; statement: string }> = {
  "ilham-kadri": {
    name: "Dr. Ilham Kadri",
    label: "Ambassador",
    bio: "Dr. Ilham Kadri is a globally recognised industrial leader, scientist, and advocate for sustainable transformation. She has served as CEO of Solvay and held senior leadership positions across multinational organisations spanning chemicals, materials, and technology. With a doctorate in chemical engineering and decades of experience leading large-scale institutional change, she brings a unique perspective on embedding ethical conduct and sustainability into corporate governance. Her leadership is defined by scientific rigour, strategic clarity, and a deep commitment to long-term institutional responsibility.",
    statement: "Personal statement forthcoming.",
  },
  "iris-van-der-veken": {
    name: "Iris van der Veken",
    label: "Ambassador",
    photo: irisPhoto,
    bio: "Iris Van der Veken is Executive Director and Secretary General of the Watch and Jewellery Initiative 2030, co-founded by Kering and Cartier and delegated by Richemont. She is also a member of the Inclusive Leadership Council of 100 Women @ Davos.\n\nWith a background in law, public affairs, and sustainability, Iris brings over 25 years of international experience across India, China, Africa, Thailand, and Sri Lanka. Her work spans the full value chain, including human rights due diligence, decent labour, environmental standards, and traceability, with a consistent focus on sustainability as a driver of long-term business resilience.\n\nA recognised coalition builder, she has played a key role in advancing gender equality within the industry through collaborations with UN Women, particularly in gender-responsive procurement. She also served as the first Chairwoman of UN Global Compact Belgium under the Ministry of Foreign Affairs.",
    statement: "Iris Van der Veken serves as an Ambassador of SociisGroup in her personal capacity.\n\nShe believes the world requires a form of leadership that is collaborative, inclusive, and grounded in humility, courage, and purpose. For her, this shift begins with rethinking how future generations are educated and how leadership itself is developed.",
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
              {ambassador.photo && (
                <div className="relative overflow-hidden rounded-2xl mb-10 bg-muted/30 aspect-[3/4] max-w-sm">
                  <img
                    src={ambassador.photo}
                    alt={ambassador.name}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
              )}
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
                <div className="text-body text-muted-foreground leading-relaxed space-y-4">
                  {ambassador.bio.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Ambassador Statement */}
              <div className="border-t border-border pt-10">
                <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-4">
                  Ambassador Statement
                </h2>
                <div className="text-body text-foreground/80 leading-relaxed space-y-4">
                  {ambassador.statement.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
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
