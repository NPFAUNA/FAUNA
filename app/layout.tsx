import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: { default: "FAUNA – Friends All United for Natchitoches Animals", template: "%s | FAUNA" },
  description:
    "FAUNA is an all-volunteer 501(c)(3) animal rescue based in Natchitoches, LA. We rescue, rehabilitate, and rehome animals in need across Natchitoches Parish.",
  keywords: ["animal rescue", "Natchitoches", "Louisiana", "adopt", "foster", "FAUNA", "spay neuter", "TNR"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
