import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SpaceCursor } from "@/components/space-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GeoHub - Rwanda Space Agency",
  description: "Your central platform for geospatial applications and data across all sectors in Rwanda",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} cursor-none`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SpaceCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
