"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import Vapi from "@vapi-ai/web";
import BackButton from '@/components/BackButton';

interface VapiWidgetProps {
  apiKey?: string;
  assistantId?: string;
  config?: Record<string, unknown>;
}

const AIPage: React.FC<VapiWidgetProps> = ({
  apiKey,
  assistantId,
  config = {},
}) => {
  const API_KEY = apiKey ?? process.env.NEXT_PUBLIC_VAPI_API_KEY ?? "";
  const ASSISTANT_ID = assistantId ?? process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID ?? "";
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const [vapi, setVapi] = useState<any | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string }>>([]);
  const [autoScroll, setAutoScroll] = useState(true);

  // Smart auto-scroll: only scroll if user is near bottom
  useEffect(() => {
    if (!autoScroll) return;
    
    // Delay scroll slightly to let DOM update
    const scrollTimer = setTimeout(() => {
      if (messagesContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
        const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
        
        // Only auto-scroll if user is already near the bottom
        if (isNearBottom || transcript.length === 1) {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 50);

    return () => clearTimeout(scrollTimer);
  }, [transcript, autoScroll]);

  useEffect(() => {
    if (!API_KEY) {
      console.warn("VAPI API key is missing. Add NEXT_PUBLIC_VAPI_API_KEY to your .env.local");
      return;
    }

    const vapiInstance = new Vapi(API_KEY);
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      console.log("Call started");
      setIsConnected(true);
    });

    vapiInstance.on("call-end", () => {
      console.log("Call ended");
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on("speech-start", () => {
      console.log("Assistant started speaking");
      setIsSpeaking(true);
    });

    vapiInstance.on("speech-end", () => {
      console.log("Assistant stopped speaking");
      setIsSpeaking(false);
    });

    vapiInstance.on("message", (message: any) => {
      if (message.type === "transcript") {
        setTranscript((prev) => [
          ...prev,
          { role: message.role, text: message.transcript },
        ]);
      }
    });

    vapiInstance.on("error", (error: any) => {
      console.error("Vapi error:", error);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [API_KEY]);

  const startCall = () => {
    if (!vapi) {
      console.warn("Vapi instance not initialized.");
      return;
    }
    if (!ASSISTANT_ID) {
      console.warn("Assistant ID missing.");
      return;
    }
    vapi.start(ASSISTANT_ID);
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  const clearTranscript = () => {
    setTranscript([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 mt-16 sm:mt-20 md:mt-24">
        {/* back btn */}
        <BackButton href="/" label="Back" className="mb-4 sm:mb-6" />
        
        {/* header section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* left - title & desc */}
            <div className="max-w-2xl flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
                Lumina – AI-Powered Mental Health Support
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">Private • Accessible • Supportive</p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Talk to Ashley, an AI support assistant designed to offer calm guidance, coping strategies, and supportive conversation.
              </p>
            </div>

            {/* status badge */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 w-full md:w-auto md:flex-shrink-0">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-3 h-3 rounded-full ${isConnected ? (isSpeaking ? "bg-red-500 animate-pulse" : "bg-green-500") : "bg-gray-400"}`}></div>
                <span className="font-semibold text-gray-900">
                  {isConnected ? (isSpeaking ? "Speaking..." : "Connected") : "Ashley is online"}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {isConnected ? "Ashley is listening to you" : "Start a conversation whenever you're ready"}
              </p>
            </div>
          </div>
        </div>

        {/* main content area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* conversation panel */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8">
              {/* header w/ controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Live Chat</h2>
                  <p className="text-gray-600 text-sm mt-1">Secure, real-time chat with Ashley</p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to clear your chat history?')) {
                        clearTranscript();
                      }
                    }}
                    className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-xs sm:text-sm whitespace-nowrap"
                  >
                    Clear Chat History
                  </button>

                  {/* Auto-scroll toggle button */}
                  <button
                    onClick={() => setAutoScroll(!autoScroll)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm whitespace-nowrap ${
                      autoScroll
                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    title={autoScroll ? 'Auto-scroll is ON' : 'Auto-scroll is OFF'}
                  >
                    {autoScroll ? '📌 Auto-scroll' : '📍 Manual scroll'}
                  </button>
                  
                  {!isConnected ? (
                    <button
                      onClick={startCall}
                      disabled={!API_KEY || !ASSISTANT_ID}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-9.9a9 9 0 012.728-2.728" />
                      </svg>
                      <span>Talk to Ashley</span>
                    </button>
                  ) : (
                    <button
                      onClick={endCall}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center space-x-2 text-sm sm:text-base"
                    >
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>End Call</span>
                    </button>
                  )}
                </div>
              </div>

              {/* conversation display */}
              <div ref={messagesContainerRef} className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 h-64 sm:h-80 md:h-96 overflow-y-auto">
                {transcript.length === 0 ? (
                  <div className="text-center text-gray-500 h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-gray-900 mb-2">No messages yet — start a conversation to begin.</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4\">
                    {transcript.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-xs sm:max-w-sm md:max-w-2xl rounded-2xl px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-base ${
                          msg.role === "user" 
                            ? "bg-blue-600 text-white rounded-br-none" 
                            : "bg-white border border-gray-200 text-gray-900 rounded-bl-none shadow-sm"
                        }`}>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className={`w-2 h-2 rounded-full ${
                              msg.role === "user" ? "bg-blue-200" : "bg-green-500"
                            }`}></div>
                            <span className="text-sm font-medium opacity-80">
                              {msg.role === "user" ? "You" : "Ashley"}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                    {/* Invisible element at the bottom for auto-scroll */}
                    <div ref={messagesEndRef} />
                  </div>
                )}                
              </div>
              
              {/* expectation setting & privacy */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-blue-900">Ashley provides supportive, non-judgmental guidance.</p>
              </div>
              <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
                <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Conversations are private and encrypted.
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            {/* About Ashley - card style */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl shadow-md border border-gray-200 p-6 sm:p-8 mb-4 sm:mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg flex-shrink-0">
                  A
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Ashley</h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">AI Support Assistant</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                Ashley is here to provide compassionate listening and mental health support through conversation.
              </p>
              <div className="flex items-center text-xs sm:text-sm text-green-600 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                <span>Online • Available now</span>
              </div>
            </div>

            {/* Features - grouped & card style */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-gray-200 p-6 sm:p-8 mb-4 sm:mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">How Ashley Can Help</h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Emotional Support</h4>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Provide emotional support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Offer compassionate listening</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Stress & Anxiety Tools</h4>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Help with anxiety relief</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600">Teach coping strategies</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Mindfulness & Breathing</h4>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Practice mindfulness</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Suggest breathing exercises</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice - updated */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 sm:p-6">
              <h4 className="font-semibold text-orange-900 mb-2 text-xs sm:text-sm">Important Notice</h4>
              <p className="text-xs sm:text-sm text-orange-800 leading-relaxed">
                Ashley is an AI support tool and does not replace professional mental health care. If you need immediate help, contact 988 or local emergency services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPage;