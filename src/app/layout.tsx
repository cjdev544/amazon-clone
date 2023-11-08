import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amazon Clon',
  description: 'GClon de Amazon hecho con next14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Header />
        <main className='max-w-screen-2xl mx-auto bg-gray-100'>{children}</main>
      </body>
    </html>
  )
}
