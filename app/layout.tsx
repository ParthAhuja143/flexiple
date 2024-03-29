import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { NextThemesProvider } from "@/components/providers/NextThemesProvider"
import { CodeIcon, HeartIcon } from "@radix-ui/react-icons"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const dynamic = "force-dynamic"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}, container mx-auto flex min-h-screen flex-col px-[1rem] antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black md:px-[2rem]`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-grow">{children}</main>
        </NextThemesProvider>
        <Script
          strategy={"beforeInteractive"}
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBvuYJdxCXvap8e_Tk2NNLxp8R4Ef3vUJo&libraries=places&callback=Function.prototype`}
        />
        <Analytics />
      </body>
    </html>
  )
}
