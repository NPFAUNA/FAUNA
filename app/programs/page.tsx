import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bath,
  Cat,
  CheckCircle,
  ExternalLink,
  Heart,
  HeartPulse,
  Mail,
  PawPrint,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore FAUNA programs serving animals and pet owners throughout Natchitoches Parish.",
}

const programs = [
  {
    title: "Spay Natchitoches",
    body: "Voucher assistance that helps community pet owners access affordable spay and neuter services.",
    href: "/programs/spay-natchitoches",
    icon: Stethoscope,
  },
  {
    title: "TNR Program",
    body: "Humane Trap-Neuter-Return services that improve the health and stability of community cat colonies.",
    href: "/programs/tnr",
    icon: Cat,
  },
  {
    title: "Community Health Fairs",
    body: "Free or low-cost pop-up health fairs and partner events that help keep community pets healthy, microchipped, and loved.",
    href: "#community-health-fairs",
    icon: HeartPulse,
  },
  {
    title: "PACT Therapy",
    body: "Weekly animal-assisted visits that bring comfort, companionship, and joy to residents of local care centers and nursing homes.",
    href: "#pact",
    secondaryHref: "mailto:katcamcal@yahoo.com",
    icon: PawPrint,
  },
  {
    title: "KLAWS",
    body: "Wildlife rehabilitation that gives orphaned and injured native animals specialized care and the opportunity to return safely to the wild.",
    href: "#klaws",
    icon: Users,
  },
]

const healthFairPhotos = [
  {
    src: "/Healthfair1.jpg",
    alt: "FAUNA community pet health fair",
  },
  {
    src: "/Healthfair2.jpg",
    alt: "Pet receiving care at a FAUNA community health fair",
  },
  {
    src: "/Healthfair3.jpg",
    alt: "FAUNA volunteers and community members at a pet health fair",
  },
]

const communityHealthServices = [
  "Vaccines",
  "Microchips",
  "Nail trims and wellness checks",
  "Education on responsible pet ownership",
]

const bathDayServices = [
  "Dog baths",
  "Nail clipping",
  "Anal gland expression",
  "Bath and grooming bundles",
]

const pactBenefits = [
  "Comfort and companionship for residents",
  "Positive social interaction and conversation",
  "Moments of happiness, connection, and calm",
  "Regular visits from caring volunteers and loving animals",
]

const wildlifeSafetyTips = [
  "Keep children and pets away.",
  "Observe from a safe distance.",
  "Do not offer food, water, or medication unless directed by a wildlife rehabilitator.",
  "Avoid handling the animal with bare hands.",
  "Contact KLAWS or another permitted wildlife rehabilitator for guidance.",
]

export default function ProgramsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#061424] to-[#0a1e3d] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-script text-4xl text-[#8AFF00]">
            Compassion in action
          </p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">
            FAUNA Programs
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-200">
            Our programs support homeless animals, community cats, pet owners,
            wildlife, and families across Natchitoches Parish.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
           {["/Program_2.jpg","/Program_3.jpg","/Program_4.jpg"].map((src,index)=>(
              <div key={src} className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-44 sm:w-44">
                <Image src={src} alt={`FAUNA program ${index+1}`} fill className="object-cover" sizes="176px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {programs.map(
            ({ title, body, href, secondaryHref, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8AFF00]/20">
                  <Icon className="h-7 w-7 text-[#0a1e3d]" />
                </div>

                <h2 className="font-script text-4xl text-[#0a1e3d]">
                  {title}
                </h2>

                <p className="mt-3 text-lg leading-7 text-gray-600">{body}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={href}>
                    <Button className="bg-[#0099FF] font-bold text-white hover:bg-[#0088ee]">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  {secondaryHref && (
                    <Link href={secondaryHref}>
                      <Button
                        variant="outline"
                        className="border-[#33CCCC] font-bold text-[#167f7f] hover:bg-[#33CCCC]/10"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        PACT Inquiries
                      </Button>
                    </Link>
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section
        id="community-health-fairs"
        className="scroll-mt-24 bg-[#8AFF00] px-6 py-20 text-[#0a1e3d]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em]">
              Community Health Fairs
            </p>

            <h2 className="font-script mx-auto mt-3 max-w-4xl text-5xl sm:text-6xl">
              Keeping Pets Healthy, Microchipped, and Loved
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8">
              Through pop-up health fairs and partner events, FAUNA helps
              community pet owners access essential services and trustworthy
              information close to home.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {healthFairPhotos.map((photo) => (
              <div
                key={photo.src}
                className="mx-auto w-full max-w-[260px]"
              >
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white bg-white shadow-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 260px, 30vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0099FF]/10">
                <HeartPulse className="h-7 w-7 text-[#0099FF]" />
              </div>

              <h3 className="font-script mt-6 text-4xl">
                Free or Low-Cost Pet Care
              </h3>

              <p className="mt-4 leading-8 text-gray-700">
                Services vary by event and may be offered free or at a reduced
                cost through FAUNA and our community partners.
              </p>

              <ul className="mt-7 space-y-4">
                {communityHealthServices.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-lg text-gray-700"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#5a9900]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl bg-[#0a1e3d] p-8 text-white shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/20">
                <ShieldCheck className="h-7 w-7 text-[#33CCCC]" />
              </div>

              <h3 className="font-script mt-6 text-4xl text-[#33CCCC]">
                Accessible Care Strengthens Our Community
              </h3>

              <div className="mt-5 space-y-5 leading-8 text-gray-300">
                <p>
                  Preventive care helps pets remain healthy, protected, and
                  safely connected to the families who love them.
                </p>

                <p>
                  Microchips can help reunite lost pets with their owners,
                  while vaccines and basic wellness services help prevent
                  illness and identify health concerns early.
                </p>

                <p>
                  Responsible pet-ownership education gives families practical
                  information they can use to provide safe, lifelong care.
                </p>
              </div>
            </article>
          </div>

          <article className="mt-8 overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center bg-[#33CCCC] p-8 text-[#0a1e3d] sm:p-10">
                <Bath className="h-12 w-12" />

                <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em]">
                  A FAUNA Community Tradition
                </p>

                <h3 className="font-script mt-3 text-5xl">
                  Bath &amp; Nail Clipping Days
                </h3>

                <p className="mt-5 text-lg leading-8">
                  Clean pets, happy homes, and vital support for animals in
                  FAUNA&apos;s care.
                </p>
              </div>

              <div className="p-8 sm:p-10">
                <p className="text-lg leading-8 text-gray-700">
                  FAUNA&apos;s Bath &amp; Nail Clipping Days give local pet
                  owners access to affordable grooming services while raising
                  funds to feed, provide veterinary care for, and find homes
                  for rescue animals.
                </p>

                <h4 className="mt-8 text-xl font-extrabold text-[#0a1e3d]">
                  Services may include:
                </h4>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {bathDayServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-2xl bg-sky-50 px-4 py-4 font-semibold text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 shrink-0 text-[#0099FF]" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#8AFF00]/50 bg-[#8AFF00]/10 p-6">
                  <h4 className="text-xl font-extrabold text-[#0a1e3d]">
                    Support for FAUNA Foster Dogs
                  </h4>

                  <p className="mt-2 leading-7 text-gray-700">
                    Bath Day services are free for dogs currently in FAUNA
                    foster homes, helping them stay clean, healthy, and ready
                    for adoption.
                  </p>
                </div>

                <p className="mt-7 leading-7 text-gray-600">
                  These events also depend on volunteers who help with bathing,
                  brushing, handling, cleanup, setup, and welcoming community
                  members.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-10 text-center">
            <Link href="/events">
              <Button
                size="lg"
                className="h-auto bg-[#0a1e3d] px-8 py-4 font-bold text-white hover:bg-[#061424]"
              >
                View Upcoming Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="pact" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0099FF]">
              People and Animals Connecting Together
            </p>

            <h2 className="font-script mt-3 text-5xl text-[#0a1e3d] sm:text-6xl">
              PACT Therapy
            </h2>

            <div className="mt-10 flex justify-center">
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-sky-100 shadow-xl">
                <Image
                  src="/PACT_Header.png"
                  alt="PACT Therapy"
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-gray-600">
              Simply being around animals can bring comfort, connection, and
              so much joy to people of every age.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { src: "/PACT_1.jpg", alt: "PACT Therapy visit" },
                { src: "/PACT_2.jpg", alt: "PACT Therapy volunteer and therapy animal" },
                { src: "/PACT_3.jpg", alt: "PACT Therapy bringing comfort" },
              ].map((photo) => (
                <div
                  key={photo.src}
                  className="relative h-48 w-48 overflow-hidden rounded-full border-8 border-white shadow-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-[#0a1e3d] p-8 text-white shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8AFF00]/20">
                <Heart className="h-7 w-7 text-[#8AFF00]" />
              </div>

              <h3 className="font-script mt-6 text-4xl text-[#33CCCC]">
                Bringing Comfort Through Connection
              </h3>

              <div className="mt-6 space-y-5 leading-8 text-gray-300">
                <p>
                  FAUNA&apos;s dedicated PACT volunteers bring loving animals
                  to visit community care centers and nursing homes each week.
                  These visits create meaningful opportunities for residents
                  to experience companionship, affection, and the simple
                  happiness of spending time with an animal.
                </p>

                <p>
                  A gentle greeting, a wagging tail, or a quiet moment with a
                  friendly animal can brighten someone&apos;s day and create
                  lasting memories. For residents who may be separated from
                  their own pets, these visits can provide a familiar and
                  reassuring connection.
                </p>

                <p>
                  PACT visits also encourage conversation, social interaction,
                  and engagement among residents, volunteers, caregivers, and
                  staff.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-sky-100 bg-sky-50 p-8 shadow-lg sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#33CCCC]/20">
                <PawPrint className="h-7 w-7 text-[#167f7f]" />
              </div>

              <h3 className="font-script mt-6 text-4xl text-[#0a1e3d]">
                The Joy Animals Bring
              </h3>

              <p className="mt-5 leading-8 text-gray-700">
                Every visit is centered on kindness, patience, and positive
                interaction. Our volunteers and their animals help create a
                warm, welcoming experience for the people they meet.
              </p>

              <ul className="mt-7 space-y-4">
                {pactBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 leading-7 text-gray-700"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#5a9900]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-white p-6">
                <h4 className="text-xl font-extrabold text-[#0a1e3d]">
                  Interested in PACT?
                </h4>

                <p className="mt-2 leading-7 text-gray-600">
                  Contact the PACT team to ask about volunteer participation,
                  animal visits, or bringing the program to a community care
                  facility.
                </p>

                <Link href="mailto:katcamcal@yahoo.com">
                  <Button className="mt-5 bg-[#0099FF] font-bold text-white hover:bg-[#0088ee]">
                    <Mail className="mr-2 h-4 w-4" />
                    Email PACT
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="klaws" className="scroll-mt-24 bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0099FF]">
              Wildlife Rehabilitation
            </p>

            <h2 className="font-script mt-3 text-5xl text-[#0a1e3d] sm:text-6xl">
              About KLAWS
            </h2>

            <p className="mt-3 text-xl font-semibold text-[#167f7f] sm:text-2xl">
              Kathy&apos;s Louisiana Wildlife Sanctuary
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                {src:"/KLAWS_1.jpg",alt:"KLAWS wildlife rehabilitation"},
                {src:"/KLAWS_logo.jpg",alt:"KLAWS logo"},
                {src:"/KLAWS_3.jpg",alt:"Wildlife cared for by KLAWS"},
              ].map((photo)=>(
                <div key={photo.src} className="relative h-48 w-48 overflow-hidden rounded-full border-8 border-white shadow-xl">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="192px" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-sky-100 bg-white p-8 shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#0a1e3d]">
                Compassionate Care for Native Wildlife
              </h3>

              <div className="mt-6 space-y-5 leading-8 text-gray-700">
                <p>
                  KLAWS, Inc. &mdash; Kathy&apos;s Louisiana Wildlife Sanctuary
                  &mdash; is a Natchitoches-based nonprofit dedicated to
                  helping orphaned and injured wildlife receive the specialized
                  care they need.
                </p>

                <p>
                  Led by wildlife rehabilitator Kathy Owsley, KLAWS provides
                  compassionate, hands-on support for native animals such as
                  raccoons, squirrels, opossums, and birds.
                </p>

                <p>
                  Kathy trained with Dr. Gia Morgan and her veterinary staff in
                  Shreveport and serves as a wildlife rehabilitation
                  sub-permittee through WERLA.
                </p>
              </div>
            </article>

            <article className="rounded-3xl bg-[#0a1e3d] p-8 text-white shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#33CCCC]">
                Rescue, Rehabilitate, Release
              </h3>

              <div className="mt-6 space-y-5 leading-8 text-gray-300">
                <p>
                  The goal of wildlife rehabilitation is to give each animal
                  the best possible opportunity to return safely to its natural
                  habitat.
                </p>

                <p>
                  Animals arriving at KLAWS may be orphaned, injured,
                  displaced, or unable to survive without temporary human
                  assistance. Their care can include species-appropriate
                  housing, specialized feeding, medical support, monitoring,
                  and gradual preparation for release.
                </p>

                <p>
                  When an animal is healthy, independent, and ready to return
                  to the wild, KLAWS works to place it in a suitable release
                  environment.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-sky-100 bg-white p-8 shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#0a1e3d]">
                Serving Wildlife and the Community
              </h3>

              <div className="mt-6 space-y-5 leading-8 text-gray-700">
                <p>
                  KLAWS fills an important need in Natchitoches and the
                  surrounding region by offering residents a responsible
                  resource when they encounter wildlife in distress.
                </p>

                <p>
                  Its work also helps the community understand when a wild
                  animal truly needs intervention, how to avoid accidentally
                  separating young animals from their parents, and why wildlife
                  should be handled only by trained rehabilitators.
                </p>

                <p>
                  KLAWS is organized as a 501(c)(3) charitable nonprofit
                  focused on wildlife sanctuary and rehabilitation work.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-lg sm:p-10">
              <h3 className="font-script text-4xl text-[#0a1e3d]">
                Before You Rescue a Wild Animal
              </h3>

              <p className="mt-6 leading-8 text-gray-700">
                A young animal found alone is not always abandoned. In many
                cases, a parent may be nearby gathering food or waiting for
                people to leave.
              </p>

              <ul className="mt-7 space-y-4">
                {wildlifeSafetyTips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 leading-7 text-gray-700"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#5a9900]" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://www.facebook.com/p/KLAWS-Inc-Kathys-Louisiana-Wildlife-Sanctuary-61576190663306/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-auto bg-[#0099FF] px-7 py-3 font-bold text-white hover:bg-[#0088ee]"
              >
                Visit KLAWS on Facebook
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
