"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/adopt-foster", label: "Adopt or Foster" },
  { href: "/events", label: "Events" },
  { href: "/employment", label: "Employment" },
  { href: "/capital-campaign", label: "Friedman Center" },
  { href: "/resources", label: "Resources" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 py-1.5">
            <Image
              src="/fauna-footer-logo.png"
              alt="FAUNA – Friends All United for Natchitoches Animals"
              width={46}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                  pathname === item.href
                    ? "bg-sky-100 text-[#0099FF] font-semibold"
                    : "text-gray-600 hover:text-[#0099FF] hover:bg-sky-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Donate + Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <Link href="/donate" className="hidden sm:block">
              <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-sm px-4 h-9">
                <Heart className="h-3.5 w-3.5 mr-1.5" />
                Donate
              </Button>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-sky-100 text-[#0099FF] font-semibold"
                  : "text-gray-600 hover:text-[#0099FF] hover:bg-sky-50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setOpen(false)}>
            <Button className="w-full bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold mt-2">
              <Heart className="h-4 w-4 mr-2" />
              Donate
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
