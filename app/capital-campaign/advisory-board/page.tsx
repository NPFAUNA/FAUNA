import type { Metadata } from "next"
import Link from "next/link"
import {
  Building2,
  CircleDollarSign,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  Megaphone,
  Network,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Friedman Center Advisory Board | FAUNA",
  description:
    "Learn about the Advisory Board supporting the Edwina and Sam Friedman Pet Adoption and Welfare Center.",
}

const advisoryRoles = [
  {
    icon: Handshake,
    title: "Build Partnerships",
    description:
      "Develop strong relationships with public agencies, businesses, foundations, and community organizations.",
  },
  {
    icon: Megaphone,
    title: "Expand Awareness",
    description:
      "Help share the Friedman Center's mission and strengthen community engagement.",
  },
  {
    icon: CircleDollarSign,
    title: "Support Fundraising",
    description:
      "Identify fundraising, naming, sponsorship, and long-term sustainability opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Guide Programs",
    description:
      "Offer insight into educational, outreach, animal-welfare, and community-service programs.",
  },
  {
    icon: Network,
    title: "Connect Leaders",
    description:
      "Build connections with veterinary, civic, nonprofit, business, and philanthropic leaders.",
  },
  {
    icon: Lightbulb,
    title: "Provide Expertise",
    description:
      "Offer professional guidance that helps the center remain responsive to the needs of Natchitoches Parish.",
  },
]

export default function AdvisoryBoardPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
            Edwina &amp; Sam Friedman Pet Adoption &amp; Welfare Center
          </Badge>

          <h1 className="font-script text-6xl leading-tight text-white sm:text-7xl">
            Friedman Center Advisory Board
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            Community leaders, subject-matter experts, advocates, and
            supporters helping guide the long-term success of the Friedman
            Center.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Building2 className="mx-auto h-11 w-11 text-[#0099FF]" />

          <h2 className="font-script mt-5 text-5xl text-[#0a1e3d]">
            Guidance for a Transformational Facility
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-gray-700">
            The Friedman Center Advisory Board brings together community
            leaders, subject-matter experts, advocates, and supporters who
            share a commitment to the long-term success of the Edwina &amp;
            Sam Friedman Pet Adoption &amp; Welfare Center.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Advisory Board members provide insight, professional expertise,
            community connections, and strategic guidance as FAUNA prepares to
            open and sustain this transformational facility.
          </p>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-[#33CCCC]/30 bg-[#33CCCC]/10 text-[#167f7f]">
              Purpose of the Advisory Board
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Connecting Vision with Community
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisoryRoles.map((role) => {
              const Icon = role.icon

              return (
                <Card
                  key={role.title}
                  className="border border-sky-100 bg-white shadow-md"
                >
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#33CCCC]">
                      <Icon className="h-6 w-6 text-[#061424]" />
                    </div>

                    <h3 className="font-script text-3xl text-[#0a1e3d]">
                      {role.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-gray-600">
                      {role.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              More Than a Shelter
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d]">
              A Community Investment
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              The Friedman Center is more than an animal shelter. It is a
              community resource designed to improve public health, strengthen
              families, support responsible pet ownership, and create safer
              outcomes for animals.
            </p>

            <p className="mt-5 leading-relaxed text-gray-700">
              Advisory Board members serve as ambassadors for this vision and
              help connect the center&apos;s mission with the people,
              organizations, and resources needed to sustain it.
            </p>
          </div>

          <div className="rounded-3xl bg-[#0a1e3d] p-8 text-white sm:p-10">
            <h2 className="font-script text-5xl text-[#33CCCC]">
              Helping Hope Find a Permanent Home
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-sky-100">
              Through collaboration and thoughtful guidance, the Advisory
              Board is helping build a center that will serve animals and
              people throughout Natchitoches Parish for generations.
            </p>

            <Link
              href="/capital-campaign"
              className="mt-8 inline-block"
            >
              <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                Explore the Friedman Center
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Mail className="mx-auto h-9 w-9" />

          <h2 className="font-script mt-4 text-5xl">
            Friedman Center Inquiries
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/95">
            Contact the campaign team with questions about the Friedman
            Center, Advisory Board, or Generations of Hope Campaign.
          </p>

          <Link
            href="mailto:hopehasaplace@npfauna.org?subject=Friedman Center Inquiry"
            className="mt-8 inline-block"
          >
            <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
              Email hopehasaplace@npfauna.org
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
