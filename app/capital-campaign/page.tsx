import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Edwina & Sam Friedman Pet Adoption and Welfare Center | FAUNA",
  description:
    "Learn about FAUNA's Edwina and Sam Friedman Pet Adoption and Welfare Center in Natchitoches Parish.",
}

const BASE = "http://www.npfauna.org/wp-content/uploads/2026/05"

const constructionImages = [
  {
    src: "/Cat area 1.png",
    alt: "Rendering of the Friedman Center cat adoption area",
  },
  {
    src: "/Cat area 2.png",
    alt: "Rendering of the Friedman Center cat housing area",
  },
  {
    src: "/Kennel area 1.5.png",
    alt: "Exterior rendering of the Friedman Center kennel area and play yard",
  },
  {
    src: "/Kennel area 2.png",
    alt: "Interior rendering of the Friedman Center kennel area",
  },
  {
    src: "/Lot 3.png",
    alt: "Rendering of the Friedman Center grounds and pond",
  },
  {
    src: "/Rendering1.png",
    alt: "Aerial rendering of the Friedman Center campus",
  },
  {
    src: "/Rendering2.png",
    alt: "Rendering of the Friedman Center parking area and grounds",
  },
  {
    src: "/Rendering3.png",
    alt: "Exterior rendering of the Friedman Center service area",
  },
  {
    src: "/Rendering5.png",
    alt: "Exterior rendering of the Friedman Center adoption entrance",
  },
  {
    src: "/Rendering6.png",
    alt: "Interior rendering of the Friedman Center community room",
  },
  {
    src: "/Rendering7.png",
    alt: "Interior rendering of the Friedman Center kennel wing",
  },
  {
    src: "/Rendering8.png",
    alt: "Rendering of the Friedman Center main entrance",
  },
  {
    src: "/Rendering9.png",
    alt: "Exterior rendering of the Friedman Center adoption center",
  },
  {
    src: "/Rendering10.png",
    alt: "Interior rendering of the Friedman Center education room",
  },
]

const facilityFeatures = [
  {
    icon: "🏥",
    title: "Community Health & Safety",
    body: "Modern facilities for spay/neuter clinics and veterinary services.",
  },
  {
    icon: "🎓",
    title: "Education & Youth Engagement",
    body: "Dedicated spaces for youth programs, humane education, and community workshops.",
  },
  {
    icon: "🤝",
    title: "Community Gathering Spaces",
    body: "Meeting rooms, adoption suites, and volunteer areas that bring neighbors together.",
  },
]

const giftImpacts = [
  "Building a permanent endowment to sustain the Friedman Center's mission for generations.",
  "Providing advanced medical equipment, safe housing, and equipment for enriching outdoor play yards and spaces where animals can heal and thrive.",
  "Supporting the dedicated staff, essential supplies, and lifesaving programs that give homeless animals the care they need and the second chances they deserve.",
]

const specialRecognitionLogos = [
  {
    src: "/special-recognition/southern-pipe.jpg",
    alt: "Southern Pipe & Supply",
  },
  {
    src: "/special-recognition/southern.png",
    alt: "Southern logo mark",
  },
  {
    src: "/special-recognition/shaw.png",
    alt: "Shaw",
  },
  {
    src: "/special-recognition/pellerin.png",
    alt: "Pellerin",
  },
  {
    src: "/special-recognition/National.png",
    alt: "National Solutions",
  },
  {
    src: "/special-recognition/lg.jpg",
    alt: "LG",
  },
  {
    src: "/special-recognition/jcla.png",
    alt: "JCLA Studios",
  },
  {
    src: "/special-recognition/element.png",
    alt: "Element 5/26 Design and Purchasing",
  },
  {
    src: "/special-recognition/coveworks.png",
    alt: "The Coveworks",
  },
  {
    src: "/special-recognition/associated.png",
    alt: "Associated Food Equipment & Supplies",
  },
]

export default function CapitalCampaignPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0a1e3d] via-[#0d2851] to-[#061424] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#8AFF00] sm:text-base">
            Coming Fall 2026
          </p>

          <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/20 text-[#8AFF00]">
            Capital Campaign
          </Badge>

          <h1 className="font-script mb-4 text-5xl leading-tight md:text-6xl">
            The Edwina and Sam Friedman
            <br />
            <span className="text-[#33CCCC]">
              Pet Adoption &amp; Welfare Center
            </span>
          </h1>

          <p className="text-xl text-gray-300">
            Generations of Hope Campaign
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A Home for Hope and a Hub for the Whole Community
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 text-center">
            <Badge className="mb-3 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Our Story
            </Badge>

            <h2 className="font-script mb-6 text-4xl text-[#0a1e3d] md:text-5xl">
              From Grass-Roots Rescue to Parish-Wide Lifesaving
            </h2>
          </div>

          <div className="mx-auto max-w-none text-center text-gray-700">
            <p className="mb-6 text-lg leading-relaxed">
              For decades, dedicated volunteers have worked to improve the
              lives of homeless animals in Natchitoches Parish, laying the
              foundation for what is now FAUNA. Today, we continue that legacy
              by implementing innovative programs and bringing together
              volunteers, donors, and public and private partners in a
              community that refuses to give up on its vulnerable animals.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              FAUNA has helped reduce the euthanasia rate in Natchitoches
              Parish, placed thousands of animals in loving homes, expanded
              access to free and low-cost vaccinations and spay/neuter
              services, and provided Trap-Neuter-Return (TNR) for community
              cats, improving the lives of both animals and the people who care
              for them.
            </p>

            <p className="text-lg leading-relaxed">
              But every milestone brings a new challenge. Our current makeshift
              structures have reached their limits and can no longer support
              the growing needs of the animals and people we serve. The Edwina
              &amp; Sam Friedman Pet Adoption &amp; Welfare Center will allow
              us to save more lives, expand our outreach programs, and deliver
              hope throughout Natchitoches Parish for generations to come.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilityFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-sky-100 bg-sky-50 p-5 text-center"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>

                <h3 className="font-script mb-2 text-2xl text-[#0a1e3d]">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-gray-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-script mb-6 text-center text-4xl text-[#0a1e3d]">
            Construction Progress
          </h2>

          <h3 className="font-script mb-3 text-center text-3xl text-[#0a1e3d]">
            Watch the Vision Come to Life
          </h3>

          <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600">
            Construction is officially underway on the Edwina &amp; Sam
            Friedman Pet Adoption &amp; Welfare Center. Take a quick look at
            the exciting progress being made as we build a brighter future for
            homeless animals throughout Natchitoches Parish.
          </p>

          <div className="mx-auto mb-10 max-w-md overflow-hidden rounded-2xl bg-[#061424] shadow-xl">
            <div className="relative aspect-[9/16]">
              <iframe
                src="https://www.youtube.com/embed/fH3VRLuTwvA"
                title="Friedman Center Construction Progress"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {constructionImages.map((image) => (
              <div
                key={image.src}
                className="relative aspect-video overflow-hidden rounded-xl bg-gray-200 shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="https://natchitochesparishjournal.com/2025/09/04/construction-underway-on-new-pet-adoption-welfare-center-in-natchitoches/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="h-auto whitespace-normal border-[#0099FF] py-3 text-[#0099FF] hover:bg-sky-50"
              >
                Read the Full Story in the Natchitoches Parish Journal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0a1e3d] to-[#0d2851] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl md:mx-0">
              <Image
                src={`${BASE}/43.png`}
                alt="Edwina and Sam Friedman"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-[#8AFF00]" />

                <span className="text-sm font-semibold uppercase tracking-wide text-[#8AFF00]">
                  A Huge Thank You
                </span>
              </div>

              <h2 className="font-script text-5xl text-white">
                Edwina &amp;
              </h2>

              <h2 className="font-script mb-6 text-5xl text-[#33CCCC]">
                Sam Friedman
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                Because of Edwina and Sam Friedman, hope now has an address.
              </p>

              <p className="leading-relaxed text-gray-400">
                Their extraordinary gift transformed a dream into a lasting
                legacy and created a place where every animal who enters and
                every community member who walks through its doors finds
                compassion, care, safety, and second chances.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="special-recognition" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Badge className="mb-4 border-[#33CCCC]/30 bg-[#33CCCC]/15 text-[#0a1e3d]">
            Special Recognition
          </Badge>

          <h2 className="font-script mb-5 text-4xl text-[#0a1e3d] md:text-5xl">
            Special Recognition
          </h2>

          <p className="mx-auto mb-10 max-w-4xl text-lg leading-relaxed text-gray-600">
            We gratefully acknowledge the companies and individuals whose
            generous in-kind gifts helped turn the vision of the Edwina &amp;
            Sam Friedman Pet Adoption &amp; Welfare Center into a reality.
            Their support has left an indelible mark on the future of animal
            welfare in our community.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {specialRecognitionLogos.map((logo) => (
              <div
                key={logo.src}
                className="relative h-36 w-36 overflow-hidden rounded-full border border-gray-200 bg-white shadow-md"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain p-4"
                  sizes="144px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/20 text-[#0a1e3d]">
            Generations of Hope
          </Badge>

          <h2 className="font-script mb-4 text-5xl text-[#0a1e3d] md:text-6xl">
            Naming Campaign
          </h2>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600">
            Your name, or the name of a person or pet you love, can be forever
            honored where second chances begin.
          </p>

          <blockquote className="my-8 text-2xl font-bold italic text-[#0099FF]">
            &ldquo;Someone believed you were worth this.&rdquo;
          </blockquote>

          <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-sky-100 bg-sky-50 p-8 text-left">
            <h3 className="font-script mb-5 text-3xl text-[#0a1e3d]">
              The Impact of Your Gift:
            </h3>

            <ul className="space-y-4">
              {giftImpacts.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-relaxed text-gray-700"
                >
                  <Star className="mt-1 h-4 w-4 shrink-0 text-[#5a9900]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#0a1e3d] px-6 py-12 text-white">
            <h2 className="font-script text-4xl text-[#33CCCC] md:text-5xl">
              Explore the Generations of Hope Campaign
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-sky-100">
              Discover naming and capital opportunities that create a lasting
              legacy while helping FAUNA provide care and second chances for
              animals throughout Natchitoches Parish.
            </p>

            <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/generations-of-hope-cover.png"
                alt="Building Generations of Hope capital campaign for the Edwina and Sam Friedman Pet Adoption and Welfare Center"
                width={1080}
                height={1080}
                className="h-auto w-full"
              />
            </div>

            <Link href="https://npfauna.netlify.app/generations-of-hope">
              <Button className="mt-8 h-auto bg-[#8AFF00] px-8 py-4 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                View Naming &amp; Capital Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
