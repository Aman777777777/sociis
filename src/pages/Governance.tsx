import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import SectionCharter from "@/components/sections/SectionCharter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import team photos - Board
import jeremie from "@/assets/team/jeremie.png";
import dominiqueD from "@/assets/team/dominique-new.jpg";
import micaelC from "@/assets/team/micael-c.jpg";
import abbas from "@/assets/team/abbas.jpg";
import rudi from "@/assets/team/rudi.png";
import zanele from "@/assets/team/zanele.jpg";
import luc from "@/assets/team/luc.jpg";
import marc from "@/assets/team/marc.jpg";

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
import jayNew from "@/assets/team/jay-new.jpeg";
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
import kavita from "@/assets/team/kavita.jpg";
import maeva from "@/assets/team/maeva.png";
import jeanBosco from "@/assets/team/jean-bosco.jpg";
import mikkel from "@/assets/team/mikkel.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: "executive" | "board" | "council" | "advisor" | "steward";
  imagePosition?: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  // Executive Leadership Team (Board Members)
  {
    name: "Jeremie Landweer",
    role: "Founder, CEO",
    image: jeremie,
    category: "executive",
    bio: "Jeremie Landweer is the Founder and Chief Executive Officer of SociisGroup™, a sovereign independent behavioural institution building infrastructure for sustainability, hospitality, and humanity. With over two decades of experience bridging business strategy with ethical leadership, he has architected a unique ecosystem where purpose-driven leaders converge to create measurable Impact at Scale. His vision centres on making trust visible and behaviour accountable, transforming how institutions operate and how leaders are measured. Under his leadership, SociisGroup has developed proprietary frameworks including the Sustainable Behavioural Standard (SBS™) and BEE, the Behavioural Engine of Ethics, positioning the organisation at the forefront of behavioural governance. He is a sought-after voice on credibility-based leadership and the future of institutional trust."
  },
  {
    name: "Dominique Debecker",
    role: "Chief Behavioural Officer, Head of Sociis Impact™",
    image: dominiqueD,
    category: "executive",
    bio: "Dominique Debecker serves as Chief Behavioural Officer and leads Sociis Impact™, the division responsible for developing and deploying the Sustainable Behavioural Standard (SBS™). With deep expertise in behavioural science, organisational psychology, and brain-based leadership methodologies, she ensures that every initiative within the institution is grounded in integrity, ethical conduct, and meaningful transformation. Her work focuses on translating complex behavioural frameworks into practical tools that organisations can embed into their governance structures. She oversees BEE, the Behavioural Engine of Ethics, which provides signals, patterns, and dashboards showing how leaders and organisations behave over time, not how they present themselves."
  },
  {
    name: "Zanele Morrison",
    role: "Global Engagement and Institutional Narrative",
    image: zanele,
    category: "executive",
    imagePosition: "center 10%",
  },

  // Board Members
  {
    name: "Micael Craenhals",
    role: "Executive Director, Sociis Experiences™",
    image: micaelC,
    category: "board",
    imagePosition: "center 25%",
    bio: "Micael Craenhals is the Executive Director of Sociis Experiences™, the division that designs and delivers the institution's sovereign gatherings: The 22, The 64, and The 300. With a background spanning luxury hospitality, event architecture, and leadership development, he curates gatherings where conduct is visible under pressure. Each experience is meticulously designed to test and shape trustworthy behaviour in environments that combine discretion with intentional challenge."
  },
  {
    name: "Abbas Fasaei",
    role: "Executive Director, Sociis House™",
    image: abbas,
    category: "board",
    bio: "Abbas Fasaei leads Sociis House™ as Executive Director, overseeing the institution's learning, storytelling, and cultural programming. Originally from Iran, Abbas brings a unique perspective shaped by his journey from political turmoil to international recognition. He is an accomplished actor and acting teacher with over two decades of experience. At Sociis House, he applies his mastery of narrative and human behaviour to create transformative educational experiences, films, and stories that carry the LIME Code™ into culture, distributed through strategic media collaborations including Podeo."
  },
  {
    name: "Rudi Plettinx",
    role: "Strategic Introductions",
    image: rudi,
    category: "board",
    bio: "Rudi Plettinx specialises in Strategic Introductions for SociisGroup™, serving as a bridge between the institution and leaders seeking alignment with its mission. With an extensive circle cultivated over decades across business, governance, and philanthropy, he facilitates meaningful connections that carry the potential for substantive collaboration and mutual growth. His approach is characterised by discretion and precision, understanding that trust is the only credential that matters."
  },
  {
    name: "Luc Garguet-Duport",
    role: "Research and Development",
    image: luc,
    category: "board",
  },
  {
    name: "Joost Peeters",
    role: "Legal Counsel",
    image: marc, // placeholder
    category: "board",
  },

  // The Council
  {
    name: "Sarah McArthur",
    role: "Senior Advisor, Global Leadership & Strategic Collaborations",
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
    name: "Marc Bogaerts",
    role: "Artistic Director",
    image: marc,
    category: "advisor"
  },
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
    name: "Jay Weiser",
    role: "Founder & CEO, Jay Weiser Consulting",
    image: jayNew,
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
    role: "Strategic Advisor & Transformation Collaborator",
    image: dimitriNew,
    category: "advisor"
  },
  {
    name: "Erik Schroeven",
    role: "Senior Advisor, Business Development & Strategic Collaborations",
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
  {
    name: "Georges Reyes",
    role: "Cultural & Charity Steward",
    image: mikkel,
    category: "steward"
  },
];

const TeamCard = ({ 
  member, 
  index, 
  onClick 
}: { 
  member: TeamMember; 
  index: number; 
  onClick?: () => void;
}) => {
  const isClickable = (member.category === "executive" || member.category === "board") && member.bio;
  
  return (
    <div 
      className={`group opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards] ${isClickable ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="relative overflow-hidden mb-4 w-[140px] h-[140px] aspect-square bg-muted/30 rounded-xl">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105 rounded-xl ${isClickable ? 'group-hover:ring-2 ring-accent/50 ring-offset-2 ring-offset-background' : ''}`}
          style={{ objectPosition: member.imagePosition || "center" }}
        />
        {isClickable && (
          <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-background/90 border border-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] text-accent font-medium">i</span>
          </div>
        )}
      </div>
      <h3 className={`font-sans text-foreground text-sm font-medium mb-0.5 transition-colors duration-300 whitespace-pre-line ${isClickable ? 'group-hover:text-accent' : ''}`}>
        {member.name}
      </h3>
      <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[140px]">
        {member.role}
      </p>
    </div>
  );
};

const Governance = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  const executive = teamMembers.filter(m => m.category === "executive");
  const board = teamMembers.filter(m => m.category === "board");
  const council = teamMembers.filter(m => m.category === "council");
  const advisors = teamMembers.filter(m => m.category === "advisor");
  const stewards = teamMembers.filter(m => m.category === "steward");

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
      
      {/* Bio Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-lg bg-background border-border max-h-[85vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: selectedMember.imagePosition || "center" }}
                    />
                  </div>
                  <div>
                    <DialogTitle className="font-sans text-lg font-medium text-foreground whitespace-pre-line">
                      {selectedMember.name}
                    </DialogTitle>
                    <p className="font-sans text-xs text-muted-foreground mt-1 whitespace-pre-line">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>
              </DialogHeader>
              <p className="font-sans text-base text-foreground leading-relaxed">
                {selectedMember.bio}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-6">
            Governance
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-8"></div>
          <p className="text-body text-muted-foreground max-w-2xl">
            SociisGroup is governed through a defined institutional structure. Authority, oversight and executive responsibility are intentionally separated to safeguard independence, integrity and long-term trust.
          </p>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-2">
            Board
          </h2>
          <p className="font-sans text-sm text-muted-foreground/70 mb-10">
            The Board provides institutional oversight and strategic direction for SociisGroup™.
          </p>
          
          {/* Executive Leadership Team */}
          <div className="mb-12">
            <h3 className="font-sans text-xs tracking-widest text-muted-foreground/50 uppercase mb-6">
              Executive Leadership Team
            </h3>
            <div className="flex flex-wrap gap-8">
              {executive.map((member, index) => (
                <TeamCard 
                  key={member.name} 
                  member={member} 
                  index={index} 
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>

          {/* Board Members */}
          <div>
            <h3 className="font-sans text-xs tracking-widest text-muted-foreground/50 uppercase mb-6">
              Board Members
            </h3>
            <div className="flex flex-wrap gap-8">
              {board.map((member, index) => (
                <TeamCard 
                  key={member.name} 
                  member={member} 
                  index={index} 
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Council */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs tracking-widest text-muted-foreground uppercase mb-2">
            The Council
          </h2>
          <p className="font-sans text-sm text-muted-foreground/70 mb-10">
            The Council acts as guardian of ethical conduct, institutional integrity and long-term trust.
          </p>
          <div className="flex flex-wrap gap-8 mb-8">
            {council.slice(0, 4).map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
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
          <p className="font-sans text-sm text-muted-foreground/70 mb-10">
            Trusted Advisors provide independent, non-binding guidance across strategy, sustainability, systems and institutional development. They do not govern the institution.
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
            Symbolic voices, artists, humanitarians, and cultural storytellers.
          </p>
          <div className="flex flex-wrap gap-8">
            {stewards.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Charter Block */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionCharter />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-4">
            To connect with the institution, request access on the main page.
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
    </PageTransition>
  );
};

export default Governance;
