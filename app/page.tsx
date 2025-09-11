import { DraggableCardDemo } from "@/components/draggableBody";
import HeroSection from "@/components/hero";
import InfiniteCards from "@/components/infiniteCards";
import MentalHealth from "@/components/mentalHealth";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
   <HeroSection/>
    <InfiniteCards />
    <MentalHealth/>
    </>

  );
}
