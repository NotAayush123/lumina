// app/resources/[id]/page.js
"use client";

import React, { useState, useEffect, use } from 'react';
import { ChevronLeft, Clock, User, Calendar, Share2, Bookmark, ArrowUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { findArticleById, getAllArticles, articlesData } from '../../../lib/articles';
import BackButton from '../../../components/BackButton';

const ArticlePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [article, setArticle] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();

  // Unwrap the params Promise
  const resolvedParams = use(params);

  useEffect(() => {
    const articleId = resolvedParams?.id || '1';
    const foundArticle = findArticleById(articleId);
    setArticle(foundArticle);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [resolvedParams?.id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToArticle = (articleId) => {
    router.push(`/resources/${articleId}`);
    scrollToTop();
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  const allArticles = getAllArticles();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <BackButton href="/resources" label="Back to Resources" />
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-colors ${isBookmarked ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{article.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags?.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About {article.author}</h3>
                  <p className="text-gray-700">{article.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {article.relatedArticles && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {article.relatedArticles.map(relatedId => {
                    const relatedArticle = allArticles[relatedId];
                    if (!relatedArticle) return null;
                    
                    return (
                      <div 
                        key={relatedId}
                        onClick={() => navigateToArticle(relatedId)}
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                          {relatedArticle.category}
                        </span>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {relatedArticle.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{relatedArticle.author}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Crisis Resources */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-semibold text-red-900 mb-3">Need Immediate Help?</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-red-800"><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                  <p className="text-red-800"><strong>Suicide Prevention:</strong> 988</p>
                  <p className="text-red-800"><strong>Emergency:</strong> 911</p>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">In this Article</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Mental Health Overview</p>
                  <p>• Daily Practices</p>
                  <p>• Professional Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ArticlePage;