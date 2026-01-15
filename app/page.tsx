import EventsResourcesGrid from "@/components/home/articles";
import FooterSection from "@/components/home/footerSection";
import HeroSection from "@/components/home/hero";
import InfiniteCards from "@/components/home/infiniteCards";
import MentalHealth from "@/components/home/mentalHealth";
import Navbar from "@/components/home/navbar";
import StudentSuccessSection from "@/components/home/reviews";
import ImpactSection from "@/components/home/impact";
import BusinessModelSection from "@/components/home/businessModel";
import CompetitiveAdvantageSection from "@/components/home/competitive";
import SecuritySection from "@/components/home/security";
import EmergencyBar from "@/components/EmergencyBar";
import ChatbotWidget from "@/components/ChatbotWidget";


export default function Home() {
  return (
    <>

    <ChatbotWidget/>
    <HeroSection/>
    
    {/* solution - how lumina works */}
    <div id="about">
      <MentalHealth />
    </div>
    
    {/* problem statement w/ stats */}
    <ImpactSection />
    
    {/* business model & sustainability */}
    <BusinessModelSection />
    
    {/* competitive advantage */}
    <CompetitiveAdvantageSection />
    
    {/* mental health info cards */}
    <InfiniteCards />
    
    {/* security & privacy */}
    <SecuritySection />
 
    {/* reviews */}
    <div id="reviews">
      <StudentSuccessSection  />
    </div>
 
    </>

  );
}
