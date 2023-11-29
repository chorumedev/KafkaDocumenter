'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import AppContextProvider from '@/context/AppContext';
import SideBar from '@/components/SideBar';
import Loading from '@/components/Loading';
import Footer from '@/components/Footer';
import Navbar from '@/components/Menu/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppContextProvider>
          <Loading></Loading>
          <div className='flex overflow-x-hidden flex-nowrap min-h-screen w-auto bg-black'>
            <SideBar/>
            <main className='w-full relative'>
              {children}
              <Footer/>
            </main>
          </div>
        </AppContextProvider>
      </body>
    </html>
  )
}
