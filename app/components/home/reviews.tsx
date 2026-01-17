"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const FiveStars = ({ 
  rating = 5, 
  colors = ['red', 'green', 'orange', 'blue', 'yellow'],
  size = 'w-5 h-5'
}) => {
  const getStarColor = (starIndex, rating, colors) => {
    const colorIndex = starIndex % colors.length;
    const baseColor = colors[colorIndex];
    
    // Color mappings for Tailwind classes
    const colorMap = {
      red: { filled: 'text-red-500', empty: 'text-red-200' },
      green: { filled: 'text-green-500', empty: 'text-green-200' },
      orange: { filled: 'text-orange-500', empty: 'text-orange-200' },
      blue: { filled: 'text-blue-500', empty: 'text-blue-200' },
      yellow: { filled: 'text-yellow-500', empty: 'text-yellow-200' },
      purple: { filled: 'text-purple-500', empty: 'text-purple-200' },
      pink: { filled: 'text-pink-500', empty: 'text-pink-200' },
      indigo: { filled: 'text-indigo-500', empty: 'text-indigo-200' },
      gray: { filled: 'text-gray-500', empty: 'text-gray-200' },
      teal: { filled: 'text-teal-500', empty: 'text-teal-200' }
    };

    const fillLevel = rating - starIndex;
    
    if (fillLevel >= 1) {
      return colorMap[baseColor]?.filled || 'text-gray-500';
    } else if (fillLevel > 0) {
      return colorMap[baseColor]?.filled || 'text-gray-500';
    } else {
      return colorMap[baseColor]?.empty || 'text-gray-200';
    }
  };

  const getStarFill = (starIndex, rating) => {
    const fillLevel = rating - starIndex;
    if (fillLevel >= 1) return 1; // Full star
    if (fillLevel > 0) return fillLevel; // Partial star
    return 0; // Empty star
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const fillPercentage = getStarFill(i, rating);
        const colorClass = getStarColor(i, rating, colors);
        
        return (
          <div key={i} className="relative">
            {fillPercentage > 0 && fillPercentage < 1 ? (
              // Half star implementation
              <div className="relative">
                <svg className={`${size} text-gray-200 fill-current`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div 
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fillPercentage * 100}%` }}
                >
                  <svg className={`${size} ${colorClass} fill-current`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            ) : (
              // Full or empty star
              <svg className={`${size} ${colorClass} fill-current`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

const StudentSuccessSection = () => {
  const router = useRouter();
  const starColors = ['red', 'green', 'orange', 'blue', 'yellow'];
  
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "University Student",
      initials: "SC",
      color: "blue",
      rating: 5,
      text: "Lumina helped me manage my anxiety during finals. The AI assistant is incredibly supportive, and when I needed professional help, booking a therapist was so easy. Life-changing!"
    },
    {
      name: "Marcus Johnson",
      role: "Young Professional",
      initials: "MJ",
      color: "green",
      rating: 4.8,
      text: "I've tried therapy before, but never found the right fit. With Lumina, I found my therapist quickly and affordably. The combination of AI support and professional guidance is perfect."
    },
    {
      name: "Emma Rodriguez",
      role: "Working Parent",
      initials: "ER",
      color: "rose",
      rating: 4.9,
      text: "As a busy parent, I needed flexible mental health support. Lumina's on-demand features and flexible scheduling have been a lifesaver. I finally have time for my mental health."
    }
  ];
  
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main container with overlapping testimonials */}
        <div className="relative">
          {/* Main gradient box - not full width */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl sm:rounded-2xl md:rounded-3xl px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 mx-auto max-w-6xl relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
                Real People, Real 
                <br />
                <p className="font-semibold">Mental Health Results.</p>
              </h1>
            </div>

            {/* Central image with floating tags */}
            <div className="relative flex justify-center mb-8 sm:mb-12 md:mb-16">
              {/* Student image */}
              <div className="w-full sm:max-w-md md:max-w-lg relative aspect-square sm:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1602043305640-17965d328839?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Student sitting cross-legged with glasses" 
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                />
              </div>

              {/* Floating tags positioned around image - hidden on small screens */}
              <div className="hidden md:block absolute top-6 sm:top-10 md:top-20 left-2 sm:left-4 md:left-8">
                <div className="bg-gray-800 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-lg">
                  1:1 Sessions
                </div>
              </div>

              <div className="hidden md:block absolute top-2 sm:top-4 right-2 sm:right-4 md:right-8">
                <div className="bg-gray-800 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-lg">
                  Life Skills
                </div>
              </div>

              <div className="hidden md:block absolute top-1/2 left-0 sm:left-2 md:left-4">
                <div className="bg-gray-800 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-lg">
                  Coaching
                </div>
              </div>

              <div className="hidden md:block absolute bottom-6 sm:bottom-8 md:bottom-10 right-2 sm:right-4 md:right-8">
                <div className="bg-gray-800 text-white px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-lg">
                  On Demand<br />Support
                </div>
              </div>
            </div>

            {/* Description text */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                Lumina combines AI-powered support with licensed therapists to provide accessible mental health care. Our users report significant improvements in anxiety, depression, and overall well-being.
              </p>
            </div>

            {/* Get In Touch button */}
            <div className="text-center">
              <button 
                onClick={() => router.push('/therapists')}
                className="bg-blue-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Overlapping testimonial cards - positioned to overlap the main box */}
          <div className="relative md:absolute md:-bottom-96 md:left-1/2 md:transform md:-translate-x-1/2 grid grid-cols-1 md:flex md:gap-6 gap-6 z-20 md:w-full md:px-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg md:shadow-xl border border-gray-100 w-full md:w-96">
                <div className="mb-4">
                  <FiveStars rating={testimonial.rating} colors={starColors} />
                </div>
                <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-${testimonial.color}-500 rounded-full mr-3 flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs sm:text-sm font-bold">{testimonial.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-semibold text-sm truncate">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs truncate">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add space for overlapping testimonials */}
        <div className="h-0 md:h-96"></div>
      </div>
    </div>
  );
};

export default StudentSuccessSection;