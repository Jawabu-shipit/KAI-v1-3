import type React from "react"
import type { Metadata } from "next"
import { Geist, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Kenya AI Medical Assistant - Clinical Decision Support System",
    template: "%s | Kenya AI Medical Assistant",
  },
  description:
    "AI-powered clinical decision support system for Kenyan healthcare professionals. Get evidence-based differential diagnoses, treatment recommendations, and medical calculations aligned with Kenya Ministry of Health guidelines.",
  keywords: [
    "Kenya medical AI",
    "clinical decision support",
    "medical diagnosis AI",
    "healthcare Kenya",
    "medical calculator",
    "differential diagnosis",
    "Kenya Ministry of Health",
    "WHO-AFRO protocols",
    "medical assistant",
    "healthcare professionals Kenya",
  ],
  authors: [{ name: "Kenya AI Medical Team" }],
  creator: "Kenya AI Medical Assistant",
  publisher: "Kenya AI Medical Assistant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kenya-ai-medical.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kenya AI Medical Assistant - Clinical Decision Support System",
    description:
      "AI-powered clinical decision support system for Kenyan healthcare professionals with evidence-based diagnoses and treatment recommendations.",
    url: "https://kenya-ai-medical.vercel.app",
    siteName: "Kenya AI Medical Assistant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya AI Medical Assistant - Clinical Decision Support System",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya AI Medical Assistant - Clinical Decision Support System",
    description: "AI-powered clinical decision support system for Kenyan healthcare professionals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-KE">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#059669" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`font-sans ${geist.variable} ${ibmPlex.variable} ${jetbrainsMono.variable} perspective-1000 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
