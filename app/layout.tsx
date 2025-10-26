import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tilla App - Free Smart POS & Business App for Retailers",
  description:
    "Tilla is not just a POS - it's your all-in-one smart business app. Sell, track stock, take payments, and post products online from any device. Simple, free, and built for modern retailers.",
  keywords: "Tilla POS, Tilla app, Till POS, Till app, POS app Kenya, shop management app Kenya, POS app Rwanda, free POS app, business app Africa, inventory tracking app, mobile POS Kenya, inventory & sales tracking Africa, all in one business app Kenya",
  metadataBase: new URL("https://www.tillapos.com"),
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/tilla_favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: "/tilla_favicon.png",
  },
  openGraph: {
    title: "Tilla App - Smart POS for Modern African Retailers",
    description: "AI-powered POS and inventory management for small businesses in East Africa",
    url: "https://www.tillapos.com",
    siteName: "Tilla App",
    images: [
      {
        url: "/tilla_logo.png",
        width: 1200,
        height: 630,
        alt: "Tilla App Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tilla App - Smart POS for Modern African Retailers",
    description: "AI-powered POS and inventory management for small businesses",
    images: ["/tilla_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/tilla_favicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/tilla_favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
