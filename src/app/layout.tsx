import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

// Note: In a production app, we would use Next.js Font optimization for Plus Jakarta Sans and Poppins
// For this example, we'll use Inter as the base font and CSS imports for the custom fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'FictionRealm | Modern Fanfiction Platform',
  description: 'A modern platform for reading and sharing fanfiction stories across various fandoms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
        />
      </head>
      <body className={`${inter.variable} bg-background text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}