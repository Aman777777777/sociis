import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// Import team photos
import jeremie from "@/assets/team/jeremie.png";
import chantal from "@/assets/team/chantal.png";
import olivier from "@/assets/team/olivier.png";
import debbie from "@/assets/team/debbie.png";
import wycliff from "@/assets/team/wycliff.jpg";
import vasja from "@/assets/team/vasja.png";
import dimitri from "@/assets/team/dimitri.png";
import dominique from "@/assets/team/dominique.png";
import najat from "@/assets/team/najat.png";
import erick from "@/assets/team/erick.jpg";
import ash from "@/assets/team/ash.jpg";
import sarah from "@/assets/team/sarah.jpg";
import morare from "@/assets/team/morare.png";
import mat from "@/assets/team/mat.jpeg";
import rudi from "@/assets/team/rudi.png";
import jay from "@/assets/team/jay.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: "founder" | "council" | "advisor" | "executive" | "ally";
}

const teamMembers: TeamMember[] = [
  // Founder
  {
    name: "Jeremie",
    role: "Founder, SOCIIS™",
    image: jeremie,
    category: "founder"
  },
  // Ethical Council
  {
    name: "Chantal",
    role: "Ethical Council Member",
    image: chantal,
    category: "council"
  },
  {
    name: "Najat Rizk",
    role: "Ethical Council Member",
    image: najat,
    category: "council"
  },
  // Executive Board
  {
    name: "Debbie",
    role: "Executive Board",
    image: debbie,
    category: "executive"
  },
  {
    name: "Wycliff Omondi",
    role: "Director, Strategic Engagements",
    image: wycliff,
    category: "executive"
  },
  {
    name: "Morare",
    role: "Strategic Engagements",
    image: morare,
    category: "executive"
  },
  // Trusted Advisors
  {
    name: "Olivier",
    role: "Strategic Advisor",
    image: olivier,
    category: "advisor"
  },
  {
    name: "Vasja",
    role: "Trusted Advisor",
    image: vasja,
    category: "advisor"
  },
  {
    name: "Dimitri",
    role: "Strategic Partner",
    image: dimitri,
    category: "advisor"
  },
  {
    name: "Erick",
    role: "Trusted Advisor",
    image: erick,
    category: "advisor"
  },
  {
    name: "Ash",
    role: "Trusted Advisor",
    image: ash,
    category: "advisor"
  },
  {
    name: "Jay Weiser",
    role: "Trusted Advisor",
    image: jay,
    category: "advisor"
  },
  {
    name: "Mat Raes",
    role: "Trusted Advisor",
    image: mat,
    category: "advisor"
  },
  {
    name: "Rudi",
    role: "Trusted Advisor",
    image: rudi,
    category: "advisor"
  },
  // Cultural & Humanity Allies
  {
    name: "Dominique Debecker",
    role: "Cultural & Humanity Ally",
    image: dominique,
    category: "ally"
  },
  {
    name: "Sarah McArthur",
    role: "Cultural & Humanity Ally",
    image: sarah,
    category: "ally"
  },
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <div 
      className="group opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative overflow-hidden mb-4 aspect-square bg-muted/30 w-[140px]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="font-sans text-foreground text-sm font-medium mb-0.5 group-hover:text-accent transition-colors duration-300">
        {member.name}
      </h3>
      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
        {member.role}
      </p>
    </div>
  );
};

const WhoIsInside = () => {
  const founders = teamMembers.filter(m => m.category === "founder");
  const council = teamMembers.filter(m => m.category === "council");
  const executives = teamMembers.filter(m => m.category === "executive");
  const advisors = teamMembers.filter(m => m.category === "advisor");
  const allies = teamMembers.filter(m => m.category === "ally");

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="font-accent text-xl md:text-2xl text-foreground italic max-w-xl opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
            It is not about how many. It is about how aligned.
          </p>
        </div>
      </section>

      {/* Founder & Institute */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-10">
            Founder & Institute
          </h2>
          <div className="flex flex-wrap gap-8">
            {founders.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            <span className="text-foreground">SociisGroup™</span> — Benefit Corporation, Brussels
          </p>
        </div>
      </section>

      {/* Ethical Council */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-2">
            Sociis Ethical Council™
          </h2>
          <p className="font-sans text-xs text-muted-foreground/70 mb-10">
            The independent guardians of the LIME Code™ and SBS™ deployment.
          </p>
          <div className="flex flex-wrap gap-8">
            {council.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-10">
            Executive Board
          </h2>
          <div className="flex flex-wrap gap-8">
            {executives.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Advisors */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-10">
            Trusted Advisors & Allies
          </h2>
          <div className="flex flex-wrap gap-8">
            {advisors.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Humanity Allies */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-10">
            Cultural & Humanity Allies
          </h2>
          <div className="flex flex-wrap gap-8">
            {allies.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-4">
            To connect with the network, request access on the main page.
          </p>
          <Link
            to="/#access"
            className="inline-flex items-center gap-2 font-sans text-sm text-foreground hover:text-accent transition-colors group"
          >
            <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            Request Access
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhoIsInside;
