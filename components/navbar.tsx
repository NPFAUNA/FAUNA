"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Heart, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const aboutItems = [
  {
    href: "/history",
    label: "Our History",
  },
  {
    href: "/board-of-director",
    label: "Board of Directors",
  },
  {
    href: "/advisory-board",
    label: "Advisory Board",
  },
]

const programItems = [
  {
    href: "/programs/spay-natchitoches",
    label: "Spay Natchitoches",
  },
  {
    href: "/programs/tnr",
    label: "TNR",
  },
  {
    href: "/programs#community-health-fairs",
    label: "Community Health Fairs",
  },
  {
    href: "/programs#pact",
    label: "PACT Therapy",
  },
  {
    href: "/programs#klaws",
    label: "KLAWS",
  },
]

const centerItems = [
  {
    href: "/generations-of-hope",
    label: "Generations of Hope Capital Campaign",
  },
]

const navItems = [
  {
    href: "/capital-campaign",
    label: "Edwina and Sam Friedman Pet Adoption & Welfare Center",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/employment",
    label: "Employment",
  },
  {
    href: "/resources",
    label: "Resources",
  },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)
  const [mobileCenterOpen, setMobileCenterOpen] = useState(false)

  const pathname = usePathname()

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileAboutOpen(false)
    setMobileProgramsOpen(false)
    setMobileCenterOpen(false)
  }

  const isProgramsActive = pathname.startsWith("/programs")

  const isAboutActive = aboutItems.some((item) => pathname === item.href)

  const isCenterActive = centerItems.some((item) => pathname === item.href)

  return (
    <nav className="sticky top-0 z-50 border-b border-sky-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center py-1"
            aria-label="FAUNA home"
            onClick={closeMobileMenu}
          >
            <Image
              src="/fauna-logo-large.png"
              alt="FAUNA"
              width={220}
              height={70}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            <Link
              href="/"
              className={cn(
                "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === "/"
                  ? "bg-sky-100 font-semibold text-[#0099FF]"
                  : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
              )}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isAboutActive
                    ? "bg-sky-100 font-semibold text-[#0099FF]"
                    : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                )}
                aria-haspopup="true"
              >
                About
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-xl border border-sky-100 bg-white p-2 shadow-xl">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-sky-100 text-[#0099FF]"
                          : "text-gray-700 hover:bg-sky-50 hover:text-[#0099FF]",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="group relative">
              <div
                className={cn(
                  "flex items-center rounded-md transition-colors",
                  isProgramsActive
                    ? "bg-sky-100 text-[#0099FF]"
                    : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                )}
              >
                <Link
                  href="/programs"
                  className={cn(
                    "whitespace-nowrap py-2 pl-3 text-sm font-medium",
                    isProgramsActive && "font-semibold",
                  )}
                >
                  Programs
                </Link>

                <button
                  type="button"
                  className="py-2 pl-1 pr-3"
                  aria-label="Show Programs menu"
                  aria-haspopup="true"
                >
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
              </div>

              <div className="invisible absolute left-0 top-full z-50 min-w-64 translate-y-2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-xl border border-sky-100 bg-white p-2 shadow-xl">
                  {programItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-sky-50 hover:text-[#0099FF]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(0, 3).map((item) => (
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

            {/* Friedman Center Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={cn(
                  "flex max-w-[250px] items-center gap-1 rounded-md px-3 py-2 text-center text-sm font-medium leading-tight transition-colors",
                  isCenterActive
                    ? "bg-sky-100 font-semibold text-[#0099FF]"
                    : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                )}
                aria-haspopup="true"
              >
                <span>
                  Edwina and Sam Friedman Pet Adoption &amp; Welfare Center
                </span>

                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-xl border border-sky-100 bg-white p-2 shadow-xl">
                  {centerItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
                        pathname === item.href
                          ? "bg-sky-100 text-[#0099FF]"
                          : "text-[#0a1e3d] hover:bg-sky-50 hover:text-[#0099FF]",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(3).map((item) => (
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

          {/* Donate and Mobile Menu */}
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/donate" className="hidden sm:block">
              <Button className="h-9 bg-[#8AFF00] px-4 text-sm font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                <Heart className="mr-1.5 h-3.5 w-3.5" />
                Donate
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={cn(
                "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === "/"
                  ? "bg-sky-100 font-semibold text-[#0099FF]"
                  : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
              )}
            >
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <button
              type="button"
              onClick={() => setMobileAboutOpen((current) => !current)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
                isAboutActive
                  ? "bg-sky-100 font-semibold text-[#0099FF]"
                  : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
              )}
              aria-expanded={mobileAboutOpen}
            >
              About

              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileAboutOpen && "rotate-180",
                )}
              />
            </button>

            {mobileAboutOpen && (
              <div className="ml-3 space-y-1 border-l-2 border-sky-100 pl-3">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-sky-100 text-[#0099FF]"
                        : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Programs Dropdown */}
            <div>
              <div
                className={cn(
                  "flex items-center rounded-md transition-colors",
                  isProgramsActive
                    ? "bg-sky-100 font-semibold text-[#0099FF]"
                    : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
                )}
              >
                <Link
                  href="/programs"
                  onClick={closeMobileMenu}
                  className="flex-1 px-3 py-2.5 text-sm font-medium"
                >
                  Programs
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setMobileProgramsOpen((current) => !current)
                  }
                  className="px-3 py-2.5"
                  aria-label="Show Programs menu"
                  aria-expanded={mobileProgramsOpen}
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      mobileProgramsOpen && "rotate-180",
                    )}
                  />
                </button>
              </div>

              {mobileProgramsOpen && (
                <div className="ml-3 mt-1 space-y-1 border-l-2 border-sky-100 pl-3">
                  {programItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-sky-50 hover:text-[#0099FF]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(0, 3).map((item) => (
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

            {/* Mobile Friedman Center Dropdown */}
            <button
              type="button"
              onClick={() => setMobileCenterOpen((current) => !current)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
                isCenterActive
                  ? "bg-sky-100 font-semibold text-[#0099FF]"
                  : "text-gray-600 hover:bg-sky-50 hover:text-[#0099FF]",
              )}
              aria-expanded={mobileCenterOpen}
            >
              <span>
                Edwina and Sam Friedman Pet Adoption &amp; Welfare Center
              </span>

              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform",
                  mobileCenterOpen && "rotate-180",
                )}
              />
            </button>

            {mobileCenterOpen && (
              <div className="ml-3 space-y-1 border-l-2 border-[#33CCCC] pl-3">
                {centerItems.map((item) => (
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
              </div>
            )}

            {navItems.slice(3).map((item) => (
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
        </div>
      )}
    </nav>
  )
}
