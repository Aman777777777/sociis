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
import richard from "@/assets/team/richard.jpg";
import baldwin from "@/assets/team/baldwin.jpeg";
import chrisBenardis from "@/assets/team/chris-benardis.jpg";

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
  category: "leadership" | "contributor" | "council" | "new_contributor";
  imagePosition?: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  // Executive Leadership Team
  {
    name: "Jeremie Landweer",
    role: "Founder & CEO",
    image: jeremie,
    category: "leadership",
    bio: "Jeremie Landweer is the Founder and Chief Executive Officer of SociisGroup™, a sovereign independent behavioural institution building infrastructure for sustainability, hospitality, and humanity. With over two decades of experience bridging business strategy with ethical leadership, he has architected a unique ecosystem where purpose-driven leaders converge to create measurable Impact at Scale. His vision centres on making trust visible and behaviour accountable, transforming how institutions operate and how leaders are measured. Under his leadership, SociisGroup has developed proprietary frameworks including the Sustainable Behavioural Standard (SBS™) and BEE™, the Behavioural Engine with Ethics, positioning the organisation at the forefront of behavioural governance. He is a sought-after voice on credibility-based leadership and the future of institutional trust."
  },
  {
    name: "Dominique Debecker",
    role: "Chief Behavioural Officer",
    image: dominiqueD,
    category: "leadership",
    bio: "Dominique Debecker serves as Chief Behavioural Officer and leads Sociis Impact™, the division responsible for developing and deploying the Sustainable Behavioural Standard (SBS™). With deep expertise in behavioural science, organisational psychology, and brain-based leadership methodologies, she ensures that every initiative within the institution is grounded in integrity, ethical conduct, and meaningful transformation. Her work focuses on translating complex behavioural frameworks into practical tools that organisations can embed into their governance structures. She oversees BEE™, the Behavioural Engine with Ethics, which provides signals, patterns, and dashboards showing how leaders and organisations behave over time, not how they present themselves."
  },
  {
    name: "Zanele Morrison",
    role: "Global Engagement and Institutional Narrative",
    image: zanele,
    category: "leadership",
    imagePosition: "center 10%",
    bio: "Zanele Morrison is a multifaceted professional with over 20 years of experience across public and private sectors, specializing in leadership development, organizational transformation, and corporate communications. She serves as a business anchor for CNBC Africa and has held significant roles such as Director of Marketing and Corporate Affairs at the Johannesburg Stock Exchange (JSE). A passionate advocate for diversity and inclusion, she is a board member for Corporate & Institutional Integrity (CII) Africa and frequently works with executive teams to improve performance and ethical culture.",
  },
  {
    name: "Chris Benardis",
    role: "Chief Financial Officer",
    image: chrisBenardis,
    category: "leadership",
    bio: "Chris Benardis is a finance executive with nearly 30 years of international experience, including a long tenure leading corporate finance, sustainability, and governance for a major global automotive group across the United States, Japan, and Europe. He prioritises embedding sustainability and stakeholder considerations into financial decision-making to generate long-term value. Chris is GRI G4 certified and holds an MBA from the David Eccles School of Business and dual Bachelor's degrees in Chemistry and Accounting, graduating Magna Cum Laude.",
  },
  {
    name: "Luc Garguet-Duport",
    role: "Chief Operating Officer",
    image: luc,
    category: "leadership",
    bio: "Luc Garguet-Duport is a purpose-driven business transformation leader and executive coach with over 25 years of international experience. He specializes in corporate strategy, supply chain management, and sustainable practices, having held high-level roles within the automotive industry, including the Renault-Nissan Alliance and Faurecia. With a strong academic background in materials science (PhD), he brings resilience, authenticity, and a human-centric approach to guiding organizational change.",
  },

  // Contributors.
  {
    name: "Richard Thommeret",
    role: "External Relations & Strategic Communications",
    image: richard,
    category: "new_contributor",
    bio: "Richard Thommeret is an engineer and former researcher with deep expertise in materials science and strategic communication. He has extensive experience representing major industrial organizations, such as Solvay, to professional associations, driving the promotion and development of innovative products. He combines his technical background with strategic relations to foster institutional alignment.",
  },
  {
    name: "Baldwin Berges",
    role: "Capital Strategist",
    image: baldwin,
    category: "new_contributor",
    bio: "Baldwin Berges is a seasoned finance professional with over 30 years of experience bridging private capital with public development initiatives. As the CEO of Abaris Advisors and a recurring Team Leader for the EU Global Gateway, he specializes in sustainable finance, blended instruments, and impact investing across emerging markets.\n\nHis extensive career includes serving as a Founding Partner at Silk Invest, a leading sustainable investment boutique, and holding senior institutional leadership roles at Standard Bank and Invesco. Baldwin’s expertise spans the full range of financial instruments—from structured finance and fintech innovation to credit and equity.\n\nA polyglot fluent in five languages, he has managed complex projects for the European Commission and International Financial Institutions across Sub-Saharan Africa, Asia, and Latin America. At Sociis Group, Baldwin aligns this deep technical background with the mission of integrating behavioral governance into ESG frameworks, driving systemic change for a more prosperous global society."
  },
  {
    name: "Joost Peeters",
    role: "Legal Advisor",
    image: joost,
    category: "new_contributor",
    bio: "Joost Peeters is a distinguished legal professional and co-founder of the law firm STUDIO | LEGALE, based in Antwerp, Belgium. Called to the bar in 2001, he brings extensive expertise in business, corporate, and contract law. A certified mediator and collaborative negotiator, he also holds specialized credentials in data protection. His broad, multidisciplinary practice provides robust legal foundations for institutional governance.",
  },
  {
    name: "Marc Bogaerts",
    role: "Artistic Advisor",
    image: marc,
    category: "new_contributor",
    bio: "Marc Bogaerts is a renowned Belgian choreographer and artistic director whose interdisciplinary work seamlessly blends dance, sports, circus arts, and opera. Having worked with all three major opera houses in Berlin and over 50 companies worldwide, his unconventional approach has earned him global recognition, including a Knighthood in the Order of Merit. He frequently utilizes artistic expression to address sensitive social issues and cultural narratives.",
  },
  {
    name: "Micael Craenhals",
    role: "Production",
    image: micaelC,
    category: "new_contributor",
    imagePosition: "center 25%",
    bio: "Micael Craenhals is a Belgian entrepreneur with a diverse background bridging traditional industries and modern ventures. Hailing from a prominent business family, he brings a deeply ingrained understanding of operational dynamics, resource management, and strategic production to the institution.",
  },
  {
    name: "Chantal Veevaete",
    role: "Public Company Board Member, Former Fortune 10 C-Suite Executive",
    image: chantalNew,
    category: "new_contributor",
    bio: "Chantal Veevaete is a highly experienced C-suite executive and independent board member, recognized for her tenure as Chief Human Resources Officer across Fortune 10, 100, and 1000 organizations, including Phillips 66. Holding dual citizenship in Belgium and the US, she brings a global, multicultural perspective to leadership development, high-performing team dynamics, and human capital strategy.",
  },
  {
    name: "Karim Tousbih",
    role: "Value Development",
    image: karim,
    category: "new_contributor",
    bio: "Karim Tousbih is a versatile consultant, creative director, and project manager who specializes in translating strategic vision into tangible execution. With experience spanning brand building, real estate, and digital media, he acts as a key connector for value development, ensuring that institutional goals are effectively operationalized and communicated.",
  },
  {
    name: "Eva Vargová",
    role: "Philanthropy & Social Impact",
    image: eva,
    category: "new_contributor",
    bio: "Eva Vargová dedicates her expertise to advancing philanthropic initiatives and social impact strategies. With a focus on sustainable development, education, and community resilience, she actively bridges organizational resources with meaningful societal outcomes, ensuring that institutional actions create lasting, positive change.",
  },
  {
    name: "Sandrine Helinckx",
    role: "SBS Foundation",
    image: sandrine,
    category: "new_contributor",
    bio: "Sandrine Helinckx brings essential expertise to the SBS Foundation, supporting the framework and structural integrity of the Sustainable Behavioural Standard. Her work focuses on operationalizing ethical standards and ensuring alignment between institutional values and applied governance.",
  },
  {
    name: "Prof. Jan de Visch",
    role: "SBS Foundation",
    image: jan,
    category: "new_contributor",
    bio: "Prof. Jan De Visch is an organizational psychologist and Executive Professor at Flanders Business School, specializing in Human Capital Management. With over thirty years of experience managing organizational development, he focuses on collaborative intelligence and cognitive development, employing frameworks like the Constructive Developmental Framework to guide leaders through complex change.",
  },

  // The Council.
  {
    name: "Sarah McArthur",
    role: "Editor-in-Chief, Leader to Leader Journal",
    image: sarahM,
    category: "council",
    bio: "Sarah McArthur is an esteemed editor, writer, and leadership thinker who served as the COO of Marshall Goldsmith Inc. for over two decades. A founding member of the '100 Coaches' project and editor-in-chief of the Leader to Leader journal, she has authored and edited numerous influential books on executive coaching and management, working alongside the world's foremost business leaders.",
  },
  {
    name: "Peter Somers",
    role: "Former CEO, Emirates Post · Founder, SprintPack",
    image: peter,
    category: "council",
    bio: "Peter Somers is an experienced executive and strategic leader in the global transport and logistics sector. As the founder of SprintPack and former CEO of Emirates Post, where he led a major organizational transformation, he possesses deep expertise in change management, e-commerce innovation, and people-driven leadership. He actively serves as a board member and advisor for multiple international enterprises.",
  },
  {
    name: "Dr Louis Klein",
    role: "Dean & Research Director, European School of Governance",
    image: louis,
    category: "council",
    bio: "Dr. Louis Klein is an internationally recognized systems scientist and cybernetician serving as the Dean of the European School of Governance (EUSG) in Berlin. With a PhD in sociology focused on systems theory, he specializes in systemic governance and complex project management, holding key leadership roles in global organizations such as the International Federation for Systems Research.",
  },
  {
    name: "Tim Sanders",
    role: "Founder & CEO, Silent Donor",
    image: tim,
    category: "council",
    bio: "Tim Sanders is the founder and CEO of Silent Donor, a pioneering technology platform that enables fully anonymous, tax-deductible charitable giving. With a background in international development and philanthropic consulting, he created the platform to protect donor privacy, facilitating millions of dollars in contributions to global causes such as the Malala Fund and United24.",
  },
  {
    name: "Annmarie Gorenc Zoran, PhD",
    role: "Dean, Faculty of Organisation Studies",
    image: anmarrie,
    category: "council",
    bio: "Dr. Annmarie Gorenc Zoran is a Full Professor and Dean at the Faculty of Organizational Studies in Novo mesto, Slovenia. A dedicated social scientist, her research employs mixed-method approaches to explore leadership, quality management, and organizational behavior. She has extensive experience leading international research projects focused on workplace well-being and institutional dynamics.",
  },
  {
    name: "Tatjana Dragović Andersen, EdD",
    role: "Corporate educator, executive coach, associate professor",
    image: tatiana,
    category: "council",
    bio: "Dr. Tatjana Dragović Andersen is an accomplished academic, educator, and executive coach affiliated with the University of Cambridge. Holding a Doctorate in Education, she specializes in dialogic teaching, creative leadership, and continuing professional development. She is the co-founder of the Human Communications Centre, providing international coaching and professional training programs.",
  },
  {
    name: "Lars Carlstrom",
    role: "Founder & CEO, Statetron",
    image: lars,
    category: "council",
    bio: "Lars Carlstrom is an entrepreneur with over 30 years of experience across various industries, notably focusing on 'green industrialization.' He is the founder of gigafactory projects such as Italvolt and Statevolt, which aim to develop large-scale lithium-ion battery manufacturing facilities. His work emphasizes hyper-local sourcing and supporting the global energy transition through localized economic regeneration.",
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
  const isClickable = !!member.bio;

  return (
    <div
      className={`group opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards] ${isClickable ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      onClick={isClickable ? onClick : undefined}
    >
      <div className="relative overflow-hidden mb-4 w-full aspect-square bg-muted/30 rounded-xl">
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
      <p
        className={`font-sans text-foreground text-xs tracking-widest uppercase font-medium mb-1 transition-colors duration-300 ${isClickable ? 'group-hover:text-accent' : ''}`}
      >
        {member.name}
      </p>
      <p
        className="font-sans text-[10px] tracking-wider text-muted-foreground uppercase leading-relaxed"
      >
        {member.role}
      </p>
    </div>
  );
};

const Governance = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const leadership = teamMembers.filter(m => m.category === "leadership");
  const contributors = teamMembers.filter(m => m.category === "new_contributor");
  const council = teamMembers.filter(m => m.category === "council");

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">

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
                      <DialogTitle className="font-sans text-lg font-medium text-foreground">
                        {selectedMember.name}
                      </DialogTitle>
                      <p className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                        {selectedMember.role}
                      </p>
                    </div>
                  </div>
                </DialogHeader>
                <div className="font-sans text-base text-foreground leading-relaxed whitespace-pre-wrap">
                  {selectedMember.bio}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mono-kicker mb-4">Governance</div>
            <h1 className="text-4xl sm:text-5xl text-foreground mb-6">
              Executive Leadership Team.
            </h1>
            <div className="rule mb-12"></div>
            <p className="text-body text-muted-foreground max-w-2xl mb-24">
              SociisGroup is governed through a defined institutional structure. Authority, oversight and executive responsibility are intentionally separated to safeguard independence, integrity and long-term trust.
            </p>

            {/* Executive Leadership Team */}
            <div className="mb-24">
              <h3 className="group-title text-2xl mb-10">Executive Leadership Team</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
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

            {/* Contributors. */}
            <div className="mb-24">
              <h3 className="group-title text-2xl mb-4">Contributors</h3>
              <p className="text-body text-muted-foreground max-w-2xl mb-10">
                Independent collaborators across legal, production, artistic, value, philanthropy, standard-setting and external relations.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
                {contributors.map((member, index) => (
                  <TeamCard 
                    key={member.name} 
                    member={member} 
                    index={index} 
                    onClick={() => setSelectedMember(member)}
                  />
                ))}
              </div>
            </div>

            {/* The Council. */}
            <div className="mb-12">
              <h3 className="group-title text-2xl mb-4">The Council</h3>
              <p className="text-body text-muted-foreground max-w-2xl mb-10">
                The Sociis Ethical Council. Independent figures who watch over the institution, safeguarding its integrity, conduct and long-term direction.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
                {council.map((member, index) => (
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
        </div>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Governance;
