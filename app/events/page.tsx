import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Heart, Facebook, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming FAUNA events in Natchitoches, LA — adoption events, community health fairs, fundraisers, and more.",
}

type EventCategory = "Adoption" | "Health Fair" | "Fundraiser" | "Community" | "TNR"

interface FaunaEvent {
  month: string
  day: string
  title: string
  time: string
  location: string
  category: EventCategory
  description: string
  featured?: boolean
}

const events: FaunaEvent[] = [
  {
    month: "JUL",
    day: "19",
    title: "Summer Adoption Weekend",
    time: "10:00 AM – 4:00 PM",
    location: "Walmart Natchitoches, 5010 University Pkwy",
    category: "Adoption",
    description:
      "Meet our adoptable dogs and cats! Bring the whole family. Adoption applications accepted on-site.",
    featured: true,
  },
  {
    month: "JUL",
    day: "26",
    title: "Community Health Fair & Vaccine Clinic",
    time: "9:00 AM – 1:00 PM",
    location: "TBA – Natchitoches Parish",
    category: "Health Fair",
    description:
      "Free or low-cost vaccines, microchipping, flea prevention, and spay/neuter referrals for cats and dogs.",
    featured: true,
  },
  {
    month: "AUG",
    day: "9",
    title: "Bath & Nail Clipping Day",
    time: "10:00 AM – 2:00 PM",
    location: "TBA – Natchitoches",
    category: "Community",
    description: "Bring your pet for a free bath and nail trim. Hosted by FAUNA volunteers.",
  },
  {
    month: "AUG",
    day: "16",
    title: "Annual FAUNA Fundraiser Dinner",
    time: "6:00 PM – 9:00 PM",
    location: "Natchitoches Event Center",
    category: "Fundraiser",
    description:
      "Join us for our annual fundraiser dinner supporting the Generations of Hope Capital Campaign. Tickets required.",
    featured: true,
  },
  {
    month: "AUG",
    day: "23",
    title: "TNR Community Workshop",
    time: "5:30 PM – 7:00 PM",
    location: "Natchitoches Public Library",
    category: "TNR",
    description:
      "Learn how Trap-Neuter-Return works, how to humanely trap community cats, and how FAUNA can help.",
  },
  {
    month: "SEP",
    day: "6",
    title: "Fall Adoption Event",
    time: "11:00 AM – 3:00 PM",
    location: "TBA – Natchitoches",
    category: "Adoption",
    description: "Meet available dogs and cats looking for their forever homes. All animals are spayed/neutered and vaccinated.",
  },
]

const categoryColors: Record<EventCategory, string> = {
  Adoption: "bg-green-100 text-green-800",
  "Health Fair": "bg-teal-100 text-teal-800",
  Fundraiser: "bg-amber-100 text-amber-800",
  Community: "bg-blue-100 text-blue-800",
  TNR: "bg-orange-100 text-orange-800",
}

export default function EventsPage() {
  const featured = events.filter((e) => e.featured)

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Mark Your Calendar</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-4">Upcoming Events</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            From adoption weekends to community health fairs, FAUNA hosts events throughout the year.
            Join us — every participant makes a difference.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-green-900 mb-8 flex items-center gap-2">
            <span className="text-amber-500 text-2xl">★</span>
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {featured.map((event) => (
              <Card key={event.title} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-green-800 text-white p-4 flex items-center gap-4">
                  <div className="text-center shrink-0">
                    <div className="text-xs font-semibold text-green-300 uppercase">{event.month}</div>
                    <div className="text-3xl font-extrabold leading-none">{event.day}</div>
                  </div>
                  <div>
                    <Badge className={`${categoryColors[event.category]} text-xs mb-1`}>{event.category}</Badge>
                    <h3 className="font-bold leading-tight text-sm">{event.title}</h3>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                  <div className="space-y-1.5 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Events */}
          <h2 className="text-2xl font-extrabold text-green-900 mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-green-600" />
            All Upcoming Events
          </h2>
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.title + event.day} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-5">
                    <div className="bg-green-100 text-green-900 rounded-xl p-3 text-center min-w-[56px]">
                      <div className="text-xs font-semibold text-green-600 uppercase">{event.month}</div>
                      <div className="text-2xl font-extrabold leading-none">{event.day}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-green-900">{event.title}</h3>
                        <Badge className={`${categoryColors[event.category]} text-xs`}>{event.category}</Badge>
                        {event.featured && (
                          <Badge className="bg-amber-100 text-amber-700 text-xs">Featured</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2 leading-relaxed">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-14 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-green-900 text-lg">Follow Us on Facebook</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  For the most up-to-date event announcements, adoptable animals, and FAUNA news,
                  follow us on Facebook. We post updates daily!
                </p>
                <a href="https://www.facebook.com/FaunaNatchitoches" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Follow FAUNA on Facebook
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h3 className="font-bold text-green-900 text-lg">Volunteer at Events</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  FAUNA events run on volunteer power. If you&apos;d like to help set up, work the
                  adoption table, or assist with health fair activities, we&apos;d love your help!
                </p>
                <Link href="/employment">
                  <Button className="bg-green-800 hover:bg-green-700 text-white">
                    Sign Up to Volunteer <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
