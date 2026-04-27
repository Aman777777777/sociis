import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import SectionHero from "@/components/sections/SectionHero";
import SectionInfrastructure from "@/components/sections/SectionInfrastructure";
import SectionMandate from "@/components/sections/SectionMandate";
import SectionHowItWorks from "@/components/sections/SectionHowItWorks";
import SectionCulture from "@/components/sections/SectionCulture";
import SectionSystem from "@/components/sections/SectionSystem";
import SectionAccess from "@/components/sections/SectionAccess";

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Header />

        {/* 1. Hero — centered, institutional */}
        <SectionHero />

        {/* 2. Impact — Everything starts with behaviour */}
        <SectionInfrastructure />

        {/* 3. The Mandate */}
        <SectionMandate />

        {/* 4. How It Works — 01–04 */}
        <SectionHowItWorks />

        {/* 5. Culture Scales Behaviour + video */}
        <SectionCulture />

        {/* 6. The System — two divisions */}
        <SectionSystem />

        {/* 7. Access */}
        <SectionAccess />

        <Footer />
        <ScrollToTop />
      </main>
    </PageTransition>
  );
};

export default Index;
