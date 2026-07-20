"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Heart, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const aboutLinks = [
  {
    label: "History",
    href: "/history",
  },
  {
    label: "Board of Directors",
    href: "/board-of-directors",
  },
  {
    label: "Advisory Board",
    href: "/advisory-board",
  },
  {
    label: "Employment Opportunities",
    href: "/employment",
  },
]

const programLinks = [
  {
    label: "Programs Overview",
    href: "/programs",
  },
  {
    label: "Spay Natchitoches",
    href: "/programs/spay-natchitoches",
  },
  {
    label: "TNR Program",
    href: "/programs/tnr",
  },
  {
    label: "Community Health Fairs",
    href: "/programs#community-health-fairs",
  },
  {
    label: "PACT Therapy",
    href: "/programs#pact",
  },
  {
    label: "KLAWS",
    href: "/programs#klaws",
  },
]

const mainLinks = [
  {
    label: "Adopt & Foster",
    href: "/adopt-foster",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Friedman Center",
    href: "/capital-campaign",
  },
  {
    label: "Resources",
    href: "/resources",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileAboutOpen(false)
    setMobileProgramsOpen(false)
  }

  const linkIsActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const aboutIsActive = aboutLinks.some((link) => linkIsActive(link.href))
  const programsIsActive =
    pathname === "/programs" || pathname.startsWith("/programs/")

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-40 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
          aria-label="FAUNA homepage"
        >
          <Image
            src="/fauna-logo-large.png"
            alt="FAUNA - Friends All United for Natchitoches Animals"
            width={380}
            height={320}
            className="h-36 w-auto object-contain sm:h-40"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition",
                aboutIsActive
                  ? "bg-sky-50 text-[#0099FF]"
                  : "text-[#0a1e3d] hover:bg-sky-50 hover:text-[#0099FF]",
              )}
            >
              About
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-full min-w-64 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white p-2 shadow-xl">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-semibold transition",
                      linkIsActive(link.href)
                        ? "bg-sky-50 text-[#0099FF]"
                        : "text-[#0a1e3d] hover:bg-sky-50 hover:text-[#0099FF]",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition",
                programsIsActive
                  ? "bg-sky-50 text-[#0099FF]"
                  : "text-[#0a1e3d] hover:bg-sky-50 hover:text-[#0099FF]",
              )}
            >
              Programs
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-full min-w-64 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white p-2 shadow-xl">
                {programLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-semibold transition",
                      linkIsActive(link.href)
                        ? "bg-sky-50 text-[#0099FF]"
                        : "text-[#0a1e3d] hover:bg-sky-50 hover:text-[#0099FF]",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold transition",
                linkIsActive(link.href)
                  ? "bg-sky-50 text-[#0099FF]"
                  : "text-[#0a1e3d] hover:bg-sky-50 hover:text-[#0099FF]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/volunteer">
            <Button
              variant="outline"
              className="border-[#33CCCC] font-bold text-[#0a1e3d] hover:bg-[#33CCCC]/10"
            >
              Volunteer
            </Button>
          </Link>

          <Link href="/donate">
            <Button className="bg-[#0099FF] font-bold text-white hover:bg-[#007acc]">
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="rounded-lg p-2 text-[#0a1e3d] transition hover:bg-sky-50 lg:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-sky-100 bg-white px-4 pb-6 pt-3 shadow-lg lg:hidden">
          <nav className="mx-auto max-w-7xl">
            <button
              type="button"
              onClick={() => setMobileAboutOpen((current) => !current)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-bold text-[#0a1e3d] hover:bg-sky-50"
            >
              About
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition",
                  mobileAboutOpen && "rotate-180",
                )}
              />
            </button>

            {mobileAboutOpen && (
              <div className="mb-2 ml-4 border-l-2 border-[#33CCCC] pl-3">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-sky-50 hover:text-[#0099FF]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileProgramsOpen((current) => !current)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-bold text-[#0a1e3d] hover:bg-sky-50"
            >
              Programs
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition",
                  mobileProgramsOpen && "rotate-180",
                )}
              />
            </button>

            {mobileProgramsOpen && (
              <div className="mb-2 ml-4 border-l-2 border-[#33CCCC] pl-3">
                {programLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-sky-50 hover:text-[#0099FF]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 font-bold text-[#0a1e3d] hover:bg-sky-50 hover:text-[#0099FF]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link href="/volunteer" onClick={closeMobileMenu}>
                <Button
                  variant="outline"
                  className="w-full border-[#33CCCC] font-bold text-[#0a1e3d]"
                >
                  Volunteer
                </Button>
              </Link>

              <Link href="/donate" onClick={closeMobileMenu}>
                <Button className="w-full bg-[#0099FF] font-bold text-white hover:bg-[#007acc]">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
