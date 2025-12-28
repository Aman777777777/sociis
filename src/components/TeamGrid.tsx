import { Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Import team member images
import member1 from "@/assets/team/member-1.jpg";
import member2 from "@/assets/team/member-2.jpg";
import member3 from "@/assets/team/member-3.jpg";
import member4 from "@/assets/team/member-4.jpg";
import member5 from "@/assets/team/member-5.jpg";
import member6 from "@/assets/team/member-6.jpg";
import member7 from "@/assets/team/member-7.jpg";
import member8 from "@/assets/team/member-8.jpg";
import member9 from "@/assets/team/member-9.jpg";
import member10 from "@/assets/team/member-10.jpg";
import member11 from "@/assets/team/member-11.jpg";
import member12 from "@/assets/team/member-12.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Roxana Valeton",
    role: "Founder & CEO",
    image: member1,
    linkedin: "#",
  },
  {
    name: "Lindy Mkhize",
    role: "Director of Strategic Engagements Africa",
    image: member2,
    linkedin: "#",
  },
  {
    name: "Luc Garguet-Duport",
    role: "Director, European Operations",
    image: member3,
    linkedin: "#",
  },
  {
    name: "Tatjana Dragović Andersen, EdD",
    role: "Corporate Educator & Executive Coach",
    image: member4,
    linkedin: "#",
  },
  {
    name: "Bhavya Bansal",
    role: "Executive Director, Digital Strategy & Innovation",
    image: member5,
    linkedin: "#",
  },
  {
    name: "Morare Manaka",
    role: "Director, Strategic Engagements",
    image: member6,
    linkedin: "#",
  },
  {
    name: "Damien Sobry",
    role: "Director, Strategic Engagements",
    image: member7,
    linkedin: "#",
  },
  {
    name: "Mikkel Iversen",
    role: "Director, Nordic Region",
    image: member8,
    linkedin: "#",
  },
  {
    name: "Roberto Carlos Lemus",
    role: "Entrepreneur & Philanthropist",
    image: member9,
    linkedin: "#",
  },
  {
    name: "José Díaz Romero",
    role: "Journalist & Visionary Entrepreneur",
    image: member10,
    linkedin: "#",
  },
  {
    name: "Jay Weiser",
    role: "Founder & CEO, Jay Weiser Consulting",
    image: member11,
    linkedin: "#",
  },
  {
    name: "Wycliffe Omondi",
    role: "Director, Strategic Engagements",
    image: member12,
    linkedin: "#",
  },
];

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="relative overflow-hidden mb-6 bg-sand aspect-[3/4] rounded-2xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
        
        {/* LinkedIn overlay */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            className="absolute bottom-4 left-4 w-10 h-10 bg-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-primary hover:text-primary-foreground"
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>

      <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-2">
        {member.name}
      </h3>
      <p className="font-sans text-sm text-muted-foreground">
        {member.role}
      </p>
    </div>
  );
};

const TeamGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
      {teamMembers.map((member, index) => (
        <TeamCard key={member.name} member={member} index={index} />
      ))}
    </div>
  );
};

export default TeamGrid;
