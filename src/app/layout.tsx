import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niloy Saha - Portfolio',
  description: 'Full Stack Developer and Data Analyst Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}