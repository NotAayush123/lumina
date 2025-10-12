// app/resources/page.js
"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { articlesData, categories } from '../../lib/articles';

// ResourcePreviewCard component
const ResourcePreviewCard = ({ article, buttonColors = ['red', 'green', 'orange', 'blue', 'yellow'] }) => {
  const router = useRouter();
  
  const getButtonColor = (id, colors) => {
    const colorIndex = (id - 1) % colors.length;
    const color = colors[colorIndex];
  
    const colorMap = {
      red: 'bg-red-400 hover:bg-red-500',
      green: 'bg-green-400 hover:bg-green-500',
      orange: 'bg-orange-400 hover:bg-orange-500',
      blue: 'bg-blue-400 hover:bg-blue-500',
      yellow: 'bg-yellow-400 hover:bg-yellow-500',
      purple: 'bg-purple-400 hover:bg-purple-500',
      pink: 'bg-pink-400 hover:bg-pink-500',
      indigo: 'bg-indigo-400 hover:bg-indigo-500',
      gray: 'bg-gray-400 hover:bg-gray-500',
      teal: 'bg-teal-400 hover:bg-teal-500'
    };
    
    return colorMap[color] || 'bg-gray-400 hover:bg-gray-500';
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex-grow">
        {article.featured && (
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {article.author}</span>
          <span>{article.date}</span>
        </div>
        <div className="mt-3">
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {article.category}
          </span>
        </div>
      </div>
      <button 
        className={`mt-10 font-semibold w-full text-white rounded-full p-3 transition-colors hover:cursor-pointer ${getButtonColor(article.id, buttonColors)}`} 
        onClick={() => router.push(`/resources/${article.id}`)}
      >
        Read
      </button>
    </div>
  );
};

const MentalHealthResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');
  const buttonColors = ['red', 'green', 'orange', 'blue', 'yellow'];

  // Filter articles based on active category and search query
  const getFilteredArticles = () => {
    let filtered = articlesData[activeCategory] || [];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  const currentArticles = getFilteredArticles();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
        {/* Header Section */}
        <div className="mb-30">
          {/* Badge */}
          <div className="mb-6">
            <span className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 inline-flex items-center">
              New mental health resources available →
            </span>
          </div>

          <div className="flex justify-between items-start">
            {/* Left side - Title and description */}
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-black mb-6">
                Mental Health Resources
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Discover evidence-based strategies, expert insights, and practical tools to support your mental wellness journey.
              </p>
              
              {/* Search */}
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="🔍 Search mental health topics"
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

        {/* Main Content Layout */}
        <div className="flex gap-8">
          {/* Left Sidebar - Sticky */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeCategory === category.name
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 bg-gray-100'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="text-sm font-medium">{category.name}</span>
                  {activeCategory === category.name && (
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area - Scrollable */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentArticles.map((article) => (
                <ResourcePreviewCard key={article.id} article={article} buttonColors={buttonColors} />
              ))}
            </div>

            {/* Show message if no articles */}
            {currentArticles.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center col-span-2">
                <p className="text-gray-500 text-lg">
                  {searchQuery ? 'No articles found matching your search.' : 'No articles found for this category.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthResourcesPage;