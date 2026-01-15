"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Home, Calendar, BookOpen, Users, HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi! I'm your Lumina navigation assistant. How can I help you explore our platform?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Calendar, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Resources', path: '/resources' },
    { icon: Users, label: 'Find Therapist', path: '/therapists' },
    { icon: HelpCircle, label: 'Get Help Now', path: '/aitherapist' },
  ];

  const handleQuickAction = (path: string, label: string) => {
    setMessages(prev => [...prev, { text: `Take me to ${label}`, sender: 'user' }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: `Navigating to ${label}...`, sender: 'bot' }]);
      setTimeout(() => {
        router.push(path);
        setIsOpen(false);
      }, 500);
    }, 300);
  };

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('dashboard') || msg.includes('account') || msg.includes('profile')) {
      setTimeout(() => router.push('/dashboard'), 1000);
      return "I'll take you to your dashboard where you can track your progress, chat with AI, and manage appointments!";
    }
    
    if (msg.includes('therapist') || msg.includes('counselor') || msg.includes('professional')) {
      setTimeout(() => router.push('/therapists'), 1000);
      return "Let me show you our licensed therapists. You can browse profiles and book sessions!";
    }
    
    if (msg.includes('resource') || msg.includes('article') || msg.includes('learn')) {
      setTimeout(() => router.push('/resources'), 1000);
      return "Great! Our resources section has articles, videos, exercises, and audio guides for mental wellness.";
    }
    
    if (msg.includes('help') || msg.includes('support') || msg.includes('crisis') || msg.includes('talk')) {
      setTimeout(() => router.push('/aitherapist'), 1000);
      return "I'm taking you to our AI support chat where you can get immediate help and coping strategies!";
    }
    
    if (msg.includes('home') || msg.includes('start') || msg.includes('main')) {
      setTimeout(() => router.push('/'), 1000);
      return "Taking you back to the home page!";
    }
    
    if (msg.includes('how') && msg.includes('work')) {
      const element = document.getElementById('how-it-works');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
      return "Let me show you how Lumina works! Scrolling down...";
    }
    
    if (msg.includes('review') || msg.includes('testimonial') || msg.includes('success')) {
      const element = document.getElementById('reviews');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
      return "Check out these success stories from our users!";
    }
    
    return "I can help you navigate to: Dashboard, Find a Therapist, Resources, Get Help Now, or back to Home. What would you like to explore?";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* floating chat btn */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600'
        }`}
      >
        {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            AI
          </span>
        )}
      </button>

      {/* chat window(change ui a lil) */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[90vw] h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-blue-200 dark:border-blue-700">
          {/* header */}
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white">
            <h3 className="text-base font-bold flex items-center gap-2">
              <MessageCircle size={18} />
              Navigation Assistant
            </h3>
            <p className="text-xs text-blue-100 mt-0.5">Ask me anything!</p>
          </div>

          {/* quick acts */}
          <div className="p-2 bg-blue-50 dark:bg-gray-700 border-b border-blue-100 dark:border-gray-600">
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-1.5 font-medium">Quick Actions:</p>
            <div className="flex gap-1.5 flex-wrap">
              {quickActions.map((action) => (
                <button
                  key={action.path}
                  onClick={() => handleQuickAction(action.path, action.label)}
                  className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-gray-600 rounded-full text-xs font-medium text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-gray-500 transition-colors shadow-sm border border-blue-200 dark:border-gray-500"
                >
                  <action.icon size={12} />
                  <span className="hidden sm:inline">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* msgs */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-2 rounded-xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <p className="text-xs leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-md border border-gray-200 dark:border-gray-600">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* input */}
          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me..."
                className="flex-1 px-3 py-1.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-1.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full hover:from-blue-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
