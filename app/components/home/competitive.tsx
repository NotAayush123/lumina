import React from 'react';

const CompetitiveAdvantageSection = () => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2C2B] mb-3 sm:mb-4">
            Why Choose Lumina?
          </h2>
          <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-3xl mx-auto px-2">
            Lumina combines AI innovation with human expertise to deliver unmatched accessibility.
          </p>
        </div>

        {/* comparison table - responsive wrapper */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-x-auto border-2 border-[#F9F4F2]">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-[#0061EF]">
                <th className="py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8 text-left text-white font-bold text-sm sm:text-base md:text-lg">Feature</th>
                <th className="py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8 text-center text-white font-bold text-sm sm:text-base md:text-lg">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">✦</span>
                    <span className="text-sm sm:text-xl">Lumina</span>
                  </div>
                </th>
                <th className="py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8 text-center text-white font-semibold text-xs sm:text-sm md:text-base opacity-90">Talkspace</th>
                <th className="py-4 sm:py-6 md:py-8 px-3 sm:px-6 md:px-8 text-center text-white font-semibold text-xs sm:text-sm md:text-base opacity-90">BetterHelp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 font-semibold text-[#2D2C2B] text-sm sm:text-base md:text-lg">AI Support</td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center bg-[#F9F4F2]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 font-medium">Personalized & offline</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">No AI</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">No AI</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 font-semibold text-[#2D2C2B] text-sm sm:text-base md:text-lg">Affordable Access</td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center bg-[#F9F4F2]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 font-medium">Free basic plan</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Paid only</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Paid only</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 font-semibold text-[#2D2C2B] text-sm sm:text-base md:text-lg">Offline Capability</td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center bg-[#F9F4F2]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 font-medium">Full offline support</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Online only</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Online only</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 font-semibold text-[#2D2C2B] text-sm sm:text-base md:text-lg">Licensed Therapists</td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center bg-[#F9F4F2]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 font-medium">Available</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Available</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Available</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 font-semibold text-[#2D2C2B] text-sm sm:text-base md:text-lg">24/7 Immediate Support</td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center bg-[#F9F4F2]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 font-medium">AI always available</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FFCE00]">~</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Delayed responses</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FFCE00]">~</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Delayed responses</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 font-semibold text-[#2D2C2B] text-sm sm:text-base md:text-lg">Community Support</td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center bg-[#F9F4F2]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 font-medium">Peer forums included</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Not available</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FF6E40]">✗</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Not available</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 font-semibold text-[#2D2C2B] text-sm sm:text-base md:text-lg">Secure & Private</td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center bg-[#F9F4F2]">
                  <span className="text-2xl sm:text-3xl font-bold text-[#82C7D6]">✓</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2 font-medium">HIPAA-compliant</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FFCE00]">~</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Basic encryption</p>
                </td>
                <td className="py-4 sm:py-6 px-3 sm:px-6 md:px-8 text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FFCE00]">~</span>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 sm:mt-2">Basic encryption</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* key differentiator */}
        <div className="mt-10 sm:mt-12 md:mt-16 bg-[#0061EF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5">Our Competitive Edge</h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-5xl mx-auto px-2">
            Lumina is the <span className="font-bold text-[#FFCE00] bg-white/20 px-3 sm:px-4 py-1 rounded-full inline-block my-1">only platform</span> offering free AI-powered mental health support with offline capabilities, making professional help accessible to everyone — not just those who can afford it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAdvantageSection;
