'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/layout/Header';
import ClientCursor from '@/components/layout/ClientCursor';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF2D7C" />
        <meta name="description" content="Niloy Saha - Software Developer & Data Analyst. Portfolio showcasing projects in full-stack development, AI, and machine learning." />
        <title>Niloy Saha | Software Developer</title>

        {/* Google Fonts - Comic Theme */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <ClientCursor />
          <Header />
          <main className="pt-[80px] sm:pt-[100px] max-w-[1200px] mx-auto px-4 sm:px-8">
            {children}
          </main>
          <footer className="text-center py-12 font-comic">
            <p className="text-base">Designed & Built by Niloy Saha © 2025</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
