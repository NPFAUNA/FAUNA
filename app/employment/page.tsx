import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Employment | FAUNA",
  description:
    "Build a meaningful career helping animals with FAUNA in Natchitoches, Louisiana.",
}

const photos = [
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/1-3.png",
    alt: "FAUNA team with animals",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/2-1.png",
    alt: "Dog in FAUNA's care",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/5-1.png",
    alt: "Cat at FAUNA",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/29-1.png",
    alt: "FAUNA volunteer with pets",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/9-2.png",
    alt: "Animal care at FAUNA",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/12-2.png",
    alt: "FAUNA team member",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/15.png",
    alt: "Happy pet at FAUNA",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/18.png",
    alt: "Community event",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/20-1.png",
    alt: "FAUNA shelter animals",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/23-1.png",
    alt: "Dog care at FAUNA",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/25-1.png",
    alt: "FAUNA staff and animals",
  },
  {
    src: "http://www.npfauna.org/wp-content/uploads/2026/05/28-1.png",
    alt: "Animal rescue moment",
  },
]

const stats = [
  { value: "97.5%", label: "Live-Release Rate" },
  { value: "2,500+", label: "Pets Saved Last Year" },
  { value: "200+", label: "Free Vaccines Given" },
  { value: "150+", label: "Community Cats TNR'd" },
]

export default function EmploymentPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-block rounded-full bg-[#8AFF00]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0a1e3d]">
              Now Hiring - Natchitoches, LA
            </span>

            <h1 className="font-script mb-5 text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Turn Compassion
              <br />
              <span className="text-[#33CCCC]">Into a Career</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-sky-100">
              Join the team that gave{" "}
              <strong className="text-[#8AFF00]">2,500+ pets a
              second chance last year and drives FAUNA&apos;s{" "}
              <strong className="text-[#8AFF00]">
                97.5% live-release rate
              </strong>
              .
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://fauna.bamboohr.com/careers/23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="h-auto whitespace-normal bg-[#8AFF00] px-6 py-3 text-center font-bold text-[#0a1e3d] hover:bg-[#7aee00]"
                >
                  Apply for Executive Director of Shelter Operations
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Button>
              </Link>

              <Link
                href="https://new.shelterluv.com/form/community/FAUN/14823"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  Volunteer Application
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2851] py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-[#8AFF00]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[#33CCCC]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-lg bg-sky-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Why Work with FAUNA?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border border-sky-100 text-center shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0099FF]">
                  <Heart className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-script mb-3 text-3xl text-[#0a1e3d]">
                  Mission That Matters
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  Every shift directly reduces euthanasia in Natchitoches
                  Parish. You won&apos;t just have a job &mdash; you&apos;ll
                  have a purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-sky-100 text-center shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0099FF]">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-script mb-3 text-3xl text-[#0a1e3d]">
                  Hands-On Impact
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  You&apos;ll feed, comfort, and advocate for animals who have
                  nowhere else to turn. The difference you make is immediate
                  and real.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-sky-100 text-center shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0099FF]">
                  <Star className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-script mb-3 text-3xl text-[#0a1e3d]">
                  Grow With Us!
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  Training in animal handling, shelter medicine basics, and
                  customer service &mdash; skills that open doors in vet tech,
                  animal control, and nonprofit careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-[#0a1e3d] py-16 text-white">
  <div className="mx-auto max-w-4xl px-4 text-center">
    <h2 className="font-script text-5xl text-[#33CCCC] sm:text-6xl">
      Not Looking for Employment?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-sky-100">
      You can still make a life-saving difference. Whether you have one hour a
      month or several days each week, FAUNA has volunteer opportunities for
      every schedule.
    </p>

    <Link href="/volunteer">
      <Button
        size="lg"
        className="mt-8 bg-[#0099FF] font-bold text-white hover:bg-[#007acc]"
      >
        Volunteer with FAUNA
      </Button>
    </Link>
  </div>
</section>
    </div>
  )
}
