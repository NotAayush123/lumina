// lib/forumStorage.ts

// Forum localStorage utilities
export interface ForumStats {
  likes: { [discussionId: string]: { [commentId: string]: boolean } };
  postLikes: { [discussionId: string]: boolean };
  comments: { [discussionId: string]: number };
  userComments: { [discussionId: string]: any[] };
}

const STORAGE_KEY = 'lumina_forum_stats';

// Initialize localStorage with default values
export const initializeForumStats = (): ForumStats => {
  const defaultStats: ForumStats = {
    likes: {},
    postLikes: {},
    comments: {},
    userComments: {}
  };
  
  if (typeof window !== 'undefined') {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultStats));
    }
  }
  
  return defaultStats;
};

// Get forum stats from localStorage
export const getForumStats = (): ForumStats => {
  if (typeof window === 'undefined') {
    return initializeForumStats();
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Ensure all properties exist with proper fallbacks
      return {
        likes: parsed.likes || {},
        postLikes: parsed.postLikes || {},
        comments: parsed.comments || {},
        userComments: parsed.userComments || {}
      };
    }
    return initializeForumStats();
  } catch (error) {
    console.error('Error reading forum stats from localStorage:', error);
    return initializeForumStats();
  }
};

// Save forum stats to localStorage
export const saveForumStats = (stats: ForumStats): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (error) {
      console.error('Error saving forum stats to localStorage:', error);
    }
  }
};

// Toggle like for a comment
export const toggleCommentLike = (discussionId: string, commentId: string): boolean => {
  const stats = getForumStats();
  
  if (!stats.likes[discussionId]) {
    stats.likes[discussionId] = {};
  }
  
  const isLiked = stats.likes[discussionId][commentId] || false;
  stats.likes[discussionId][commentId] = !isLiked;
  
  saveForumStats(stats);
  return !isLiked;
};

// Check if a comment is liked
export const isCommentLiked = (discussionId: string, commentId: string): boolean => {
  const stats = getForumStats();
  return stats.likes[discussionId]?.[commentId] || false;
};

// Get comment count for a discussion
export const getCommentCount = (discussionId: string): number => {
  const stats = getForumStats();
  return stats.comments[discussionId] || 0;
};

// Set comment count for a discussion
export const setCommentCount = (discussionId: string, count: number): void => {
  const stats = getForumStats();
  stats.comments[discussionId] = count;
  saveForumStats(stats);
};

// Add a new comment
export const addUserComment = (discussionId: string, comment: any): void => {
  const stats = getForumStats();
  
  if (!stats.userComments[discussionId]) {
    stats.userComments[discussionId] = [];
  }
  
  stats.userComments[discussionId].push(comment);
  setCommentCount(discussionId, getCommentCount(discussionId) + 1);
  
  saveForumStats(stats);
};

// Get user comments for a discussion
export const getUserComments = (discussionId: string): any[] => {
  const stats = getForumStats();
  return stats.userComments[discussionId] || [];
};

// Get total comment count (including user comments)
export const getTotalCommentCount = (discussionId: string, baseComments: number): number => {
  const userComments = getUserComments(discussionId);
  return baseComments + userComments.length;
};

// Toggle like for a post
export const togglePostLike = (discussionId: string): boolean => {
  const stats = getForumStats();
  
  // Ensure postLikes exists
  if (!stats.postLikes) {
    stats.postLikes = {};
  }
  
  const isLiked = stats.postLikes[discussionId] || false;
  stats.postLikes[discussionId] = !isLiked;
  
  saveForumStats(stats);
  return !isLiked;
};

// Check if a post is liked - FIXED VERSION
export const isPostLiked = (discussionId: string): boolean => {
  const stats = getForumStats();
  // Add null check for postLikes to prevent the error
  return stats.postLikes && stats.postLikes[discussionId] || false;
};

// Clear all forum stats (useful for development/reset)
export const clearForumStats = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    initializeForumStats();
  }
};

// Migrate old data format if needed
export const migrateForumStats = (): void => {
  if (typeof window === 'undefined') return;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // If old format without postLikes, migrate it
      if (parsed && !parsed.postLikes) {
        parsed.postLikes = {};
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      }
    } catch (error) {
      console.error('Error migrating forum stats:', error);
    }
  }
};

// Initialize on import
if (typeof window !== 'undefined') {
  migrateForumStats();
}