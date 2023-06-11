import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Quinn's place",
  description: 'Create with next.js, tailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <body className="dark:bg-slate-800">{children}</body> */}
    </html>
  )
}
