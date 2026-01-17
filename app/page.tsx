"use client";

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
import AccessibilityMenu from "@/components/AccessibilityMenu";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const observers = new Map();
    
    const observeSection = (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(id));
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
      );
      
      observer.observe(element);
      observers.set(id, observer);
    };
    
    // Observe all sections
    ['about', 'impact', 'business', 'competitive', 'cards', 'security', 'reviews'].forEach(observeSection);
    
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);
  
  return (
    <>

   
    <ChatbotWidget/>
    <HeroSection/>
    
    {/* solution - how lumina works */}
    <div 
      id="about" 
      className={`transition-all duration-1000 ${
        visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <MentalHealth />
    </div>
    
    {/* problem statement w/ stats */}
    <div 
      id="impact"
      className={`transition-all duration-1000 delay-100 ${
        visibleSections.has('impact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <ImpactSection />
    </div>
    
    {/* business model & sustainability */}
    <div 
      id="business"
      className={`transition-all duration-1000 delay-150 ${
        visibleSections.has('business') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <BusinessModelSection />
    </div>
    
    {/* competitive advantage */}
    <div 
      id="competitive"
      className={`transition-all duration-1000 delay-200 ${
        visibleSections.has('competitive') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <CompetitiveAdvantageSection />
    </div>
    
    {/* mental health info cards */}
    <div 
      id="cards"
      className={`transition-all duration-1000 delay-100 ${
        visibleSections.has('cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <InfiniteCards />
    </div>
    
    {/* security & privacy */}
    <div 
      id="security"
      className={`transition-all duration-1000 delay-150 ${
        visibleSections.has('security') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <SecuritySection />
    </div>
 
    {/* reviews */}
    <div 
      id="reviews"
      className={`transition-all duration-1000 delay-200 ${
        visibleSections.has('reviews') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <StudentSuccessSection  />
    </div>
 

    </>

  );
}