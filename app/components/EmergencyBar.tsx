"use client";

import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

const EmergencyBar = () => {
  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 dark:from-rose-500 dark:via-pink-500 dark:to-rose-600 text-white shadow-lg"
      style={{height: '40px'}}
      role="alert"
      aria-live="polite"
      aria-label="Emergency mental health support hotline"
    >
      <a 
        href="tel:988" 
        className="flex items-center justify-center h-full px-4 hover:bg-rose-500/90 dark:hover:bg-rose-600/90 transition-all hover:shadow-xl group"
        aria-label="Call 988 for immediate mental health support"
      >
        <div className="flex items-center gap-3 animate-pulse-slow">
          {/* alert icon */}
          <AlertCircle size={18} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
          
          {/* txt */}
          <p className="text-sm font-medium">
            <span className="hidden sm:inline">Crisis Support Available 24/7 • </span>
            Call <span className="font-bold underline mx-1">988</span> for immediate help
          </p>

          {/* phone icon */}
          <Phone size={16} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
        </div>
      </a>
      
      {/* custom anim */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EmergencyBar;
