import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Heart,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Employment Opportunities | FAUNA",
  description:
    "Explore employment opportunities with FAUNA and help improve the lives of animals throughout Natchitoches Parish.",
}

const benefits = [
  {
    icon: Heart,
    title: "Mission-Driven Work",
    description:
      "Help create safer, healthier outcomes for homeless and neglected animals throughout Natchitoches Parish.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Work alongside volunteers, fosters, adopters, donors, veterinary partners, and community organizations.",
  },
  {
    icon: PawPrint,
    title: "Animal-Centered Care",
    description:
      "Support compassionate, humane care while helping animals prepare for adoption and new beginnings.",
  },
  {
    icon: ShieldCheck,
    title: "Growing Organization",
    description:
      "Join FAUNA during an important period of growth as we prepare for expanded services and facilities.",
  },
]

export default function EmploymentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
            Join the FAUNA Team
          </Badge>

          <h1 className="font-script text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
            Employment Opportunities
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            Build a meaningful career while helping FAUNA provide humane care,
            lifesaving services, and second chances for animals throughout
            Natchitoches Parish.
          </p>
        </div>
      </section>

      {/* Open Position */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Briefcase className="mx-auto h-11 w-11 text-[#0099FF]" />

            <h2 className="font-script mt-5 text-5xl leading-tight text-[#0a1e3d] sm:text-6xl">
              Open Position
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              FAUNA is seeking a dedicated professional to help lead shelter
              operations and support the organization&apos;s continued growth.
            </p>
          </div>

          <Card className="overflow-hidden border border-sky-100 bg-white shadow-xl">
            <div className="bg-[#0a1e3d] px-6 py-7 text-white sm:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8AFF00]">
                Now Hiring
              </p>

              <h3 className="font-script mt-2 text-4xl leading-tight sm:text-5xl">
                Executive Director of Shelter Operations
              </h3>
            </div>

            <CardContent className="p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                The Executive Director of Shelter Operations will help guide
                daily shelter functions, animal-care standards, staff
                leadership, community relationships, and the continued
                development of FAUNA&apos;s lifesaving programs.
              </p>

              <p className="mt-5 leading-relaxed text-gray-700">
                This position is ideal for a compassionate, organized, and
                experienced leader who understands animal welfare and is ready
                to help FAUNA grow into its next chapter.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://fauna.bamboohr.com/careers/23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-auto bg-[#0099FF] px-7 py-3 font-bold text-white hover:bg-[#0088ee]">
                    View Job Posting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Work with FAUNA */}
      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Sparkles className="mx-auto h-11 w-11 text-[#0099FF]" />

            <h2 className="font-script mt-5 text-5xl leading-tight text-[#0a1e3d] sm:text-6xl">
              Why Work with FAUNA?
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              A career with FAUNA is an opportunity to combine professional
              experience with compassionate service to animals and the
              community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <Card
                  key={benefit.title}
                  className="border border-sky-100 bg-white shadow-md"
                >
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0099FF]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="font-script text-3xl text-[#0a1e3d]">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0a1e3d] px-6 py-12 text-center text-white shadow-xl sm:px-10">
            <Heart className="mx-auto h-11 w-11 text-[#8AFF00]" />

            <h2 className="font-script mt-5 text-5xl leading-tight text-[#33CCCC] sm:text-6xl">
              Not Ready for a Job?
            </h2>

            <div className="mt-8">
              <Link href="/volunteer">
                <Button className="h-auto bg-[#8AFF00] px-8 py-4 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                  Volunteer with FAUNA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
