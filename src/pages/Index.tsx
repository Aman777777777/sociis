import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import SectionHero from "@/components/sections/SectionHero";
import SectionInfrastructure from "@/components/sections/SectionInfrastructure";
import SectionMandate from "@/components/sections/SectionMandate";
import SectionDefinitional from "@/components/sections/SectionDefinitional";
import SectionHowItWorks from "@/components/sections/SectionHowItWorks";
import SectionDomains from "@/components/sections/SectionDomains";
import SectionSystem from "@/components/sections/SectionSystem";
import SectionAmbassadors from "@/components/sections/SectionAmbassadors";
import SectionSBS from "@/components/sections/SectionSBS";
import SectionBEE from "@/components/sections/SectionBEE";
import SectionInvestors from "@/components/sections/SectionInvestors";
import SectionRelevance from "@/components/sections/SectionRelevance";
import SectionExperiences from "@/components/sections/SectionExperiences";
import SectionCalendar from "@/components/sections/SectionCalendar";
import SectionHouse from "@/components/sections/SectionHouse";
import SectionFoundingMoment from "@/components/sections/SectionFoundingMoment";
import SectionAccess from "@/components/sections/SectionAccess";

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Header />

        {/* 1. Hero — centered, institutional */}
        <SectionHero />

        {/* 2. The Source — Everything starts with behaviour */}
        <SectionInfrastructure />

        {/* 3. The Mandate — One billion people */}
        <SectionMandate />

        {/* 4. Definitional — What SociisGroup is */}
        <SectionDefinitional />

        {/* 5. How SociisGroup Works — Four mechanisms */}
        <SectionHowItWorks />

        {/* 6. The Three Domains — Sustainability, Hospitality, Humanity */}
        <SectionDomains />

        {/* 7. The System — Impact builds, Culture scales */}
        <SectionSystem />

        {/* 8. Ambassadors — Iris van der Veken */}
        <SectionAmbassadors />

        {/* 9. SBS — The Sustainable Behavioural Standard */}
        <SectionSBS />

        {/* 10. BEE — Behavioural Engine of Ethics */}
        <SectionBEE />

        {/* 11. Investor Band — For those who allocate capital */}
        <SectionInvestors />

        {/* 12. Relevance & Participation — Why you engage / Six ways in */}
        <SectionRelevance />

        {/* 13. Rooms — Controlled environments */}
        <SectionExperiences />

        {/* 14. Calendar — The Institutional Arc */}
        <SectionCalendar />

        {/* 15. Culture & House — Digital and Cultural distribution */}
        <SectionHouse />

        {/* 16. Let There Be Light — Cultural anchor film */}
        <SectionFoundingMoment />

        {/* 17. Access — Four steps to belonging */}
        <SectionAccess />

        <Footer />
        <ScrollToTop />
      </main>
    </PageTransition>
  );
};

export default Index;
