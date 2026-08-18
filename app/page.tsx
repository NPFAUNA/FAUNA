import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Cat,
  Download,
  ExternalLink,
  Facebook,
  FileText,
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
    href: "/spay",
    icon: Stethoscope,
    color: "bg-[#8AFF00]/25",
  },
  {
    title: "TNR Program",
    description:
      "Humane Trap-Neuter-Return services that improve the health and stability of community cat colonies.",
    href: "/tnr",
    icon: Cat,
    color: "bg-[#33CCCC]/20",
  },
  {
    title: "Community Health Fairs",
    description:
      "Low-cost pop-up health fairs and partner events that help keep community pets healthy, microchipped, and loved.",
    href: "/programs#community-health-fairs",
    icon: HeartPulse,
    color: "bg-[#0099FF]/15",
  },
  {
    title: "PACT Therapy",
    description:
      "Weekly animal-assisted visits that bring comfort, companionship, and joy to residents of local care centers and nursing homes.",
    href: "/programs#pact",
    icon: PawPrint,
    color: "bg-[#8AFF00]/25",
  },
  {
    title: "KLAWS",
    description:
      "Wildlife rehabilitation that gives orphaned and injured native animals specialized care and the opportunity to return safely to the wild.",
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

const stats = [
  {
    value: "97.5%",
    label: "2025 Live-Release Rate",
  },
  {
    value: "364",
    label: "Dogs & Cats Taken In",
  },
  {
    value: "482",
    label: "Vaccines Given in 2025",
  },
  {
    value: "350+",
    label: "Community Cats Helped",
  },
]

const connectedPhotos = [
  {
    src: "/Home_1.jpg",
    alt: "An animal supported by FAUNA",
  },
  {
    src: "/Home_2.jpg",
    alt: "A FAUNA rescue animal",
  },
    {
  src: "/Boy_Dog.jpeg",
  alt: "FAUNA supporter with a dog",
},
]

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0099FF] to-[#33CCCC] px-6 py-12 text-white md:py-16">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#8AFF00]/15" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-full border-8 border-white/25 bg-[#0a1e3d] shadow-2xl">
              <Image
                src="/Homepage_Pup.jpg"
                alt="FAUNA rescue dog"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 440px"
                priority
              />
            </div>
          </div>

          <div>
            <p className="font-script text-4xl text-[#8AFF00] sm:text-5xl">
              Friends helping animals
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              A Voice for Animals in Natchitoches Parish
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/95">
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
                  className="bg-white font-bold text-[#0a1e3d] hover:bg-sky-50"
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
                  className="border-2 border-white bg-transparent font-bold text-white hover:bg-white/10"
                >
                  Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-script text-4xl text-[#33CCCC]">Who we are</p>

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

          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-[460px] overflow-hidden rounded-full border-8 border-sky-100 shadow-xl">
              <Image
                src="/Who_We_Are.jpg"
                alt="FAUNA volunteers and animals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 460px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1e3d] px-6 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="text-center md:text-left">
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

          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8">
            {connectedPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-52 sm:w-52 lg:h-64 lg:w-64"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 256px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061424] px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-[#8AFF00] sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mx-auto mt-2 max-w-[190px] text-sm font-semibold leading-snug text-[#33CCCC] sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0099FF]/10">
                <FileText className="h-10 w-10 text-[#0099FF]" />
              </div>

              <div>
                <p className="font-script text-4xl text-[#33CCCC]">
                  Our impact in action
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
                  Read FAUNA&apos;s 2025 Impact Report
                </h2>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                  Explore a year of compassion, community, and second chances
                  across Natchitoches Parish. See how adoptions, foster homes,
                  rescue partnerships, vaccines, spay and neuter programs, and
                  community outreach helped animals and families in 2025.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="/2025-impact-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#0099FF] font-bold text-white hover:bg-[#007acc]"
                  >
                    View Impact Report
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <a href="/2025-impact-report.pdf" download>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-[#0a1e3d] bg-white font-bold text-[#0a1e3d] hover:bg-sky-50"
                  >
                    Download PDF
                    <Download className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
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

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {programs.map(
              ({ title, description, href, icon: Icon, color }) => (
                <Link
                  key={title}
                  href={href}
                  className="group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <Card className="h-full border-0 shadow-md transition group-hover:-translate-y-1 group-hover:shadow-xl">
                    <CardContent className="flex h-full flex-col items-center p-7 text-center">
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

                      <span className="mt-auto inline-flex items-center pt-5 font-bold text-[#0099FF]">
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
              src="/Rendering5.png"
              alt="The Edwina and Sam Friedman Pet Adoption and Welfare Center"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
              <Link href="/friedmancenter">
                <Button className="bg-[#0099FF] font-bold text-white hover:bg-[#007acc]">
                  Explore the Friedman Center
                </Button>
              </Link>

              <Link href="/hopehasaplace">
                <Button
                  variant="outline"
                  className="border-[#33CCCC] font-bold text-[#0a1e3d] hover:bg-[#33CCCC]/10"
                >
                  Hope Has a Place Campaign
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
