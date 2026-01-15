"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const HeroSection = () => {
  const router = useRouter();
  const { settings } = useAccessibility();
  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const quotes = [
    'Your Mental Health Matters',
    'You Are Not Alone',
    'Healing Starts Here',
    'Your Journey, Your Pace',
    'Every Step Counts'
  ];

  useEffect(() => {
    setAnimationsTriggered(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseAfterTyping = 3000;
    const pauseAfterDeleting = 500;

    if (!isDeleting && displayedText === currentQuote) {
      setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      return;
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      setTimeout(() => {}, pauseAfterDeleting);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentQuote.substring(0, displayedText.length - 1)
          : currentQuote.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentQuoteIndex]);

  const getHeadline = () => {
    if (settings.language === 'es') return displayedText || 'Tu Salud Mental Importa';
    if (settings.language === 'fr') return displayedText || 'Votre Santé Mentale Compte';
    if (settings.language === 'de') return displayedText || 'Ihre Psychische Gesundheit Ist Wichtig';
    if (settings.language === 'zh') return displayedText || '您的心理健康很重要';
    return displayedText || 'Your Mental Health Matters';
  };

  const getDescription = () => {
    if (settings.language === 'es') return 'Lumina te conecta con soporte de IA y terapeutas con licencia.';
    if (settings.language === 'fr') return 'Lumina vous connecte avec un support IA et des thérapeutes agréés.';
    if (settings.language === 'de') return 'Lumina verbindet Sie mit KI-Unterstützung und lizenzierten Therapeuten.';
    if (settings.language === 'zh') return 'Lumina随时随地为您提供AI支持和持证治疗师服务。';
    return 'Lumina connects you with AI support and licensed therapists anytime, anywhere.';
  };

  const getButtonPrimary = () => {
    if (settings.language === 'es') return 'Obtener Ayuda Inmediata';
    if (settings.language === 'fr') return 'Obtenir Aide';
    if (settings.language === 'de') return 'Sofortige Hilfe';
    if (settings.language === 'zh') return '立即获得帮助';
    return 'Get Immediate Help';
  };

  const getButtonSecondary = () => {
    if (settings.language === 'es') return 'Reservar Terapeuta';
    if (settings.language === 'fr') return 'Réserver Thérapie';
    if (settings.language === 'de') return 'Therapeutensitzung Buchen';
    if (settings.language === 'zh') return '预约治疗师';
    return 'Book a Therapist';
  };
  
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700"
      role="banner"
      style={{ marginTop: '80px', minHeight: '95vh' }}
    >
      {/* Star decoration - scattered aesthetically */}
      {/* Top left corner */}
      <div className="absolute top-12 left-6 sm:top-16 sm:left-12 lg:top-24 lg:left-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-3xl sm:text-4xl lg:text-5xl animate-pulse">✦</div>
      </div>

      {/* Top right area */}
      <div className="absolute top-20 right-8 sm:top-24 sm:right-16 lg:top-32 lg:right-24 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-2xl sm:text-3xl lg:text-4xl animate-pulse" style={{ animationDelay: '0.5s' }}>✦</div>
      </div>

      {/* Middle left area */}
      <div className="absolute top-1/3 left-4 sm:left-8 lg:left-16 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-xl sm:text-2xl lg:text-3xl animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
      </div>
   {/* Middle left area */}
      <div className="absolute top-1/3 left-50 sm:left-8 lg:left-100 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-xl sm:text-2xl lg:text-3xl animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
      </div>
         {/* Middle left area */}
      <div className="absolute top-1/2 right-50 sm:right-8 lg:right-100 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-xl sm:text-2xl lg:text-3xl animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
      </div>
      {/* Bottom left area */}
      <div className="absolute bottom-20 left-12 sm:bottom-24 sm:left-20 lg:bottom-32 lg:left-32 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-2xl sm:text-3xl lg:text-4xl animate-pulse" style={{ animationDelay: '1.5s' }}>✦</div>
      </div>

      {/* Bottom right area */}
      <div className="absolute bottom-16 right-6 sm:bottom-20 sm:right-12 lg:bottom-28 lg:right-20 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-2xl sm:text-3xl lg:text-4xl animate-pulse" style={{ animationDelay: '2s' }}>✦</div>
      </div>

      {/* Far right middle */}
      <div className="absolute top-2/3 right-4 sm:right-8 lg:right-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <div className="text-amber-300 text-xl sm:text-2xl lg:text-3xl animate-pulse" style={{ animationDelay: '0.8s' }}>✦</div>
      </div>
      {/* Main container */}
      <div className="relative flex items-center justify-center px-8 md:px-16 lg:px-24 py-12 min-h-[90vh] max-w-7xl mx-auto">
        
        {/* Centered Text Content */}
        <div className="w-full text-center z-10">
          <h1 
            className={`text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 mx-auto transition-all duration-700 ease-in-out drop-shadow-lg ${
              animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '500ms', minHeight: '1.2em' }}
          >
            <span className="inline-block" style={{ width: '100%', minHeight: '1.2em' }}>{getHeadline()}   <span className="inline-block w-1 h-16 bg-amber-300 ml-2 animate-pulse" style={{ animationDuration: '1s' }}></span></span>
         
          </h1>

          <p 
            className={`text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-10 max-w-3xl mx-auto transition-all duration-1000 drop-shadow-md ${
              animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            {getDescription()}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA - Warm Coral */}
            <button 
              onClick={() => router.push('/aitherapist')}
              className={`bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-200 ${
                animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '2000ms' }}
              aria-label={getButtonPrimary()}
            >
              {getButtonPrimary()}
            </button>
            
            {/* Secondary CTA - Pink Outline */}
            <button 
              onClick={() => router.push('/therapists')}
              className={`bg-transparent border-3 border-pink-500 text-pink-400  px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-pink-400 hover:text-white hover:shadow-2xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300 ${
                animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '2500ms' }}
              aria-label={getButtonSecondary()}
            >
              {getButtonSecondary()}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
