'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileActive, setIsMobileActive] = useState(false);
  
  // Handle sidebar toggle functionality
  useEffect(() => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    
    const handleToggle = () => {
      setIsMobileActive(!isMobileActive);
    };
    
    // Close sidebar when clicking outside on mobile
    const handleOutsideClick = (event: MouseEvent) => {
      if (window.innerWidth <= 992) {
        const target = event.target as HTMLElement;
        if (
          sidebar && 
          sidebarToggle && 
          !sidebar.contains(target) && 
          !sidebarToggle.contains(target) && 
          isMobileActive
        ) {
          setIsMobileActive(false);
        }
      }
    };
    
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', handleToggle);
    }
    
    document.addEventListener('click', handleOutsideClick);
    
    return () => {
      if (sidebarToggle) {
        sidebarToggle.removeEventListener('click', handleToggle);
      }
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileActive]);

  // Check if a nav link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside 
      id="sidebar" 
      className={`sidebar fixed flex flex-col w-[280px] glass-effect border-r border-border-subtle h-full z-30 transition-transform duration-300 overflow-y-auto py-6 px-4 ${
        isMobileActive ? 'translate-x-0' : 'lg:translate-x-[-100%]'
      }`}
    >
      <div className="sidebar-logo flex items-center px-4 py-2 mb-8">
        <i className="fas fa-book-open text-2xl mr-3 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"></i>
        <h1 className="font-heading font-semibold text-2xl tracking-tight">
          Fiction<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Realm</span>
        </h1>
      </div>

      <div className="sidebar-section mb-6">
        <h3 className="sidebar-section-header">Discover</h3>
        <ul className="nav-list">
          <li className="nav-item mb-1">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <i className="fas fa-compass w-6 mr-3"></i>Home
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/trending" className={`nav-link ${isActive('/trending') ? 'active' : ''}`}>
              <i className="fas fa-fire w-6 mr-3"></i>Trending
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/featured" className={`nav-link ${isActive('/featured') ? 'active' : ''}`}>
              <i className="fas fa-star w-6 mr-3"></i>Featured
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/explore" className={`nav-link ${isActive('/explore') ? 'active' : ''}`}>
              <i className="fas fa-globe w-6 mr-3"></i>Explore
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="#" className="nav-link">
              <i className="fas fa-crown w-6 mr-3"></i>Original Fiction
              <span className="ml-auto text-xs bg-secondary text-white px-2 py-0.5 rounded-full font-semibold">Soon</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-section mb-6">
        <h3 className="sidebar-section-header">Your Library</h3>
        <ul className="nav-list">
          <li className="nav-item mb-1">
            <Link href="/library/bookmarks" className={`nav-link ${isActive('/library/bookmarks') ? 'active' : ''}`}>
              <i className="fas fa-bookmark w-6 mr-3"></i>Bookmarks
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/library/history" className={`nav-link ${isActive('/library/history') ? 'active' : ''}`}>
              <i className="fas fa-history w-6 mr-3"></i>Reading History
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/library/my-stories" className={`nav-link ${isActive('/library/my-stories') ? 'active' : ''}`}>
              <i className="fas fa-pen-fancy w-6 mr-3"></i>My Stories
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/library/following" className={`nav-link ${isActive('/library/following') ? 'active' : ''}`}>
              <i className="fas fa-heart w-6 mr-3"></i>Following
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-section mb-6">
        <h3 className="sidebar-section-header">Reading Experience</h3>
        <ul className="nav-list">
          <li className="nav-item mb-1">
            <Link href="/settings/font" className={`nav-link ${isActive('/settings/font') ? 'active' : ''}`}>
              <i className="fas fa-text-height w-6 mr-3"></i>Font Settings
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/settings/theme" className={`nav-link ${isActive('/settings/theme') ? 'active' : ''}`}>
              <i className="fas fa-moon w-6 mr-3"></i>Theme Options
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/settings/accessibility" className={`nav-link ${isActive('/settings/accessibility') ? 'active' : ''}`}>
              <i className="fas fa-universal-access w-6 mr-3"></i>Accessibility
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/settings/translation" className={`nav-link ${isActive('/settings/translation') ? 'active' : ''}`}>
              <i className="fas fa-language w-6 mr-3"></i>Translation
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-section mb-6">
        <h3 className="sidebar-section-header">Community</h3>
        <ul className="nav-list">
          <li className="nav-item mb-1">
            <Link href="/community/forums" className={`nav-link ${isActive('/community/forums') ? 'active' : ''}`}>
              <i className="fas fa-users w-6 mr-3"></i>Forums
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/community/discord" className={`nav-link ${isActive('/community/discord') ? 'active' : ''}`}>
              <i className="fab fa-discord w-6 mr-3"></i>Discord
            </Link>
          </li>
          <li className="nav-item mb-1">
            <Link href="/community/feedback" className={`nav-link ${isActive('/community/feedback') ? 'active' : ''}`}>
              <i className="fas fa-message w-6 mr-3"></i>Feedback
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}