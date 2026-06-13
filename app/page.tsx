import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, Scissors, Cat, Stethoscope, Truck, ArrowRight, Users, PawPrint } from "lucide-react"

export const metadata: Metadata = {
  title: "FAUNA | Friends All United for Natchitoches Animals",
  description:
    "FAUNA is a nonprofit animal rescue serving Natchitoches Parish through rescue, foster care, adoption, transport, spay and neuter advocacy, and community outreach.",
}

const BASE05 = "http://www.npfauna.org/wp-content/uploads/2026/05"

const stats = [
  { value: "97.5%", label: "Live Release Rate" },
  { value: "243", label: "Dog Intake" },
  { value: "53", label: "Dogs Adopted" },
  { value: "232", label: "Dogs Transported" },
  { value: "121", label: "Cat Intake" },
  { value: "25", label: "Cats Adopted" },
  { value: "84", label: "Cats Transported" },
]

const programs = [
  {
    icon: Scissors,
    title: "Spay Natchitoches",
    description: "Helping reduce pet overpopulation through spay and neuter advocacy and assistance.",
    href: "/programs#spay",
  },
  {
    icon: Heart,
    title: "PACT",
    description: "Providing Animal Comfort Therapy through the healing power of the human-animal bond.",
    href: "/programs#pact",
  },
  {
    icon: Stethoscope,
    title: "Community Pet Bath & Health Fairs",
    description: "Supporting pets and families through outreach, wellness, and community care events.",
    href: "/programs#health",
  },
  {
    icon: Cat,
    title: "TNR Program",
    description: "Trap-Neuter-Return helps humanely manage community cat populations.",
    href: "/programs#tnr",
  },
  {
    icon: Truck,
    title: "Emergency Transportation",
    description: "Helping move animals in urgent situations toward safety and care.",
    href: "/programs#transport",
  },
]

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(138,255,0,0.35),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#33CCCC]/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
                Natchitoches Parish, LA &middot; 501(c)(3) Nonprofit
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Building a More Compassionate Future
                <span className="text-[#8AFF00] block mt-1">for Animals in Natchitoches Parish</span>
              </h1>
              <p className="text-lg sm:text-xl text-sky-50 mb-4 leading-relaxed">
                FAUNA is dedicated to rescuing homeless and neglected animals, supporting responsible pet
                ownership, and expanding lifesaving opportunities throughout Natchitoches Parish.
              </p>
              <p className="text-base sm:text-lg text-sky-100 mb-8 leading-relaxed">
                What began as a community-driven effort has grown into a parish-wide movement focused on rescue,
                foster care, adoption, transport partnerships, spay and neuter advocacy, and outreach programs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/adopt-foster">
                  <Button size="lg" className="bg-[#0099FF] hover:bg-[#007acc] text-white font-semibold text-base px-6">
                    Meet Adoptable Pets
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button size="lg" className="bg-[#33CCCC] hover:bg-[#269999] text-white font-semibold text-base px-6">
                    <Heart className="h-4 w-4 mr-2" />
                    Support FAUNA
                  </Button>
                </Link>
                <Link href="/capital-campaign">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-semibold text-base px-6 bg-transparent"
                  >
                    New Adoption Center
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 w-full max-w-sm">
                <Image
                  src="79.png"
                  alt="FAUNA - Friends All United for Natchitoches Animals"
                  width={400}
                  height={454}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0099FF] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold">2025 By the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-[#8AFF00]">{s.value}</div>
                <div className="text-sm text-sky-100 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#33CCCC] text-sm font-semibold uppercase tracking-wider">Programs &amp; Services</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3d] mt-2 mb-5">
                Supporting Pets &amp; the People Who Love Them
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                FAUNA hosts programs designed to help pet owners and stray animals across Natchitoches Parish
                create the best quality of life for their pets.
              </p>
              <div className="space-y-4">
                {programs.map((program) => (
                  <Link key={program.title} href={program.href} className="block group">
                    <Card className="border-0 shadow-md group-hover:shadow-xl transition-all duration-200">
                      <CardContent className="p-5 flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#33CCCC]/10 text-[#33CCCC] flex items-center justify-center shrink-0">
                          <program.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0a1e3d] group-hover:text-[#0099FF] transition-colors">
                            {program.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/programs">
                  <Button className="bg-[#0099FF] hover:bg-[#007acc] text-white">
                    Learn More About How FAUNA Serves the Community
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-80 lg:h-[520px] rounded-3xl overflow-hidden bg-sky-100 shadow-xl">
              <Image
                src={`${BASE05}/FAUNA-ProgramsGIF.gif`}
                alt="FAUNA programs supporting animals and the community"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#33CCCC] text-sm font-semibold uppercase tracking-wider">Adopt or Foster</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3d] mt-2 mb-4">
              Meet Pets Looking for a Second Chance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Adoption and foster homes give animals the love, stability, and safety they need while they wait for
              their next chapter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {["34.png", "4.png", "32.png"].map((image) => (
              <div key={image} className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={`${BASE05}/${image}`}
                  alt="Adoptable pet through FAUNA"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/adopt-foster">
              <Button size="lg" className="bg-[#0099FF] hover:bg-[#007acc] text-white font-semibold">
                <PawPrint className="h-4 w-4 mr-2" />
                Adopt
              </Button>
            </Link>
            <Link href="/adopt-foster">
              <Button size="lg" className="bg-[#33CCCC] hover:bg-[#269999] text-white font-semibold">
                <Home className="h-4 w-4 mr-2" />
                Foster
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden bg-sky-100 shadow-xl order-2 lg:order-1">
              <Image
                src={`${BASE05}/42-3.png`}
                alt="Rendering of the Edwina and Sam Friedman Pet Adoption and Welfare Center"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block bg-[#33CCCC]/10 text-[#008b8b] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Generations of Hope Capital &amp; Naming Campaign
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3d] mb-4">
                The Future of Animal Welfare in Natchitoches Parish
              </h2>
              <h3 className="text-xl font-bold text-[#0099FF] mb-4">
                The Edwina and Sam Friedman Pet Adoption &amp; Welfare Center
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Help us leave a lasting legacy of hope for the animals and families of Natchitoches Parish.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Together, through the Edwina and Sam Friedman Pet Adoption &amp; Welfare Center, we are building
                a legacy of hope for animals across Natchitoches Parish.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/donate">
                  <Button className="bg-[#0099FF] hover:bg-[#007acc] text-white font-semibold">
                    Donate
                  </Button>
                </Link>
                <Link href="/adopt-foster">
                  <Button variant="outline" className="border-[#0099FF] text-[#0099FF] hover:bg-sky-50">
                    Foster
                  </Button>
                </Link>
                <Link href="/employment">
                  <Button variant="outline" className="border-[#33CCCC] text-[#008b8b] hover:bg-cyan-50">
                    Volunteer
                  </Button>
                </Link>
                <Link href="/capital-campaign">
                  <Button variant="ghost" className="text-[#0099FF] hover:bg-sky-50">
                    Naming Opportunities
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0099FF] to-[#33CCCC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-12 w-12 mx-auto mb-5 text-[#8AFF00]" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Be Part of the FAUNA Family</h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you donate, foster, volunteer, or adopt, your support gives animals and families a second chance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-[#0077aa] hover:bg-sky-50 font-semibold text-base">
                Donate
              </Button>
            </Link>
            <Link href="/adopt-foster">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent"
              >
                Foster
              </Button>
            </Link>
            <Link href="/employment">
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 font-semibold text-base">
                Volunteer
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
