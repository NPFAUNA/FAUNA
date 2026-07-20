import type { Metadata } from "next"
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
      "Support FAUNA&apos;s rescue programs, animal care, and the future Friedman Center.",
    icon: CalendarDays,
  },
  {
    title: "Volunteer Events",
    description:
      "Help with adoption events, health fairs, animal care, outreach, and other community activities.",
    icon: Users,
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
              Event dates, times, locations, weather updates, and registration
              information are announced through FAUNA&apos;s social-media
              pages.
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

      <section className="bg-sky-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#33CCCC]">
              Gather for good
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d]">
              Events You May See from FAUNA
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
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

      <section className="bg-white px-6 py-16">
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
