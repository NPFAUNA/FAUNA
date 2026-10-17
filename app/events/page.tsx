import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  CalendarDays,
  ExternalLink,
  Facebook,
  HeartPulse,
  Instagram,
  Music2,
  PawPrint,
  Users,
  ZoomIn,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Find FAUNA adoption events, community health fairs, fundraisers, volunteer opportunities, and other events in Natchitoches Parish.",
}

const eventTypes = [
  {
    title: "Adoption Events",
    description:
      "Meet animals looking for caring homes and learn more about FAUNA's adoption process.",
    icon: PawPrint,
  },
  {
    title: "Community Health Fairs",
    description:
      "Low-cost core vaccines, low-cost microchipping, and other basic wellness support for community pets.",
    icon: HeartPulse,
  },
  {
    title: "Fundraisers",
    description:
      "Support FAUNA's rescue programs, animal care, and the future Friedman Center.",
    icon: CalendarDays,
  },
  {
    title: "Volunteer Events",
    description:
      "Help with adoption events, health fairs, animal care, outreach, and other community activities.",
    icon: Users,
  },
]

const eventPhotos = [
  {
    src: "/Adoption_Event.jpg",
    alt: "FAUNA adoption event",
  },
  {
    src: "/pet-health-fair-october-24.jpg",
    alt: "FAUNA Pet Health Fair",
  },
  {
    src: "/Pub_Crawl.jpg",
    alt: "FAUNA St. Patrick's Day Pub Crawl",
  },
  {
    src: "/Pet_Parade.jpg",
    alt: "FAUNA pet parade event",
  },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/FaunaNatchitoches",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fauna_natchitoches/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@faunanatchitochesrescue",
    icon: Music2,
  },
]

const healthFairRegistration =
  "https://new.shelterluv.com/form/community/FAUN/14824-health-fair"

export default function EventsPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#061424] to-[#0a1e3d] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-4xl text-[#8AFF00]">
            Mark your calendar
          </p>

          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            FAUNA Events
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-200">
            Join FAUNA at adoption events, Community Health Fairs,
            fundraisers, volunteer activities, and other gatherings throughout
            Natchitoches Parish.
          </p>
        </div>
      </section>

      {/* Social Media Announcements */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[#8AFF00] p-8 text-center text-[#0a1e3d] shadow-lg md:p-12">
            <CalendarDays className="mx-auto h-12 w-12" />

            <p className="mt-4 font-script text-4xl text-[#0099FF]">
              Upcoming dates
            </p>

            <h2 className="mt-2 text-3xl font-extrabold">
              Follow Us for Current Event Announcements
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8">
              Event times, locations, weather updates, registration details,
              and ticket information are announced through FAUNA&apos;s
              social-media pages.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0a1e3d] font-bold text-white hover:bg-[#061424]">
                    <Icon className="mr-2 h-5 w-5" />
                    {label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#33CCCC]">
              Save the date
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
              Upcoming FAUNA Events
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Join us for community traditions, special fundraisers, and
              memorable events that support animals throughout Natchitoches
              Parish.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {/* Farm to Table */}
            <Card className="overflow-hidden border-0 bg-white shadow-xl">
              <div className="grid items-stretch lg:grid-cols-[1.1fr_0.9fr]">
                <CardContent className="flex flex-col justify-center p-8 sm:p-10 lg:order-1">
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#33CCCC]">
                    October 21, 2026
                  </p>

                  <h3 className="font-script mt-3 text-5xl text-[#0a1e3d]">
                    Farm to Table
                  </h3>

                  <div className="mt-5 space-y-4 leading-8 text-gray-600">
                    <p>
                      Join us for an unforgettable evening of fresh flavors and
                      compassionate giving at FAUNA&apos;s Farm to Table Dinner
                      &mdash; a one-night-only culinary experience that supports
                      our mission of rescuing, rehabilitating, and rehoming
                      Natchitoches Parish animals.
                    </p>

                    <p>
                      Hosted at the beautiful Mariner&apos;s Restaurant
                      overlooking Sibley Lake, this elegant dinner will feature
                      a curated menu highlighting the best of local farms and
                      seasonal ingredients. Guests will enjoy live music, wine
                      pairings, and the opportunity to hear heartwarming rescue
                      stories made possible by your support.
                    </p>

                    <p>
                      All proceeds benefit FAUNA&apos;s lifesaving programs,
                      including transport, medical care, and community outreach.
                      Limited seating is available.
                    </p>

                    <p className="font-bold text-[#0a1e3d]">
                      Reserve your spot and help us create a better future for
                      animals in our parish.
                    </p>

                    <a
                      href="https://FAUNAFarmToTable2026.eventbrite.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center rounded-lg bg-[#0099FF] px-6 py-3 font-bold text-white shadow-md transition hover:bg-[#007acc]"
                    >
                      Reserve Your Seat
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>

                <a
                  href="/Farm_To_Table.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the Farm to Table event image at full size"
                  className="group relative block min-h-[420px] cursor-zoom-in overflow-hidden bg-teal-50 lg:order-2"
                >
                  <Image
                    src="/Farm_To_Table.jpg"
                    alt="FAUNA Farm to Table Dinner event announcement"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                  />

                  <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                    <ZoomIn className="h-4 w-4" />
                    Click to Enlarge
                  </span>
                </a>
              </div>
            </Card>

            {/* October 24 Pet Health Fair */}
            <Card className="overflow-hidden border-0 bg-white shadow-xl">
              <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
                <a
                  href="/pet-health-fair-october-24.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the October 24 Pet Health Fair graphic at full size"
                  className="group relative block min-h-[320px] cursor-zoom-in overflow-hidden bg-white sm:min-h-[400px]"
                >
                  <Image
                    src="/pet-health-fair-october-24.jpg"
                    alt="Pet Health Fair on Saturday, October 24, 2026, at Flying Heart Brewery"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                  />

                  <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                    <ZoomIn className="h-4 w-4" />
                    Click to Enlarge
                  </span>
                </a>

                <CardContent className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0099FF]">
                    Saturday, October 24, 2026
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
                    Pet Health Fair
                  </h3>

                  <p className="mt-4 text-lg font-bold text-[#33CCCC]">
