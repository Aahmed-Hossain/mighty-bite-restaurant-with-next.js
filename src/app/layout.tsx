import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Notification from '@/components/Notification'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mighty Bite',
  description: 'We provide not only Tasty Foods but also Qualit Foods!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Notification></Notification>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </AuthProvider>
        </body>
    </html>
  )
}
