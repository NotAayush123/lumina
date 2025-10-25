import EventsResourcesGrid from "@/components/home/articles";
import FooterSection from "@/components/home/footerSection";
import HeroSection from "@/components/home/hero";
import InfiniteCards from "@/components/home/infiniteCards";
import MentalHealth from "@/components/home/mentalHealth";
import Navbar from "@/components/home/navbar";
import StudentSuccessSection from "@/components/home/reviews";


export default function Home() {
  return (
    <>
    <Navbar/>
   <HeroSection/>
    <InfiniteCards />
 
    <div id="about">
      <MentalHealth />
    </div>
       
    <div id="reviews">
      <StudentSuccessSection  />
    </div>
     <EventsResourcesGrid />
 
   
    <FooterSection />
    </>

  );
}
