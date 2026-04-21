import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const display = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
})

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Pravartak Logistics | Fast, Reliable Delivery',
  description: 'Premium logistics solutions — transportation, warehousing, and last-mile delivery for businesses of all sizes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans bg-white text-slate-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
