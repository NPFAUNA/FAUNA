import type { Metadata } from "next"
import Image from "next/image"
import { BadgeCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Board of Directors | FAUNA",
  description:
    "Learn about the volunteer leadership, governance, and responsibilities of FAUNA's Board of Directors.",
}

const boardMembers = [
  {
    role: "President",
    name: "Leah Forsyth",
  },
  {
    role: "Vice President",
    name: "Rachel Leblanc",
  },
  {
    role: "Secretary",
    name: "Karn Richoux",
  },
  {
    role: "Treasurer",
    name: "Tina Brown",
  },
  {
    role: "Board Member",
    name: "Kay Kaufman",
  },
  {
    role: "Board Member",
    name: "Jennifer Long",
  },
  {
    role: "Board Member",
    name: "Kathy Owsley",
  },
  {
    role: "Board Member",
    name: "Juanita Murphy",
  },
  {
    role: "Board Member",
    name: "Greg St. Andre",
  },
  {
    role: "Board Member",
    name: "Debbie Tebbetts",
  },
]

function ScriptTitle({ title }: { title: string }) {
  return (
    <>
      {title.split(/(\s+)/).map((part, index) => {
        const lettersOnly = part.replace(/[^A-Za-z]/g, "")
        const isAllCaps =
          lettersOnly.length > 1 &&
          lettersOnly === lettersOnly.toUpperCase()

        return isAllCaps ? (
          <span key={`${part}-${index}`} className="font-brand-caps">
            {part}
          </span>
        ) : (
          part
        )
      })}
    </>
  )
}

export default function BoardOfDirectorsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#061424] to-[#0a1e3d] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
            Volunteer Leadership
          </Badge>

          <h1 className="font-script text-6xl leading-tight text-white sm:text-7xl">
            <ScriptTitle title="Board of Directors" />
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            Providing governance, financial oversight, strategic leadership,
            and long-term stewardship for FAUNA.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white/25 shadow-2xl sm:h-80 sm:w-80">
              <Image
                src="/Board.jpg"
                alt="FAUNA Board of Directors"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 288px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <BadgeCheck className="mx-auto h-10 w-10 text-[#0099FF]" />

          <h2 className="font-script mt-5 text-5xl text-[#0a1e3d]">
            <ScriptTitle title="Leadership and Responsibility" />
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

      <section className="bg-[#0a1e3d] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
              Volunteer Leadership
            </Badge>

            <h2 className="font-script text-5xl text-white sm:text-6xl">
              <ScriptTitle title="Board of Directors" />
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                key={`${member.role}-${member.name}`}
                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-6 text-center shadow-md"
              >
                <p className="text-sm font-extrabold uppercase tracking-wider text-[#33CCCC]">
                  {member.role}
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
