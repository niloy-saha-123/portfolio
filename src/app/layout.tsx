import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/layout/Header'

import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niloy Saha - Full Stack Developer & Data Analyst',
  description: 'Portfolio of Niloy Saha - Full Stack Developer and Data Analyst specializing in Next.js, TypeScript, and AI Technologies',
}

// layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}