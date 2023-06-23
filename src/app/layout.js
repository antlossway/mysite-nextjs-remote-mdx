import GlobalProvider from '@/context/GlobalContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Quinn's place",
  description: 'Create with next.js, tailwindCSS',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-white/50 text-black/80 dark:bg-black dark:text-white/80"}>
          <GlobalProvider>

          {children}
          <Navbar />
          </GlobalProvider>
      </body>
    </html>
  )
}
