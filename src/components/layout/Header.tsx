
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
    // In a real app, you'd redirect to search results page
  };

  // Determine if we should show tabs based on the current path
  const shouldShowTabs = pathname === '/' || 
    pathname.startsWith('/featured') || 
    pathname.startsWith('/trending');

  return (
    <div>
      <header className="header flex items-center justify-between p-4 md:p-6 bg-background/80 backdrop-blur-xl sticky top-0 z-20 border-b border-border-subtle">
        <div className="search-container flex-1 max-w-md relative">
          <form onSubmit={handleSearch}>
            <i className="fas fa-search search-icon absolute left-4 top-1/2 transform -translate-y-1/2 text-text-tertiary pointer-events-none"></i>
            <input 
              type="text" 
              className="search-input w-full py-3 pl-10 pr-3 bg-elevated border border-border-subtle rounded-full font-sans text-[0.95rem] text-text-primary transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Search stories, authors, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="header-actions flex items-center gap-4">
          <button className="btn btn-icon">
            <i className="fas fa-bell"></i>
          </button>
          <Link href="/write" className="btn btn-primary">
            <i className="fas fa-pen mr-2"></i>
            <span className="hidden md:inline">Write</span>
          </Link>
          <Link href="/profile" className="user-avatar w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-semibold text-white cursor-pointer transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg">
            JD
          </Link>
        </div>
      </header>

      {shouldShowTabs && (
        <div className="tabs-container glass-effect backdrop-blur-sm p-0 px-6 border-b border-border-subtle flex overflow-x-auto scrollbar-none">
          <Link href="/" className={`tab py-4 px-5 text-text-tertiary relative font-medium whitespace-nowrap transition-colors ${pathname === '/' ? 'active text-primary-light' : 'hover:text-text-secondary'}`}>
            <i className="fas fa-compass mr-2"></i>
            <span>Discover</span>
            {pathname === '/' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-t-sm"></span>
            )}
          </Link>
          <Link href="/featured" className={`tab py-4 px-5 text-text-tertiary relative font-medium whitespace-nowrap transition-colors ${pathname === '/featured' ? 'active text-primary-light' : 'hover:text-text-secondary'}`}>
            <i className="fas fa-star mr-2"></i>
            <span>Featured</span>
            {pathname === '/featured' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-t-sm"></span>
            )}
          </Link>
          <Link href="/new-releases" className={`tab py-4 px-5 text-text-tertiary relative font-medium whitespace-nowrap transition-colors ${pathname === '/new-releases' ? 'active text-primary-light' : 'hover:text-text-secondary'}`}>
            <i className="fas fa-clock mr-2"></i>
            <span>New Releases</span>
            {pathname === '/new-releases' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-t-sm"></span>
            )}
          </Link>
          <Link href="/top-rated" className={`tab py-4 px-5 text-text-tertiary relative font-medium whitespace-nowrap transition-colors ${pathname === '/top-rated' ? 'active text-primary-light' : 'hover:text-text-secondary'}`}>
            <i className="fas fa-award mr-2"></i>
            <span>Top Rated</span>
            {pathname === '/top-rated' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-t-sm"></span>
            )}
          </Link>
          <Link href="/following" className={`tab py-4 px-5 text-text-tertiary relative font-medium whitespace-nowrap transition-colors ${pathname === '/following' ? 'active text-primary-light' : 'hover:text-text-secondary'}`}>
            <i className="fas fa-users mr-2"></i>
            <span>Following</span>
            {pathname === '/following' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-t-sm"></span>
            )}
          </Link>
          <Link href="/audio-stories" className={`tab py-4 px-5 text-text-tertiary relative font-medium whitespace-nowrap transition-colors ${pathname === '/audio-stories' ? 'active text-primary-light' : 'hover:text-text-secondary'}`}>
            <i className="fas fa-headphones mr-2"></i>
            <span>Audio Stories</span>
            {pathname === '/audio-stories' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary rounded-t-sm"></span>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}