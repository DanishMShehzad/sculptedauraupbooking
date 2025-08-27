import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import LoadingScreen from "@/components/loading-screen"
import { Toaster } from "react-hot-toast"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Sculpted Aura - Luxury Beauty & Aesthetics",
  description:
    "Premium beauty treatments including body sculpting, lash extensions, facials, brow lamination, and massage therapy. Where beauty meets sculpture.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="bg-zinc-900 text-ivory overflow-x-hidden">
        <LoadingScreen />
        <div className="page-transition-enter-active">{children}</div>
        {/* Global Toast Handler */}
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  )
}
