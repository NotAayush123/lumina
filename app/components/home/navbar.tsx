"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDashboardClick = () => {
    const currentUser = localStorage.getItem('lumina-current-user');
    if (!currentUser) {
      alert('Please sign up or log in first to access your dashboard.');
      return;
    }
    router.push('/dashboard');
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      className={`fixed left-0 right-0  z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2 sm:py-3' 
          : 'bg-white py-3 sm:py-4'
      }`}
      style={{ padding: '12px 16px', top: '40px' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4">
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
              width={32}
              height={32}
              className="object-contain transition-transform group-hover:scale-110 sm:w-10 sm:h-10"
            />
          </div>
          <p className={`hidden sm:block ml-2 sm:ml-3 text-xl sm:text-3xl transition-colors ${
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
        <div className="hidden lg:flex items-center gap-6 xl:gap-8" role="menubar">
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
            onClick={handleDashboardClick}
            className={`font-medium text-lg transition-all hover:opacity-70 relative group ${
              isScrolled ? 'text-[#2D2C2B]' : 'text-[#2D2C2B]'
            }`}
          >
            Dashboard
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
          </button>

          {/* Resources Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className={`font-medium text-lg transition-all hover:opacity-70 relative group flex items-center gap-1 ${
                isScrolled ? 'text-[#2D2C2B]' : 'text-[#2D2C2B]'
              }`}
            >
              Resources
              <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
            </button>
            
            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <button
                  onClick={() => {
                    handleNavigation('/resources');
                    setIsResourcesOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-[#2D2C2B] font-medium"
                >
                  Learning Resources
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/support');
                    setIsResourcesOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-[#2D2C2B] font-medium"
                >
                  Community Forums
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/contact');
                    setIsResourcesOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-[#2D2C2B] font-medium"
                >
                  Contact & Testimonials
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/merch');
                    setIsResourcesOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-[#2D2C2B] font-medium"
                >
                  Support Merch
                </button>
              </div>
            )}
          </div>
        </div>

        {/* cta btns (desktop) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <button 
            onClick={() => handleNavigation('/aitherapist')}
            className="px-4 xl:px-6 py-2 rounded-full font-bold text-sm xl:text-base transition-all hover:scale-105 shadow-md bg-[#FF6E40] text-white hover:bg-[#ff5722] whitespace-nowrap"
          >
            Get Help Now
          </button>
          <button 
            onClick={() => handleNavigation('/dashboard')}
            className="px-4 xl:px-6 py-2 rounded-full font-semibold text-sm xl:text-base transition-all hover:scale-105 border-2 bg-[#0061EF] text-white hover:bg-[#0052cc] whitespace-nowrap"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 shadow-xl bg-white z-40">
          <div className="flex flex-col py-4 px-4 sm:px-6 space-y-4">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="font-medium text-lg text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B]"
            >
              How It Works
            </button>
            
            <button 
              onClick={handleDashboardClick}
              className="font-medium text-lg text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B]"
            >
              Dashboard
            </button>

            {/* Resources Dropdown - Mobile */}
            <div>
              <button 
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="font-medium text-lg text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B] flex items-center justify-between w-full"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div className="pl-3 sm:pl-4 space-y-2 mt-2">
                  <button 
                    onClick={() => handleNavigation('/resources')}
                    className="font-medium text-base text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B] block w-full"
                  >
                    Learning Resources
                  </button>
                  <button 
                    onClick={() => handleNavigation('/support')}
                    className="font-medium text-base text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B] block w-full"
                  >
                    Community Forums
                  </button>
                  <button 
                    onClick={() => handleNavigation('/contact')}
                    className="font-medium text-base text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B] block w-full"
                  >
                    Contact & Testimonials
                  </button>
                  <button 
                    onClick={() => handleNavigation('/merch')}
                    className="font-medium text-base text-left transition-all hover:opacity-70 py-2 text-[#2D2C2B] block w-full"
                  >
                    Support Merch
                  </button>
                </div>
              )}
            </div>
            
            <div className="pt-3 sm:pt-4 border-t border-current/20 space-y-2 sm:space-y-3">
              <button 
                onClick={() => handleNavigation('/aitherapist')}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-md bg-[#FF6E40] text-white hover:bg-[#ff5722]"
              >
                Get Help Now
              </button>
              <button 
                onClick={handleDashboardClick}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all hover:scale-105 bg-[#0061EF] text-white hover:bg-[#0052cc]"
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