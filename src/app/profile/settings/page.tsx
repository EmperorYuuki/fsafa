'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Sample user data for demo
  const [userData, setUserData] = useState({
    username: 'storymaster',
    displayName: 'Story Master',
    email: 'user@example.com',
    bio: 'Avid writer of fantasy and sci-fi. I love creating immersive worlds and complex characters that readers can connect with.',
    avatar: '/placeholder-avatar.jpg',
    coverImage: '/placeholder-cover.jpg',
    socialLinks: {
      twitter: 'https://twitter.com/username',
      instagram: 'https://instagram.com/username',
      tumblr: '',
    },
    notifications: {
      newFollower: true,
      newComment: true,
      directMessage: true,
      storyUpdate: false,
      newsletter: true,
    },
    privacy: {
      showEmail: false,
      showActivity: true,
      allowComments: true,
      allowMessages: true,
    },
    preferences: {
      theme: 'dark',
      fontSize: 'medium',
      emailDigest: 'weekly',
    }
  });
  
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  // Update user profile
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
      setUpdateSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
    }, 1000);
  };
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  // Handle toggle change
  const handleToggleChange = (category: string, setting: string) => {
    setUserData({
      ...userData,
      [category]: {
        ...userData[category as keyof typeof userData] as Record<string, boolean>,
        [setting]: !(userData[category as keyof typeof userData] as Record<string, boolean>)[setting]
      }
    });
  };
  
  // Handle social link change
  const handleSocialChange = (platform: string, value: string) => {
    setUserData({
      ...userData,
      socialLinks: {
        ...userData.socialLinks,
        [platform]: value
      }
    });
  };
  
  // Handle preferences change
  const handlePreferenceChange = (setting: string, value: string) => {
    setUserData({
      ...userData,
      preferences: {
        ...userData.preferences,
        [setting]: value
      }
    });
  };
  
  return (
    <div className="profile-settings-page max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="settings-sidebar w-full lg:w-64 flex-shrink-0">
          <div className="bg-surface rounded-xl border border-border-subtle overflow-hidden">
            <div className="p-4 border-b border-border-subtle">
              <h2 className="text-lg font-semibold">Settings</h2>
            </div>
            
            <div className="settings-nav">
              <button
                className={`w-full text-left py-3 px-4 border-l-2 transition-colors ${
                  activeTab === 'profile'
                    ? 'border-primary bg-primary/5 text-primary-light'
                    : 'border-transparent hover:bg-elevated'
                }`}
                onClick={() => setActiveTab('profile')}
              >
                <i className="fas fa-user mr-3"></i>
                Profile
              </button>
              
              <button
                className={`w-full text-left py-3 px-4 border-l-2 transition-colors ${
                  activeTab === 'account'
                    ? 'border-primary bg-primary/5 text-primary-light'
                    : 'border-transparent hover:bg-elevated'
                }`}
                onClick={() => setActiveTab('account')}
              >
                <i className="fas fa-user-shield mr-3"></i>
                Account
              </button>
              
              <button
                className={`w-full text-left py-3 px-4 border-l-2 transition-colors ${
                  activeTab === 'notifications'
                    ? 'border-primary bg-primary/5 text-primary-light'
                    : 'border-transparent hover:bg-elevated'
                }`}
                onClick={() => setActiveTab('notifications')}
              >
                <i className="fas fa-bell mr-3"></i>
                Notifications
              </button>
              
              <button
                className={`w-full text-left py-3 px-4 border-l-2 transition-colors ${
                  activeTab === 'privacy'
                    ? 'border-primary bg-primary/5 text-primary-light'
                    : 'border-transparent hover:bg-elevated'
                }`}
                onClick={() => setActiveTab('privacy')}
              >
                <i className="fas fa-lock mr-3"></i>
                Privacy
              </button>
              
              <button
                className={`w-full text-left py-3 px-4 border-l-2 transition-colors ${
                  activeTab === 'preferences'
                    ? 'border-primary bg-primary/5 text-primary-light'
                    : 'border-transparent hover:bg-elevated'
                }`}
                onClick={() => setActiveTab('preferences')}
              >
                <i className="fas fa-sliders-h mr-3"></i>
                Preferences
              </button>
            </div>
            
            <div className="p-4 border-t border-border-subtle">
              <Link
                href={`/profile/${userData.username}`}
                className="flex items-center text-text-tertiary hover:text-text-secondary transition-colors"
              >
                <i className="fas fa-arrow-left mr-3"></i>
                Back to Profile
              </Link>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="settings-content flex-grow">
          {updateSuccess && (
            <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg text-success text-sm flex items-center">
              <i className="fas fa-check-circle mr-2"></i>
              Your settings have been updated successfully.
            </div>
          )}
          
          {/* Profile settings */}
          {activeTab === 'profile' && (
            <div className="bg-surface rounded-xl border border-border-subtle overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h2 className="text-xl font-semibold">Profile Settings</h2>
                <p className="text-text-tertiary text-sm mt-1">
                  Manage how your profile appears to other users
                </p>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="p-6">
                <div className="space-y-8">
                  {/* Profile pictures */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium mb-2">Profile Picture</label>
                      <div className="flex items-center gap-4">
                        <div className="avatar w-20 h-20 rounded-full overflow-hidden bg-elevated">
                          <Image
                            src={userData.avatar}
                            alt="Profile picture"
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <button
                          type="button"
                          className="px-4 py-2 bg-surface border border-border-distinct rounded-lg hover:bg-elevated transition-colors"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Image</label>
                      <div className="h-20 rounded-lg overflow-hidden bg-elevated relative">
                        <Image
                          src={userData.coverImage}
                          alt="Cover image"
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          className="absolute bottom-2 right-2 px-3 py-1 bg-surface/80 backdrop-blur-sm border border-border-distinct rounded-lg hover:bg-elevated/80 transition-colors text-sm"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Basic info */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="displayName" className="block text-sm font-medium mb-2">
                        Display Name
                      </label>
                      <input
                        id="displayName"
                        name="displayName"
                        type="text"
                        value={userData.displayName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-elevated border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                      <p className="mt-1 text-xs text-text-tertiary">
                        This is the name that will be displayed on your profile
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium mb-2">
                        Username
                      </label>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        value={userData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-elevated border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                      <p className="mt-1 text-xs text-text-tertiary">
                        Your unique username: fictionrealm.com/profile/{userData.username}
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium mb-2">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={userData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 bg-elevated border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      ></textarea>
                      <p className="mt-1 text-xs text-text-tertiary">
                        Tell others about yourself and your writing
                      </p>
                    </div>
                  </div>
                  
                  {/* Social links */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Social Links</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-text-tertiary">
                          <i className="fab fa-twitter text-lg"></i>
                        </div>
                        <input
                          type="url"
                          value={userData.socialLinks.twitter}
                          onChange={(e) => handleSocialChange('twitter', e.target.value)}
                          placeholder="Twitter URL"
                          className="flex-grow ml-2 px-4 py-2 bg-elevated border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-text-tertiary">
                          <i className="fab fa-instagram text-lg"></i>
                        </div>
                        <input
                          type="url"
                          value={userData.socialLinks.instagram}
                          onChange={(e) => handleSocialChange('instagram', e.target.value)}
                          placeholder="Instagram URL"
                          className="flex-grow ml-2 px-4 py-2 bg-elevated border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-text-tertiary">
                          <i className="fab fa-tumblr text-lg"></i>
                        </div>
                        <input
                          type="url"
                          value={userData.socialLinks.tumblr}
                          onChange={(e) => handleSocialChange('tumblr', e.target.value)}
                          placeholder="Tumblr URL"
                          className="flex-grow ml-2 px-4 py-2 bg-elevated border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-end gap-4">
                    <button
                      type="button"
                      className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-elevated transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`btn btn-primary relative ${isUpdating ? 'opacity-80' : ''}`}
                      disabled={isUpdating}
                    >
                      {isUpdating ? (
                        <>
                          <span className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </span>
                          <span className="opacity-0">Save Changes</span>
                        </>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {/* Account settings */}
          {activeTab === 'account' && (
            <div className="bg-surface rounded-xl border border-border-subtle overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h2 className="text-xl font-semibold">Account Settings</h2>
                <p className="text-text-tertiary text-sm mt-1">
                  Manage your account details and security
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-8">
                  {/* Email */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Address</h3>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-elevated">
                      <div>
                        <p>{userData.email}</p>
                        <span className="text-xs text-success flex items-center mt-1">
                          <i className="fas fa-check-circle mr-1"></i> Verified
                        </span>
                      </div>
                      <button
                        type="button"
                        className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-surface transition-colors"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  
                  {/* Password */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Password</h3>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-elevated">
                      <div>
                        <p>Password</p>
                        <span className="text-xs text-text-tertiary flex items-center mt-1">
                          Last changed 3 months ago
                        </span>
                      </div>
                      <button
                        type="button"
                        className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-surface transition-colors"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  
                  {/* Connected accounts */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Connected Accounts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-elevated">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-white bg-[#1DA1F2] rounded-full">
                            <i className="fab fa-twitter"></i>
                          </div>
                          <div className="ml-4">
                            <p>Twitter</p>
                            <span className="text-xs text-text-tertiary">Not connected</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-surface transition-colors"
                        >
                          Connect
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 rounded-lg bg-elevated">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-white bg-[#4267B2] rounded-full">
                            <i className="fab fa-facebook-f"></i>
                          </div>
                          <div className="ml-4">
                            <p>Facebook</p>
                            <span className="text-xs text-text-tertiary">Not connected</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-surface transition-colors"
                        >
                          Connect
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 rounded-lg bg-elevated">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-white bg-[#DB4437] rounded-full">
                            <i className="fab fa-google"></i>
                          </div>
                          <div className="ml-4">
                            <p>Google</p>
                            <span className="text-xs text-success flex items-center">
                              <i className="fas fa-check-circle mr-1"></i> Connected
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="px-4 py-2 border border-danger/30 text-danger rounded-lg hover:bg-danger/10 transition-colors"
                        >
                          Disconnect
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Danger zone */}
                  <div className="pt-6 border-t border-border-subtle">
                    <h3 className="text-lg font-medium text-danger mb-4">Danger Zone</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-danger/5 border border-danger/20">
                        <div>
                          <p className="font-medium">Delete Account</p>
                          <span className="text-xs text-text-tertiary">
                            This action cannot be undone
                          </span>
                        </div>
                        <button
                          type="button"
                          className="px-4 py-2 bg-danger text-white rounded-lg hover:bg-danger/90 transition-colors"
                        >
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Notifications settings */}
          {activeTab === 'notifications' && (
            <div className="bg-surface rounded-xl border border-border-subtle overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h2 className="text-xl font-semibold">Notification Settings</h2>
                <p className="text-text-tertiary text-sm mt-1">
                  Control which notifications you receive
                </p>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="p-6">
                <div className="space-y-8">
                  <div className="space-y-4">
                    {/* New follower notification */}
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium">New Follower</p>
                        <p className="text-text-tertiary text-sm">
                          Notify me when someone follows me
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.notifications.newFollower}
                          onChange={() => handleToggleChange('notifications', 'newFollower')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    {/* New comment notification */}
                    <div className="flex items-center justify-between py-3 border-t border-border-subtle">
                      <div>
                        <p className="font-medium">New Comment</p>
                        <p className="text-text-tertiary text-sm">
                          Notify me when someone comments on my story
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.notifications.newComment}
                          onChange={() => handleToggleChange('notifications', 'newComment')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    {/* Direct message notification */}
                    <div className="flex items-center justify-between py-3 border-t border-border-subtle">
                      <div>
                        <p className="font-medium">Direct Message</p>
                        <p className="text-text-tertiary text-sm">
                          Notify me when I receive a direct message
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.notifications.directMessage}
                          onChange={() => handleToggleChange('notifications', 'directMessage')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    {/* Story update notification */}
                    <div className="flex items-center justify-between py-3 border-t border-border-subtle">
                      <div>
                        <p className="font-medium">Story Update</p>
                        <p className="text-text-tertiary text-sm">
                          Notify me when stories I follow are updated
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.notifications.storyUpdate}
                          onChange={() => handleToggleChange('notifications', 'storyUpdate')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    {/* Newsletter notification */}
                    <div className="flex items-center justify-between py-3 border-t border-border-subtle">
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-text-tertiary text-sm">
                          Receive our newsletter with updates and featured content
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.notifications.newsletter}
                          onChange={() => handleToggleChange('notifications', 'newsletter')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-end gap-4">
                    <button
                      type="button"
                      className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-elevated transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`btn btn-primary relative ${isUpdating ? 'opacity-80' : ''}`}
                      disabled={isUpdating}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {/* Privacy settings */}
          {activeTab === 'privacy' && (
            <div className="bg-surface rounded-xl border border-border-subtle overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h2 className="text-xl font-semibold">Privacy Settings</h2>
                <p className="text-text-tertiary text-sm mt-1">
                  Control your privacy and visibility settings
                </p>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="p-6">
                <div className="space-y-8">
                  <div className="space-y-4">
                    {/* Show email setting */}
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium">Show Email Address</p>
                        <p className="text-text-tertiary text-sm">
                          Allow other users to see your email address
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.privacy.showEmail}
                          onChange={() => handleToggleChange('privacy', 'showEmail')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    {/* Show activity setting */}
                    <div className="flex items-center justify-between py-3 border-t border-border-subtle">
                      <div>
                        <p className="font-medium">Show Activity Status</p>
                        <p className="text-text-tertiary text-sm">
                          Show others when you're online or recently active
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.privacy.showActivity}
                          onChange={() => handleToggleChange('privacy', 'showActivity')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    {/* Allow comments setting */}
                    <div className="flex items-center justify-between py-3 border-t border-border-subtle">
                      <div>
                        <p className="font-medium">Allow Comments</p>
                        <p className="text-text-tertiary text-sm">
                          Allow others to comment on your stories
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.privacy.allowComments}
                          onChange={() => handleToggleChange('privacy', 'allowComments')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    {/* Allow messages setting */}
                    <div className="flex items-center justify-between py-3 border-t border-border-subtle">
                      <div>
                        <p className="font-medium">Allow Direct Messages</p>
                        <p className="text-text-tertiary text-sm">
                          Allow others to send you direct messages
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={userData.privacy.allowMessages}
                          onChange={() => handleToggleChange('privacy', 'allowMessages')}
                        />
                        <div className="w-11 h-6 bg-elevated peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-end gap-4">
                    <button
                      type="button"
                      className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-elevated transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`btn btn-primary relative ${isUpdating ? 'opacity-80' : ''}`}
                      disabled={isUpdating}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {/* Preferences settings */}
          {activeTab === 'preferences' && (
            <div className="bg-surface rounded-xl border border-border-subtle overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h2 className="text-xl font-semibold">Preferences</h2>
                <p className="text-text-tertiary text-sm mt-1">
                  Customize your reading and site experience
                </p>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="p-6">
                <div className="space-y-8">
                  {/* Theme preference */}
                  <div>
                    <label className="block text-lg font-medium mb-4">Theme</label>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        type="button"
                        className={`theme-option p-4 rounded-lg border transition-colors aspect-square ${
                          userData.preferences.theme === 'dark'
                            ? 'border-primary bg-primary/10'
                            : 'border-border-subtle bg-background hover:border-primary-light'
                        }`}
                        onClick={() => handlePreferenceChange('theme', 'dark')}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center">
                            <span className="text-white text-xl">Aa</span>
                          </div>
                          <span className="font-medium">Dark</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`theme-option p-4 rounded-lg border transition-colors aspect-square ${
                          userData.preferences.theme === 'light'
                            ? 'border-primary bg-primary/10'
                            : 'border-border-subtle bg-background hover:border-primary-light'
                        }`}
                        onClick={() => handlePreferenceChange('theme', 'light')}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                            <span className="text-slate-900 text-xl">Aa</span>
                          </div>
                          <span className="font-medium">Light</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`theme-option p-4 rounded-lg border transition-colors aspect-square ${
                          userData.preferences.theme === 'system'
                            ? 'border-primary bg-primary/10'
                            : 'border-border-subtle bg-background hover:border-primary-light'
                        }`}
                        onClick={() => handlePreferenceChange('theme', 'system')}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-white to-background flex items-center justify-center">
                            <span className="text-xl">Aa</span>
                          </div>
                          <span className="font-medium">System</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Font size preference */}
                  <div>
                    <label className="block text-lg font-medium mb-4">Default Font Size</label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Small</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                            userData.preferences.fontSize === 'small'
                              ? 'bg-primary/20 text-primary-light'
                              : 'bg-elevated hover:bg-highlight'
                          }`}
                          onClick={() => handlePreferenceChange('fontSize', 'small')}
                        >
                          <span className="text-sm">A</span>
                        </button>
                        
                        <button
                          type="button"
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                            userData.preferences.fontSize === 'medium'
                              ? 'bg-primary/20 text-primary-light'
                              : 'bg-elevated hover:bg-highlight'
                          }`}
                          onClick={() => handlePreferenceChange('fontSize', 'medium')}
                        >
                          <span className="text-base">A</span>
                        </button>
                        
                        <button
                          type="button"
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                            userData.preferences.fontSize === 'large'
                              ? 'bg-primary/20 text-primary-light'
                              : 'bg-elevated hover:bg-highlight'
                          }`}
                          onClick={() => handlePreferenceChange('fontSize', 'large')}
                        >
                          <span className="text-lg">A</span>
                        </button>
                        
                        <button
                          type="button"
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                            userData.preferences.fontSize === 'xlarge'
                              ? 'bg-primary/20 text-primary-light'
                              : 'bg-elevated hover:bg-highlight'
                          }`}
                          onClick={() => handlePreferenceChange('fontSize', 'xlarge')}
                        >
                          <span className="text-xl">A</span>
                        </button>
                      </div>
                      <span className="text-sm">Large</span>
                    </div>
                  </div>
                  
                  {/* Email digest preference */}
                  <div>
                    <label className="block text-lg font-medium mb-4">Email Digest Frequency</label>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        type="button"
                        className={`p-4 rounded-lg border transition-colors ${
                          userData.preferences.emailDigest === 'daily'
                            ? 'border-primary bg-primary/10'
                            : 'border-border-subtle hover:border-primary-light'
                        }`}
                        onClick={() => handlePreferenceChange('emailDigest', 'daily')}
                      >
                        <div className="text-center">
                          <i className="far fa-calendar-day text-2xl mb-2"></i>
                          <p className="font-medium">Daily</p>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 rounded-lg border transition-colors ${
                          userData.preferences.emailDigest === 'weekly'
                            ? 'border-primary bg-primary/10'
                            : 'border-border-subtle hover:border-primary-light'
                        }`}
                        onClick={() => handlePreferenceChange('emailDigest', 'weekly')}
                      >
                        <div className="text-center">
                          <i className="far fa-calendar-week text-2xl mb-2"></i>
                          <p className="font-medium">Weekly</p>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 rounded-lg border transition-colors ${
                          userData.preferences.emailDigest === 'never'
                            ? 'border-primary bg-primary/10'
                            : 'border-border-subtle hover:border-primary-light'
                        }`}
                        onClick={() => handlePreferenceChange('emailDigest', 'never')}
                      >
                        <div className="text-center">
                          <i className="far fa-bell-slash text-2xl mb-2"></i>
                          <p className="font-medium">Never</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-end gap-4">
                    <button
                      type="button"
                      className="px-4 py-2 border border-border-distinct rounded-lg hover:bg-elevated transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`btn btn-primary relative ${isUpdating ? 'opacity-80' : ''}`}
                      disabled={isUpdating}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}