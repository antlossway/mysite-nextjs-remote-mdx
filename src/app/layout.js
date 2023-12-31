import GlobalProvider from "@/context/GlobalContext"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import GradientTopRadient from "@/components/(decoration)/GradientTopRadient"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quinn's place",
  description:
    "The place to show what I have learned. Create with next.js, tailwindCSS",
  // other: {
  //   "google-site-verification": "VMK9Qr97Z_Fma3Dh3WiKzpvxOrVzzKR8ernpm4lDMDs",
  // },
  verification: {
    google: "VMK9Qr97Z_Fma3Dh3WiKzpvxOrVzzKR8ernpm4lDMDs",
  },
  metadataBase: new URL(process.env.SITE_URL),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className + " " + "bg-white/50 text-black/80 dark:bg-black dark:text-white/80"}> */}
      <body className={inter.className + " " + " dark:text-white/80"}>
        <GlobalProvider>
          {/* decoration for background */}
          {children}
          <Navbar />
        </GlobalProvider>
      </body>
      <Script
        async
        // src="https://umami-analytics-tawny.vercel.app/script.js"
        // data-website-id="a7254dc3-4589-4c30-a294-9b5d0341de72"
        src="https://stats.hello-vpn.com/script.js"
        data-website-id="0cb66f7d-1b75-4799-aa49-cd68c416c842"
      />
    </html>
  )
}
