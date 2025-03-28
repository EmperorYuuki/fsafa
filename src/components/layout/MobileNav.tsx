
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    // Set active link based on current pathname
    if (pathname === '/') {
      setActiveLink('home');
    } else if (pathname.startsWith('/explore')) {
      setActiveLink('explore');
    } else if (pathname.includes('/library') || pathname.includes('/bookmarks')) {
      setActiveLink('library');
    } else if (pathname.includes('/profile')) {
      setActiveLink('profile');
    }
  }, [pathname]);

  return (
    <nav className="mobile-nav fixed bottom-0 left-0 right-0 glass-effect border-t border-border-subtle z-30 py-2 hidden lg:block">
      <ul className="mobile-nav-list flex justify-around list-none">
        <li className="mobile-nav-item flex-1 text-center">
          <Link 
            href="/" 
            className={`mobile-nav-link flex flex-col items-center py-2 text-text-tertiary transition-all duration-300 ${activeLink === 'home' ? 'active text-primary-light' : ''}`}
            onClick={() => setActiveLink('home')}
          >
            <i className="fas fa-home text-xl mb-1"></i>
            <span className="text-xs font-medium">Home</span>
          </Link>
        </li>
        <li className="mobile-nav-item flex-1 text-center">
          <Link 
            href="/explore" 
            className={`mobile-nav-link flex flex-col items-center py-2 text-text-tertiary transition-all duration-300 ${activeLink === 'explore' ? 'active text-primary-light' : ''}`}
            onClick={() => setActiveLink('explore')}
          >
            <i className="fas fa-compass text-xl mb-1"></i>
            <span className="text-xs font-medium">Explore</span>
          </Link>
        </li>
        <li className="mobile-nav-item flex-1 text-center">
          <Link 
            href="/library" 
            className={`mobile-nav-link flex flex-col items-center py-2 text-text-tertiary transition-all duration-300 ${activeLink === 'library' ? 'active text-primary-light' : ''}`}
            onClick={() => setActiveLink('library')}
          >
            <i className="fas fa-book text-xl mb-1"></i>
            <span className="text-xs font-medium">Library</span>
          </Link>
        </li>
        <li className="mobile-nav-item flex-1 text-center">
          <Link 
            href="/library/bookmarks" 
            className={`mobile-nav-link flex flex-col items-center py-2 text-text-tertiary transition-all duration-300 ${activeLink === 'bookmarks' ? 'active text-primary-light' : ''}`}
            onClick={() => setActiveLink('bookmarks')}
          >
            <i className="fas fa-bookmark text-xl mb-1"></i>
            <span className="text-xs font-medium">Bookmarks</span>
          </Link>
        </li>
        <li className="mobile-nav-item flex-1 text-center">
          <Link 
            href="/profile" 
            className={`mobile-nav-link flex flex-col items-center py-2 text-text-tertiary transition-all duration-300 ${activeLink === 'profile' ? 'active text-primary-light' : ''}`}
            onClick={() => setActiveLink('profile')}
          >
            <i className="fas fa-user text-xl mb-1"></i>
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}