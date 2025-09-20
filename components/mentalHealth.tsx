import React from 'react';

const MentalHealth = () => {
  return (
    <div className="bg-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top banner */}
        <div className="bg-blue-100 rounded-2xl px-6 py-4 mb-16 flex items-center justify-between">
          <p className="text-gray-700 font-medium">
            Meet our AI powered mental health solutions
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left column - Main text and button */}
          <div className="lg:col-span-1 mt-10">
            <h1 className="text-5xl text-gray-900 mb-6">
              Mental health <p className='font-semibold inline'>matters {" "}</p>
          
                for everyone.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Reach vital resources or talk to one of our certified therapists for every step of your mental health journey.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Explore Solutions
            </button>
          </div>

          {/* Right columns - Service cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expand Care card */}
            <div className="bg-rose-400 rounded-2xl p-6 group hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Resources</h3>
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                Access to vital information about mental health disorders
              </p>
            </div>

            {/* Manage Crises card */}
            <div className="bg-green-400 rounded-2xl p-6 group hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Support Community</h3>
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                Read and talk to people that have had similar issues
              </p>
            </div>

            {/* Promote Wellness card */}
            <div className="bg-orange-400 rounded-2xl p-6 group hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Blog</h3>
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                Read our curated mental health blog articles for tips and insights.
              </p>
            </div>

            {/* Prevent Escalation card */}
            <div className="bg-blue-400 rounded-2xl p-6 group hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Schedule Consultation</h3>
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                Book an appointment for one of our many certified therapists
              </p>
            </div>
            
          </div>
        </div>
        
          <div className="border-t border-gray-200  mt-20 "></div>
      </div>
    </div>
  );
};

export default MentalHealth;