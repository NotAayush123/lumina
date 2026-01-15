"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilitySettings {
  darkMode: boolean;
  language: string;
  textSize: 'small' | 'medium' | 'large' | 'xlarge';
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexiaFont: boolean;
  readAloud: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  toggleDarkMode: () => void;
  setLanguage: (lang: string) => void;
  setTextSize: (size: 'small' | 'medium' | 'large' | 'xlarge') => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  toggleDyslexiaFont: () => void;
  toggleReadAloud: () => void;
  speakText: (text: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    darkMode: false,
    language: 'en',
    textSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    dyslexiaFont: false,
    readAloud: false,
  });

  // load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('lumina-accessibility');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // save settings to localStorage
  useEffect(() => {
    localStorage.setItem('lumina-accessibility', JSON.stringify(settings));
    
    // apply settings to doc
    const root = document.documentElement;
    
    // dark mode
    if (settings.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // text size
    root.setAttribute('data-text-size', settings.textSize);
    
    // high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
    
    // dyslexia font
    if (settings.dyslexiaFont) {
      root.classList.add('dyslexia-font');
    } else {
      root.classList.remove('dyslexia-font');
    }
  }, [settings]);

  const toggleDarkMode = () => setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
  const setLanguage = (lang: string) => setSettings(prev => ({ ...prev, language: lang }));
  const setTextSize = (size: 'small' | 'medium' | 'large' | 'xlarge') => setSettings(prev => ({ ...prev, textSize: size }));
  const toggleHighContrast = () => setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  const toggleReducedMotion = () => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  const toggleDyslexiaFont = () => setSettings(prev => ({ ...prev, dyslexiaFont: !prev.dyslexiaFont }));
  const toggleReadAloud = () => setSettings(prev => ({ ...prev, readAloud: !prev.readAloud }));

  const speakText = (text: string) => {
    if (settings.readAloud && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <AccessibilityContext.Provider value={{
      settings,
      toggleDarkMode,
      setLanguage,
      setTextSize,
      toggleHighContrast,
      toggleReducedMotion,
      toggleDyslexiaFont,
      toggleReadAloud,
      speakText,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
