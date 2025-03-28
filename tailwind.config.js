
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#8B5CF6', // Purple
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        secondary: {
          DEFAULT: '#EC4899', // Pink
          light: '#F472B6',
          dark: '#DB2777',
        },
        success: '#10B981', // Green
        warning: '#FBBF24',
        danger: '#EF4444',

        // Background colors - Slate range
        background: '#0F172A', // Slate 900 (Your defined background)
        surface: '#1E293B', // Slate 800
        elevated: '#334155', // Slate 700
        highlight: '#475569', // Slate 600

        // Text colors
        'text-primary': '#F8FAFC', // Slate 50 (Your defined primary text)
        'text-secondary': '#CBD5E1', // Slate 300
        'text-tertiary': '#94A3B8', // Slate 400
        'text-muted': '#64748B', // Slate 500

        // Borders
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-distinct': 'rgba(255, 255, 255, 0.12)',

        // Glass effect
        'glass-effect': 'rgba(15, 23, 42, 0.75)', // Slate 900 with opacity
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-secondary': 'linear-gradient(90deg, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
