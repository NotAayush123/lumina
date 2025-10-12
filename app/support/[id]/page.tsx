// app/forum/[id]/page.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Share2, Bookmark, Eye, MessageCircle } from 'lucide-react';
import { 
  findDiscussionById, 
  getAllDiscussions,
  getCategoryColor 
} from '../../../lib/forum';

const DiscussionPage = ({ params }) => {
  const [newComment, setNewComment] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const router = useRouter();

  const discussion = findDiscussionById(params?.id || '1');
  const allDiscussions = getAllDiscussions();

  // Get related discussions (excluding current one)
  const relatedDiscussions = allDiscussions
    .filter(d => d.id !== discussion.id && d.category === discussion.category)
    .slice(0, 2);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log('New comment:', newComment);
      setNewComment('');
      // You might want to refresh the comments here
    }
  };

  const navigateToDiscussion = (discussionId) => {
    router.push(`/support/${discussionId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.push('/support')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Forum</span>
            </button>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
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
            <div className={`w-3 h-3 rounded-full ${getCategoryColor(discussion.category)}`}></div>
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
                <Eye className="w-5 h-5" />
                <span>{discussion.views} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comments ({discussion.commentsData.length})
          </h2>
          
          {/* New Comment Box */}
          <form onSubmit={handleSubmitComment} className="mb-8 p-6 bg-gray-50 rounded-xl">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts or experiences..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
            />
            <div className="flex justify-end mt-3">
              <button 
                type="submit"
                disabled={!newComment.trim()}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Post Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {discussion.commentsData.map((comment) => (
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

            {/* No comments message */}
            {discussion.commentsData.length === 0 && (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Discussions */}
        {relatedDiscussions.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Discussions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedDiscussions.map((related) => (
                <div 
                  key={related.id}
                  onClick={() => navigateToDiscussion(related.id)}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-3 h-3 rounded-full ${getCategoryColor(related.category)}`}></div>
                    <span className="text-sm font-medium text-gray-700">{related.category}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{related.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{related.preview}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>{related.comments} comments</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionPage;