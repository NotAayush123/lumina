"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const FooterSection = () => {
  const router = useRouter();
  return (
    <footer className="bg-blue-950 text-white">
      {/* hero section */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
          The only all inclusive mental health hub 
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12">
          you'll ever need!
        </p>
        
        {/* cta banner */}
        <div className="bg-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-800 text-sm sm:text-base md:text-lg font-medium text-center sm:text-left">
            Book an appointment with a licensed therapist today!
          </p>
          <button 
            onClick={() => router.push('/therapists')}
            className="bg-blue-600 text-white px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap text-sm sm:text-base w-full sm:w-auto"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* main footer content */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
          {/* top row - logo, nav, badges */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-10 md:mb-12 gap-6 md:gap-8">
            {/* left - logo & nav */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
              {/* logo */}
              <div className="flex-shrink-0">
                <h2 className="text-2xl sm:text-3xl text-white">Lumina</h2>
              </div>
              
              {/* nav links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                <button 
                  onClick={() => router.push('/')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                >
                  About
                </button>
                <button 
                  onClick={() => router.push('/resources')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                >
                  Our Solutions
                </button>
                <button 
                  onClick={() => router.push('/therapists')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                >
                  Therapists
                </button>
                <button 
                  onClick={() => router.push('/support')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                >
                  Support Community
                </button>
                <a 
                  href="https://www.mentalhealth.gov/get-help/immediate-help" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                >
                  Crisis Help
                </a>
                <button 
                  onClick={() => router.push('/resources')}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                >
                  Resources
                </button>
              </div>
            </div>
          </div>

          {/* bottom section - crisis resources */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-start lg:items-center">
              {/* warning msg */}
              <div className="lg:col-span-1 flex items-start space-x-2 sm:space-x-3">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-red-400 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">
                  If you or a loved one is in emotional distress, here are some resources
                </p>
              </div>

              {/* suicide & crisis lifeline */}
              <div className="text-left sm:text-center lg:text-left">
                <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Suicide and Crisis Lifeline</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Call or text 9-8-8 (Available 24/7)</p>
              </div>

              {/* crisis text line */}
              <div className="text-left sm:text-center lg:text-left">
                <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Crisis Text Line</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Text HOME to 741741</p>
              </div>

              {/* crisis resources btn */}
              <div className="text-left sm:text-center lg:text-right">
                <a 
                  href="https://www.mentalhealth.gov/get-help/immediate-help" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-red-600 transition-colors inline-block text-sm sm:text-base"
                >
                  Crisis Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;