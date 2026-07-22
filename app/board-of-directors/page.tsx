import type { Metadata } from "next"
import Link from "next/link"
import {
  BadgeCheck,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Board of Directors | FAUNA",
  description:
    "Learn about the volunteer leadership, governance, and responsibilities of FAUNA's Board of Directors.",
}

const responsibilities = [
  {
    icon: Target,
    title: "Strategic Direction",
    description:
      "Establishing organizational policies, priorities, and long-term goals.",
  },
  {
    icon: Landmark,
    title: "Financial Oversight",
    description:
      "Providing fiduciary oversight and supporting responsible use of charitable resources.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Governance",
    description:
      "Supporting transparent, accountable, and mission-focused operations.",
  },
  {
    icon: Handshake,
    title: "Community Partnerships",
    description:
      "Strengthening relationships with donors, volunteers, veterinarians, businesses, and public partners.",
  },
  {
    icon: HeartHandshake,
    title: "Sustainability",
    description:
      "Advancing fundraising, resource development, and FAUNA's long-term stability.",
  },
  {
    icon: Scale,
    title: "Mission Stewardship",
    description:
      "Protecting FAUNA's mission, reputation, and commitment to compassionate animal welfare.",
  },
]

export default function BoardOfDirectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
            Volunteer Leadership
          </Badge>

          <h1 className="font-script text-6xl leading-tight text-white sm:text-7xl">
            Board of Directors
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            Providing governance, financial oversight, strategic leadership,
            and long-term stewardship for FAUNA.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <BadgeCheck className="mx-auto h-10 w-10 text-[#0099FF]" />

          <h2 className="font-script mt-5 text-5xl text-[#0a1e3d]">
            Leadership and Responsibility
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-gray-700">
            FAUNA&apos;s Board of Directors provides governance, financial
            oversight, strategic leadership, and long-term stewardship for the
            organization.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Each board member serves as a volunteer leader committed to
            FAUNA&apos;s mission of improving the lives of homeless animals
            throughout Natchitoches Parish.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            The board helps ensure that FAUNA remains mission-focused,
            financially responsible, transparent, and prepared to meet the
            changing needs of animals and families in the community.
          </p>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Board Responsibilities
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Stewarding FAUNA&apos;s Mission
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((responsibility) => {
              const Icon = responsibility.icon

              return (
                <Card
                  key={responsibility.title}
                  className="border border-sky-100 bg-white shadow-md"
                >
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0099FF]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="font-script text-3xl text-[#0a1e3d]">
                      {responsibility.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-gray-600">
                      {responsibility.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0a1e3d] p-8 text-center text-white sm:p-12">
            <h2 className="font-script text-5xl text-[#33CCCC] sm:text-6xl">
              Volunteer Leadership. Lasting Impact.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
              FAUNA&apos;s board members bring diverse professional
              experience, community knowledge, and a shared commitment to
              compassionate animal welfare.
            </p>

            <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-300">
              Their leadership helps ensure that every donation, partnership,
              and program creates meaningful and lasting impact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Mail className="mx-auto h-9 w-9 text-white" />

          <h2 className="font-script mt-4 text-5xl">Board Inquiries</h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/95">
            For governance, partnership, or board-related questions, contact
            FAUNA.
          </p>

          <Link
            href="mailto:rescue@npfauna.org?subject=FAUNA Board Inquiry"
            className="mt-8 inline-block"
          >
            <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
              Email rescue@npfauna.org
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
