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
    src: "/Bath_Days2026.jpg",
    alt: "FAUNA Bath Day event",
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

export default function EventsPage() {
  return (
    <main>
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
            {/* Bath Day */}
            <Card className="overflow-hidden border-0 bg-white shadow-xl">
              <div className="grid items-stretch lg:grid-cols-[0.9fr_1.1fr]">
                <a
                  href="/Bath_Days2026.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the Bath Day 2026 event image at full size"
                  className="group relative block min-h-[360px] cursor-zoom-in overflow-hidden bg-sky-100"
                >
                  <Image
                    src="/Bath_Days2026.jpg"
                    alt="FAUNA Bath Day 2026 event announcement"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                    <ZoomIn className="h-4 w-4" />
                    Click to Enlarge
                  </span>
                </a>

                <CardContent className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0099FF]">
                    September 12, 2026
                  </p>

                  <h3 className="font-script mt-3 text-5xl text-[#0a1e3d]">
                    Bath Day
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-gray-600">
                    Join FAUNA for one of our favorite community traditions.
                    Bath Day provides affordable pet-care services while raising
                    funds to support animals in FAUNA&apos;s care.
                  </p>

                  <p className="mt-4 leading-7 text-gray-600">
                    Follow FAUNA on social media for the event location, service
                    menu, pricing, volunteer information, and additional
                    details.
                  </p>
                </CardContent>
              </div>
            </Card>

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

            {/* Pub Crawl */}
            <Card className="overflow-hidden border-0 bg-[#0a1e3d] text-white shadow-xl">
              <CardContent className="p-8 sm:p-10 lg:p-12">
                <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#8AFF00] text-[#0a1e3d]">
                    <CalendarDays className="h-10 w-10" />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#33CCCC]">
                      March 13, 2027
                    </p>

                    <h3 className="font-script mt-3 text-5xl text-white">
                      10th Annual St. Patrick&apos;s Day Pub Crawl
                    </h3>

                    <div className="mt-5 space-y-4 leading-8 text-gray-200">
                      <p>
                        Come join us for a night of fun at the 10th Annual St.
                        Patrick&apos;s Day Pub Crawl hosted by FAUNA.
                      </p>

                      <p>
                        Get ready to hop between restaurants, bars, and shops in
                        historic downtown Natchitoches, Louisiana, and enjoy
                        great drink specials, music, shopping, and company.
                      </p>

                      <p>
                        Visit all the stops on the Poker Run to fill out your
                        card for a chance to win a big-screen television, and
                        join in the costume contest as well.
                      </p>

                      <p>
                        Don&apos;t miss a great way to have fun and support
                        local rescue animals. We hope to see you there.
                      </p>

                      <p className="font-bold text-[#8AFF00]">
                        A T-shirt is included with registration.
                      </p>

                      <p className="text-sm italic text-gray-300">
                        Event takes place rain or shine.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Registration links and additional event information will be
              shared through FAUNA&apos;s social-media pages.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#33CCCC]">
              Gather for good
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d]">
              Events You May See from FAUNA
            </h2>
          </div>

          {/* Circular Event Photos */}
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
            {eventPhotos.map((photo) => (
              <div key={photo.src} className="mx-auto w-full max-w-[220px]">
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-sky-50 bg-sky-100 shadow-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, 220px"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {eventTypes.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="border-0 shadow-md">
                <CardContent className="p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8AFF00]/25">
                    <Icon className="h-7 w-7 text-[#0a1e3d]" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-[#0a1e3d]">
                    {title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <Card className="border-0 bg-[#0a1e3d] text-white shadow-xl">
            <CardContent className="p-8">
              <p className="font-script text-4xl text-[#8AFF00]">
                Follow along
              </p>

              <h2 className="mt-2 text-2xl font-extrabold">
                Follow Us on Social Media
              </h2>

              <p className="mt-4 leading-7 text-gray-200">
                See event announcements, adoptable animals, volunteer
                opportunities, community updates, and stories from animals in
                FAUNA&apos;s care.
              </p>

              <div className="mt-6 space-y-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-4 font-bold transition hover:bg-white/20"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-[#8AFF00]" />
                      Follow FAUNA on {label}
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-[#33CCCC]/15 shadow-xl">
            <CardContent className="p-8">
              <p className="font-script text-4xl text-[#0099FF]">
                Lend a hand
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-[#0a1e3d]">
                Volunteer at FAUNA Events
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Volunteers help with setup, animal care, adoption tables,
                Community Health Fair activities, cleanup, transportation, and
                welcoming guests.
              </p>

              <Link href="/volunteer">
                <Button className="mt-6 bg-[#0099FF] font-bold text-white hover:bg-[#007acc]">
                  Volunteer with FAUNA
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
