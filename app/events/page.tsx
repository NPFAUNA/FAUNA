
import type { Metadata } from "next"
import Image from "next/image"
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

const healthFairRegistration =
  "https://new.shelterluv.com/form/community/FAUN/14824-health-fair"

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

const eventPhotos = [
  { src: "/Adoption_Event.jpg", alt: "FAUNA adoption event" },
  {
    src: "/pet-health-fair-october-24.jpg",
    alt: "FAUNA Pet Health Fair",
  },
  {
    src: "/Pub_Crawl.jpg",
    alt: "FAUNA St. Patrick's Day Pub Crawl",
  },
  { src: "/Pet_Parade.jpg", alt: "FAUNA pet parade event" },
]

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

type HealthFairProps = {
  date: string
  image: string
  imageAlt: string
  venue: string
  street: string
  city: string
}

function HealthFairCard({
  date,
  image,
  imageAlt,
  venue,
  street,
  city,
}: HealthFairProps) {
  return (
    <Card className="overflow-hidden border-0 bg-white shadow-xl">
      <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Open the " + date + " Pet Health Fair graphic at full size"}
          className="group relative block min-h-[320px] cursor-zoom-in overflow-hidden bg-white sm:min-h-[400px]"
        >
          <Image
            src={image}
            alt={imageAlt}
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
            Saturday, {date}
          </p>

          <h3 className="mt-3 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
            Pet Health Fair
          </h3>

          <p className="mt-4 text-lg font-bold text-[#33CCCC]">
            9:00 a.m. - 12:00 p.m.
          </p>

          <p className="mt-4 text-xl font-bold text-[#0a1e3d]">{venue}</p>

          <p className="mt-2 leading-7 text-gray-600">
            {street}
            <br />
            {city}
          </p>

          <div className="mt-5 space-y-3 text-gray-600">
            <p>
              <span className="font-bold text-[#0a1e3d]">
                Free vaccines:
              </span>{" "}
              DAPPv canine and HCP feline vaccines.
            </p>

            <p>
              <span className="font-bold text-[#0a1e3d]">
                Rabies vaccines:
              </span>{" "}
              $10 for eligible cats and dogs, approximately 16 weeks and older.
            </p>

            <p>
              <span className="font-bold text-[#0a1e3d]">Microchips:</span>{" "}
              $15.
            </p>

            <p>
              Please complete the registration form in advance to speed up
              the process. The form can accommodate up to five pets.
            </p>
          </div>

          <a
            href={healthFairRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center rounded-lg bg-[#0099FF] px-6 py-3 font-bold text-white shadow-md transition hover:bg-[#007acc]"
          >
            Pre-Register
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </CardContent>
      </div>
    </Card>
  )
}

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
            Join FAUNA at adoption events, Community Health Fairs, fundraisers,
            volunteer activities, and other gatherings throughout Natchitoches
            Parish.
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
            {/* October 24 Health Fair */}
            <HealthFairCard
              date="October 24, 2026"
              image="/pet-health-fair-october-24.jpg"
              imageAlt="Pet Health Fair on October 24, 2026, at Flying Heart Brewery"
              venue="Flying Heart Brewery"
              street="108 Mill Street"
              city="Natchitoches, LA 71457"
            />

            {/* November 14 Health Fair */}
            <HealthFairCard
              date="November 14, 2026"
              image="/pet-health-fair-november-14.jpg"
              imageAlt="Pet Health Fair on November 14, 2026, at Northeast Branch Natchitoches Public Library"
              venue="Northeast Branch Natchitoches Public Library"
              street="3129 Hwy. 71"
              city="Campti, LA 71411"
            />

            {/* St. Patrick's Day Pub Crawl */}
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
                        Get ready to hop between restaurants, bars, and shops
                        while supporting FAUNA&apos;s mission to help animals
                        in need throughout Natchitoches Parish.
                      </p>
                    </div>

                    <div className="mt-8">
                      <a
                        href="https://www.facebook.com/FaunaNatchitoches"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg bg-[#8AFF00] px-6 py-3 font-bold text-[#0a1e3d] transition hover:bg-[#76dc00]"
                      >
                        Follow Us for Event Updates
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Events */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#33CCCC]">
              Get involved
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d]">
              More Ways to Join FAUNA
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              Follow our social-media pages for announcements about upcoming
              activities and opportunities to support local animals.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map(({ title, description, icon: Icon }) => (
              <Card
                key={title}
                className="border border-gray-100 shadow-sm transition hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8AFF00]/30 text-[#0a1e3d]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1e3d]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Photo Gallery */}
      <section className="bg-sky-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-[#0a1e3d]">
              FAUNA in the Community
            </h2>

            <p className="mt-3 text-gray-600">
              Thank you for being part of our community and supporting animals
              in need.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {eventPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="bg-gradient-to-br from-[#061424] to-[#0a1e3d] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <PawPrint className="mx-auto h-12 w-12 text-[#8AFF00]" />

          <h2 className="mt-5 text-3xl font-extrabold">
            Be Part of the FAUNA Community
          </h2>

          <p className="mt-4 leading-7 text-gray-200">
            Every event helps us support animals and the people who care for
            them. Follow FAUNA online for the latest announcements.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.facebook.com/FaunaNatchitoches"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0099FF] font-bold text-white hover:bg-[#007acc]">
                Follow FAUNA
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
