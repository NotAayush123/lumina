import React from 'react'

const ResourcePreviewCard = ({article}:any) => {
  return (
        <article 
                  key={article.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* Featured article gets the 3D illustration */}
                  {article.featured ? (
                    <div className="bg-gray-200 h-80 relative flex items-center justify-center">
                      {/* 3D Illustration */}
                      <div className="relative">
                        <div className="w-48 h-64 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg transform rotate-12 relative">
                          <div className="absolute inset-2 bg-white rounded-lg"></div>
                        </div>
                        <div className="absolute top-4 left-8 w-40 h-56 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg transform -rotate-6">
                          <div className="absolute inset-2 bg-white rounded-lg"></div>
                        </div>
                        <div className="absolute top-8 left-16 w-32 h-48 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg transform rotate-3">
                          <div className="absolute inset-2 bg-white rounded-lg"></div>
                        </div>
                        <div className="absolute -top-4 -right-8 text-gray-600 transform rotate-45">
                          ✏️
                        </div>
                        <div className="absolute -bottom-8 -left-4 text-gray-600 transform -rotate-12">
                          ✏️
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Regular articles get a simpler header */
                    <div className="bg-gray-100 h-48 flex items-center justify-center">
                      <div className="text-gray-400 text-6xl">
                        {article.category === 'Design' && '🎨'}
                        {article.category === 'Product' && '📱'}
                        {article.category === 'Software Development' && '💻'}
                        {article.category === 'Customer Success' && '🤝'}
                        {article.category === 'Leadership' && '👥'}
                        {article.category === 'Management' && '📊'}
                        {article.category === 'Notifications' && '🔔'}
                        {article.category === 'Integrations' && '🔗'}
                        {article.category === 'API' && '⚡'}
                      </div>
                    </div>
                  )}

                  {/* Article Content */}
                  <div className="p-8">
                    {/* Meta info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>

                    {/* Title and description */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {article.description}
                    </p>

                    {/* Read more link */}
                    <a href="#" className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors">
                      Read post 
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
  )
}

export default ResourcePreviewCard