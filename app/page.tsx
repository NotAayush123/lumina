import EventsResourcesGrid from "@/components/articles";
import FooterSection from "@/components/footerSection";
import HeroSection from "@/components/hero";
import InfiniteCards from "@/components/infiniteCards";
import MentalHealth from "@/components/mentalHealth";
import Navbar from "@/components/navbar";
import StudentSuccessSection from "@/components/reviews";


export default function Home() {
  return (
    <>
    <Navbar/>
   <HeroSection/>
    <InfiniteCards />
 
    <MentalHealth />
       
    <StudentSuccessSection  />
     <EventsResourcesGrid />
 
   
    <FooterSection />
    </>

  );
}
