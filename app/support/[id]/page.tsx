// app/support/[id]/page.tsx
"use client";

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Share2, Bookmark, Eye, MessageCircle, Heart } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  findDiscussionById, 
  getAllDiscussions,
  getCategoryColor,
  users
} from '../../../lib/forum';
import { 
  getForumStats, 
  toggleCommentLike, 
  isCommentLiked, 
  getTotalCommentCount,
  addUserComment,
  getUserComments,
  setCommentCount,
  togglePostLike,
  isPostLiked as checkPostLiked
} from '../../../lib/forumStorage';
import BackButton from '../../../components/BackButton';

const DiscussionPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [newComment, setNewComment] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userComments, setUserComments] = useState<any[]>([]);
  const [commentCount, setCommentCount] = useState(0);
  const [likedComments, setLikedComments] = useState<{ [key: string]: boolean }>({});
  const [isPostLiked, setIsPostLiked] = useState(false);
  const router = useRouter();

  // Unwrap the params Promise
  const resolvedParams = use(params);
  
  // Add error handling for discussion loading
  let discussion;
  let discussionId;
  
  try {
    discussion = findDiscussionById(resolvedParams?.id || '1');
    discussionId = discussion.id.toString();
  } catch (error) {
    console.error('Error loading discussion:', error);
    // Fallback to first discussion
    discussion = findDiscussionById('1');
    discussionId = '1';
  }
  
  const allDiscussions = getAllDiscussions();

  // Load data from localStorage on component mount
  useEffect(() => {
    const stats = getForumStats();
    const userCommentsForDiscussion = getUserComments(discussionId);
    const totalComments = getTotalCommentCount(discussionId, discussion.commentsData.length);
    
    setUserComments(userCommentsForDiscussion);
    setCommentCount(totalComments);
    setIsPostLiked(checkPostLiked(discussionId));
    
    // Load liked comments
    const liked: { [key: string]: boolean } = {};
    if (stats.likes[discussionId]) {
      Object.keys(stats.likes[discussionId]).forEach(commentId => {
        if (stats.likes[discussionId][commentId]) {
          liked[commentId] = true;
        }
      });
    }
    setLikedComments(liked);
  }, [discussionId, discussion.commentsData.length]);

  // Get related discussions (excluding current one)
  const relatedDiscussions = allDiscussions
    .filter(d => d.id !== discussion.id && d.category === discussion.category)
    .slice(0, 2);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newUserComment = {
        id: Date.now(),
        author: { 
          id: 'user', 
          name: 'You', 
          initials: 'Y', 
          color: 'bg-blue-500' 
        },
        timeAgo: 'Just now',
        content: newComment,
        likes: 0,
        isUserComment: true
      };
      
      addUserComment(discussionId, newUserComment);
      setUserComments([...userComments, newUserComment]);
      setCommentCount(commentCount + 1);
      setNewComment('');
    }
  };

  const handleLikeComment = (commentId: number) => {
    const isLiked = toggleCommentLike(discussionId, commentId.toString());
    setLikedComments(prev => ({
      ...prev,
      [commentId.toString()]: isLiked
    }));
  };

  const handleLikePost = () => {
    const isLiked = togglePostLike(discussionId);
    setIsPostLiked(isLiked);
  };

  const navigateToDiscussion = (discussionId: number) => {
    router.push(`/support/${discussionId}`);
  };

  // Combine original comments with user comments
  const allComments = [...discussion.commentsData, ...userComments].sort((a, b) => {
    // Sort by time (newest first) - this is simplified for demo
    return b.id - a.id;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <BackButton href="/support" label="Back to Forum" />
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
                <span>{commentCount} comments</span>
              </div>
              <button 
                onClick={handleLikePost}
                className={`flex items-center space-x-2 transition-colors ${
                  isPostLiked 
                    ? 'text-red-600 hover:text-red-700' 
                    : 'text-gray-500 hover:text-red-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isPostLiked ? 'fill-current' : ''}`} />
                <span>{isPostLiked ? 'Liked' : 'Like'}</span>
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {discussion.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comments ({commentCount})
          </h2>
          
          {/* New Comment Box */}
          <form onSubmit={handleSubmitComment} className="mb-8 p-6 bg-gray-50 rounded-xl">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts or experiences..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
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
            {allComments.map((comment) => (
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
                        {comment.isUserComment && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            You
                          </span>
                        )}
                      </div>
                      
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="prose prose-sm max-w-none text-gray-700 mb-3">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {comment.content}
                      </ReactMarkdown>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => handleLikeComment(comment.id)}
                        className={`flex items-center space-x-2 text-sm transition-colors ${
                          likedComments[comment.id.toString()] 
                            ? 'text-red-600 hover:text-red-700' 
                            : 'text-gray-500 hover:text-red-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedComments[comment.id.toString()] ? 'fill-current' : ''}`} />
                        <span>{comment.likes + (likedComments[comment.id.toString()] ? 1 : 0)} likes</span>
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
            {allComments.length === 0 && (
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