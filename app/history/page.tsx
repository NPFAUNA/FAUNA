import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  HandHeart,
  PawPrint,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our History | FAUNA",
  description:
    "Learn how FAUNA grew from a grassroots volunteer effort into a community-wide animal welfare organization serving Natchitoches Parish.",
}

const milestones = [
  {
    icon: Users,
    title: "Grassroots Beginnings",
    description:
      "Compassionate residents and volunteers came together to protect vulnerable animals and reduce unnecessary euthanasia.",
  },
  {
    icon: PawPrint,
    title: "Expanding Lifesaving Work",
    description:
      "Foster homes, adoption events, rescue transports, and veterinary assistance created more pathways to safety.",
  },
  {
    icon: HandHeart,
    title: "Community Programs",
    description:
      "Spay Natchitoches, community cat TNR, vaccination events, and pet-retention support began addressing the causes of animal homelessness.",
  },
  {
    icon: Building2,
    title: "A Permanent Future",
    description:
      "The Edwina & Sam Friedman Pet Adoption & Welfare Center represents the next chapter in FAUNA's service to Natchitoches Parish.",
  },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#33CCCC]/30 bg-[#33CCCC]/15 text-[#33CCCC]">
            Our Story
          </Badge>

          <h1 className="font-script text-6xl leading-tight text-white sm:text-7xl">
            Our History
          </h1>

          <div className="mt-10 flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white/25 shadow-2xl sm:h-80 sm:w-80">
              <Image
                src="/Paw.jpg"
                alt="FAUNA animal welfare history"
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-lg leading-relaxed text-gray-700">
            <p>
              For decades, compassionate volunteers have worked to protect
              vulnerable animals, reduce unnecessary euthanasia, and find loving
              homes for animals in Natchitoches, LA. In 2022, the Natchitoches
              Humane Society and Natchitoches Hope for Paws, two rescue
              organizations serving Natchitoches Parish, combined to create
              FAUNA - Friends All United for Natchitoches Animals. What began
              years ago as a small network of volunteers has grown into a
              strong, thriving, animal-welfare organization.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-full border-8 border-sky-100 shadow-xl">
              <Image
                src="/History.jpg"
                alt="FAUNA volunteers and animals throughout the organization&apos;s history"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 85vw, 440px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Growing Our Impact
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              From Grassroots Rescue to Community-Wide Impact
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => {
              const Icon = milestone.icon

              return (
                <Card
                  key={milestone.title}
                  className="border border-sky-100 bg-white shadow-md"
                >
                  <CardContent className="p-7 text-center">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0099FF]">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="font-script text-3xl text-[#0a1e3d]">
                      {milestone.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-script text-5xl text-[#0a1e3d]">
            Lifesaving Programs
          </h2>

          <p className="mt-6 leading-relaxed text-gray-700">
            Through foster homes, local adoptions, rescue transports,
            veterinary assistance, vaccination events, Trap-Neuter-Return,
            and community outreach, FAUNA has helped thousands of animals
            find safety, care, and loving homes.
          </p>

          <p className="mt-5 leading-relaxed text-gray-700">
            FAUNA also works to address the causes of animal homelessness.
            Programs such as Spay Natchitoches, community cat TNR, low-cost
            vaccinations, pet-retention support, and humane education help
            prevent animals from entering shelters in the first place.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-full border-8 border-sky-100 shadow-xl">
              <Image
                src="/History_Lifesaving.jpg"
                alt="An animal helped through FAUNA&apos;s lifesaving programs"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, 360px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-script text-5xl sm:text-6xl">
            Building the Future
          </h2>

          <div className="mt-10 flex justify-center">
            <div className="relative aspect-square w-full max-w-[460px] overflow-hidden rounded-full border-8 border-white/40 shadow-2xl">
              <Image
                src="/History_Rendering.jpg"
                alt="Rendering of the Edwina and Sam Friedman Pet Adoption and Welfare Center"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 85vw, 460px"
              />
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-white/95">
            The Edwina &amp; Sam Friedman Pet Adoption &amp; Welfare Center
            represents the next chapter in FAUNA&apos;s history.
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-white/90">
            This permanent facility will provide safe housing, adoption
            services, medical support, volunteer spaces, community programs,
            and new opportunities to serve Natchitoches Parish for generations
            to come.
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-white/90">
            FAUNA&apos;s story is still being written, and every adopter,
            foster, volunteer, donor, and community partner is part of it.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/capital-campaign">
              <Button className="h-auto bg-[#0a1e3d] px-7 py-3 font-bold text-white hover:bg-[#061424]">
                Explore the Friedman Center
              </Button>
            </Link>

            <Link href="/donate">
              <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                Help Write the Next Chapter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
