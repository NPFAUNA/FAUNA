import type { Metadata } from "next"
import { Sacramento } from "next/font/google"

import "./globals.css"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "FAUNA – Friends All United for Natchitoches Animals",
    template: "%s | FAUNA",
  },
  description:
    "FAUNA is an all-volunteer 501(c)(3) animal rescue based in Natchitoches, LA. We rescue, rehabilitate, and rehome animals in need across Natchitoches Parish.",
  keywords: [
    "animal rescue",
    "Natchitoches",
    "Louisiana",
    "adopt",
    "foster",
    "FAUNA",
    "spay neuter",
    "TNR",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${sacramento.variable} flex min-h-screen flex-col antialiased`}
      >
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  )
}
