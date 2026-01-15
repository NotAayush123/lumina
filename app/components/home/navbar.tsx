"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-all duration-300 mb-20 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white py-4'
      }`}
      style={{ padding: '15px 32px', top: '40px' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* logo */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => handleNavigation('/')}
          role="button"
          aria-label="Lumina home"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && handleNavigation('/')}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/assets/logo.png"
              alt="Lumina logo"
              width={40}
              height={40}
              className="object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <p className={`ml-3 text-3xl transition-colors ${
            isScrolled ? 'text-[#0061EF]' : 'text-[#2D2C2B]'
          }`}>
            Lumina
          </p>
        </div>

        {/* hamburger menu btn (mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-gray-700 hover:bg-[#F9F4F2]' : 'text-[#2D2C2B] hover:bg-[#F9F4F2]'
          }`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>

        {/* nav links (desktop) */}
        <div className="hidden lg:flex items-center" style={{ gap: '30px' }} role="menubar">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className={`font-medium text-lg transition-all hover:opacity-70 relative group ${
              isScrolled ? 'text-[#2D2C2B]' : 'text-[#2D2C2B]'
            }`}
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation('/resources')}
            className={`font-medium text-lg transition-all hover:opacity-70 relative group ${
              isScrolled ? 'text-[#2D2C2B]' : 'text-[#2D2C2B]'
            }`}
          >
            Resources
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation('/dashboard')}
            className={`font-medium text-lg transition-all hover:opacity-70 relative group ${
              isScrolled ? 'text-[#2D2C2B]' : 'text-[#2D2C2B]'
            }`}
          >
            Dashboard
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
          </button>
        </div>

        {/* cta btns (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => handleNavigation('/aitherapist')}
            className="px-6 py-2 rounded-full font-bold text-base transition-all hover:scale-105 shadow-md bg-[#FF6E40] text-white hover:bg-[#ff5722]"
          >
            Get Help Now
          </button>
          <button 
            onClick={() => handleNavigation('/dashboard')}
            className="px-6 py-2 rounded-full font-semibold text-base transition-all hover:scale-105 border-2 bg-[#0061EF] text-white hover:bg-[#0052cc]"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 shadow-xl bg-white">
          <div className="flex flex-col py-4 px-8 space-y-4">
            <button 
              onClick={() => handleNavigation('/')}
              className="font-medium text-lg text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B]"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="font-medium text-lg text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B]"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavigation('/resources')}
              className="font-medium text-lg text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B]"
            >
              Resources
            </button>
            <button 
              onClick={() => handleNavigation('/dashboard')}
              className="font-medium text-lg text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B]"
            >
              Dashboard
            </button>
            
            <div className="pt-4 border-t border-current/20 space-y-3">
              <button 
                onClick={() => handleNavigation('/aitherapist')}
                className="w-full px-6 py-3 rounded-full font-bold text-base transition-all hover:scale-105 shadow-md bg-[#FF6E40] text-white hover:bg-[#ff5722]"
              >
                Get Help Now
              </button>
              <button 
                onClick={() => handleNavigation('/dashboard')}
                className="w-full px-6 py-3 rounded-full font-semibold text-base transition-all hover:scale-105 bg-[#0061EF] text-white hover:bg-[#0052cc]"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;