import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ErrorBoundary } from '@/components/error-boundary'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'SendMian - Instant File Sharing',
  description: 'Upload files, photos, and videos to get instant public links you can share anywhere. No account required.',
  keywords: 'file sharing, upload files, share photos, share videos, public links, instant sharing, SendMian',
  authors: [{ name: 'SendMian' }],
  creator: 'SendMian',
  publisher: 'SendMian',
  openGraph: {
    title: 'SendMian - Instant File Sharing',
    description: 'Upload files, photos, and videos to get instant public links you can share anywhere.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SendMian - Instant File Sharing',
    description: 'Upload files, photos, and videos to get instant public links you can share anywhere.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <div className="min-h-screen bg-background">
            {children}
          </div>
        </ErrorBoundary>
      </body>
    </html>
  )
}