// app/resources/page.js
"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Video, Activity, Star, TrendingUp, Clock, CheckCircle, X, BookOpen, Headphones, Heart } from 'lucide-react';
import { articlesData, categories } from '@/lib/articles';
import BackButton from '@/components/BackButton';
import EmergencyBar from '@/components/EmergencyBar';
import Navbar from '@/components/home/navbar';
import AccessibilityMenu from '@/components/AccessibilityMenu';

// resource type config w/ icons & colors
const resourceTypes = {
  article: {
    icon: FileText,
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    lightBg: 'bg-blue-50',
    label: 'Article',
    duration: '8-12 min read'
  },
  video: {
    icon: Video,
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
    lightBg: 'bg-purple-50',
    label: 'Video',
    duration: '10-15 min watch'
  },
  exercise: {
    icon: Activity,
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    lightBg: 'bg-green-50',
    label: 'Exercise',
    duration: '5-10 min practice'
  },
  audio: {
    icon: Headphones,
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
    lightBg: 'bg-orange-50',
    label: 'Audio',
    duration: '8-12 min listen'
  }
};

// enhanced resourcepreviewcard w/ all improvements
const ResourcePreviewCard = ({ article, buttonColors = [], onPreview, isCompleted, onToggleComplete }) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // determine resource type (default to article)
  const resourceType = article.type || 'article';
  const typeConfig = resourceTypes[resourceType] || resourceTypes.article;
  const IconComponent = typeConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col h-full relative group"
    >
      {/* badges section */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {/* resource type badge */}
        <div className={`${typeConfig.lightBg} px-3 py-1 rounded-full flex items-center gap-1.5`}>
          <IconComponent className={`w-4 h-4 ${typeConfig.color.replace('bg-', 'text-')}`} />
          <span className={`text-xs font-medium ${typeConfig.color.replace('bg-', 'text-')}`}>
            {typeConfig.label}
          </span>
        </div>

        {/* featured badge */}
        {article.featured && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
          >
            <Star className="w-3 h-3 fill-white" />
            Featured
          </motion.div>
        )}

        {/* new badge */}
        {article.isNew && (
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            NEW
          </span>
        )}

        {/* difficulty tag */}
        {article.difficulty && (
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {article.difficulty}
          </span>
        )}
      </div>

      {/* favorite btn - top right */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-6 right-6 z-10"
        aria-label="Add to favorites"
      >
        <Heart 
          className={`w-6 h-6 transition-colors ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-400'
          }`} 
        />
      </motion.button>

      {/* content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 pr-8 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
          {article.description}
        </p>

        {/* meta info */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{typeConfig.duration}</span>
          </div>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">By {article.author}</span>
          {isCompleted && (
            <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
              <CheckCircle className="w-3.5 h-3.5 fill-green-600" />
              Done
            </div>
          )}
        </div>

        {/* category tag */}
        <div className="mt-2">
          <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full font-medium">
            {article.category}
          </span>
        </div>
      </div>

      {/* action btns */}
      <div className="mt-5 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex-1 ${typeConfig.color} ${typeConfig.hoverColor} text-white rounded-lg py-2.5 px-3 text-sm font-semibold transition-all shadow-sm hover:shadow-md`}
          onClick={() => router.push(`/resources/${article.id}`)}
          aria-label={`Read ${article.title}`}
        >
          {resourceType === 'video' ? 'Watch' : resourceType === 'exercise' ? 'Start' : resourceType === 'audio' ? 'Listen' : 'Read'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg py-2.5 px-3 text-sm font-semibold transition-all"
          onClick={() => onPreview(article)}
          aria-label="Preview resource"
        >
          Preview
        </motion.button>
      </div>

      {/* mark as complete btn */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`mt-2.5 w-full py-2 rounded-lg text-xs font-medium transition-all ${
          isCompleted 
            ? 'bg-green-100 text-green-700 hover:bg-green-200' 
            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => onToggleComplete(article.id)}
      >
        {isCompleted ? '✓ Completed' : 'Mark as Complete'}
      </motion.button>
    </motion.div>
  );
};

// preview modal component
const PreviewModal = ({ article, onClose }) => {
  if (!article) return null;

  const resourceType = article.type || 'article';
  const typeConfig = resourceTypes[resourceType] || resourceTypes.article;
  const IconComponent = typeConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
          aria-label="Close preview"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="mb-5 pr-10">
          <div className="flex items-center gap-2 mb-4">
            <div className={`${typeConfig.lightBg} px-3 py-1 rounded-full flex items-center gap-1.5`}>
              <IconComponent className={`w-4 h-4 ${typeConfig.color.replace('bg-', 'text-')}`} />
              <span className={`text-xs font-medium ${typeConfig.color.replace('bg-', 'text-')}`}>
                {typeConfig.label}
              </span>
            </div>
            {article.featured && (
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Featured
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{article.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">{article.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{typeConfig.duration}</span>
            </div>
            <span>•</span>
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Preview Content */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Quick Preview</h3>
          <p className="text-gray-700 leading-relaxed">
            {article.content ? article.content.substring(0, 300) + '...' : 'Preview content coming soon. Click "Read Full Article" to view the complete resource.'}
          </p>
        </div>

        {/* Action Button */}
        <button
          className={`w-full ${typeConfig.color} ${typeConfig.hoverColor} text-white rounded-xl py-4 font-bold text-lg transition-all shadow-lg hover:shadow-xl`}
          onClick={onClose}
        >
          {resourceType === 'video' ? 'Watch Full Video' : resourceType === 'exercise' ? 'Start Exercise' : resourceType === 'audio' ? 'Listen Now' : 'Read Full Article'}
        </button>
      </motion.div>
    </motion.div>
  );
};

const MentalHealthResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewArticle, setPreviewArticle] = useState(null);
  const [completedResources, setCompletedResources] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'featured', 'new', 'popular'
  const buttonColors = ['red', 'green', 'orange', 'blue', 'yellow'];

  // Add resource types to articles
  const enhancedArticlesData = {
    ...articlesData,
    'All': [
      ...(articlesData['General'] || []).map(a => ({ ...a, type: 'article', difficulty: 'Beginner', isNew: a.id === 1 })),
      ...(articlesData['Anxiety'] || []).slice(0, 2).map((a, i) => ({ ...a, type: i === 0 ? 'video' : 'exercise', difficulty: 'Intermediate' })),
      ...(articlesData['Depression'] || []).slice(0, 1).map(a => ({ ...a, type: 'audio', difficulty: 'Beginner', isNew: true })),
      ...(articlesData['Stress'] || []).slice(0, 2).map(a => ({ ...a, type: 'exercise', difficulty: 'Beginner' })),
    ].slice(0, 8)
  };

  // Filter articles based on active category and search query
  const getFilteredArticles = () => {
    let filtered = enhancedArticlesData[activeCategory] || articlesData[activeCategory] || [];
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }
    
    // Apply active filter
    if (activeFilter === 'featured') {
      filtered = filtered.filter(a => a.featured);
    } else if (activeFilter === 'new') {
      filtered = filtered.filter(a => a.isNew);
    } else if (activeFilter === 'popular') {
      // Sort by a popularity metric (using id as proxy)
      filtered = [...filtered].sort((a, b) => (a.id || 0) - (b.id || 0)).slice(0, 8);
    }
    
    return filtered;
  };

  const currentArticles = getFilteredArticles();
  const featuredArticles = currentArticles.filter(a => a.featured).slice(0, 3);
  const mostPopular = currentArticles.slice(0, 4);

  const toggleComplete = (id) => {
    setCompletedResources(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <EmergencyBar />
      <AccessibilityMenu />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <BackButton href="/" label="Back to Home" className="mb-6" />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4"
          >
            <span className="bg-white border-2 border-blue-300 rounded-full px-4 py-2 text-sm text-blue-700 font-semibold inline-flex items-center shadow-sm">
              ✨ New resources added
            </span>
          </motion.div>

          {/* Title and Stats Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
            {/* Left side - Title */}
            <div className="flex-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
              >
                Mental Health Resources
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl"
              >
                Evidence-based articles, videos, exercises, and audio guides to support your wellness journey.
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 lg:gap-6"
            >
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 text-center min-w-[100px]">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{currentArticles.length}</p>
                <p className="text-xs text-gray-600">Resources</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 text-center min-w-[100px]">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{completedResources.size}</p>
                <p className="text-xs text-gray-600">Completed</p>
              </div>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 max-w-2xl"
          >
            <input 
              type="text" 
              placeholder="🔍 Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
              aria-label="Search resources"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
              Search
            </button>
          </motion.div>
        </motion.div>

        {/* Quick Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide"
        >
          <button
            onClick={() => {
              setActiveFilter('all');
              setActiveCategory('All');
            }}
            className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            All Resources
          </button>
          <button 
            onClick={() => setActiveFilter('featured')}
            className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm flex items-center gap-2 ${
              activeFilter === 'featured'
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <Star className={`w-4 h-4 ${activeFilter === 'featured' ? 'fill-white' : ''}`} />
            Featured
          </button>
          <button 
            onClick={() => setActiveFilter('new')}
            className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
              activeFilter === 'new'
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            🆕 New
          </button>
          <button 
            onClick={() => setActiveFilter('popular')}
            className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm flex items-center gap-2 ${
              activeFilter === 'popular'
                ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Popular
          </button>
        </motion.div>

        {/* Main Content Layout */}        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Categories */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200 lg:sticky lg:top-28">
              <h3 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Categories
              </h3>
              <div className="space-y-1.5">
                <button
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveFilter('all');
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                    activeCategory === 'All' && activeFilter === 'all'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>All Resources</span>
                  {activeCategory === 'All' && activeFilter === 'all' && <CheckCircle className="w-4 h-4" />}
                </button>
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ x: 2 }}
                    onClick={() => {
                      setActiveCategory(category.name);
                      setActiveFilter('all');
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                      activeCategory === category.name
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${category.color}`}></div>
                      <span>{category.name}</span>
                    </div>
                    {activeCategory === category.name && <CheckCircle className="w-4 h-4" />}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content Area */}
          <div className="flex-1 min-w-0">
            {/* Featured Section - Only on "All" */}
            {featuredArticles.length > 0 && activeCategory === 'All' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-10"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Featured Resources
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                  {featuredArticles.map((article) => (
                    <ResourcePreviewCard 
                      key={article.id} 
                      article={article} 
                      buttonColors={buttonColors}
                      onPreview={setPreviewArticle}
                      isCompleted={completedResources.has(article.id)}
                      onToggleComplete={toggleComplete}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* All Resources Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                {searchQuery ? 'Search Results' : activeCategory === 'All' ? 'All Resources' : `${activeCategory} Resources`}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {currentArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <ResourcePreviewCard 
                      article={article} 
                      buttonColors={buttonColors}
                      onPreview={setPreviewArticle}
                      isCompleted={completedResources.has(article.id)}
                      onToggleComplete={toggleComplete}
                    />
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {currentArticles.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl p-12 text-center shadow-md border border-gray-200"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg font-medium mb-2">
                    {searchQuery ? 'No resources found' : 'No resources in this category'}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Try a different search or category
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewArticle && (
          <PreviewModal article={previewArticle} onClose={() => setPreviewArticle(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MentalHealthResourcesPage;