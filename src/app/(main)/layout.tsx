import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import { Suspense } from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-container flex min-h-screen w-full relative">
      {/* Sidebar Toggle Button - Only visible on mobile */}
      <div id="sidebar-toggle" className="sidebar-toggle fixed top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center z-[31] shadow-md cursor-pointer transition-all duration-300 hover:scale-110 lg:hidden">
        <i className="fas fa-bars"></i>
      </div>
      
      {/* Sidebar */}
      <Suspense fallback={<div className="w-[280px]">Loading sidebar...</div>}>
        <Sidebar />
      </Suspense>
      
      {/* Main Content */}
      <main className="main-content flex-1 ml-[280px] w-[calc(100%-280px)] transition-all duration-300 lg:ml-0 lg:w-full">
        {/* Header */}
        <Suspense fallback={<div className="h-16">Loading header...</div>}>
          <Header />
        </Suspense>
        
        {children}
      </main>
      
      {/* Mobile Navigation */}
      <Suspense fallback={null}>
        <MobileNav />
      </Suspense>

      {/* Mobile Fab Button */}
      <a href="#" className="mobile-fab fixed bottom-20 right-5 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-2xl shadow-lg z-[31] transition-all duration-300 hover:scale-110 hover:-translate-y-1 lg:hidden">
        <i className="fas fa-pen"></i>
      </a>
      
      {/* Script for sidebar toggle functionality will be added via useEffect in Sidebar component */}
    </div>
  );
}