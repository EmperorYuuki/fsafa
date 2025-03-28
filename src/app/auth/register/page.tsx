'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!agreeTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, you would call your registration API
      // For this demo, we'll simulate registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to login page
      router.push('/auth/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center">
                <i className="fas fa-book-open text-3xl mr-3 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"></i>
                <h1 className="font-heading font-semibold text-3xl tracking-tight">
                  Fiction<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Realm</span>
                </h1>
              </div>
            </Link>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Create an account</h2>
            <p className="text-text-tertiary">Join our community of readers and writers</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Create a password"
                required
                minLength={8}
              />
              <p className="mt-1 text-xs text-text-tertiary">
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="flex items-start">
              <input
                id="agree-terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 mt-1 rounded border-border-subtle text-primary focus:ring-primary bg-surface"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-text-secondary">
                I agree to the{' '}
                <Link
                  href="/terms"
                  className="text-primary-light hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="text-primary-light hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className={`w-full btn btn-primary relative ${isLoading ? 'opacity-80' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  <span className="opacity-0">Create Account</span>
                </>
              ) : (
                'Create Account'
              )}
            </button>

            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-border-subtle absolute w-full"></div>
              <div className="bg-background px-4 relative z-10 text-text-tertiary text-sm">
                Or continue with
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-border-distinct rounded-lg bg-surface hover:bg-elevated transition-colors"
              >
                <i className="fab fa-google text-lg mr-2"></i>
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-border-distinct rounded-lg bg-surface hover:bg-elevated transition-colors"
              >
                <i className="fab fa-facebook text-lg mr-2"></i>
                <span>Facebook</span>
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-text-tertiary">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="font-medium text-primary-light hover:text-primary transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Image (hidden on mobile) */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder-cover.jpg"
            alt="Register"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-md text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Share Your Stories with the World</h2>
            <p className="text-lg mb-6">
              Join FictionRealm and connect with a global community of creative writers and passionate readers.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="rounded-full w-10 h-10 bg-white text-primary flex items-center justify-center text-xl">
                  <i className="fas fa-star"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Unlimited Creativity</h3>
                  <p className="opacity-90">Write and share fanfiction across countless fandoms. Your imagination is the only limit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}