import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Prajwal Kittali | Vrajana ⚡',
  description: 'Karishye Vachana Tava — Unstoppable.',
  openGraph: {
    title: 'Prajwal Kittali | Vrajana ⚡',
    description: 'Karishye Vachana Tava — Unstoppable.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </head>
      <body className="selection:bg-accent selection:text-white">
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  )
}
