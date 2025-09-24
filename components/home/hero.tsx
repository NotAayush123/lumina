import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-500 relative overflow-hidden">
      {/* Star decoration - top left */}
      <div className="absolute top-32 left-24">
        <div className="text-yellow-300 text-4xl">✦</div>
      </div>


      {/* Star decoration - bottom right */}
      <div className="absolute bottom-32 right-32">
        <div className="text-yellow-300 text-2xl">✦</div>
      </div>
  <div className="absolute bottom-100 right-270">
        <div className="text-yellow-300 text-2xl">✦</div>
      </div>

      {/* Main content container */}
      <div className="flex  justify-between px-48 py-20 h-[85vh]">
        {/* Left side - Text content */}
        <div className="flex-1 max-w-lg items-start flex flex-col justify-end">
          <h1 className="text-white text-5xl font-light leading-relaxed mb-12">
            It is <b className='font-semibold'>normal</b> {" "} to feel
            <br />
            sad, stressed and
            <br />
            anxious during a crisis
          </h1>

          {/* Talk with therapist button */}
          <button className="bg-yellow-100 text-gray-800 px-8 py-3 rounded-full text-lg hover:bg-yellow-200 transition-colors shadow-lg cursor-pointer">
            Talk with a therapist
          </button>
        </div>

        {/* Right side - Eye illustration and text */}
        <div className="flex-1 flex flex-col items-end justify-start relative">
          {/* Eye illustration */}
        <Image src="/assets/eye.png" alt="Eye Illustration" width={800} height={600} className="mb-8" />

          {/* Bottom text with star */}
          <div className="flex items-center space-x-4 text-white ">
            <div className="text-yellow-300 text-2xl">✦</div>
            <p className="text-2xl">Talking to people you trust can help</p>
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default HeroSection;