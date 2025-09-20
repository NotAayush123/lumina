import React from 'react';

const StudentSuccessSection = () => {
  return (
    <div className="bg-white py-20 px-8">
      <div className="max-w-9xl mx-auto">
        {/* Main container with overlapping testimonials */}
        <div className="relative">
          {/* Main gradient box - not full width */}
          <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl px-16 py-20 mx-auto max-w-7xl relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-6xl text-gray-900 mb-4">
                Proven to help 
                <br />
                <p className="font-semibold">mental health.</p>
              </h1>
            </div>

            {/* Central image with floating tags */}
            <div className="relative flex justify-center mb-16">
              {/* Student image */}
              <div className="w-160 h-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1602043305640-17965d328839?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Student sitting cross-legged with glasses" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Floating tags positioned around image */}
              <div className="absolute top-20  left-50">
                <div className="bg-gray-800 text-white px-5 py-3 rounded-xl text-sm font-medium shadow-lg">
                  1:1 Sessions
                </div>
              </div>

              <div className="absolute top-4 right-50">
                <div className="bg-gray-800 text-white px-5 py-3 rounded-xl text-sm font-medium shadow-lg">
                  Life Skills
                </div>
              </div>

              <div className="absolute top-80 left-30">
                <div className="bg-gray-800 text-white px-5 py-3 rounded-xl text-sm font-medium shadow-lg">
                  Coaching
                </div>
              </div>

              <div className="absolute bottom-8 right-30">
                <div className="bg-gray-800 text-white px-5 py-3 rounded-xl text-sm font-medium shadow-lg">
                  On Demand<br />Support
                </div>
              </div>
            </div>

            {/* Description text */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                Among people with severe mental disorders, 70% saw improvements after engaging in Lumina services, and 61% dropped to low risk. With so many factors contributing to mental health disorders, it's clear Lumina makes a difference.
              </p>
            </div>

            {/* Get In Touch button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Overlapping testimonial cards - positioned to overlap the main box */}
          <div className="absolute -bottom-64 left-1/2 transform -translate-x-1/2 flex space-x-6 z-20">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 w-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-base">
                My experience with Lumina has been so special and my life is happier and more fulfilling because of it.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <span className="text-gray-600 font-medium">Lumina student</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 w-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-base">
                My therapist was extremely helpful and made sense of everything going on in my life to ease my anxiety. It is also a free service through our university where as therapy is normally an expense students cannot afford.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <span className="text-gray-600 font-medium">Lumina student</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 w-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-base">
                The conversations that I have with my therapist and the ways he helps lay out a plan to help improve my mental health are incredibly effective in getting me back to a sense of normalcy.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <span className="text-gray-600 font-medium">Lumina student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add space for overlapping testimonials */}
        <div className="h-32"></div>
      </div>
    </div>
  );
};

export default StudentSuccessSection;