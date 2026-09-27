import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { PRODUCT_NAME } from '@/lib/product'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: PRODUCT_NAME,
  description: 'Kelas online belajar membangun software dengan Claude Code',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
