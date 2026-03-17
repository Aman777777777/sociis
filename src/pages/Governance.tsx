import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import team photos - Leadership
import jeremie from "@/assets/team/jeremie.png";
import dominiqueD from "@/assets/team/dominique-new.jpg";
import zanele from "@/assets/team/zanele.jpg";

// Import team photos - Contributors
import luc from "@/assets/team/luc.jpg";
import joost from "@/assets/team/joost-new.jpeg";
import micaelC from "@/assets/team/micael-c.jpg";
import rudi from "@/assets/team/rudi.png";
import marc from "@/assets/team/marc.jpg";
import chantalNew from "@/assets/team/chantal-new.png";
import karim from "@/assets/team/karim.jpg";
import eva from "@/assets/team/eva.jpeg";
import sandrine from "@/assets/team/sandrine.jpg";
import jan from "@/assets/team/jan.jpg";

// Import team photos - Council
import sarahM from "@/assets/team/sarah-m.jpg";
import peter from "@/assets/team/peter.png";
import louis from "@/assets/team/louis.png";
import tim from "@/assets/team/tim.png";
import anmarrie from "@/assets/team/anmarrie.jpg";
import tatiana from "@/assets/team/tatiana.png";
import lars from "@/assets/team/lars.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: "leadership" | "contributor" | "council";
  imagePosition?: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  // Institutional Leadership
  {
    name: "Jeremie Landweer",
    role: "Founder & CEO",
    image: jeremie,
    category: "leadership",
    bio: "Jeremie Landweer is the Founder and Chief Executive Officer of SociisGroup™, a sovereign independent behavioural institution building infrastructure for sustainability, hospitality, and humanity. With over two decades of experience bridging business strategy with ethical leadership, he has architected a unique ecosystem where purpose-driven leaders converge to create measurable Impact at Scale. His vision centres on making trust visible and behaviour accountable, transforming how institutions operate and how leaders are measured. Under his leadership, SociisGroup has developed proprietary frameworks including the Sustainable Behavioural Standard (SBS™) and BEE™, the Behavioural Engine of Ethics, positioning the organisation at the forefront of behavioural governance. He is a sought-after voice on credibility-based leadership and the future of institutional trust."
  },
  {
    name: "Dominique Debecker",
    role: "Chief Behavioural Officer, SBS",
    image: dominiqueD,
    category: "leadership",
    bio: "Dominique Debecker serves as Chief Behavioural Officer and leads Sociis Impact™, the division responsible for developing and deploying the Sustainable Behavioural Standard (SBS™). With deep expertise in behavioural science, organisational psychology, and brain-based leadership methodologies, she ensures that every initiative within the institution is grounded in integrity, ethical conduct, and meaningful transformation. Her work focuses on translating complex behavioural frameworks into practical tools that organisations can embed into their governance structures. She oversees BEE™, the Behavioural Engine of Ethics, which provides signals, patterns, and dashboards showing how leaders and organisations behave over time, not how they present themselves."
  },
  {
    name: "Zanele Morrison",
    role: "Global Engagement",
    image: zanele,
    category: "leadership",
    imagePosition: "center 10%",
  },

  // Strategic & Institutional Contributors
  {
    name: "Luc Garguet-Duport",
    role: "Organisational Development & Institutional Oversight",
    image: luc,
    category: "contributor",
  },
  {
    name: "Joost Peeters",
    role: "Trusted Advisor, Legal Counsel",
    image: joost,
    category: "contributor",
  },
  {
    name: "Micael Craenhals",
    role: "Experiences Production",
    image: micaelC,
    category: "contributor",
    imagePosition: "center 25%",
  },
  {
    name: "Rudi Plettinx",
    role: "Strategic Introductions",
    image: rudi,
    category: "contributor",
  },
  {
    name: "Richard Thommeret",
    role: "Public Relations & Strategic Introductions",
    image: "",
    category: "contributor",
  },
  {
    name: "Marc Bogaerts",
    role: "Artistic Director",
    image: marc,
    category: "contributor",
  },
  {
    name: "Chantal Vervaete",
    role: "Public Company Board Member\nFormer Fortune 10 C-Suite Executive",
    image: chantalNew,
    category: "contributor",
  },
  {
    name: "Karim Tousbih",
    role: "Value Development",
    image: karim,
    category: "contributor",
  },
  {
    name: "Eva Vargová",
    role: "Philanthropy & Social Impact",
    image: eva,
    category: "contributor",
  },
  {
    name: "Sandrine Hellinckx",
    role: "SBS Foundation",
    image: sandrine,
    category: "contributor",
  },
  {
    name: "Prof. Jan de Visch",
    role: "SBS Foundation",
    image: jan,
    category: "contributor",
  },

  // Ethical Council
  {
    name: "Sarah McArthur",
    role: "Editor-in-Chief, Leader to Leader Journal\nAdvisory Board Member, Frances Hesselbein Leadership Forum",
    image: sarahM,
    category: "council",
  },
  {
    name: "Peter Somers",
    role: "Former CEO, Emirates Post\nFounder, SprintPack",
    image: peter,
    category: "council",
  },
  {
    name: "Dr. Louis Klein",
    role: "Dean & Research Director, European School of Governance",
    image: louis,
    category: "council",
  },
  {
    name: "Tim Sanders",
    role: "Founder & CEO, Silent Donor",
    image: tim,
    category: "council",
  },
  {
    name: "Lars Carlstrom",
    role: "Founder & CEO, Italvolt",
    image: lars,
    category: "council",
  },
  {
    name: "Annmarie Gorenc Zoran, PhD",
    role: "Dean, Faculty of Organisation Studies",
    image: anmarrie,
    category: "council",
  },
  {
    name: "Tatjana Dragović Andersen, EdD",
    role: "Associate Professor",
    image: tatiana,
    category: "council",
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
  const isClickable = member.category === "leadership" && member.bio;
  
  return (
    <div 
      className={`group opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards] ${isClickable ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="relative overflow-hidden mb-4 w-[140px] h-[140px] aspect-square bg-muted/30 rounded-xl">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105 rounded-xl"
            style={{ objectPosition: member.imagePosition || "center" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-xl bg-muted/20">
            <span className="text-muted-foreground/40 text-2xl font-light">{member.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
        )}
      </div>
      <h3 className={`font-sans text-foreground text-sm font-medium mb-0.5 transition-colors duration-300 whitespace-pre-line ${isClickable ? 'group-hover:text-accent' : ''}`}>
        {member.name}
      </h3>
      <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[140px] whitespace-pre-line">
        {member.role}
      </p>
    </div>
  );
};

const Governance = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  const leadership = teamMembers.filter(m => m.category === "leadership");
  const contributors = teamMembers.filter(m => m.category === "contributor");
  const council = teamMembers.filter(m => m.category === "council");

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

      {/* Institutional Leadership */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-widest text-foreground uppercase mb-10">
            Institutional Leadership
          </h2>
          <div className="flex flex-wrap gap-8">
            {leadership.map((member, index) => (
              <TeamCard 
                key={member.name} 
                member={member} 
                index={index} 
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Strategic & Institutional Contributors */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-widest text-foreground uppercase mb-2">
            Strategic & Institutional Contributors
          </h2>
          <p className="font-sans text-sm text-muted-foreground/70 mb-10 max-w-3xl">
            Strategic & Institutional Contributors bring independent expertise across systems, culture, governance, capital and institutional development. They support the evolution of SociisGroup while remaining independent from its executive leadership.
          </p>
          <div className="flex flex-wrap gap-8">
            {contributors.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Council */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-sm tracking-widest text-foreground uppercase mb-2">
            Ethical Council
          </h2>
          <p className="font-sans text-sm text-muted-foreground/70 mb-10">
            The Council acts as guardian of ethical conduct, institutional integrity and long-term trust.
          </p>
          <div className="flex flex-wrap gap-8">
            {council.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </PageTransition>
  );
};

export default Governance;
