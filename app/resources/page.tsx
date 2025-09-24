"use client";

import ResourcePreviewCard from '@/components/resources/ResourcePreviewCard';
import React, { useState } from 'react';

const page = () => {
  const [activeCategory, setActiveCategory] = useState('View all');

  const categories = [
    'View all',
    'Design', 
    'Product',
    'Software Development',
    'Customer Success',
    'Leadership',
    'Management',
    'Notifications',
    'Integrations',
    'API'
  ];

  // Dummy articles for each category
  const articles = {
    'View all': [
      {
        id: 1,
        title: 'Building your API stack',
        description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
        author: 'Lana Steiner',
        date: '16 Jan 2024',
        category: 'Design',
        featured: true
      },
      {
        id: 2,
        title: 'Modern Product Strategy',
        description: 'How to build products that users love and businesses need.',
        author: 'Sarah Chen',
        date: '12 Jan 2024',
        category: 'Product'
      },
      {
        id: 3,
        title: 'Leadership in Tech',
        description: 'Building high-performing teams in the digital age.',
        author: 'Marcus Johnson',
        date: '8 Jan 2024',
        category: 'Leadership'
      }
    ],
    'Design': [
      {
        id: 4,
        title: 'Design Systems at Scale',
        description: 'Creating consistent user experiences across large organizations.',
        author: 'Emma Wilson',
        date: '15 Jan 2024',
        category: 'Design'
      },
      {
        id: 5,
        title: 'The Future of UI/UX',
        description: 'Emerging trends and technologies shaping user interface design.',
        author: 'David Park',
        date: '13 Jan 2024',
        category: 'Design'
      },
      {
        id: 6,
        title: 'Accessibility First Design',
        description: 'Building inclusive experiences from the ground up.',
        author: 'Maria Rodriguez',
        date: '10 Jan 2024',
        category: 'Design'
      }
    ],
    'Product': [
      {
        id: 7,
        title: 'Product Discovery Methods',
        description: 'Techniques for understanding what customers really want.',
        author: 'Alex Thompson',
        date: '14 Jan 2024',
        category: 'Product'
      },
      {
        id: 8,
        title: 'Metrics That Matter',
        description: 'How to measure product success beyond vanity metrics.',
        author: 'Lisa Chang',
        date: '11 Jan 2024',
        category: 'Product'
      },
      {
        id: 9,
        title: 'Roadmap Planning',
        description: 'Strategic approaches to product roadmap development.',
        author: 'James Miller',
        date: '7 Jan 2024',
        category: 'Product'
      }
    ],
    'Software Development': [
      {
        id: 10,
        title: 'Clean Code Practices',
        description: 'Writing maintainable code that stands the test of time.',
        author: 'Rachel Kim',
        date: '16 Jan 2024',
        category: 'Software Development'
      },
      {
        id: 11,
        title: 'Microservices Architecture',
        description: 'When and how to break down monolithic applications.',
        author: 'Tom Anderson',
        date: '12 Jan 2024',
        category: 'Software Development'
      },
      {
        id: 12,
        title: 'Testing Strategies',
        description: 'Building confidence in your codebase through comprehensive testing.',
        author: 'Nina Patel',
        date: '9 Jan 2024',
        category: 'Software Development'
      }
    ],
    'Customer Success': [
      {
        id: 13,
        title: 'Onboarding Excellence',
        description: 'Creating smooth customer onboarding experiences.',
        author: 'Mike Davis',
        date: '15 Jan 2024',
        category: 'Customer Success'
      },
      {
        id: 14,
        title: 'Retention Strategies',
        description: 'Keeping customers engaged and reducing churn.',
        author: 'Anna Foster',
        date: '11 Jan 2024',
        category: 'Customer Success'
      },
      {
        id: 15,
        title: 'Support Automation',
        description: 'Scaling customer support with smart automation.',
        author: 'Carlos Martinez',
        date: '6 Jan 2024',
        category: 'Customer Success'
      }
    ],
    'Leadership': [
      {
        id: 16,
        title: 'Remote Team Management',
        description: 'Leading distributed teams effectively in the modern workplace.',
        author: 'Jennifer Lee',
        date: '14 Jan 2024',
        category: 'Leadership'
      },
      {
        id: 17,
        title: 'Decision Making Frameworks',
        description: 'Structured approaches to making better business decisions.',
        author: 'Robert Taylor',
        date: '10 Jan 2024',
        category: 'Leadership'
      },
      {
        id: 18,
        title: 'Building Company Culture',
        description: 'Creating environments where teams thrive.',
        author: 'Sophie Brown',
        date: '5 Jan 2024',
        category: 'Leadership'
      }
    ],
    'Management': [
      {
        id: 19,
        title: 'Agile Project Management',
        description: 'Implementing agile methodologies for better project outcomes.',
        author: 'Kevin Wong',
        date: '13 Jan 2024',
        category: 'Management'
      },
      {
        id: 20,
        title: 'Performance Reviews',
        description: 'Conducting meaningful performance evaluations.',
        author: 'Laura Johnson',
        date: '9 Jan 2024',
        category: 'Management'
      },
      {
        id: 21,
        title: 'Resource Planning',
        description: 'Optimizing team capacity and workload distribution.',
        author: 'Daniel Chen',
        date: '4 Jan 2024',
        category: 'Management'
      }
    ],
    'Notifications': [
      {
        id: 22,
        title: 'Push Notification Strategy',
        description: 'Engaging users without overwhelming them.',
        author: 'Maya Singh',
        date: '12 Jan 2024',
        category: 'Notifications'
      },
      {
        id: 23,
        title: 'Email Campaign Optimization',
        description: 'Improving open rates and user engagement.',
        author: 'Chris Walker',
        date: '8 Jan 2024',
        category: 'Notifications'
      },
      {
        id: 24,
        title: 'In-App Messaging',
        description: 'Contextual communication within your application.',
        author: 'Priya Sharma',
        date: '3 Jan 2024',
        category: 'Notifications'
      }
    ],
    'Integrations': [
      {
        id: 25,
        title: 'Third-Party API Integration',
        description: 'Best practices for connecting external services.',
        author: 'Jake Morrison',
        date: '11 Jan 2024',
        category: 'Integrations'
      },
      {
        id: 26,
        title: 'Webhook Implementation',
        description: 'Real-time data synchronization between systems.',
        author: 'Olivia Reed',
        date: '7 Jan 2024',
        category: 'Integrations'
      },
      {
        id: 27,
        title: 'SSO Configuration',
        description: 'Implementing single sign-on for better user experience.',
        author: 'Mark Stevens',
        date: '2 Jan 2024',
        category: 'Integrations'
      }
    ],
    'API': [
      {
        id: 28,
        title: 'RESTful API Design',
        description: 'Creating intuitive and scalable API interfaces.',
        author: 'Amy Liu',
        date: '10 Jan 2024',
        category: 'API'
      },
      {
        id: 29,
        title: 'GraphQL vs REST',
        description: 'Choosing the right API architecture for your needs.',
        author: 'Sam Rodriguez',
        date: '6 Jan 2024',
        category: 'API'
      },
      {
        id: 30,
        title: 'API Documentation',
        description: 'Writing documentation that developers actually want to use.',
        author: 'Elena Kowalski',
        date: '1 Jan 2024',
        category: 'API'
      }
    ]
  };

  const currentArticles = articles[activeCategory] || [];
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
        {/* Header Section */}
        <div className="mb-30">
          {/* Badge */}
          <div className="mb-6">
            <span className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 inline-flex items-center">
              We've just released a new article →
            </span>
          </div>

          <div className="flex justify-between items-start">
            {/* Left side - Title and description */}
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-black mb-6">
                Our Resources
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Subscribe to learn about new product features, the latest in technology, solutions, and updates.
              </p>
              
              {/* Email subscription */}
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="🔍 Enter your email"
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
            <div className="sticky top-8">
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors hover:cursor-pointer ${
                      activeCategory === category
                        ? 'text-gray-900 font-medium bg-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area - Scrollable */}
          <div className="flex-1">
            <div className="space-y-8">
              {currentArticles.map((article, index) => (
                     <ResourcePreviewCard    key={article.id} article={article} />
              ))}
            </div>

            {/* Show message if no articles */}
            {currentArticles.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center">
                <p className="text-gray-500 text-lg">No articles found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;