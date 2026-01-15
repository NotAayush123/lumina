import React from 'react';

const BusinessModelSection = () => {
  return (
    <div className="bg-white px-8 py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainable & Scalable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with institutions to provide accessible mental health support while maintaining long-term growth.
          </p>
        </div>

        {/* partnership strategy */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">Partnership Opportunities</h3>
              <p className="text-lg leading-relaxed">
                We partner with <span className="font-semibold text-yellow-300">schools, universities, and corporations</span> to provide campus-wide and employee mental health access — expanding our reach while generating sustainable revenue.
              </p>
            </div>
            <div className="flex-shrink-0 ml-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-yellow-300">500K+</div>
                <p className="text-sm mt-2">Potential users through partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSection;
