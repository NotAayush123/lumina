import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-blue-500">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-400 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
        </div>
        <p className='ml-4 text-white font-light text-3xl'>
        Lumina
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <a href="#about" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
          About
        </a>
        <a href="#therapists" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
          Therapists
        </a>
        <a href="#reviews" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
          Reviews
        </a>
        <a href="#contact" className="text-white hover:text-gray-200 transition-colors font-medium text-lg">
          Contact
        </a>
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-yellow-100 text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-200 transition-colors font-medium cursor-pointer shadow-lg">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;