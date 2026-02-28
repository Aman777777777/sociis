import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import SectionHero from "@/components/sections/SectionHero";
import SectionInfrastructure from "@/components/sections/SectionInfrastructure";
import SectionProblem from "@/components/sections/SectionProblem";
import SectionWorlds from "@/components/sections/SectionWorlds";
import SectionWhat from "@/components/sections/SectionWhat";
import SectionAmbassadors from "@/components/sections/SectionAmbassadors";
import SectionImpact from "@/components/sections/SectionImpact";
import SectionImpactDetail from "@/components/sections/SectionImpactDetail";
import SectionLeaders from "@/components/sections/SectionLeaders";
import SectionHouse from "@/components/sections/SectionHouse";
import SectionExperiences from "@/components/sections/SectionExperiences";
import SectionCulture from "@/components/sections/SectionCulture";
import SectionUnconventional from "@/components/sections/SectionUnconventional";
import SectionOneBillion from "@/components/sections/SectionOneBillion";
import SectionFlywheel from "@/components/sections/SectionFlywheel";
import SectionCalendar from "@/components/sections/SectionCalendar";
import SectionAlliances from "@/components/sections/SectionAlliances";
import SectionLime from "@/components/sections/SectionLime";
import SectionCharter from "@/components/sections/SectionCharter";
import SectionMedia from "@/components/sections/SectionMedia";
import SectionInstitutionalEnvironments from "@/components/sections/SectionInstitutionalEnvironments";
import SectionAccess from "@/components/sections/SectionAccess";

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Header />
        {/* 1. Institutional Definition */}
        <SectionHero />
        <SectionInfrastructure />
        
        {/* 2. What SociisGroup Does */}
        <SectionProblem />
        <SectionWorlds />
        <SectionWhat />
        
        {/* Ambassadors */}
        <SectionAmbassadors />

        {/* Institutional Output */}
        <SectionImpact />
        <SectionImpactDetail />
        
        {/* 3. Why It Matters to Power */}
        <SectionLeaders />
        
        {/* 4. Cultural & Experiential Layer */}
        <SectionExperiences />
        <SectionCulture />
        <SectionUnconventional />
        <SectionHouse />
        
        {/* 5. Governance & Integrity */}
        <SectionLime />
        <div className="container mx-auto px-6 lg:px-8">
          <SectionCharter />
        </div>
        <SectionOneBillion />
        <SectionFlywheel />
        <SectionCalendar />
        <SectionAlliances />
        <SectionInstitutionalEnvironments />
        <SectionMedia />
        <SectionAccess />
        <Footer />
        <ScrollToTop />
      </main>
    </PageTransition>
  );
};

export default Index;
