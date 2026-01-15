"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, TrendingUp, MessageCircle, BookOpen, Bell, Phone, Send, User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import EmergencyBar from '@/components/EmergencyBar';
import Navbar from '@/components/home/navbar';
import AccessibilityMenu from '@/components/AccessibilityMenu';

// login/signup modal component
const AuthModal = ({ onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) return;

    const users = JSON.parse(localStorage.getItem('lumina-users') || '{}');
    
    if (isLogin) {
      // login
      if (users[formData.username] && users[formData.username].password === formData.password) {
        onAuth(formData.username);
      } else {
        alert('Invalid username or password');
      }
    } else {
      // signup
      if (users[formData.username]) {
        alert('Username already exists');
      } else {
        users[formData.username] = {
          password: formData.password,
          email: formData.email,
          createdAt: Date.now()
        };
        localStorage.setItem('lumina-users', JSON.stringify(users));
        onAuth(formData.username);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-[#FF7A59] to-[#6EC1E4] rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#1F2933] mb-2">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-[#6B7280]">
            {isLogin ? 'Sign in to access your dashboard' : 'Start your mental health journey'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#6EC1E4] focus:outline-none transition-colors"
              placeholder="Enter username"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#6EC1E4] focus:outline-none transition-colors"
                placeholder="Enter email"
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#E5E7EB] focus:border-[#6EC1E4] focus:outline-none transition-colors"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF7A59] text-white py-3 rounded-xl font-semibold hover:bg-[#FF8A69] transition-all shadow-md hover:shadow-lg"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [notifications, setNotifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [moodData, setMoodData] = useState([]);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! How are you feeling today? I'm here to help.", sender: "ai", timestamp: Date.now() }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [completedResources, setCompletedResources] = useState([]);
  const chatContainerRef = useRef(null);

  const resources = [
    { id: 1, title: "Mindfulness Exercises", type: "Video", duration: "15 min" },
    { id: 2, title: "Stress Management Guide", type: "Article", duration: "10 min" },
    { id: 3, title: "Breathing Techniques", type: "Audio", duration: "8 min" },
    { id: 4, title: "Sleep Better Tonight", type: "Article", duration: "12 min" },
  ];

  const quickSuggestions = ["Mindfulness", "Stress Relief", "Sleep Better", "Anxiety Help"];

  const aiResponses = {
    "Mindfulness": "Mindfulness is about being present in the moment. Try a 5-minute breathing exercise: inhale for 4 counts, hold for 4, exhale for 4. Would you like more guided practices?",
    "Stress Relief": "I understand stress can be overwhelming. Quick tip: Try the 5-4-3-2-1 technique - name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste. This grounds you in the present.",
    "Sleep Better": "Good sleep is crucial for mental health. Try establishing a bedtime routine: dim lights 1 hour before bed, avoid screens, keep your room cool, and try deep breathing. Would you like a sleep meditation guide?",
    "Anxiety Help": "I'm here to help with anxiety. Remember: breathe deeply, acknowledge your feelings without judgment, and try to identify what's triggering the anxiety. Would you like to talk about what's causing your anxiety?"
  };

  // load user data on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('lumina-current-user');
    if (savedUser) {
      setCurrentUser(savedUser);
      loadUserData(savedUser);
    }
  }, []);

  // load user-specific data
  const loadUserData = (username) => {
    const userDataKey = `lumina-user-data-${username}`;
    const savedData = localStorage.getItem(userDataKey);
    
    if (savedData) {
      const data = JSON.parse(savedData);
      setMoodData(data.moodData || []);
      setChatMessages(data.chatMessages || [{ id: 1, text: "Hi! How are you feeling today? I'm here to help.", sender: "ai", timestamp: Date.now() }]);
      setAppointments(data.appointments || []);
      setCompletedResources(data.completedResources || []);
      setNotifications(data.notifications || 0);
    } else {
      // fresh account - set empty data
      setMoodData([]);
      setChatMessages([{ id: 1, text: "Hi! Welcome to Lumina! I'm your AI assistant. How are you feeling today?", sender: "ai", timestamp: Date.now() }]);
      setAppointments([]);
      setCompletedResources([]);
      setNotifications(0);
    }
  };

  // save user data whenever it changes
  useEffect(() => {
    if (currentUser) {
      const userDataKey = `lumina-user-data-${currentUser}`;
      const userData = {
        moodData,
        chatMessages,
        appointments,
        completedResources,
        notifications,
        lastUpdated: Date.now()
      };
      localStorage.setItem(userDataKey, JSON.stringify(userData));
    }
  }, [currentUser, moodData, chatMessages, appointments, completedResources, notifications]);

  // Handle authentication
  const handleAuth = (username) => {
    setCurrentUser(username);
    localStorage.setItem('lumina-current-user', username);
    loadUserData(username);
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('lumina-current-user');
    setMoodData([]);
    setChatMessages([]);
    setAppointments([]);
    setCompletedResources([]);
    setNotifications(0);
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  const handleSendMessage = (messageText) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: Date.now()
    };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: aiResponses[messageText] || "I hear you. Mental health is important, and I'm here to support you. Can you tell me more about what you're experiencing? Or try one of the quick suggestions for immediate tips!",
        sender: "ai",
        timestamp: Date.now()
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickSuggestion = (suggestion) => {
    handleSendMessage(suggestion);
  };

  // Show auth modal if not logged in
  if (!currentUser) {
    return (
      <>
        <EmergencyBar />
        <Navbar />
        <AuthModal onAuth={handleAuth} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Emergency Bar */}
      <EmergencyBar />
      
      {/* Accessibility Menu */}
      <AccessibilityMenu />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Welcome Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Welcome back, {currentUser}! 👋</h1>
            <p className="text-sm sm:text-base text-gray-600">Here's your mental health overview</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-all shadow-md text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
            <span className="sm:hidden">Exit</span>
          </motion.button>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* AI Assistant Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">AI Assistant</h2>
                    <p className="text-xs sm:text-sm text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                      Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div 
                ref={chatContainerRef}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 min-h-[200px] sm:min-h-[250px] max-h-[300px] sm:max-h-[350px] overflow-y-auto" 
                id="chatContainer"
              >
                {chatMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`mb-3 ${message.sender === 'user' ? 'flex justify-end' : ''}`}
                  >
                    <div className={`rounded-2xl p-3 max-w-[85%] ${
                      message.sender === 'ai' 
                        ? 'bg-blue-100' 
                        : 'bg-green-500 text-white'
                    }`}>
                      <p className={`text-sm ${message.sender === 'ai' ? 'text-gray-800' : 'text-white'}`}>
                        {message.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-blue-100 rounded-2xl p-3 max-w-[80%] mb-3"
                  >
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="mb-3 sm:mb-4 flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(chatInput)}
                  placeholder="Type message..."
                  className="flex-1 px-3 sm:px-4 py-2 bg-gray-100 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#6EC1E4]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage(chatInput)}
                  className="px-4 sm:px-6 py-2 bg-[#FF7A59] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-[#FF8A69] transition-all shadow-md"
                >
                  <span className="hidden sm:inline">Send</span>
                  <Send className="w-4 h-4 sm:hidden" />
                </motion.button>
              </div>

              {/* Quick Suggestions */}
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    onClick={() => handleQuickSuggestion(suggestion)}
                    className="px-4 py-2 bg-[#6EC1E4] text-white rounded-full text-sm hover:bg-[#5AB0D3] transition-all shadow-md"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Mood Tracker Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6EC1E4] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">Mood Tracker</h2>
                  <p className="text-xs sm:text-sm text-gray-600">Your progress this week</p>
                </div>
              </div>

              {/* Chart */}
              <div className="flex items-end justify-between h-40 gap-2 mb-4">
                {moodData.length > 0 ? (
                  moodData.slice(0, 7).map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${value * 10}%` }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-[#6EC1E4] to-[#A0D9F5] rounded-t-lg hover:from-[#5AB0D3] hover:to-[#8FCCE8] transition-all cursor-pointer relative group"
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {value}/10
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No mood data yet. Start tracking your mood!
                  </div>
                )}
              </div>

              {moodData.length > 0 && (
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              )}

              <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-[#6EC1E4]">
                <p className="text-sm text-[#1F2933] font-medium">
                  {moodData.length > 0 ? "🎉 Keep tracking your mood daily!" : "✨ Start your mood tracking journey today"}
                </p>
              </div>

              {/* Add Mood Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const randomMood = Math.floor(Math.random() * 3) + 7; // Random 7-9 for demo
                  setMoodData([...moodData, randomMood].slice(-7)); // Keep last 7 days
                }}
                className="mt-3 w-full bg-[#FF7A59] text-white py-2 rounded-xl font-medium hover:bg-[#FF8A69] transition-all"
              >
                + Log Today's Mood
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Appointments Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">Appointments</h2>
                  <p className="text-xs sm:text-sm text-gray-600">Your scheduled sessions</p>
                </div>
              </div>

              <div className="space-y-3">
                {appointments.length > 0 ? (
                  appointments.map((apt, index) => (
                    <motion.div
                      key={apt.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        apt.status === 'upcoming' 
                          ? 'border-green-200 bg-green-50 hover:border-green-300' 
                          : 'border-blue-200 bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{apt.therapist}</h3>
                          <p className="text-sm text-gray-600">{apt.date} at {apt.time}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          apt.status === 'upcoming' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
                        }`}>
                          {apt.status}
                        </span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-sm">No appointments yet</p>
                    <p className="text-xs">Book your first session!</p>
                  </div>
                )}
              </div>

              <button 
                onClick={() => router.push('/therapists')}
                className="w-full mt-4 bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition-all shadow-md hover:shadow-lg"
              >
                Book New Session
              </button>
            </motion.div>

            {/* Resources Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Resources</h2>
                  <p className="text-sm text-gray-600">Helpful content for you</p>
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                {resources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => router.push('/resources')}
                    className="p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-200 cursor-pointer hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{resource.title}</h3>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-orange-600 font-medium">{resource.type}</span>
                      <span className="text-gray-500">{resource.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Notifications Panel */}
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: showNotifications ? 0 : 400 }}
        className="fixed top-20 sm:top-24 right-0 w-full sm:w-80 max-w-md bg-white shadow-2xl sm:rounded-l-3xl p-4 sm:p-6 z-40 max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
          <button onClick={() => setShowNotifications(false)} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-800">New AI suggestion available</p>
            <p className="text-xs text-gray-500 mt-1">5 min ago</p>
          </div>
          {appointments.length > 0 && (
            <div className="p-3 bg-green-50 rounded-xl">
              <p className="text-sm text-gray-800">Upcoming session reminder</p>
              <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
            </div>
          )}
          {completedResources.length > 0 && (
            <div className="p-3 bg-orange-50 rounded-xl">
              <p className="text-sm text-gray-800">New recommended resource</p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
          )}
          {notifications === 0 && (
            <div className="p-3 bg-gray-50 rounded-xl text-center">
              <p className="text-sm text-gray-500">No new notifications</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Notifications Bell - Fixed in top right */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowNotifications(!showNotifications)}
        className="fixed top-20 sm:top-24 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-[#6EC1E4] rounded-full shadow-lg flex items-center justify-center text-white z-50 hover:bg-[#5AB0D3] transition-all"
      >
        <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
        {(notifications > 0 || appointments.length > 0 || completedResources.length > 0) && (
          <span className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
            {Math.min(notifications + appointments.length + completedResources.length, 9)}
          </span>
        )}
      </motion.button>

      {/* Floating Emergency Button */}
      <motion.a
        href="tel:988"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-2xl flex items-center gap-2 sm:gap-3 hover:bg-red-700 transition-all z-50 animate-pulse text-sm sm:text-base"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-bold hidden xs:inline">Need Help? Call 988</span>
        <span className="font-bold xs:hidden">988</span>
      </motion.a>
    </div>
  );
};

export default Dashboard;
