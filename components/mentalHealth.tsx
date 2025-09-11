import React from 'react'
import { PixelatedCanvas } from './pixelatedCanvas'

const MentalHealth = () => {
  return (
     <section className="bg-gray-100 min-h-screen px-16 py-16">
      <div className="max-w-7xl mx-auto h-screen relative">
        {/* Heading - top left */}
        <div className="absolute top-0 left-0 max-w-xl">
          <h1 className="text-5xl font-normal text-gray-800 leading-tight">
            Your mental health can fragment your life, but with support and care, you can piece it back together!
          </h1>
        </div>

        {/* Image 1 - top right (large) */}
        <div className="absolute top-0 right-0 w-90 h-120 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
           <PixelatedCanvas
        src="https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={800}
        height={600}
        cellSize={4}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
        </div>

        {/* Heart SVG - center middle */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <svg 
            width="160" 
            height="160" 
            viewBox="0 0 100 100" 
            className="drop-shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
            </defs>
            <path 
              d="M50,85 C50,85 20,60 20,40 C20,25 30,15 45,20 C50,22 50,22 55,20 C70,15 80,25 80,40 C80,60 50,85 50,85 Z" 
              fill="url(#heartGradient)"
              stroke="#991b1b" 
              strokeWidth="1"
              className="animate-pulse"
            />
            {/* Heart shine effect */}
            <ellipse 
              cx="42" 
              cy="35" 
              rx="8" 
              ry="12" 
              fill="#ffffff" 
              opacity="0.3"
              transform="rotate(-20 42 35)"
            />
          </svg>
        </div>

        {/* Image 3 - bottom left (large) */}
        <div className="absolute bottom-32 left-0 w-100 h-80 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
             <PixelatedCanvas
        src="https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={800}
        height={600}
        cellSize={4}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
        </div>

        {/* Stats - bottom right */}
        <div className="absolute bottom-16 right-0 flex space-x-16">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-5xl font-light text-gray-800 mb-2">
              1k<span className="text-2xl">+</span>
            </div>
            <p className="text-sm text-gray-600">World champions</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-5xl font-light text-gray-800 mb-2">
              1.8<span className="text-2xl">%</span>
            </div>
            <p className="text-sm text-gray-600">Runner up champions</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-5xl font-light text-gray-800 mb-2">
              4.5<span className="text-2xl">m</span>
            </div>
            <p className="text-sm text-gray-600">Sea games participation</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MentalHealth