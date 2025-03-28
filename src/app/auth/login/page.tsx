'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // In a real app, you would call your authentication API
      // For this demo, we'll simulate authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check credentials (this is just a demo)
      if (email === 'user@example.com' && password === 'password') {
        // Redirect to home page
        router.push('/');
      } else {
        throw new Error('Invalid email or password');
      }
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
            <h2 className="text-2xl font-semibold mt-6 mb-2">Welcome back</h2>
            <p className="text-text-tertiary">Sign in to access your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Link
                  href="/auth/reset-password"
                  className="text-sm text-primary-light hover:text-primary transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-border-subtle text-primary focus:ring-primary bg-surface"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm">
                Remember me
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
                  <span className="opacity-0">Sign In</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="relative flex items-center justify-center my-8">
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
            Don't have an account?{' '}
            <Link
              href="/auth/register"
              className="font-medium text-primary-light hover:text-primary transition-colors"
            >
              Sign up
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
            alt="Login"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-md text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Dive into Worlds of Imagination</h2>
            <p className="text-lg mb-6">
              Join thousands of readers and writers in our community. Discover stories that ignite your imagination.
            </p>
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">15K+</span>
                <span className="text-sm opacity-80">Stories</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">50K+</span>
                <span className="text-sm opacity-80">Users</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">100+</span>
                <span className="text-sm opacity-80">Fandoms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}