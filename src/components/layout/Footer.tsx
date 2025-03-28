
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-surface py-10 px-6 border-t border-border-subtle mt-8">
      <div className="footer-content grid grid-cols-4 gap-6 lg:grid-cols-2 sm:grid-cols-1 sm:gap-8">
        <div className="footer-column">
          <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-full">
            FictionRealm
          </h3>
          <ul className="footer-links list-none">
            <li className="footer-link mb-2">
              <Link href="/about" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-info-circle mr-2 text-sm"></i>About Us
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/contact" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-envelope mr-2 text-sm"></i>Contact
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/careers" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-briefcase mr-2 text-sm"></i>Careers
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/blog" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-newspaper mr-2 text-sm"></i>Blog
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-full">
            Resources
          </h3>
          <ul className="footer-links list-none">
            <li className="footer-link mb-2">
              <Link href="/help" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-question-circle mr-2 text-sm"></i>Help Center
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/guides" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-book mr-2 text-sm"></i>Writing Guides
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/forums" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-comment mr-2 text-sm"></i>Community Forums
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/safety" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-shield-alt mr-2 text-sm"></i>Safety Guidelines
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-full">
            For Creators
          </h3>
          <ul className="footer-links list-none">
            <li className="footer-link mb-2">
              <Link href="/dashboard" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-edit mr-2 text-sm"></i>Author Dashboard
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/analytics" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-chart-line mr-2 text-sm"></i>Analytics
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/monetization" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-hand-holding-usd mr-2 text-sm"></i>Monetization
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="text-lg font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-full">
            Legal
          </h3>
          <ul className="footer-links list-none">
            <li className="footer-link mb-2">
              <Link href="/terms" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-gavel mr-2 text-sm"></i>Terms of Service
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/privacy" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-user-shield mr-2 text-sm"></i>Privacy Policy
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/copyright" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-copyright mr-2 text-sm"></i>Copyright Policy
              </Link>
            </li>
            <li className="footer-link mb-2">
              <Link href="/cookies" className="inline-flex items-center text-text-tertiary transition-all duration-300 hover:text-primary-light hover:translate-x-1">
                <i className="fas fa-cookie mr-2 text-sm"></i>Cookie Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom mt-8 pt-4 border-t border-border-subtle flex justify-between items-center sm:flex-col sm:gap-4">
        <div className="footer-copyright text-text-tertiary text-sm sm:text-center">
          © {new Date().getFullYear()} FictionRealm. All rights reserved.
        </div>
        <div className="footer-socials flex gap-3 sm:justify-center">
          <a href="#" className="social-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated text-text-secondary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated text-text-secondary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated text-text-secondary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated text-text-secondary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
            <i className="fab fa-discord"></i>
          </a>
          <a href="#" className="social-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated text-text-secondary transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-md">
            <i className="fab fa-patreon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}