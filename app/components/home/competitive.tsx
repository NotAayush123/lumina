import React from 'react';

const CompetitiveAdvantageSection = () => {
  return (
    <div className="bg-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2D2C2B] mb-4">
            Why Choose Lumina?
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Lumina combines AI innovation with human expertise to deliver unmatched accessibility.
          </p>
        </div>

        {/* comparison table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#F9F4F2]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0061EF]">
                <th className="py-8 px-8 text-left text-white font-bold text-xl">Feature</th>
                <th className="py-8 px-8 text-center text-white font-bold text-xl">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-2">✦</span>
                    <span className="text-2xl">Lumina</span>
                  </div>
                </th>
                <th className="py-8 px-8 text-center text-white font-semibold text-lg opacity-90">Talkspace</th>
                <th className="py-8 px-8 text-center text-white font-semibold text-lg opacity-90">BetterHelp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-6 px-8 font-semibold text-[#2D2C2B] text-lg">AI Support</td>
                <td className="py-6 px-8 text-center bg-[#F9F4F2]">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2 font-medium">Personalized & offline</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">No AI</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">No AI</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-6 px-8 font-semibold text-[#2D2C2B] text-lg">Affordable Access</td>
                <td className="py-6 px-8 text-center bg-[#F9F4F2]">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2 font-medium">Free basic plan</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Paid only</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Paid only</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-6 px-8 font-semibold text-[#2D2C2B] text-lg">Offline Capability</td>
                <td className="py-6 px-8 text-center bg-[#F9F4F2]">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2 font-medium">Full offline support</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Online only</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Online only</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-6 px-8 font-semibold text-[#2D2C2B] text-lg">Licensed Therapists</td>
                <td className="py-6 px-8 text-center bg-[#F9F4F2]">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2 font-medium">Available</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Available</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Available</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-6 px-8 font-semibold text-[#2D2C2B] text-lg">24/7 Immediate Support</td>
                <td className="py-6 px-8 text-center bg-[#F9F4F2]">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2 font-medium">AI always available</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FFCE00] text-3xl font-bold">~</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Delayed responses</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FFCE00] text-3xl font-bold">~</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Delayed responses</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-6 px-8 font-semibold text-[#2D2C2B] text-lg">Community Support</td>
                <td className="py-6 px-8 text-center bg-[#F9F4F2]">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2 font-medium">Peer forums included</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Not available</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FF6E40] text-3xl font-bold">✗</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Not available</p>
                </td>
              </tr>

              <tr className="hover:bg-[#F9F4F2] transition-all duration-200">
                <td className="py-6 px-8 font-semibold text-[#2D2C2B] text-lg">Secure & Private</td>
                <td className="py-6 px-8 text-center bg-[#F9F4F2]">
                  <span className="text-[#82C7D6] text-3xl font-bold">✓</span>
                  <p className="text-sm text-[#6B6B6B] mt-2 font-medium">HIPAA-compliant</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FFCE00] text-3xl font-bold">~</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Basic encryption</p>
                </td>
                <td className="py-6 px-8 text-center">
                  <span className="text-[#FFCE00] text-3xl font-bold">~</span>
                  <p className="text-sm text-[#6B6B6B] mt-2">Basic encryption</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* key differentiator */}
        <div className="mt-16 bg-[#0061EF] rounded-3xl p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-5">Our Competitive Edge</h3>
          <p className="text-xl leading-relaxed max-w-5xl mx-auto">
            Lumina is the <span className="font-bold text-[#FFCE00] bg-white/20 px-4 py-1 rounded-full">only platform</span> offering free AI-powered mental health support with offline capabilities, making professional help accessible to everyone — not just those who can afford it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveAdvantageSection;
