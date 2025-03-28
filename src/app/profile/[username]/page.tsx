'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StoryCard from '@/components/discover/StoryCard';

// Sample user data for demo
const sampleUser = {
  id: 'user-1',
  username: 'storymaster',
  displayName: 'Story Master',
  bio: 'Avid writer of fantasy and sci-fi. I love creating immersive worlds and complex characters that readers can connect with.',
  avatar: '/placeholder-avatar.jpg',
  coverImage: '/placeholder-cover.jpg',
  joinDate: 'January 2023',
  stats: {
    stories: 24,
    followers: 1342,
    following: 156,
    totalViews: 328500,
    totalLikes: 15720,
    totalComments: 3240,
  },
  badges: [
    { id: 'prolific-author', name: 'Prolific Author', icon: 'fas fa-pen-fancy' },
    { id: 'trending-creator', name: 'Trending Creator', icon: 'fas fa-fire' },
    { id: 'community-favorite', name: 'Community Favorite', icon: 'fas fa-heart' },
  ],
  socials: [
    { platform: 'twitter', url: 'https://twitter.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'tumblr', url: 'https://tumblr.com' },
  ]
};

// Sample stories data for demo
const sampleStories = [
  {
    id: 'story-1',
    title: 'The Shadow of Eternity',
    author: { id: 'user-1', username: 'storymaster' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Fantasy',
    rating: 4.8,
    viewCount: 12500,
    likeCount: 876,
  },
  {
    id: 'story-2',
    title: 'Beyond the Stars',
    author: { id: 'user-1', username: 'storymaster' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Sci-Fi',
    rating: 4.7,
    viewCount: 9800,
    likeCount: 543,
  },
  {
    id: 'story-3',
    title: 'Whispers of the Ancient',
    author: { id: 'user-1', username: 'storymaster' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Historical Fiction',
    rating: 4.9,
    viewCount: 15700,
    likeCount: 984,
  },
  {
    id: 'story-4',
    title: 'The Last Guardian',
    author: { id: 'user-1', username: 'storymaster' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Fantasy',
    rating: 4.6,
    viewCount: 7600,
    likeCount: 421,
  },
];

interface ProfilePageProps {
  params: {
    username: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;
  const [activeTab, setActiveTab] = useState('stories');
  const [isFollowing, setIsFollowing] = useState(false);
  
  // In a real app, you would fetch user data based on the username
  // For this demo, we're using sample data
  const user = sampleUser;
  const stories = sampleStories;
  
  // Handle follow/unfollow
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };
  
  return (
    <div className="profile-page">
      {/* Cover image */}
      <div className="cover-image relative h-64 sm:h-48">
        <Image
          src={user.coverImage}
          alt={`${user.displayName}'s cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      {/* Profile header */}
      <div className="profile-header relative px-6 pt-16 pb-6 -mt-16">
        <div className="flex flex-col md:flex-row md:items-end">
          {/* Avatar */}
          <div className="avatar-container relative -mt-24 mb-4 md:mb-0 md:mr-6">
            <div className="avatar w-28 h-28 rounded-full border-4 border-background overflow-hidden">
              <Image
                src={user.avatar}
                alt={user.displayName}
                width={112}
                height={112}
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Profile info */}
          <div className="profile-info flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold">{user.displayName}</h1>
                <p className="text-text-tertiary">@{user.username}</p>
              </div>
              
              <div className="flex gap-3 mt-4 sm:mt-0">
                <button
                  onClick={handleFollowToggle}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isFollowing
                      ? 'bg-surface border border-primary text-primary-light hover:bg-primary/10'
                      : 'btn btn-primary'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                
                <Link
                  href={`/messages/${user.username}`}
                  className="btn-icon bg-surface border border-border-subtle hover:border-border-distinct"
                >
                  <i className="fas fa-envelope"></i>
                </Link>
                
                <button className="btn-icon bg-surface border border-border-subtle hover:border-border-distinct">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
            
            {/* Bio */}
            <p className="my-4">{user.bio}</p>
            
            {/* Stats and badges */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="stat flex items-center gap-1">
                <i className="fas fa-book-open text-text-tertiary"></i>
                <span className="font-medium">{user.stats.stories}</span> Stories
              </div>
              
              <div className="stat flex items-center gap-1">
                <i className="fas fa-user-friends text-text-tertiary"></i>
                <span className="font-medium">{user.stats.followers}</span> Followers
              </div>
              
              <div className="stat flex items-center gap-1">
                <i className="fas fa-calendar-alt text-text-tertiary"></i>
                Joined {user.joinDate}
              </div>
              
              {user.badges && user.badges.map(badge => (
                <div key={badge.id} className="badge flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <i className={`${badge.icon} text-primary-light`}></i>
                  <span className="text-xs">{badge.name}</span>
                </div>
              ))}
              
              {user.socials && (
                <div className="socials flex items-center gap-2 ml-auto">
                  {user.socials.map(social => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon w-8 h-8 flex items-center justify-center rounded-full bg-surface hover:bg-elevated transition-colors"
                    >
                      <i className={`fab fa-${social.platform}`}></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content tabs */}
      <div className="profile-tabs border-b border-border-subtle">
        <div className="flex overflow-x-auto scrollbar-none">
          <button
            className={`tab py-4 px-6 relative ${activeTab === 'stories' ? 'text-primary-light' : 'text-text-tertiary hover:text-text-secondary'}`}
            onClick={() => setActiveTab('stories')}
          >
            Stories
            {activeTab === 'stories' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </button>
          
          <button
            className={`tab py-4 px-6 relative ${activeTab === 'about' ? 'text-primary-light' : 'text-text-tertiary hover:text-text-secondary'}`}
            onClick={() => setActiveTab('about')}
          >
            About
            {activeTab === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </button>
          
          <button
            className={`tab py-4 px-6 relative ${activeTab === 'favorites' ? 'text-primary-light' : 'text-text-tertiary hover:text-text-secondary'}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
            {activeTab === 'favorites' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </button>
          
          <button
            className={`tab py-4 px-6 relative ${activeTab === 'comments' ? 'text-primary-light' : 'text-text-tertiary hover:text-text-secondary'}`}
            onClick={() => setActiveTab('comments')}
          >
            Comments
            {activeTab === 'comments' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            )}
          </button>
        </div>
      </div>
      
      {/* Tab content */}
      <div className="profile-content p-6">
        {activeTab === 'stories' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Published Stories</h2>
              
              <div className="flex items-center gap-2">
                <span className="text-text-tertiary text-sm">Sort by:</span>
                <select className="bg-surface border border-border-subtle rounded-lg py-2 px-3 text-sm">
                  <option>Recent</option>
                  <option>Popular</option>
                  <option>Most Liked</option>
                </select>
              </div>
            </div>
            
            <div className="stories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stories.map(story => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'about' && (
          <div className="about-section max-w-3xl">
            <div className="stats-overview grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="stat-card p-4 bg-surface rounded-xl border border-border-subtle flex flex-col items-center">
                <span className="text-2xl font-bold">{user.stats.totalViews.toLocaleString()}</span>
                <span className="text-text-tertiary">Total Views</span>
              </div>
              
              <div className="stat-card p-4 bg-surface rounded-xl border border-border-subtle flex flex-col items-center">
                <span className="text-2xl font-bold">{user.stats.totalLikes.toLocaleString()}</span>
                <span className="text-text-tertiary">Total Likes</span>
              </div>
              
              <div className="stat-card p-4 bg-surface rounded-xl border border-border-subtle flex flex-col items-center">
                <span className="text-2xl font-bold">{user.stats.totalComments.toLocaleString()}</span>
                <span className="text-text-tertiary">Total Comments</span>
              </div>
            </div>
            
            <div className="about-details space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">About Me</h3>
                <p className="text-text-secondary">
                  {user.bio}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Writing Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Fantasy</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Science Fiction</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Adventure</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Mystery</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Historical Fiction</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Favorite Fandoms</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Harry Potter</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Star Wars</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Marvel</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Game of Thrones</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-sm">Lord of the Rings</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'favorites' && (
          <div className="favorites-section">
            <p className="text-center text-text-tertiary py-8">
              This section is coming soon!
            </p>
          </div>
        )}
        
        {activeTab === 'comments' && (
          <div className="comments-section">
            <p className="text-center text-text-tertiary py-8">
              This section is coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}