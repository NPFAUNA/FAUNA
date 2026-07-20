import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Cat,
  ExternalLink,
  Facebook,
  Heart,
  HeartPulse,
  Instagram,
  Music2,
  PawPrint,
  Stethoscope,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const programs = [
  {
    title: "Spay Natchitoches",
    description:
      "Helping Natchitoches Parish pet owners access affordable spay and neuter services.",
    href: "/programs/spay-natchitoches",
    icon: Stethoscope,
    color: "bg-[#8AFF00]/25",
  },
  {
    title: "TNR Program",
    description:
      "Humane Trap-Neuter-Return support for community cats and their caregivers.",
    href: "/programs/tnr",
    icon: Cat,
    color: "bg-[#33CCCC]/20",
  },
  {
    title: "Community Health Fairs",
    description:
      "Low-cost core vaccines, microchipping, and basic wellness support for community pets.",
    href: "/programs#community-health-fairs",
    icon: HeartPulse,
    color: "bg-[#0099FF]/15",
  },
  {
    title: "PACT Therapy",
    description:
      "Building meaningful connections between people and animals through therapeutic visits.",
    href: "/programs#pact",
    icon: PawPrint,
    color: "bg-[#8AFF00]/25",
  },
  {
    title: "KLAWS",
    description:
      "Humane education that helps young people become compassionate and responsible pet owners.",
    href: "/programs#klaws",
    icon: Users,
    color: "bg-[#33CCCC]/20",
  },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/FaunaNatchitoches",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fauna_natchitoches/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@faunanatchitochesrescue",
    icon: Music2,
  },
]

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#8AFF00] px-6 py-16 text-[#0a1e3d] md:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/25" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#33CCCC]/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center lg:justify-start">
            <div className="flex min-h-[420px] w-full max-w-lg items-center justify-center rounded-[2.5rem] bg-[#0a1e3d] p-8 shadow-2xl sm:p-12">
              <Image
                src="/fauna-logo-white.png"
                alt="FAUNA animal rescue logo"
                width={520}
                height={600}
                className="h-auto max-h-[500px] w-full object-contain"
                priority
              />
            </div>
          </div>

          <div>
            <p className="font-script text-4xl text-[#0099FF] sm:text-5xl">
              Friends helping animals
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              A Voice for Animals in Natchitoches Parish
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8">
              FAUNA&apos;s mission is to provide and promote humane treatment
              for homeless and neglected animals in need, working together with
              the community to find them caring homes. Striving to be a
              low-kill community, we will provide programs and services to
              create a society of responsible pet owners. As animal advocates
              we will be a voice for those creatures who cannot speak for
              themselves.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/adopt-foster">
                <Button
                  size="lg"
                  className="bg-[#0099FF] font-bold text-white hover:bg-[#007acc]"
                >
                  Adopt or Foster
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-[#0a1e3d] font-bold text-white hover:bg-[#061424]"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate
                </Button>
              </Link>

              <Link href="/volunteer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0a1e3d] bg-transparent font-bold text-[#0a1e3d] hover:bg-white/40"
                >
                  Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1e3d] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <p className="font-script text-3xl text-[#8AFF00]">
              Stay connected
            </p>

            <h2 className="text-xl font-bold">Follow FAUNA on Social Media</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#0a1e3d] transition hover:-translate-y-1 hover:bg-[#8AFF00]"
              >
                <Icon className="h-5 w-5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-script text-4xl text-[#33CCCC]">
              Who we are
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
              Friends All United for Natchitoches Animals
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              FAUNA is a 501(c)(3) nonprofit dedicated to providing humane care
              for homeless animals in Natchitoches Parish, Louisiana. Through
              rescue, adoption, prevention programs, education, and community
              partnerships, we work to create better outcomes for animals and
              the people who care for them.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/history">
                <Button className="bg-[#0099FF] font-bold text-white hover:bg-[#007acc]">
                  Learn Our History
                </Button>
              </Link>

              <Link href="/programs">
                <Button
                  variant="outline"
                  className="border-[#33CCCC] font-bold text-[#0a1e3d] hover:bg-[#33CCCC]/10"
                >
                  Explore Our Programs
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-sky-100 shadow-xl lg:min-h-[450px]">
            <Image
              src="https://www.npfauna.org/wp-content/uploads/2025/07/F40-1-1024x683.jpg"
              alt="An animal receiving care through FAUNA"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#0099FF]">
              Compassion in action
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
              Programs That Strengthen Our Community
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              FAUNA&apos;s programs support homeless animals, community cats,
              pet owners, young people, and families throughout Natchitoches
              Parish.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map(
              ({ title, description, href, icon: Icon, color }) => (
                <Link key={title} href={href} className="group">
                  <Card className="h-full border-0 shadow-md transition group-hover:-translate-y-1 group-hover:shadow-xl">
                    <CardContent className="p-7">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
                      >
                        <Icon className="h-7 w-7 text-[#0a1e3d]" />
                      </div>

                      <h3 className="mt-5 text-xl font-extrabold text-[#0a1e3d] transition group-hover:text-[#0099FF]">
                        {title}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-gray-600">
                        {description}
                      </p>

                      <span className="mt-5 inline-flex items-center font-bold text-[#0099FF]">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ),
            )}
          </div>

          <div className="mt-10 text-center">
            <Link href="/programs">
              <Button
                size="lg"
                className="bg-[#0a1e3d] font-bold text-white hover:bg-[#061424]"
              >
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-sky-100 shadow-xl lg:min-h-[450px]">
            <Image
              src="https://www.npfauna.org/wp-content/uploads/2025/09/New-FAUNA-adoption-center-1.webp"
              alt="The new FAUNA adoption and welfare center"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#8AFF00]/25 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-[#0a1e3d]">
              Coming Fall 2026
            </span>

            <p className="mt-5 font-script text-4xl text-[#33CCCC]">
              A permanent home for hope
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
              Edwina &amp; Sam Friedman Pet Adoption &amp; Welfare Center
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The new Friedman Center will expand FAUNA&apos;s ability to
              provide safe shelter, compassionate care, adoption support, and
              community services for animals throughout Natchitoches Parish.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/capital-campaign">
                <Button className="bg-[#0099FF] font-bold text-white hover:bg-[#007acc]">
                  Explore the Friedman Center
                </Button>
              </Link>

              <Link href="/capital-campaign/generations-of-hope">
                <Button
                  variant="outline"
                  className="border-[#33CCCC] font-bold text-[#0a1e3d] hover:bg-[#33CCCC]/10"
                >
                  Generations of Hope
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0099FF] to-[#33CCCC] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-4xl text-[#8AFF00]">
            You can make a difference
          </p>

          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Every Animal Deserves a Chance
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8">
            Adopt, foster, volunteer, donate, or share our work. Every act of
            compassion helps create a safer future for animals in our
            community.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/adopt-foster">
              <Button
                size="lg"
                className="bg-white font-bold text-[#0a1e3d] hover:bg-sky-50"
              >
                Adopt or Foster
              </Button>
            </Link>

            <Link href="/volunteer">
              <Button
                size="lg"
                className="bg-[#0a1e3d] font-bold text-white hover:bg-[#061424]"
              >
                Volunteer with FAUNA
              </Button>
            </Link>

            <Link href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent font-bold text-white hover:bg-white/10"
              >
                <Heart className="mr-2 h-5 w-5" />
                Make a Donation
              </Button>
            </Link>
          </div>

          <a
            href="https://www.facebook.com/FaunaNatchitoches"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center font-bold text-white underline decoration-[#8AFF00] decoration-2 underline-offset-4"
          >
            See the latest FAUNA news
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
