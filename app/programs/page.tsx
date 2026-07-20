import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Cat,
  HeartPulse,
  PawPrint,
  Stethoscope,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore FAUNA programs serving animals and pet owners throughout Natchitoches Parish.",
}

const programs = [
  {
    title: "Spay Natchitoches",
    body: "Voucher assistance that helps community pet owners access affordable spay and neuter services.",
    href: "/programs/spay-natchitoches",
    icon: Stethoscope,
  },
  {
    title: "TNR Program",
    body: "Humane Trap-Neuter-Return services that improve the health and stability of community cat colonies.",
    href: "/programs/tnr",
    icon: Cat,
  },
  {
    title: "Community Health Fairs",
    body: "Low-Cost Pop-Up Health Fairs at central locations throughout Natchitoches Parish to help assist all community pet owners.",
    href: "/events",
    icon: HeartPulse,
  },
  {
    title: "PACT Therapy",
    body: "Human-animal connection programs that bring comfort, companionship, and joy to people in our community.",
    href: "mailto:katcamcal@yahoo.com",
    icon: PawPrint,
  },
  {
    title: "KLAWS",
    body: "Youth-focused humane education that helps build compassionate, responsible future pet owners.",
    href: "/volunteer",
    icon: Users,
  },
]

export default function ProgramsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#061424] to-[#0a1e3d] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-script text-4xl text-[#8AFF00]">
            Compassion in action
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">
            FAUNA Programs
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-200">
            Our programs support homeless animals, community cats, pet owners,
            and families across Natchitoches Parish.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {programs.map(({ title, body, href, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8AFF00]/20">
                <Icon className="h-7 w-7 text-[#0a1e3d]" />
              </div>

              <h2 className="font-script text-4xl text-[#0a1e3d]">
                {title}
              </h2>

              <p className="mt-3 text-lg leading-7 text-gray-600">{body}</p>

              <Link href={href}>
                <Button className="mt-6 bg-[#0099FF] font-bold text-white hover:bg-[#0088ee]">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="community-health-fairs"
        className="bg-[#8AFF00] px-6 py-12 text-center text-[#0a1e3d]"
      >
        <h2 className="text-3xl font-extrabold">
          Community Health Fairs
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-lg leading-8">
          FAUNA offers Low-Cost Pop-Up Health Fairs at central locations
          throughout Natchitoches Parish to help assist all community pet
          owners. Check out our Events page to see future dates.
        </p>

        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
          {[
            "Low-cost Core Vaccines",
            "Low-cost Microchipping",
            "Basic Wellness Support",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-5 py-3 text-base font-bold shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <Link href="/events">
          <Button className="mt-7 bg-[#0a1e3d] text-white hover:bg-[#061424]">
            View Events
          </Button>
        </Link>
      </section>
    </main>
  )
}
