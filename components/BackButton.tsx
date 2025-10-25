"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  href, 
  label = "Back", 
  className = "" 
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center space-x-2 px-4 py-2 
        text-gray-600 hover:text-gray-900 
        bg-white hover:bg-gray-50 
        border border-gray-200 hover:border-gray-300
        rounded-lg 
        transition-all duration-200 ease-in-out
        hover:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${className}
      `}
    >
      <ChevronLeft className="w-4 h-4" />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default BackButton;
