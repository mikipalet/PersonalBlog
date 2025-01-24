import type { Metadata } from 'next'
import './globals.css'
import { GeistMono } from 'geist/font'
import { GeistSans } from 'geist/font'

export const metadata: Metadata = {
  title: 'Home – Miquel Palet',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
          {children}
        </div>
      </body>
    </html>
  )
} 