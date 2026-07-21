"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Heart, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/adopt-foster", label: "Adopt or Foster" },
  { href: "/events", label: "Events" },
  { href: "/employment", label: "Employment" },
  { href: "/resources", label: "Resources" },
]

const friedmanLinks = [
  {
    href: "/capital-campaign",
    label: "Friedman Center",
  },
  {
    href: "/capital-campaign/generations-of-hope",
    label: "Generations of Hope Campaign",
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [friedmanOpen, setFriedmanOpen] = useState(false)
  const pathname = usePathname()

  const friedmanActive = pathname.startsWith("/capital-campaign")

  function closeMobileMenu() {
    setOpen(false)
    setFriedmanOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-2 py-1.5">
            <Image
              src="/fauna-logo.png"
              alt="FAUNA - Friends All United for Natchitoches Animals"
              width={46}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-sky-100 font-semibold text-[#0099FF]"
                    : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="group relative">
              <Link
                href="/capital-campaign"
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  friedmanActive
                    ? "bg-sky-100 font-semibold text-[#0099FF]"
                    : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                )}
              >
                Friedman Center
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="invisible absolute left-0 top-full z-50 min-w-64 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-sky-100 bg-white p-2 shadow-xl">
                  {friedmanLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        pathname === item.href
                          ? "bg-sky-100 font-semibold text-[#0099FF]"
                          : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-sky-100 font-semibold text-[#0099FF]"
                    : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link href="/donate" className="hidden sm:block">
              <Button className="h-9 bg-[#8AFF00] px-4 text-sm font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                <Heart className="mr-1.5 h-3.5 w-3.5" />
                Donate
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="space-y-1 border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-sky-100 font-semibold text-[#0099FF]"
                  : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div>
            <button
              type="button"
              onClick={() => setFriedmanOpen(!friedmanOpen)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
                friedmanActive
                  ? "bg-sky-100 font-semibold text-[#0099FF]"
                  : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
              )}
              aria-expanded={friedmanOpen}
            >
              Friedman Center

              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  friedmanOpen && "rotate-180",
                )}
              />
            </button>

            {friedmanOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-sky-100 pl-3">
                {friedmanLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-sky-100 font-semibold text-[#0099FF]"
                        : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-sky-100 font-semibold text-[#0099FF]"
                  : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
              )}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/donate" onClick={closeMobileMenu}>
            <Button className="mt-2 w-full bg-[#8AFF00] font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
