import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Cat,
  CheckCircle,
  ExternalLink,
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
    body: "Low-cost pop-up health fairs at central locations throughout Natchitoches Parish to assist community pet owners.",
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
    body: "Wildlife rehabilitation that gives orphaned and injured native animals specialized care and the opportunity to return safely to the wild.",
    href: "#klaws",
    icon: Users,
  },
]

const wildlifeSafetyTips = [
  "Keep children and pets away.",
  "Observe from a safe distance.",
  "Do not offer food, water, or medication unless directed by a wildlife rehabilitator.",
  "Avoid handling the animal with bare hands.",
  "Contact KLAWS or another permitted wildlife rehabilitator for guidance.",
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
            wildlife, and families across Natchitoches Parish.
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
        className="scroll-mt-24 bg-[#8AFF00] px-6 py-12 text-center text-[#0a1e3d]"
      >
        <h2 className="font-script text-5xl">
          Community Health Fairs
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-lg leading-8">
          FAUNA offers low-cost pop-up health fairs at central locations
          throughout Natchitoches Parish to assist community pet owners. Visit
          our Events page to see future dates.
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

      <section
        id="klaws"
        className="scroll-mt-24 bg-sky-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0099FF]">
              Wildlife Rehabilitation
            </p>

            <h2 className="font-script mt-3 text-5xl text-[#0a1e3d] sm:text-6xl">
              About KLAWS
            </h2>

            <p className="mt-3 text-xl font-semibold text-[#167f7f] sm:text-2xl">
              Kathy&apos;s Louisiana Wildlife Sanctuary
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-sky-100 bg-white p-8 shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#0a1e3d]">
                Compassionate Care for Native Wildlife
              </h3>

              <div className="mt-6 space-y-5 leading-8 text-gray-700">
                <p>
                  KLAWS, Inc. &mdash; Kathy&apos;s Louisiana Wildlife Sanctuary
                  &mdash; is a Natchitoches-based nonprofit dedicated to
                  helping orphaned and injured wildlife receive the specialized
                  care they need.
                </p>

                <p>
                  Led by wildlife rehabilitator Kathy Owsley, KLAWS provides
                  compassionate, hands-on support for native animals such as
                  raccoons, squirrels, opossums, and birds.
                </p>

                <p>
                  Kathy trained with Dr. Gia Morgan and her veterinary staff in
                  Shreveport and serves as a wildlife rehabilitation
                  sub-permittee through WERLA.
                </p>
              </div>
            </article>

            <article className="rounded-3xl bg-[#0a1e3d] p-8 text-white shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#33CCCC]">
                Rescue, Rehabilitate, Release
              </h3>

              <div className="mt-6 space-y-5 leading-8 text-gray-300">
                <p>
                  The goal of wildlife rehabilitation is to give each animal
                  the best possible opportunity to return safely to its natural
                  habitat.
                </p>

                <p>
                  Animals arriving at KLAWS may be orphaned, injured,
                  displaced, or unable to survive without temporary human
                  assistance. Their care can include species-appropriate
                  housing, specialized feeding, medical support, monitoring,
                  and gradual preparation for release.
                </p>

                <p>
                  When an animal is healthy, independent, and ready to return
                  to the wild, KLAWS works to place it in a suitable release
                  environment.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-sky-100 bg-white p-8 shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#0a1e3d]">
                Serving Wildlife and the Community
              </h3>

              <div className="mt-6 space-y-5 leading-8 text-gray-700">
                <p>
                  KLAWS fills an important need in Natchitoches and the
                  surrounding region by offering residents a responsible
                  resource when they encounter wildlife in distress.
                </p>

                <p>
                  Its work also helps the community understand when a wild
                  animal truly needs intervention, how to avoid accidentally
                  separating young animals from their parents, and why wildlife
                  should be handled only by trained rehabilitators.
                </p>

                <p>
                  KLAWS is organized as a 501(c)(3) charitable nonprofit
                  focused on wildlife sanctuary and rehabilitation work.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#0a1e3d]">
                Before You Rescue a Wild Animal
              </h3>

              <p className="mt-6 leading-8 text-gray-700">
                A young animal found alone is not always abandoned. In many
                cases, a parent may be nearby gathering food or waiting for
                people to leave.
              </p>

              <ul className="mt-7 space-y-4">
                {wildlifeSafetyTips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 leading-7 text-gray-700"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#5a9900]" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://www.facebook.com/p/KLAWS-Inc-Kathys-Louisiana-Wildlife-Sanctuary-61576190663306/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-auto bg-[#0099FF] px-7 py-3 font-bold text-white hover:bg-[#0088ee]"
              >
                Visit KLAWS on Facebook
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
