import React from 'react';

const BusinessModelSection = () => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Sustainable & Scalable
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            We partner with institutions to provide accessible mental health support while maintaining long-term growth.
          </p>
        </div>

        {/* partnership strategy */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Partnership Opportunities</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                We partner with <span className="font-semibold text-yellow-300">schools, universities, and corporations</span> to provide campus-wide and employee mental health access — expanding our reach while generating sustainable revenue.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">500K+</div>
                <p className="text-xs sm:text-sm">Potential users through partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSection;
