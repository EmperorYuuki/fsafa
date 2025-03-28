'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // In a real app, you would call your password reset API
      // For this demo, we'll simulate the request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
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
            <h2 className="text-2xl font-semibold mt-6 mb-2">Reset your password</h2>
            <p className="text-text-tertiary">
              {isSubmitted 
                ? "We've sent you an email with a link to reset your password."
                : "Enter your email and we'll send you a link to reset your password."}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-danger/10 border border-danger/20 rounded-lg text-danger text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success text-2xl mb-4">
                <i className="fas fa-check"></i>
              </div>
              <p className="text-text-secondary mb-6">
                Please check your email <strong>{email}</strong> for instructions to reset your password.
              </p>
              <p className="text-sm text-text-tertiary mb-6">
                If you don't see the email, check your spam folder or make sure you entered the correct email address.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 border border-border-distinct rounded-lg bg-surface hover:bg-elevated transition-colors"
                >
                  Try again
                </button>
                <Link
                  href="/auth/login"
                  className="btn btn-primary"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          ) : (
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
                    <span className="opacity-0">Send Reset Link</span>
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </button>

              <p className="text-center text-sm text-text-tertiary">
                Remember your password?{' '}
                <Link
                  href="/auth/login"
                  className="font-medium text-primary-light hover:text-primary transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Right side - Image (hidden on mobile) */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder-cover.jpg"
            alt="Reset Password"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-md text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Don't Worry, We've Got You Covered</h2>
            <p className="text-lg mb-6">
              Password recovery is quick and easy. You'll be back to exploring your favorite stories in no time.
            </p>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <i className="fas fa-shield-alt"></i>
              <span>We take security seriously. Your data is always protected.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}