"use client";

import React, { useState } from 'react';

const page = () => {
  const [newComment, setNewComment] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const discussion = {
    id: 1,
    title: 'Share Your Self-Care Routine',
    author: { name: 'Sarah M.', initials: 'SM', color: 'bg-blue-500' },
    category: 'Self-Care',
    categoryColor: 'bg-pink-500',
    timeAgo: '5 minutes ago',
    views: 342,
    comments: 23,
    content: `Hey everyone, new member here! 

I wanted to start by sharing what helps me and hearing what works for you. My routine includes:

1. **Morning meditation** (10 minutes) - I use the Calm app
2. **Journaling** - Just 3 things I'm grateful for
3. **Short walk outside** - Even 15 minutes helps clear my head
4. **Evening wind-down** - No screens 30 min before bed

I've been doing this for about 2 months and I'm noticing a real difference in my anxiety levels. Some days I skip things and that's okay too - progress not perfection!

What does your self-care routine look like? I'd love to hear what works for you all.`
  };

  const comments = [
    {
      id: 1,
      author: { name: 'Jessica L.', initials: 'JL', color: 'bg-purple-500' },
      timeAgo: '3 minutes ago',
      content: 'This is so helpful! I love the "progress not perfection" mindset. I struggle with being too hard on myself when I miss a day. Your morning routine sounds really doable - I think I\'ll try adding just 5 minutes of meditation to start.',
      likes: 5
    },
    {
      id: 2,
      author: { name: 'Michael K.', initials: 'MK', color: 'bg-green-500' },
      timeAgo: '15 minutes ago',
      content: 'Welcome! My therapist recommended the gratitude journal too. I do mine at night before bed. Also started using the Headspace app for guided meditations - highly recommend if you want to try something different from Calm.',
      likes: 8
    },
    {
      id: 3,
      author: { name: 'Emma W.', initials: 'EW', color: 'bg-pink-500' },
      timeAgo: '1 hour ago',
      content: 'The evening wind-down is so important! I used to scroll on my phone right before bed and my sleep was terrible. Now I read or do some light stretching instead. Game changer for my mental health.',
      likes: 12
    },
    {
      id: 4,
      author: { name: 'David R.', initials: 'DR', color: 'bg-orange-500' },
      timeAgo: '2 hours ago',
      content: `Great routine! Here's mine:
- Morning: 20 min yoga + breathing exercises
- Lunch break: Walk around the block (helps with work stress)
- Evening: Cook a proper meal (therapeutic for me)
- Night: Read for 30 min

The key for me was starting small. I began with just 5 min of yoga and built from there.`,
      likes: 15
    },
    {
      id: 5,
      author: { name: 'Lisa C.', initials: 'LC', color: 'bg-red-500' },
      timeAgo: '3 hours ago',
      content: 'Does anyone else find it hard to stick to routines when depression hits? I have a routine I love but some weeks I can barely get out of bed. Any tips for maintaining self-care during the really tough days?',
      likes: 9
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Forum</span>
            </button>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Discussion Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-3 h-3 rounded-full ${discussion.categoryColor}`}></div>
            <span className="text-sm font-medium text-gray-700">{discussion.category}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{discussion.title}</h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${discussion.author.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                {discussion.author.initials}
              </div>
              <div>
                <p className="font-medium text-gray-900">{discussion.author.name}</p>
                <p className="text-sm text-gray-500">Posted {discussion.timeAgo}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{discussion.views} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{discussion.comments} comments</span>
              </div>
            </div>
          </div>
          
          <div className="prose max-w-none text-gray-700 whitespace-pre-line">
            {discussion.content}
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h2>
          
          {/* New Comment Box */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts or experiences..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
            />
            <div className="flex justify-end mt-3">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Post Comment
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex gap-4">
                  <div className={`w-10 h-10 ${comment.author.color} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                    {comment.author.initials}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium text-gray-900">{comment.author.name}</span>
                        <span className="text-sm text-gray-500 ml-2">{comment.timeAgo}</span>
                      </div>
                      
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-gray-700 mb-3 whitespace-pre-line">{comment.content}</p>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span>{comment.likes} likes</span>
                      </button>
                      <button className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Discussions */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Discussions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-700">Stress Relief</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Breathing exercises that work</h4>
              <p className="text-sm text-gray-600 mb-3">Looking for effective breathing techniques for managing stress and anxiety...</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>15 comments</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                <span className="text-sm font-medium text-gray-700">Mindfulness & Meditation</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Meditation apps that actually work</h4>
              <p className="text-sm text-gray-600 mb-3">I've tried Headspace and Calm but looking for other recommendations...</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>19 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;