import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Mail,
  Megaphone,
  Network,
  PiggyBank,
  Stethoscope,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Advisory Board | FAUNA",
  description:
    "Learn about the Friedman Center Advisory Board and its role in supporting the Edwina and Sam Friedman Pet Adoption and Welfare Center.",
}

const advisoryGoals = [
  {
    icon: Handshake,
    title: "Build Partnerships",
    description:
      "Build strong public and private partnerships throughout Natchitoches Parish.",
  },
  {
    icon: Megaphone,
    title: "Expand Awareness",
    description:
      "Expand community awareness, engagement, and support for the Friedman Center.",
  },
  {
    icon: Lightbulb,
    title: "Identify Opportunities",
    description:
      "Identify fundraising, sponsorship, and naming opportunities that advance the center&apos;s mission.",
  },
  {
    icon: PiggyBank,
    title: "Strengthen Sustainability",
    description:
      "Support the long-term financial sustainability of the Friedman Center.",
  },
  {
    icon: GraduationCap,
    title: "Develop Programs",
    description:
      "Help develop educational, outreach, and community-focused programs.",
  },
  {
    icon: Network,
    title: "Connect Leaders",
    description:
      "Connect FAUNA with veterinary, civic, nonprofit, and business leaders.",
  },
  {
    icon: Users,
    title: "Respond to Community Needs",
    description:
      "Help ensure the center remains responsive to the needs of Natchitoches Parish.",
  },
]

const advisoryBoardMembers = [
  "Louie Bernard",
  "Melissa Cloutier",
  "Brandon Donahue",
  "Camille Donahue",
  "Edwina Friedman",
  "Greg Friedman",
  "Greg Handel",
  "Angela Lasyone",
  "Brittany McCoy",
  "Tiffanie Mitchell",
  "Graham Ragland",
  "Connie Soong",
  "Herman Soong",
  "Ralph Thiergart",
  "Pearl Walker",
]

const exOfficioMembers = [
  {
    name: "Leah Forsyth",
    role: "President, FAUNA Board of Directors",
  },
  {
    name: "Rachel LeBlanc",
    role: "Vice President, FAUNA Board of Directors",
  },
]

export default function AdvisoryBoardPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#33CCCC]/30 bg-[#33CCCC]/15 text-[#33CCCC]">
            Advisory Board
          </Badge>

          <h1 className="font-script text-6xl leading-tight text-white sm:text-7xl">
            Friedman Center Advisory Board
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-xl font-semibold text-[#8AFF00]">
            Edwina &amp; Sam Friedman Pet Adoption &amp; Welfare Center
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            The Friedman Center Advisory Board brings together community
            leaders, subject-matter experts, advocates, and supporters who share
            a commitment to the long-term success of the Edwina &amp; Sam
            Friedman Pet Adoption &amp; Welfare Center.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <HeartHandshake className="mx-auto h-11 w-11 text-[#0099FF]" />

          <h2 className="font-script mt-5 text-5xl text-[#0a1e3d] sm:text-6xl">
            Guidance for the Center&apos;s Future
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-gray-700">
            Advisory Board members provide insight, professional expertise,
            community connections, and strategic guidance as FAUNA prepares to
            open and sustain this transformational facility.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Their experience and relationships help FAUNA strengthen the
            Friedman Center&apos;s foundation, broaden its reach, and prepare
            the organization for responsible long-term growth.
          </p>
        </div>
      </section>

      {/* Advisory Board Members */}
      <section className="bg-[#0a1e3d] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
              Our Members
            </Badge>

            <h2 className="font-script text-5xl text-white sm:text-6xl">
              Advisory Board Members
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryBoardMembers.map((member) => (
              <div
                key={member}
                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center shadow-md"
              >
                <p className="text-lg font-bold text-white">{member}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-4xl">
            <h3 className="text-center text-sm font-extrabold uppercase tracking-[0.2em] text-[#33CCCC]">
              Ex-Officio Members
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {exOfficioMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-[#33CCCC]/30 bg-[#061424] px-6 py-5 text-center shadow-md"
                >
                  <p className="text-lg font-bold text-white">{member.name}</p>

                  <p className="mt-2 text-sm font-semibold text-[#8AFF00]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-white shadow-2xl sm:h-96 sm:w-96">
              <Image
                src="/Rachel_Leah_Board.jpeg"
                alt="Rachel LeBlanc and Leah Forsyth"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Purpose of the Advisory Board
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Supporting the Friedman Center
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              The Advisory Board supports the Friedman Center by helping FAUNA
              build relationships, identify opportunities, and create a strong
              foundation for lasting community impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisoryGoals.map((goal) => {
              const Icon = goal.icon

              return (
                <Card
                  key={goal.title}
                  className="border border-sky-100 bg-white shadow-md"
                >
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0099FF]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="font-script text-3xl text-[#0a1e3d]">
                      {goal.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-gray-600">
                      {goal.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}

            <Card className="border border-[#8AFF00]/30 bg-[#0a1e3d] shadow-md md:col-span-2 lg:col-span-2">
              <CardContent className="flex h-full flex-col justify-center p-8 text-white">
                <Building2 className="h-10 w-10 text-[#8AFF00]" />

                <h3 className="font-script mt-5 text-4xl text-white">
                  A Shared Vision
                </h3>

                <p className="mt-4 max-w-3xl leading-relaxed text-sky-100">
                  Each Advisory Board member helps connect the Friedman Center
                  with the people, organizations, and resources needed to serve
                  animals and families throughout Natchitoches Parish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Investment */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <Badge className="mb-4 border-[#33CCCC]/30 bg-[#33CCCC]/10 text-[#0a1e3d]">
              A Community Investment
            </Badge>

            <h2 className="font-script text-5xl leading-tight text-[#0a1e3d] sm:text-6xl">
              More Than an Animal Shelter
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              The Friedman Center is more than an animal shelter. It is a
              community resource designed to improve public health, strengthen
              families, support responsible pet ownership, and create safer
              outcomes for animals.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              Advisory Board members serve as ambassadors for this vision and
              help connect the center&apos;s mission with the people,
              organizations, and resources needed to sustain it.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#0099FF] to-[#33CCCC] p-8 text-white shadow-xl sm:p-10">
            <Stethoscope className="h-11 w-11 text-[#8AFF00]" />

            <h3 className="font-script mt-5 text-4xl leading-tight text-white sm:text-5xl">
              Serving Animals and People
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-white/95">
              Through thoughtful planning and strong community partnerships,
              the Friedman Center will support animal care, education,
              prevention, outreach, and responsible pet ownership for years to
              come.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Vision */}
      <section className="bg-[#0a1e3d] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <HeartHandshake className="mx-auto h-11 w-11 text-[#8AFF00]" />

          <h2 className="font-script mt-5 text-5xl leading-tight text-white sm:text-6xl">
            Helping Hope Find a Permanent Home
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-sky-100">
            Through collaboration and thoughtful guidance, the Advisory Board
            is helping build a center that will serve animals and people
            throughout Natchitoches Parish for generations.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Mail className="mx-auto h-10 w-10 text-white" />

          <h2 className="font-script mt-4 text-5xl">
            Friedman Center Inquiries
          </h2>

          <div className="mt-10 flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white/40 shadow-2xl">
              <Image
                src="/Inquiries.png"
                alt="Friedman Center inquiries"
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/95">
            For Friedman Center or campaign inquiries, contact FAUNA&apos;s
            campaign team.
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
    </main>
  )
}
