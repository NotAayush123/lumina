"use client";

import React, { useState } from 'react';

const MentalHealthForum = () => {
  const [selectedFilter, setSelectedFilter] = useState('View all');
  const [sortBy, setSortBy] = useState('Latest first');

  const users = [
    { id: 1, name: 'Sarah M.', initials: 'SM', color: 'bg-blue-500' },
    { id: 2, name: 'Michael K.', initials: 'MK', color: 'bg-green-500' },
    { id: 3, name: 'Jessica L.', initials: 'JL', color: 'bg-purple-500' },
    { id: 4, name: 'David R.', initials: 'DR', color: 'bg-orange-500' },
    { id: 5, name: 'Emma W.', initials: 'EW', color: 'bg-pink-500' },
    { id: 6, name: 'James T.', initials: 'JT', color: 'bg-indigo-500' },
    { id: 7, name: 'Lisa C.', initials: 'LC', color: 'bg-red-500' },
    { id: 8, name: 'Ryan P.', initials: 'RP', color: 'bg-teal-500' },
    { id: 9, name: 'Anna K.', initials: 'AK', color: 'bg-yellow-500' },
    { id: 10, name: 'Marcus J.', initials: 'MJ', color: 'bg-cyan-500' }
  ];

  const allDiscussions = [
    {
      id: 1,
      title: 'Share Your Self-Care Routine',
      author: users[0],
      timeAgo: '5 minutes ago',
      preview: 'Hey everyone, new member here! I wanted to start by sharing what helps me and hearing what works for you. My routine includes morning meditation, journaling, and a short walk outside...',
      category: 'Self-Care',
      participants: [users[0], users[2], users[4], users[6]],
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Coping strategies for anxiety attacks',
      author: users[1],
      timeAgo: '2 hours ago',
      preview: "I've been working with my therapist on grounding techniques. The 5-4-3-2-1 method has been really helpful - can anyone share what works for them during panic attacks?",
      category: 'Anxiety Management',
      participants: [users[1], users[3], users[5], users[7]],
      comments: 16,
      featured: false
    },
    {
      id: 3,
      title: 'Finding a therapist that fits',
      author: users[2],
      timeAgo: '1 hour ago',
      preview: 'Just now starting to look for a therapist and feeling overwhelmed. What websites or resources did you use? How did you know when you found the right fit?',
      category: 'Therapy & Counseling',
      participants: [users[2], users[4], users[6], users[8]],
      comments: 8,
      featured: false
    },
    {
      id: 4,
      title: 'Managing work stress and burnout',
      author: users[3],
      timeAgo: '3 hours ago',
      preview: 'Has anyone dealt with burnout while trying to maintain their job? Looking for advice on setting boundaries and taking care of mental health at work without sacrificing career...',
      category: 'Stress Relief',
      participants: [users[3], users[5], users[7], users[9]],
      comments: 12,
      featured: false
    },
    {
      id: 5,
      title: 'Meditation apps that actually work',
      author: users[4],
      timeAgo: '4 hours ago',
      preview: "I've tried Headspace and Calm but looking for other recommendations. What meditation or mindfulness apps have genuinely helped your mental health journey?",
      category: 'Mindfulness & Meditation',
      participants: [users[4], users[6], users[8], users[0]],
      comments: 19,
      featured: false
    },
    {
      id: 6,
      title: 'Dealing with seasonal depression',
      author: users[5],
      timeAgo: '5 hours ago',
      preview: 'Every winter I struggle more with my depression. Does anyone have tips for managing seasonal affective disorder? Considering a light therapy lamp...',
      category: 'Depression Support',
      participants: [users[5], users[7], users[9], users[1]],
      comments: 14,
      featured: false
    },
    {
      id: 7,
      title: 'Sleep schedule completely disrupted',
      author: users[6],
      timeAgo: '6 hours ago',
      preview: "Can't fall asleep until 3am and then can't wake up. My mental health is suffering from this cycle. What has helped you regulate your sleep?",
      category: 'Sleep & Mental Health',
      participants: [users[6], users[8], users[0], users[2]],
      comments: 21,
      featured: false
    },
    {
      id: 8,
      title: 'Setting boundaries with family',
      author: users[7],
      timeAgo: '7 hours ago',
      preview: 'Struggling to set healthy boundaries with my parents without feeling guilty. How do you balance family relationships while protecting your mental health?',
      category: 'Relationships',
      participants: [users[7], users[9], users[1], users[3]],
      comments: 17,
      featured: false
    },
    {
      id: 9,
      title: 'PTSD triggers in everyday life',
      author: users[8],
      timeAgo: '8 hours ago',
      preview: 'Working through trauma with my therapist but still get triggered by unexpected things. How do you cope when triggers come up in normal daily situations?',
      category: 'Trauma Recovery',
      participants: [users[8], users[0], users[2], users[4]],
      comments: 11,
      featured: false
    },
    {
      id: 10,
      title: 'Crisis hotline experience',
      author: users[9],
      timeAgo: '9 hours ago',
      preview: 'Called a crisis line for the first time last week. Want to share my experience and hear from others who have used these resources during difficult moments.',
      category: 'Crisis Support',
      participants: [users[9], users[1], users[3], users[5]],
      comments: 9,
      featured: false
    },
    {
      id: 11,
      title: 'Morning anxiety - how to start the day',
      author: users[0],
      timeAgo: '10 hours ago',
      preview: 'Wake up every morning with crushing anxiety. What routines or practices help you manage morning anxiety and start your day on a better note?',
      category: 'Anxiety Management',
      participants: [users[0], users[2], users[4], users[6]],
      comments: 25,
      featured: false
    },
    {
      id: 12,
      title: 'Antidepressants - sharing experiences',
      author: users[1],
      timeAgo: '11 hours ago',
      preview: 'Just started medication for depression. Would love to hear about your experiences - what helped, what side effects to expect, how long until it helped?',
      category: 'Depression Support',
      participants: [users[1], users[3], users[5], users[7]],
      comments: 28,
      featured: false
    },
    {
      id: 13,
      title: 'Breathing exercises that work',
      author: users[2],
      timeAgo: '12 hours ago',
      preview: 'Looking for effective breathing techniques for managing stress and anxiety. What breathing exercises have made a real difference for you?',
      category: 'Stress Relief',
      participants: [users[2], users[4], users[6], users[8]],
      comments: 15,
      featured: false
    },
    {
      id: 14,
      title: 'Journaling prompts for mental health',
      author: users[3],
      timeAgo: '13 hours ago',
      preview: "Therapist recommended journaling but I don't know where to start. What prompts or techniques have been helpful for processing emotions?",
      category: 'Self-Care',
      participants: [users[3], users[5], users[7], users[9]],
      comments: 18,
      featured: false
    },
    {
      id: 15,
      title: 'Yoga for mental health',
      author: users[4],
      timeAgo: '14 hours ago',
      preview: 'Started doing yoga recently and noticing improvements in my anxiety levels. Anyone else found yoga helpful for mental health? Recommendations for beginners?',
      category: 'Mindfulness & Meditation',
      participants: [users[4], users[6], users[8], users[0]],
      comments: 13,
      featured: false
    }
  ];

  const categories = [
    { name: 'View all', color: 'bg-gray-400' },
    { name: 'Anxiety Management', color: 'bg-blue-500' },
    { name: 'Depression Support', color: 'bg-purple-500' },
    { name: 'Stress Relief', color: 'bg-green-500' },
    { name: 'Mindfulness & Meditation', color: 'bg-teal-500' },
    { name: 'Therapy & Counseling', color: 'bg-indigo-500' },
    { name: 'Self-Care', color: 'bg-pink-500' },
    { name: 'Sleep & Mental Health', color: 'bg-violet-500' },
    { name: 'Relationships', color: 'bg-orange-500' },
    { name: 'Trauma Recovery', color: 'bg-red-500' },
    { name: 'Crisis Support', color: 'bg-yellow-600' }
  ];

  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'bg-gray-400';
  };

  const filteredDiscussions = selectedFilter === 'View all' 
    ? allDiscussions 
    : allDiscussions.filter(d => d.category === selectedFilter);

  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (sortBy === 'Latest first') {
      return a.id - b.id;
    } else if (sortBy === 'Most comments') {
      return b.comments - a.comments;
    }
    return 0;
  });

  return (
        <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
    <div className="min-h-screen">
         <div className="mb-30">
          {/* Badge */}
          <div className="mb-6">
            <span className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 inline-flex items-center">
              New mental health discussions →
            </span>
          </div>

          <div className="flex justify-between items-start">
            {/* Left side - Title and description */}
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-black mb-6">
                Mental Health Forums
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Discover evidence-based strategies, expert insights, and practical tools to support your mental wellness journey.
              </p>
              
              {/* Email subscription */}
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="🔍 Search mental health topics"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
    
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                <option>Latest first</option>
                <option>Most comments</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Start New Discussion
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex-1 space-y-4">
              {sortedDiscussions.map((discussion) => (
                <div 
                  key={discussion.id}
                  className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow hover:cursor-pointer"
                  onClick={() => window.location.href = `/support/${discussion.id}`}
                >
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 ${discussion.author.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                        {discussion.author.initials}
                      </div>
                      {discussion.featured && (
                        <div className="absolute -top-1 -right-1 bg-yellow-400 w-5 h-5 rounded-full flex items-center justify-center text-xs">
                          ⭐
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="font-medium">{discussion.author.name}</span>
                        <span className="mx-2">•</span>
                        <span>Latest reply {discussion.timeAgo}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {discussion.preview}
                      </p>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${getCategoryColor(discussion.category)} mr-2`}></div>
                          <span className="text-xs font-medium text-gray-700">
                            {discussion.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <div className="flex -space-x-2">
                        {discussion.participants.slice(0, 4).map((participant) => (
                          <div 
                            key={participant.id}
                            className={`w-8 h-8 ${participant.color} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold`}
                          >
                            {participant.initials}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm mt-4">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{discussion.comments} Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           <div className="w-64 flex-shrink-0">
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedFilter(category.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors   ${
                      selectedFilter === category.name
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 bg-gray-100'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-sm font-medium">{category.name}</span>
                    {selectedFilter === category.name && (
                      <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthForum;