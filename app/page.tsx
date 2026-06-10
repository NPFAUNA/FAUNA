import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, Scissors, Cat, Stethoscope, Truck, ArrowRight, Star, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Building a Future for Natchitoches Parish Animals",
  description:
    "FAUNA is an all-volunteer 501(c)(3) animal rescue in Natchitoches, LA offering foster care, spay/neuter, TNR, community health fairs, and emergency transport.",
}

const programs = [
  {
    icon: Star,
    title: "PACT Therapy",
    description: "Pet-Assisted Crisis & Trauma therapy using the healing power of the human-animal bond.",
    color: "bg-purple-100 text-purple-700",
    href: "/programs#pact",
  },
  {
    icon: Scissors,
    title: "Spay Natchitoches",
    description: "Affordable spay and neuter services to reduce overpopulation and improve pet health.",
    color: "bg-blue-100 text-blue-700",
    href: "/programs#spay",
  },
  {
    icon: Cat,
    title: "TNR Program",
    description: "Trap-Neuter-Return humanely manages community cat populations across the parish.",
    color: "bg-orange-100 text-orange-700",
    href: "/programs#tnr",
  },
  {
    icon: Stethoscope,
    title: "Community Health Fairs",
    description: "Mobile wellness clinics with bath & nail days, vaccines, and microchipping events.",
    color: "bg-teal-100 text-teal-700",
    href: "/programs#health",
  },
  {
    icon: Truck,
    title: "Emergency Transport",
    description: "Rapid-response transport moving animals in crisis situations to safety.",
    color: "bg-red-100 text-red-700",
    href: "/programs#transport",
  },
  {
    icon: Home,
    title: "Foster Network",
    description: "A caring volunteer network providing temporary shelter and rehabilitation.",
    color: "bg-sky-100 text-[#33CCCC]",
    href: "/adopt-foster",
  },
]

const stats = [
  { value: "500+", label: "Animals Rescued" },
  { value: "200+", label: "Spay/Neuters Performed" },
  { value: "150+", label: "TNR Cats Returned" },
  { value: "3+", label: "Years Serving Natchitoches" },
]

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.4),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#33CCCC]/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Natchitoches Parish, LA · 501(c)(3) Nonprofit
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Because Every Animal
              <span className="text-[#8AFF00] block mt-1">Deserves a Home</span>
            </h1>
            <p className="text-lg sm:text-xl text-sky-50 mb-8 leading-relaxed">
              FAUNA is an all-volunteer animal rescue serving Natchitoches Parish — providing shelter,
              medical care, community programs, and second chances since 2022.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/adopt-foster">
                <Button size="lg" className="bg-[#33CCCC] hover:bg-[#269999] text-white font-semibold text-base px-6">
                  Adopt or Foster
                </Button>
              </Link>
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold text-base px-6 bg-transparent"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Support Our Mission
                </Button>
              </Link>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-sky-100 hover:text-white hover:bg-white/10 font-semibold text-base px-6"
                >
                  Our Programs <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0099FF] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-[#8AFF00]">{s.value}</div>
                <div className="text-sm text-sky-100 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#33CCCC] text-sm font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3d] mt-2 mb-5">
                Friends All United for Natchitoches Animals
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Formed in 2022 from the merger of two long-standing local rescues, FAUNA runs entirely
                on the dedication of volunteers and the generosity of our community. We are a 501(c)(3)
                nonprofit committed to humane care for every animal in Natchitoches Parish.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to advocate for homeless and neglected animals, connect them with loving
                families, and build a community of responsible pet owners — striving every day toward a
                low-kill parish.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/programs">
                  <Button className="bg-[#0099FF] hover:bg-[#007acc] text-white">Our Programs</Button>
                </Link>
                <Link href="/adopt-foster">
                  <Button variant="outline" className="border-[#0099FF] text-[#0099FF] hover:bg-sky-50">
                    Adopt or Foster
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden bg-sky-100 shadow-xl">
              <Image
                src="https://www.npfauna.org/wp-content/uploads/2025/07/F40-1-1024x683.jpg"
                alt="Animals in FAUNA's care"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#33CCCC] text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3d] mt-2 mb-4">
              Our Programs &amp; Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From therapeutic programs to emergency transport, FAUNA provides comprehensive services
              supporting both animals and the Natchitoches community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <Link key={p.title} href={p.href} className="group block">
                <Card className="border-0 shadow-md group-hover:shadow-xl transition-all duration-200 h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.color}`}>
                      <p.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-[#0a1e3d] text-lg mb-2 group-hover:text-[#33CCCC] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programs">
              <Button size="lg" className="bg-[#0099FF] hover:bg-[#007acc] text-white">
                View All Programs <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── New Shelter ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden bg-sky-100 shadow-xl order-2 lg:order-1">
              <Image
                src="https://www.npfauna.org/wp-content/uploads/2025/09/New-FAUNA-adoption-center-1.webp"
                alt="New FAUNA Pet Adoption & Welfare Center under construction"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-sky-100 text-[#0077aa] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                🏗️ Construction Underway
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3d] mb-4">
                Building Brighter Futures for Pets
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Construction is officially underway on the{" "}
                <strong className="text-[#0099FF]">
                  Edwina &amp; Sam Friedman Pet Adoption &amp; Welfare Center
                </strong>
                — a state-of-the-art facility that will transform FAUNA&apos;s capacity to rescue,
                rehabilitate, and rehome animals across Natchitoches Parish.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The <em>Generations of Hope Capital Campaign</em> is making this dream a reality.
                Your support brings us one step closer to a community where every animal has a chance
                at a loving home.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/capital-campaign">
                  <Button className="bg-[#33CCCC] hover:bg-[#269999] text-white font-semibold">
                    Learn About the Campaign
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" className="border-[#0099FF] text-[#0099FF] hover:bg-sky-50">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate to the Campaign
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-14 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, title: "Community-Driven", desc: "100% volunteer-run, rooted in Natchitoches Parish." },
              { icon: Award, title: "Committed to Welfare", desc: "Advocating for low-kill outcomes through prevention and care." },
              { icon: Heart, title: "Powered by Compassion", desc: "Every action is guided by love for animals and community." },
            ].map((v) => (
              <div key={v.title} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[#0099FF] rounded-full flex items-center justify-center mb-4">
                  <v.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0a1e3d] text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#0099FF] to-[#33CCCC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Every Animal Deserves a Chance</h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you adopt, foster, volunteer, or donate — there&apos;s a place for you in the FAUNA family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/adopt-foster">
              <Button size="lg" className="bg-white text-[#0077aa] hover:bg-sky-50 font-semibold text-base">
                Adopt or Foster
              </Button>
            </Link>
            <Link href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent"
              >
                <Heart className="h-4 w-4 mr-2" />
                Make a Donation
              </Button>
            </Link>
            <Link href="/employment">
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 font-semibold text-base"
              >
                Volunteer With Us <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
