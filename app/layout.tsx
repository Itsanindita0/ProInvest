import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProInvest — Real Estate Investment',
  description: 'High-quality, sustainable property investment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode   // TypeScript type: children must be React elements
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}