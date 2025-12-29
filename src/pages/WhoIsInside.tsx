import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// Import team photos - Board
import jeremie from "@/assets/team/jeremie.png";
import dominiqueD from "@/assets/team/dominique-new.jpg";
import micael from "@/assets/team/micael-new.jpg";
import abbas from "@/assets/team/abbas.jpg";
import rudi from "@/assets/team/rudi.png";
import mikkel from "@/assets/team/mikkel.jpg";

// Import team photos - Council
import sarahM from "@/assets/team/sarah-m.jpg";
import louis from "@/assets/team/louis.png";
import tim from "@/assets/team/tim.png";
import anmarrie from "@/assets/team/anmarrie.jpg";
import tatiana from "@/assets/team/tatiana.png";
import lars from "@/assets/team/lars.jpg";
import peter from "@/assets/team/peter.png";

// Import team photos - Trusted Advisors
import eva from "@/assets/team/eva.jpeg";
import olivierB from "@/assets/team/olivier-b.png";
import olivierV from "@/assets/team/olivier-v.png";
import bhavya from "@/assets/team/bhavya.png";
import jayNew from "@/assets/team/jay-new.jpeg";
import luc from "@/assets/team/luc.jpg";
import chantalNew from "@/assets/team/chantal-new.png";
import dimitriNew from "@/assets/team/dimitri-new.png";
import erikNew from "@/assets/team/erik-new.jpg";
import fei from "@/assets/team/fei.jpg";
import karim from "@/assets/team/karim.jpg";
import james from "@/assets/team/james.webp";

// Import team photos - Cultural & Charity Stewards
import tessy from "@/assets/team/tessy.jpg";
import gabriella from "@/assets/team/gabriella.jpg";
import maria from "@/assets/team/maria.png";
import nick from "@/assets/team/nick.png";
import kavita from "@/assets/team/kavita.jpg";
import maeva from "@/assets/team/maeva.png";
import jeanBosco from "@/assets/team/jean-bosco.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: "board" | "council" | "advisor" | "steward";
  imagePosition?: string;
}

const teamMembers: TeamMember[] = [
  // Board
  {
    name: "Jeremie Landweer",
    role: "Chairman & CEO SociisGroup™",
    image: jeremie,
    category: "board"
  },
  {
    name: "Dominique Debecker",
    role: "Chief Behavioural Officer (CBO)",
    image: dominiqueD,
    category: "board"
  },
  {
    name: "George Reyes",
    role: "Head of Sociis Experiences™",
    image: micael,
    category: "board",
    imagePosition: "center 30%"
  },
  {
    name: "Abbas Fasaei",
    role: "Head of Sociis Experience™",
    image: abbas,
    category: "board"
  },
  {
    name: "Rudi Plettinx",
    role: "Board Director",
    image: rudi,
    category: "board"
  },
  {
    name: "Mikkel Iversen",
    role: "Board Director",
    image: mikkel,
    category: "board"
  },

  // The Council
  {
    name: "Sarah McArthur",
    role: "Senior Advisor, Global Leadership & Strategic Partnerships",
    image: sarahM,
    category: "council"
  },
  {
    name: "Dr. Louis Klein",
    role: "Senior strategic advisor, systems leadership, governance & transformation",
    image: louis,
    category: "council"
  },
  {
    name: "Tim Sanders",
    role: "Senior Advisor for Global Philanthropy",
    image: tim,
    category: "council"
  },
  {
    name: "Annmarie Gorenc Zoran, PhD",
    role: "Dean at the Faculty of Organisation Studies",
    image: anmarrie,
    category: "council"
  },
  {
    name: "Tatjana Dragović\nAndersen, EdD",
    role: "Corporate educator, executive coach, associate professor",
    image: tatiana,
    category: "council"
  },
  {
    name: "Lars Carlstrom",
    role: "Senior Advisor, Sustainability & Strategic Growth",
    image: lars,
    category: "council"
  },
  {
    name: "Peter Somers",
    role: "Global Logistics Strategist Ex-CEO, Emirates Post",
    image: peter,
    category: "council"
  },

  // Trusted Advisors
  {
    name: "Eva Vargová",
    role: "Executive Director, Senior Advisor, Philanthropy & Social Impact",
    image: eva,
    category: "advisor"
  },
  {
    name: "Olivier Begerem",
    role: "Strategic Advisor, AI & IT Strategy",
    image: olivierB,
    category: "advisor"
  },
  {
    name: "Olivier Vanden Eynde",
    role: "Founder and CEO, Close the Gap",
    image: olivierV,
    category: "advisor"
  },
  {
    name: "Bhavya Bansal",
    role: "Executive Director, Digital Strategy, Innovation and R&D",
    image: bhavya,
    category: "advisor"
  },
  {
    name: "Jay Weiser",
    role: "Founder & CEO, Jay Weiser Consulting",
    image: jayNew,
    category: "advisor"
  },
  {
    name: "Luc Garguet-Duport",
    role: "Strategic Advisor",
    image: luc,
    category: "advisor"
  },
  {
    name: "Chantal Veevaete",
    role: "Public Company Board Member, former Fortune 10 C-Suite Executive",
    image: chantalNew,
    category: "advisor"
  },
  {
    name: "Dimitri Vantorre",
    role: "Strategic Advisor & Transformation Partner",
    image: dimitriNew,
    category: "advisor"
  },
  {
    name: "Erik Schroeven",
    role: "Senior Advisor, Business Development & Strategic Partnerships",
    image: erikNew,
    category: "advisor"
  },
  {
    name: "Fei Yu",
    role: "Investor & Advisor, Global Capital Strategy",
    image: fei,
    category: "advisor"
  },
  {
    name: "Karim Tousbih",
    role: "Strategic Advisor, Value Development & Monetization",
    image: karim,
    category: "advisor"
  },
  {
    name: "James de Gaspé Bonar",
    role: "Director, Mastery Coaching",
    image: james,
    category: "advisor"
  },

  // Cultural & Charity Stewards
  {
    name: "Dr. Tessy Ojo, CBE",
    role: "Chief Executive Officer, The Diana Award",
    image: tessy,
    category: "steward"
  },
  {
    name: "Gabriella Wright",
    role: "Actress / Humanitarian",
    image: gabriella,
    category: "steward"
  },
  {
    name: "María Bravo",
    role: "Philanthroprenuer · Actress",
    image: maria,
    category: "steward"
  },
  {
    name: "Nick Ede",
    role: "Branding & Culture Expert",
    image: nick,
    category: "steward"
  },
  {
    name: "Kavita Rathore",
    role: "CSR Director and Board Member of Blessing Foundation",
    image: kavita,
    category: "steward"
  },
  {
    name: "Maëva Fischer",
    role: "Singer",
    image: maeva,
    category: "steward"
  },
  {
    name: "Jean Bosco Safari",
    role: "Singer",
    image: jeanBosco,
    category: "steward"
  },
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <div 
      className="group opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative overflow-hidden mb-4 w-[140px] h-[140px] aspect-square bg-muted/30 rounded-xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105 rounded-xl"
          style={{ objectPosition: member.imagePosition || "center" }}
        />
      </div>
      <h3 className="font-sans text-foreground text-sm font-medium mb-0.5 group-hover:text-accent transition-colors duration-300 whitespace-pre-line">
        {member.name}
      </h3>
      <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[140px]">
        {member.role}
      </p>
    </div>
  );
};

const WhoIsInside = () => {
  const board = teamMembers.filter(m => m.category === "board");
  const council = teamMembers.filter(m => m.category === "council");
  const advisors = teamMembers.filter(m => m.category === "advisor");
  const stewards = teamMembers.filter(m => m.category === "steward");

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

      {/* Board */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-2">
            Board
          </h2>
          <p className="font-sans text-xs text-muted-foreground/70 mb-10">
            Executive Directors shaping every division of SociisGroup™.
          </p>
          <div className="flex flex-wrap gap-8">
            {board.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* The Council */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-2">
            The Council™
          </h2>
          <p className="font-sans text-xs text-muted-foreground/70 mb-10">
            Guardians of ethical behavior, integrity and long-term trust.
          </p>
          {/* First row - 4 members */}
          <div className="flex flex-wrap gap-8 mb-8">
            {council.slice(0, 4).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
          {/* Second row - 3 members */}
          <div className="flex flex-wrap gap-8">
            {council.slice(4, 7).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index + 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Advisors */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-2">
            Trusted Advisors
          </h2>
          <p className="font-sans text-xs text-muted-foreground/70 mb-10">
            Independent experts offering strategic foresight and behavioral integrity.
          </p>
          <div className="flex flex-wrap gap-8">
            {advisors.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Charity Stewards */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-2">
            Cultural & Charity Stewards
          </h2>
          <p className="font-sans text-xs text-muted-foreground/70 mb-10">
            Symbolic voices — artists, humanitarians, and cultural storytellers.
          </p>
          <div className="flex flex-wrap gap-8">
            {stewards.map((member, index) => (
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
