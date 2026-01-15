"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { articlesData } from '../../lib/articles';

const EventsResourcesGrid = () => {
  const router = useRouter();
  
  // get featured articles (first 5 from diff cats)
  const featuredArticles = [
    articlesData['General'][0], // Understanding Your Mental Health Journey
    articlesData['Anxiety Management'][0], // Managing Anxiety in Daily Life
    articlesData['Self-Care'][0], // The Importance of Self-Care
    articlesData['Therapy & Counseling'][0], // What to Expect from Your First Therapy Session
    articlesData['Mindfulness & Meditation'][0], // Mindful Breathing for Everyday Calm
  ];

  const handleArticleClick = (articleId: number) => {
    router.push(`/resources/${articleId}`);
  };

  const getBadgeColor = (index: number) => {
    const colors = [
      'bg-red-100 text-red-600',
      'bg-green-100 text-green-600', 
      'bg-blue-100 text-blue-600',
      'bg-yellow-100 text-yellow-600',
      'bg-orange-100 text-orange-600',
      'bg-pink-100 text-pink-600',
      'bg-teal-100 text-teal-600',
      'bg-indigo-100 text-indigo-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-gray-50 px-8 py-16 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Mental Health Resources</h2>
          <button 
            onClick={() => router.push('/resources')}
            className="text-blue-600 font-medium text-lg hover:underline flex items-center hover:text-blue-700 transition-colors"
          >
            View All 
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* large featured card */}
        <div className="mb-8">
          <div className="relative max-w-4xl">
            {/* bg illustration */}
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl h-[40vh] p-8 relative overflow-hidden">
              {/* decorative stars */}
              <div className="absolute top-6 right-12">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              <div className="absolute top-24 left-8">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="absolute bottom-16 right-24">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              {/* large hand illustration */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="relative">
                  <div className="w-48 h-64 bg-orange-400 rounded-t-[120px] mx-auto relative">
                    {/* thumb */}
                    <div className="absolute -left-8 top-32 w-16 h-20 bg-orange-400 rounded-full transform -rotate-12"></div>
                    {/* fingers */}
                    <div className="absolute top-8 left-8 w-6 h-16 bg-orange-500 rounded-full"></div>
                    <div className="absolute top-4 left-16 w-6 h-20 bg-orange-500 rounded-full"></div>
                    <div className="absolute top-6 left-24 w-6 h-18 bg-orange-500 rounded-full"></div>
                    <div className="absolute top-10 left-32 w-6 h-14 bg-orange-500 rounded-full"></div>
                  </div>
                  
                  {/* person sitting on hand */}
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-16 bg-teal-400 rounded-t-full relative">
                      {/* head */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-700 rounded-full"></div>
                      {/* arms */}
                      <div className="absolute top-2 -left-2 w-3 h-8 bg-white rounded-full transform rotate-12"></div>
                      <div className="absolute top-2 -right-2 w-3 h-8 bg-white rounded-full transform -rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* overlapping content card - bigger */}
            <div className="absolute -bottom-12 -right-90 z-10 bg-white rounded-2xl p-8 shadow-xl max-w-lg w-120">
              <div className="mb-4">
                <span className={`${getBadgeColor(0)} px-4 py-2 rounded-full text-base font-medium`}>Resource</span>
                <span className="ml-3 text-gray-500 text-base">{featuredArticles[0].date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {featuredArticles[0].title}
              </h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                {featuredArticles[0].description}
              </p>
              <button 
                onClick={() => handleArticleClick(featuredArticles[0].id)}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-colors hover:cursor-pointer"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* bottom row - 4 cards */}
        <div className="grid grid-cols-4 gap-6">
          {featuredArticles.slice(1, 5).map((article, index) => (
            <div 
              key={article.id}
              onClick={() => handleArticleClick(article.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${getGradientColor(index)} h-42 p-4 relative`}>
                {/* simple illustration placeholder */}
                <div className="absolute bottom-2 left-4 w-16 h-8 bg-orange-300 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-12 bg-red-300 rounded-t-full"></div>
              </div>
              <div className="p-5">
                <div className="mb-2">
                  <span className={`${getBadgeColor(index + 1)} px-2 py-1 rounded text-sm font-medium`}>Resource</span>
                  <span className="ml-2 text-gray-400 text-md">{article.date}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                  {article.title.length > 50 ? `${article.title.substring(0, 50)}...` : article.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.description.length > 80 ? `${article.description.substring(0, 80)}...` : article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getGradientColor = (index: number) => {
  const gradients = [
    'from-yellow-200 to-orange-200',
    'from-blue-200 to-purple-200', 
    'from-gray-800 to-blue-900',
    'from-green-200 to-teal-200'
  ];
  return gradients[index % gradients.length];
};

export default EventsResourcesGrid;