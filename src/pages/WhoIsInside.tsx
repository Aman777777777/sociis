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
import memberNew from "@/assets/team/member-new.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: "founder" | "council" | "advisor" | "executive";
}

const teamMembers: TeamMember[] = [
  {
    name: "Jeremie",
    role: "Founder, SOCIIS™",
    image: jeremie,
    category: "founder"
  },
  {
    name: "Chantal",
    role: "Ethical Council Member",
    image: chantal,
    category: "council"
  },
  {
    name: "Olivier",
    role: "Strategic Advisor",
    image: olivier,
    category: "advisor"
  },
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
    name: "Dominique Debecker",
    role: "Cultural & Humanity Ally",
    image: dominique,
    category: "advisor"
  },
  {
    name: "Team Member",
    role: "Strategic Engagements",
    image: memberNew,
    category: "executive"
  }
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <div 
      className="group opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-muted">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
      </div>
      <h3 className="font-sans text-foreground font-medium mb-1 group-hover:text-primary transition-colors duration-300">
        {member.name}
      </h3>
      <p className="font-sans text-sm text-muted-foreground">
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

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="font-accent text-2xl md:text-3xl text-foreground italic max-w-2xl opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
            It is not about how many. It is about how aligned.
          </p>
        </div>
      </section>

      {/* Founder & Institute */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-wide-brand text-foreground mb-12">
            FOUNDER & INSTITUTE
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
          <p className="text-body text-muted-foreground mt-8">
            <span className="text-foreground font-medium">SociisGroup™</span> — Benefit Corporation, Brussels
          </p>
        </div>
      </section>

      {/* Ethical Council */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-wide-brand text-foreground mb-4">
            SOCIIS ETHICAL COUNCIL™
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-12">
            The independent guardians of the LIME Code™ and SBS™ deployment.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {council.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-wide-brand text-foreground mb-12">
            EXECUTIVE BOARD
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Advisors */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-wide-brand text-foreground mb-12">
            TRUSTED ADVISORS & ALLIES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-body text-muted-foreground mb-6">
            To connect with the network, request access on the main page.
          </p>
          <Link
            to="/#access"
            className="inline-flex items-center gap-3 font-sans text-sm text-foreground hover:text-primary transition-colors group"
          >
            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
            Request Access
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhoIsInside;
