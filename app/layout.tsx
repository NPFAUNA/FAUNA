import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EmailSignupPopup } from "@/components/email-signup-popup"

export const metadata: Metadata = {
  title: {
    default: "FAUNA - Friends All United for Natchitoches Animals",
    template: "%s | FAUNA",
  },
  description:
    "Friends All United for Natchitoches Animals provides humane care, animal rescue programs, adoption support, and community services throughout Natchitoches Parish, Louisiana.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-[#0a1e3d] antialiased">
        <Navbar />
        {children}
        <Footer />
        <EmailSignupPopup />
      </body>
    </html>
  )
}
