"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MentalHealth = () => {
  const router = useRouter();
  
  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 relative overflow-hidden" id="how-it-works">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/video/background-video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2C2B] mb-3 sm:mb-4">How Lumina Works</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#6B6B6B] max-w-3xl mx-auto px-2">
            Three simple steps to better mental health and personalized support
          </p>
        </div>

        {/* 3-col step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-16">
          {/* step 1 - ai assistant */}
          <div 
            className="bg-[#F9F4F2] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-rose-400 group"
            onClick={() => router.push('/aitherapist')}
          >
            <div className="flex flex-col items-center text-center">
              {/* icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-xl border-4 border-rose-400">
                <Image 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=400&fit=crop&q=80" 
                  alt="AI Assistant - Digital chat and messaging"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* step number */}
              <div className="text-xs sm:text-sm font-bold text-rose-400 mb-2 uppercase tracking-wide">Step 1</div>
              
              {/* title */}
              <h3 className="text-lg sm:text-2xl font-bold text-[#2D2C2B] mb-3 sm:mb-4">AI Assistant</h3>
              
              {/* desc */}
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed mb-3 sm:mb-4">
                Get personalized coping strategies, mindfulness exercises, and guided check-ins anytime — works offline and completely private.
              </p>
              
              {/* arrow */}
              <div className="text-rose-400 font-bold group-hover:translate-x-2 transition-transform">→</div>
            </div>
          </div>

          {/* step 2 - therapist connection */}
          <div 
            className="bg-[#F9F4F2] rounded-3xl p-10 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-400 group"
            onClick={() => router.push('/therapists')}
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform shadow-xl border-4 border-green-400">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop&q=80" 
                  alt="Therapist - Mental health professional"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Step Number */}
              <div className="text-sm font-bold text-green-400 mb-2 uppercase tracking-wide">Step 2</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2D2C2B] mb-4">Therapist Connection</h3>
              
              {/* Description */}
              <p className="text-[#6B6B6B] leading-relaxed mb-4">
                Book licensed therapists in just a few clicks. Flexible scheduling, video sessions, and affordable rates for everyone.
              </p>
              
              {/* Arrow */}
              <div className="text-green-400 font-bold group-hover:translate-x-2 transition-transform">→</div>
            </div>
          </div>

          {/* step 3 - track progress */}
          <div 
            className="bg-[#F9F4F2] rounded-3xl p-10 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-400 group"
            onClick={() => {
              const currentUser = localStorage.getItem('lumina-current-user');
              if (!currentUser) {
                alert('Please sign up or log in first to access your dashboard.');
                return;
              }
              router.push('/dashboard');
            }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform shadow-xl border-4 border-orange-400">
                <Image 
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop&q=80" 
                  alt="Progress tracking - Journal and planning"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Step Number */}
              <div className="text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide">Step 3</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#2D2C2B] mb-4">Track Progress</h3>
              
              {/* Description */}
              <p className="text-[#6B6B6B] leading-relaxed mb-4">
                Monitor your mood and mental health journey over time. See your improvements and celebrate your wins.
              </p>
              
              {/* Arrow */}
              <div className="text-[#82C7D6] font-bold group-hover:translate-x-2 transition-transform">→</div>
            </div>
          </div>
        </div>

        {/* additional resources grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-[#2D2C2B] mb-10">Additional Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* resources card */}
            <div className="bg-[#F9F4F2] rounded-2xl p-8 group hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-400" onClick={() => router.push('/resources')}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#2D2C2B]">Resources Library</h3>
                <svg 
                  className="w-8 h-8 text-[#6B6B6B] group-hover:text-blue-400 group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[#6B6B6B] text-lg">
                Access vital information about mental health disorders, coping strategies, and wellness tips
              </p>
            </div>

            {/* community card */}
            <div className="bg-[#F9F4F2] rounded-2xl p-8 group hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-400" onClick={() => router.push('/support')}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#2D2C2B]">Support Community</h3>
                <svg 
                  className="w-8 h-8 text-[#6B6B6B] group-hover:text-blue-400 group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  stroke="currentColor"  
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[#6B6B6B] text-lg">
                Connect with people who have had similar experiences in a safe, supportive environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;