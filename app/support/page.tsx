// app/support/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  categories, 
  getAllDiscussions, 
  getCategoryColor 
} from '../../lib/forum';
import { getTotalCommentCount } from '../../lib/forumStorage';
import BackButton from '../../components/BackButton';

const MentalHealthForum = () => {
  const [selectedFilter, setSelectedFilter] = useState('View all');
  const [sortBy, setSortBy] = useState('Latest first');
  const [searchQuery, setSearchQuery] = useState('');
  const [discussionsWithCounts, setDiscussionsWithCounts] = useState([]);
  const router = useRouter();

  const allDiscussions = getAllDiscussions();

  // Update discussions with localStorage comment counts
  useEffect(() => {
    const updatedDiscussions = allDiscussions.map(discussion => ({
      ...discussion,
      comments: getTotalCommentCount(discussion.id.toString(), discussion.comments)
    }));
    setDiscussionsWithCounts(updatedDiscussions);
  }, []);

  // Refresh comment counts when returning to the page
  useEffect(() => {
    const handleFocus = () => {
      const updatedDiscussions = allDiscussions.map(discussion => ({
        ...discussion,
        comments: getTotalCommentCount(discussion.id.toString(), discussion.comments)
      }));
      setDiscussionsWithCounts(updatedDiscussions);
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [allDiscussions]);

  // Filter discussions based on selected category and search query
  const getFilteredDiscussions = () => {
    let filtered = selectedFilter === 'View all' 
      ? discussionsWithCounts 
      : discussionsWithCounts.filter(d => d.category === selectedFilter);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(discussion => 
        discussion.title.toLowerCase().includes(query) ||
        discussion.preview.toLowerCase().includes(query) ||
        discussion.author.name.toLowerCase().includes(query) ||
        discussion.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  const filteredDiscussions = getFilteredDiscussions();

  // Sort discussions
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (sortBy === 'Latest first') {
      return b.id - a.id;
    } else if (sortBy === 'Most comments') {
      return b.comments - a.comments;
    }
    return 0;
  });

  const handleDiscussionClick = (discussionId: number) => {
    try {
      router.push(`/support/${discussionId}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
        {/* Back Button */}
        <BackButton href="/" label="Back to Home" className="mb-6" />
        {/* Header Section */}
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
                Connect with others, share experiences, and find support in our caring community. Your mental health journey matters.
              </p>
              
              {/* Search */}
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="🔍 Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
            {/* Discussions List */}
            <div className="flex-1 space-y-4">
              {sortedDiscussions.map((discussion) => (
                <div 
                  key={discussion.id}
                  className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow hover:cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDiscussionClick(discussion.id);
                  }}
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
                        <span>{discussion.comments} {discussion.comments === 1 ? 'Comment' : 'Comments'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Show message if no discussions */}
              {sortedDiscussions.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {searchQuery ? 'No discussions found matching your search.' : 'No discussions found for this category.'}
                  </p>
                  <button 
                    onClick={() => {
                      setSelectedFilter('View all');
                      setSearchQuery('');
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Categories Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedFilter(category.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
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

              {/* Community Stats */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Community Stats</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total Discussions</span>
                    <span className="font-medium">{discussionsWithCounts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Members</span>
                    <span className="font-medium">1.2k+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comments Today</span>
                    <span className="font-medium">47</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthForum;