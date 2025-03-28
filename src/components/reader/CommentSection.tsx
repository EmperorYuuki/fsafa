
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Comment type definition
interface Comment {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  replies?: Comment[];
  isLiked?: boolean;
}

// Mock data for comments
const mockComments: Record<number, Comment[]> = {
  0: [
    {
      id: 'comment-1',
      user: {
        id: 'user-1',
        name: 'Alex Chen',
        avatar: '/placeholder-avatar.jpg',
      },
      content: 'This paragraph really captures the essence of the character. I love how the author portrays the internal conflict!',
      createdAt: '2023-08-15T14:30:00Z',
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 'reply-1',
          user: {
            id: 'user-2',
            name: 'Maya Johnson',
            avatar: '/placeholder-avatar.jpg',
          },
          content: 'I completely agree! The subtle nuances in the language really add depth.',
          createdAt: '2023-08-15T15:45:00Z',
          likes: 5,
          isLiked: true,
        },
      ],
    },
    {
      id: 'comment-2',
      user: {
        id: 'user-3',
        name: 'Jordan Smith',
        avatar: '/placeholder-avatar.jpg',
      },
      content: 'I had a different interpretation. I think this shows how the character is evolving from their previous state.',
      createdAt: '2023-08-16T10:15:00Z',
      likes: 8,
      isLiked: false,
    },
  ],
  1: [
    {
      id: 'comment-3',
      user: {
        id: 'user-4',
        name: 'Taylor Williams',
        avatar: '/placeholder-avatar.jpg',
      },
      content: 'The imagery in this paragraph is so vivid. I can practically see the scene unfolding!',
      createdAt: '2023-08-14T09:20:00Z',
      likes: 15,
      isLiked: false,
    },
  ],
};

interface CommentSectionProps {
  isOpen: boolean;
  onClose: () => void;
  paragraphIndex: number | null;
  storyId: string;
  chapterId: string;
}

export default function CommentSection({
  isOpen,
  onClose,
  paragraphIndex,
  storyId,
  chapterId,
}: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  // Fetch comments for the selected paragraph
  useEffect(() => {
    if (paragraphIndex !== null) {
      // In a real app, you would fetch comments from an API
      // For now, we'll use mock data
      setComments(mockComments[paragraphIndex] || []);
    }
  }, [paragraphIndex]);

  // Handle comment submission
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    // Create a new comment
    const comment: Comment = {
      id: `comment-${Date.now()}`,
      user: {
        id: 'current-user',
        name: 'You',
        avatar: '/placeholder-avatar.jpg',
      },
      content: newComment,
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
    };
    
    // Add the comment to the list
    setComments([...comments, comment]);
    setNewComment('');
  };

  // Handle reply submission
  const handleSubmitReply = (e: React.FormEvent, commentId: string) => {
    e.preventDefault();
    
    if (!replyContent.trim()) return;
    
    // Create a new reply
    const reply: Comment = {
      id: `reply-${Date.now()}`,
      user: {
        id: 'current-user',
        name: 'You',
        avatar: '/placeholder-avatar.jpg',
      },
      content: replyContent,
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
    };
    
    // Add the reply to the parent comment
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }
      return comment;
    });
    
    setComments(updatedComments);
    setReplyTo(null);
    setReplyContent('');
  };

  // Handle liking a comment
  const handleLikeComment = (commentId: string) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked,
        };
      }
      
      // Check if the comment is in replies
      if (comment.replies) {
        const updatedReplies = comment.replies.map(reply => {
          if (reply.id === commentId) {
            return {
              ...reply,
              likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
              isLiked: !reply.isLiked,
            };
          }
          return reply;
        });
        
        return {
          ...comment,
          replies: updatedReplies,
        };
      }
      
      return comment;
    });
    
    setComments(updatedComments);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={`comment-section fixed top-0 right-0 h-full w-80 glass-effect backdrop-blur-xl border-l border-border-distinct shadow-xl z-30 transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="comments-header flex items-center justify-between p-4 border-b border-border-subtle">
        <h2 className="text-lg font-semibold">Comments</h2>
        <button 
          onClick={onClose}
          className="btn-icon w-8 h-8 rounded-full bg-surface text-text-secondary hover:bg-elevated hover:text-text-primary transition-all"
          aria-label="Close comments"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <div className="comments-content flex flex-col h-[calc(100%-64px)]">
        {/* Comment list */}
        <div className="comments-list flex-1 overflow-y-auto p-4 space-y-6">
          {paragraphIndex !== null && comments.length === 0 && (
            <div className="no-comments text-center text-text-tertiary py-8">
              <i className="far fa-comment-dots text-4xl mb-3"></i>
              <p>No comments yet on this paragraph.</p>
              <p className="text-sm mt-2">Be the first to share your thoughts!</p>
            </div>
          )}
          
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-main bg-surface/50 rounded-lg p-3">
                <div className="comment-header flex items-center justify-between mb-2">
                  <div className="comment-user flex items-center gap-2">
                    <div className="avatar relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={comment.user.avatar}
                        alt={comment.user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <Link 
                        href={`/profile/${comment.user.id}`}
                        className="user-name text-sm font-medium hover:text-primary-light transition-colors"
                      >
                        {comment.user.name}
                      </Link>
                      <span className="comment-date block text-xs text-text-tertiary">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                  </div>
                  <button 
                    className={`like-btn text-xs flex items-center gap-1 px-2 py-1 rounded-full transition-colors ${
                      comment.isLiked 
                        ? 'text-primary' 
                        : 'text-text-tertiary hover:text-text-secondary'
                    }`}
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    <i className={`${comment.isLiked ? 'fas' : 'far'} fa-heart`}></i>
                    <span>{comment.likes}</span>
                  </button>
                </div>
                <div className="comment-body text-sm mb-2">
                  {comment.content}
                </div>
                <div className="comment-actions flex items-center justify-end gap-4 text-xs text-text-tertiary">
                  <button 
                    className="reply-btn hover:text-primary-light transition-colors"
                    onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                  >
                    <i className="fas fa-reply mr-1"></i> Reply
                  </button>
                </div>
              </div>
              
              {/* Reply form */}
              {replyTo === comment.id && (
                <form 
                  className="reply-form mt-2 ml-6"
                  onSubmit={(e) => handleSubmitReply(e, comment.id)}
                >
                  <textarea 
                    className="w-full p-3 bg-elevated rounded-lg border border-border-subtle text-sm resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    placeholder="Write a reply..."
                    rows={3}
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end gap-2 mt-2">
                    <button 
                      type="button" 
                      className="px-3 py-1 text-xs text-text-tertiary bg-elevated hover:bg-highlight hover:text-text-primary rounded-lg transition-colors"
                      onClick={() => setReplyTo(null)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-3 py-1 text-xs text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                    >
                      Post Reply
                    </button>
                  </div>
                </form>
              )}
              
              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="comment-replies ml-6 mt-2 space-y-3">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="reply bg-surface/30 rounded-lg p-3">
                      <div className="reply-header flex items-center justify-between mb-2">
                        <div className="reply-user flex items-center gap-2">
                          <div className="avatar relative w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              src={reply.user.avatar}
                              alt={reply.user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              href={`/profile/${reply.user.id}`}
                              className="user-name text-xs font-medium hover:text-primary-light transition-colors"
                            >
                              {reply.user.name}
                            </Link>
                            <span className="reply-date block text-[10px] text-text-tertiary">
                              {formatDate(reply.createdAt)}
                            </span>
                          </div>
                        </div>
                        <button 
                          className={`like-btn text-xs flex items-center gap-1 px-2 py-1 rounded-full transition-colors ${
                            reply.isLiked 
                              ? 'text-primary' 
                              : 'text-text-tertiary hover:text-text-secondary'
                          }`}
                          onClick={() => handleLikeComment(reply.id)}
                        >
                          <i className={`${reply.isLiked ? 'fas' : 'far'} fa-heart`}></i>
                          <span>{reply.likes}</span>
                        </button>
                      </div>
                      <div className="reply-body text-xs">
                        {reply.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Comment input */}
        <div className="comment-input p-4 border-t border-border-subtle">
          <form onSubmit={handleSubmitComment}>
            <textarea 
              className="w-full p-3 bg-elevated rounded-lg border border-border-subtle text-sm resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
              placeholder="Add your comment..."
              rows={3}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button 
              type="submit" 
              className="w-full mt-2 py-2 px-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
              disabled={!newComment.trim()}
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}