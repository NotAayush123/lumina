"use client";

import React, { useState } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Settings, Moon, Sun, Type, Contrast, PlayCircle, Volume2, Eye, Languages, Minus, Plus, X } from 'lucide-react';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, toggleDarkMode, setTextSize, toggleHighContrast, toggleReducedMotion, toggleDyslexiaFont, toggleReadAloud, setLanguage } = useAccessibility();

  const textSizes = [
    { value: 'small', label: 'Small', size: '90%' },
    { value: 'medium', label: 'Medium', size: '100%' },
    { value: 'large', label: 'Large', size: '110%' },
    { value: 'xlarge', label: 'X-Large', size: '125%' },
  ];

  return (
    <>
      {/* floating accessibility btn */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 p-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Open accessibility menu"
      >
        {isOpen ? <X size={18} /> : <Settings size={18} className="animate-spin-slow" />}
      </button>

      {/* accessibility panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-40 w-64 max-w-[90vw] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-purple-200 dark:border-purple-700 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 text-white">
            <h3 className="text-sm font-bold flex items-center gap-1.5">
              <Settings size={16} />
              Accessibility
            </h3>
          </div>

          <div className="p-2.5 max-h-[300px] overflow-y-auto space-y-2">
          

            {/* text size */}
            <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Type size={16} className="text-indigo-600" />
                <span className="text-sm font-medium dark:text-white">Text Size</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {textSizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setTextSize(size.value as any)}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                      settings.textSize === size.value
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-indigo-100 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Set text size to ${size.label}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* lang select */}
            <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Languages size={16} className="text-indigo-600" />
                <span className="text-sm font-medium dark:text-white">Language</span>
              </div>
              <select
                value={settings.language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-1.5 text-xs rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 dark:text-white"
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
              </select>
            </div>

            {/* high contrast */}
            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2">
                <Contrast size={16} className="text-indigo-600" />
                <span className="text-sm font-medium dark:text-white">High Contrast</span>
              </div>
              <button
                onClick={toggleHighContrast}
                className={`w-10 h-5 rounded-full transition-colors ${
                  settings.highContrast ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Toggle high contrast, currently ${settings.highContrast ? 'on' : 'off'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  settings.highContrast ? 'translate-x-5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {/* reduced motion CHANGE THIS LATER BTW DONT FORGET */}
            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2">
                <PlayCircle size={16} className="text-indigo-600" />
                <span className="text-sm font-medium dark:text-white">Reduced Motion</span>
              </div>
              <button
                onClick={toggleReducedMotion}
                className={`w-10 h-5 rounded-full transition-colors ${
                  settings.reducedMotion ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Toggle reduced motion, currently ${settings.reducedMotion ? 'on' : 'off'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  settings.reducedMotion ? 'translate-x-5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {/* dyslexia font */}
            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-indigo-600" />
                <span className="text-sm font-medium dark:text-white">Dyslexia Font</span>
              </div>
              <button
                onClick={toggleDyslexiaFont}
                className={`w-10 h-5 rounded-full transition-colors ${
                  settings.dyslexiaFont ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Toggle dyslexia-friendly font, currently ${settings.dyslexiaFont ? 'on' : 'off'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  settings.dyslexiaFont ? 'translate-x-5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {/* text-to-speech */}
            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-2">
                <Volume2 size={16} className="text-indigo-600" />
                <span className="text-sm font-medium dark:text-white">Read Aloud</span>
              </div>
              <button
                onClick={toggleReadAloud}
                className={`w-10 h-5 rounded-full transition-colors ${
                  settings.readAloud ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Toggle read aloud, currently ${settings.readAloud ? 'on' : 'off'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  settings.readAloud ? 'translate-x-5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          </div>

          <div className="p-2 bg-gray-100 dark:bg-gray-900 text-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">Settings saved automatically</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default AccessibilityMenu;
