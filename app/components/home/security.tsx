import React from 'react';

const SecuritySection = () => {
  return (
    <div className="bg-white px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Privacy Is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take security seriously. Your mental health journey is personal, and we protect it with industry-leading standards.
          </p>
        </div>

        {/* security features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* end-to-end encryption */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 hover:shadow-xl transition-shadow">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6 mx-auto">
              🔒
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">End-to-End Encryption</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              All conversations and data are encrypted using industry-standard protocols. Your information is secure in transit and at rest.
            </p>
          </div>

          {/* anonymous storage */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-shadow">
            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6 mx-auto">
              👤
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Anonymous AI Interactions</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              AI conversations are stored anonymously without identifying information, ensuring complete privacy for your mental health journey.
            </p>
          </div>

          {/* hipaa compliance */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6 mx-auto">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">HIPAA Compliant</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Lumina is HIPAA-compliant, meeting the highest standards for protecting sensitive health information in the United States.
            </p>
          </div>
        </div>

        {/* additional security features */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Security Measures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4 flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h4 className="font-semibold mb-2">Secure Authentication</h4>
                <p className="text-gray-300 text-sm">Multi-factor authentication and secure password requirements protect your account.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4 flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Minimization</h4>
                <p className="text-gray-300 text-sm">We only collect essential information and never share your data with third parties.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4 flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regular Security Audits</h4>
                <p className="text-gray-300 text-sm">Our systems undergo regular third-party security audits and penetration testing.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4 flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h4 className="font-semibold mb-2">Offline Privacy Mode</h4>
                <p className="text-gray-300 text-sm">Use AI features completely offline for maximum privacy when you need it most.</p>
              </div>
            </div>
          </div>
        </div>

        {/* trust badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Your trust matters. We're committed to maintaining the highest standards of privacy and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
