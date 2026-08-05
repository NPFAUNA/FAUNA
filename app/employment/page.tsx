import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Heart,
  PawPrint,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Employment Opportunities | FAUNA",
  description:
    "Explore employment and volunteer opportunities with FAUNA and help improve the lives of animals throughout Natchitoches Parish.",
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
  {
    value: "97.5%",
    label: "2025 Live-Release Rate",
  },
  {
    value: "364",
    label: "Dogs and Cats Taken In",
  },
  {
    value: "482",
    label: "Vaccines Given in 2025",
  },
  {
    value: "350+",
    label: "Community Cats Helped",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Mission That Matters",
    description:
      "Every shift supports lifesaving work for homeless and neglected animals throughout Natchitoches Parish.",
  },
  {
    icon: TrendingUp,
    title: "Hands-On Impact",
    description:
      "Feed, comfort, care for, and advocate for animals who need safety, compassion, and second chances.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description:
      "Work alongside fosters, volunteers, adopters, donors, veterinary partners, and community organizations.",
  },
]

const siteEmployeeDailyCare = [
  "Feed, walk, and provide enrichment for dogs and cats",
  "Keep kennels, animal areas, and food-preparation spaces clean",
  "Monitor animal health and record observations for the medical team",
]

const siteEmployeeSupport = [
  "Greet adopters and help answer pet-matching questions",
  "Transport animals to veterinary visits when needed",
  "Assist with yard work, deep cleaning, supply organization, and special projects",
]

const siteEmployeeQualifications = [
  "Positive and professional customer-service mindset",
  "Confidence handling large, shy, or energetic dogs",
  "Valid driver's license and reliable transportation",
  "Ability to lift up to 50 pounds and work outdoors in Louisiana weather",
]

const volunteerRoles = [
  {
    icon: "🏠",
    title: "Foster Caregiver",
    description:
      "Provide temporary housing for an animal. FAUNA covers approved veterinary care while you provide love and a safe place to stay.",
  },
  {
    icon: "🚗",
    title: "Transport Volunteer",
    description:
      "Drive animals to veterinary appointments, rescue transfers, foster homes, and adoption events.",
  },
  {
    icon: "📣",
    title: "Event Volunteer",
    description:
      "Help with adoption events, pet health fairs, community outreach, and fundraising activities.",
  },
  {
    icon: "🩺",
    title: "Veterinary Support",
    description:
      "Assist during approved clinics and animal-health events. Veterinary or technician experience may be preferred.",
  },
  {
    icon: "📸",
    title: "Photography and Social Media",
    description:
      "Photograph animals, create content, and help FAUNA share adoptable pets and community stories.",
  },
  {
    icon: "⭐",
    title: "PACT Therapy Volunteer",
    description:
      "Support therapy-animal visits that bring companionship and joy to local residents and community organizations.",
  },
]

export default function EmploymentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
              Join the FAUNA Team
            </Badge>

            <p className="font-script text-4xl text-[#33CCCC] sm:text-5xl">
              Turn Compassion Into a Career
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Build a Career That
              <br />
              <span className="text-[#8AFF00]">Makes a Difference</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sky-100">
              Build a meaningful career while helping FAUNA provide humane
              care, lifesaving services, and second chances for animals
              throughout Natchitoches Parish.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://fauna.bamboohr.com/careers/23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#8AFF00] font-bold text-[#0a1e3d] hover:bg-[#7aee00]"
                >
                  View Current Openings
                  <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Impact Statistics */}
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

      {/* Photo Grid */}
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

      {/* Why Work With FAUNA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Sparkles className="mx-auto h-11 w-11 text-[#0099FF]" />

            <h2 className="mt-2 font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Why Work With FAUNA
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              A career with FAUNA is an opportunity to combine professional
              experience with compassionate service to animals and the
              community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <Card
                  key={benefit.title}
                  className="border border-sky-100 bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-7 text-center">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0099FF]">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-[#0a1e3d]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Executive Director Opening */}
      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0099FF]">
              <Briefcase className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#33CCCC]">
                Current Opening
              </p>

              <h2 className="font-script text-4xl leading-tight text-[#0a1e3d] sm:text-5xl">
                Executive Director of Shelter Operations
              </h2>
            </div>
          </div>

          <Card className="overflow-hidden border border-sky-100 bg-white shadow-xl">
            <div className="bg-[#0a1e3d] px-6 py-7 text-white sm:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8AFF00]">
                Now Hiring
              </p>

              <h3 className="mt-2 font-script text-4xl leading-tight text-white sm:text-5xl">
                Help Lead FAUNA&apos;s Next Chapter
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

              <div className="mt-8">
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

      {/* Site Employee Information */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#33CCCC]">
              <PawPrint className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#33CCCC]">
                Additional Employment Information
              </p>

              <h2 className="font-script text-5xl leading-tight text-[#0a1e3d]">
                Site Employee
              </h2>
            </div>
          </div>

          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#8AFF00] px-3 py-1 text-xs font-bold text-[#0a1e3d]">
              Part-Time
            </span>

            <span className="text-sm text-gray-500">
              Minimum 6 hours per week &bull; Natchitoches, Louisiana
            </span>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card className="border border-sky-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#0099FF]">
                  <Heart className="h-5 w-5" />
                  Daily Animal Care
                </h3>

                <ul className="space-y-3">
                  {siteEmployeeDailyCare.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#33CCCC]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-sky-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#0099FF]">
                  <Users className="h-5 w-5" />
                  Guest and Facility Support
                </h3>

                <ul className="space-y-3">
                  {siteEmployeeSupport.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#33CCCC]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border border-sky-200 shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#0a1e3d]">
                <ShieldCheck className="h-5 w-5 text-[#0099FF]" />
                What You Bring
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {siteEmployeeQualifications.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#5a9900]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs italic text-gray-500">
                Don&apos;t meet every qualification? We still encourage
                interested applicants to apply. Compassion, reliability, and a
                willingness to learn matter.
              </p>
            </CardContent>
          </Card>

          <div className="rounded-2xl bg-gradient-to-br from-[#0099FF] to-[#33CCCC] p-8 text-center text-white">
            <h3 className="font-script text-4xl text-white sm:text-5xl">
              Interested in Site Employment?
            </h3>

            <p className="mt-3 text-sky-50">
              Contact FAUNA at{" "}
              <a
                href="mailto:npfauna@gmail.com"
                className="font-semibold underline hover:text-white"
              >
                npfauna@gmail.com
              </a>{" "}
              to ask about current availability.
            </p>

            <div className="mt-6">
              <a href="mailto:npfauna@gmail.com">
                <Button
                  size="lg"
                  className="bg-[#8AFF00] px-8 font-bold text-[#0a1e3d] hover:bg-[#7aee00]"
                >
                  Email FAUNA
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="font-script text-4xl text-[#33CCCC] sm:text-5xl">
              Not Ready for a Job?
            </p>

            <h2 className="mt-2 text-4xl font-extrabold text-[#0a1e3d]">
              Volunteer With FAUNA
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you have an hour a week or more time to offer, there is a
              meaningful way to help animals and support FAUNA&apos;s mission.
            </p>
          </div>

          <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerRoles.map((role) => (
              <Card
                key={role.title}
                className="border border-sky-100 bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-3 text-3xl">{role.icon}</div>

                  <h3 className="font-bold text-[#0a1e3d]">{role.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://new.shelterluv.com/form/community/FAUN/14823"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0099FF] px-8 font-semibold text-white hover:bg-[#007acc]"
              >
                <Users className="mr-2 h-5 w-5" />
                Submit Volunteer Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/volunteer">
              <Button
                size="lg"
                className="bg-[#0099FF] px-8 font-semibold text-white hover:bg-[#007acc]"
              >
                <Users className="mr-2 h-5 w-5" />
                Learn About Volunteering
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
