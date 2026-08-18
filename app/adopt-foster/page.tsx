import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Cat,
  CheckCircle,
  Dog,
  Heart,
  Home,
  Mail,
  Shield,
} from "lucide-react"

import { ShelterluvAvailablePets } from "@/components/shelterluv-available-pets"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Adopt & Foster | FAUNA",
  description:
    "Adopt or foster dogs and cats through FAUNA, Friends All United for Natchitoches Animals.",
}

const BASE05 = "http://www.npfauna.org/wp-content/uploads/2026/05"

const adoptionLinks = [
  {
    title: "Adopt a Dog",
    description:
      "View adoptable dogs and start your Shelterluv adoption application.",
    href: "https://new.shelterluv.com/matchme/adopt/FAUN/Dog",
    icon: Dog,
  },
  {
    title: "Adopt a Cat",
    description:
      "View adoptable cats and start your Shelterluv adoption application.",
    href: "https://new.shelterluv.com/matchme/adopt/FAUN/Cat",
    icon: Cat,
  },
]

const fosterLinks = [
  {
    title: "Foster a Dog",
    description:
      "Open your home temporarily to a dog who needs safety, care, and love.",
    href: "https://new.shelterluv.com/matchme/foster/FAUN/Dog",
    icon: Dog,
  },
  {
    title: "Foster a Cat",
    description:
      "Help a cat or kitten thrive while they wait for their forever family.",
    href: "https://new.shelterluv.com/matchme/foster/FAUN/Cat",
    icon: Cat,
  },
]

const adoptionPhotos = [
  {
    src: "/Adopt_1.jpg",
    alt: "FAUNA adoptable animal",
  },
  {
    src: "/Adopt_2.jpg",
    alt: "Animal available for adoption through FAUNA",
  },
 {
  src: "/Adopt_Foster.JPEG",
  alt: "FAUNA cat ready for adoption",
},
]

const fosterPhotos = [
  {
    src: "/Foster_1.jpg",
    alt: "FAUNA animal in foster care",
  },
  {
    src: "/Foster_2.jpg",
    alt: "Foster animal supported by FAUNA",
  },
 {
  src: "/Bottom_Right.jpg",
  alt: "FAUNA animal in foster care",
},
]

const steps = [
  "Browse available pets or choose the dog or cat adoption application.",
  "Complete the Shelterluv application with your household and pet-care information.",
  "FAUNA reviews the application and follows up about the best next steps.",
  "Approved adopters finalize the adoption and welcome their new family member home.",
]

const fosterBenefits = [
  "FAUNA provides guidance and support.",
  "Fostering makes room for more animals in need.",
  "Short-term care can lead to lifelong impact.",
  "It is a great option if you cannot adopt permanently.",
]

function ScriptTitle({ title }: { title: string }) {
  return (
    <>
      {title.split(/([A-Z]{2,})/).map((part, index) =>
        /^[A-Z]{2,}$/.test(part) ? (
          <span key={`${part}-${index}`} className="font-brand-caps">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

export default function AdoptFosterPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#061424] text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={`${BASE05}/79.png`}
            alt="FAUNA rescue animals"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#061424] via-[#0a1e3d]/95 to-[#0099FF]/45" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Badge className="mb-6 rounded-full bg-[#33CCCC] px-4 py-2 text-[#061424] hover:bg-[#33CCCC]">
              Adopt &amp; Foster
            </Badge>

            <h1 className="font-script text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              <ScriptTitle title="Help a FAUNA Animal Find A Home" />
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-50">
              Whether you are ready to adopt or able to foster, your home can
              become the safe place an animal needs while they begin their next
              chapter.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#0099FF] px-8 text-white hover:bg-[#007ad1]"
              >
                <a href="#available-pets">
                  See Available Pets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#8AFF00] bg-transparent px-8 text-[#8AFF00] hover:bg-[#8AFF00] hover:text-[#061424]"
              >
                <a href="#foster">Learn About Fostering</a>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-8 border-white/15 bg-white shadow-2xl">
              <Image
                src="/Adopt_Header.jpg"
                alt="FAUNA adoptable animal"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adopt, Foster, Support */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6">
              <Heart className="mb-4 h-10 w-10 text-[#0099FF]" />

              <h2 className="text-xl font-extrabold text-[#0a1e3d]">
                Adopt
              </h2>

              <p className="mt-2 text-gray-700">
                Give a dog or cat a permanent home and a fresh start with a
                loving family.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-teal-50 p-6">
              <Home className="mb-4 h-10 w-10 text-[#33CCCC]" />

              <h2 className="text-xl font-extrabold text-[#0a1e3d]">
                Foster
              </h2>

              <p className="mt-2 text-gray-700">
                Provide temporary care while FAUNA works to place animals with
                adopters.
              </p>
            </div>

            <div className="rounded-3xl border border-lime-100 bg-lime-50 p-6">
              <Shield className="mb-4 h-10 w-10 text-[#5a9900]" />

              <h2 className="text-xl font-extrabold text-[#0a1e3d]">
                Support
              </h2>

              <p className="mt-2 text-gray-700">
                Every adoption, foster home, donation, and volunteer hour helps
                save lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption */}
      <section id="adopt" className="scroll-mt-28 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-5xl text-center">
            <Badge className="mb-4 rounded-full bg-[#0099FF] px-4 py-2 text-white hover:bg-[#0099FF]">
              Adoption
            </Badge>

            <h2 className="font-script text-4xl leading-tight text-[#0a1e3d] sm:text-5xl">
              <ScriptTitle title="Ready to Meet Your New Best Friend?" />
            </h2>

            <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
              {adoptionPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="mx-auto w-full max-w-[230px]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white bg-white shadow-xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 230px, 30vw"
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-gray-700">
              Browse the live list of available FAUNA pets, then choose the dog
              or cat adoption application below.
            </p>
          </div>

          <div
            id="available-pets"
            className="scroll-mt-28 rounded-[2rem] border border-sky-100 bg-white p-4 shadow-xl sm:p-6"
          >
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#33CCCC]">
                Live Shelterluv Listing
              </p>

              <h3 className="font-script mt-2 text-4xl text-[#0a1e3d] sm:text-5xl">
                <ScriptTitle title="Available FAUNA Pets" />
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-gray-700">
                This list updates automatically through Shelterluv as adoptable
                animals become available.
              </p>
            </div>

            <ShelterluvAvailablePets />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {adoptionLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0099FF] text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0a1e3d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-700">{item.description}</p>

                  <div className="mt-6 inline-flex items-center font-bold text-[#0099FF]">
                    Start application
                    <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge className="mb-4 rounded-full bg-[#8AFF00] px-4 py-2 text-[#061424] hover:bg-[#8AFF00]">
              Adoption Process
            </Badge>

            <h2 className="font-script text-4xl leading-tight text-[#0a1e3d] sm:text-5xl">
              <ScriptTitle title="How Adoption Works" />
            </h2>

            <div className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0099FF] text-sm font-extrabold text-white">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-gray-700">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-[#0a1e3d]">
                Questions about the adoption process or fees?
              </h3>

              <p className="mt-2 leading-7 text-gray-700">
                Contact FAUNA and our team will be happy to help.
              </p>

              <a
                href="mailto:rescue@npfauna.org?subject=Adoption Process Question"
                className="mt-5 inline-block"
              >
                <Button className="bg-[#0099FF] font-bold text-white hover:bg-[#007ad1]">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>

          <div className="relative min-h-[720px] overflow-hidden rounded-[2rem]">
            <Image
              src={`${BASE05}/34.png`}
              alt="FAUNA volunteer with adoptable dog"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Foster */}
      <section
        id="foster"
        className="scroll-mt-28 bg-[#061424] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 rounded-full bg-[#33CCCC] px-4 py-2 text-[#061424] hover:bg-[#33CCCC]">
                Foster
              </Badge>

              <h2 className="font-script text-4xl leading-tight text-white sm:text-5xl">
                <ScriptTitle title="Not Ready to Adopt? Fostering Still Saves Lives" />
              </h2>

              <div className="mt-6">
                <Button
                  asChild
                  className="h-auto bg-[#8AFF00] px-6 py-3 font-bold text-[#061424] hover:bg-[#7aee00]"
                >
                  <Link href="/foster-faq">
                    Read the Foster FAQ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="mt-5 text-lg leading-8 text-sky-50">
                Foster homes give animals a calm, loving place to decompress
                while FAUNA works toward adoption.
              </p>

              <div className="mt-8 grid gap-4">
                {fosterBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#8AFF00]" />
                    <p className="text-sky-50">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {fosterLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-3xl border border-white/10 bg-white/10 p-7 transition hover:bg-white/15"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#33CCCC] text-[#061424]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-2xl font-extrabold">{item.title}</h3>

                    <p className="mt-2 text-sky-50">{item.description}</p>

                    <div className="mt-5 inline-flex items-center font-bold text-[#8AFF00]">
                      Apply to foster
                      <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {fosterPhotos.map((photo) => (
              <div
                key={photo.src}
                className="mx-auto w-full max-w-[230px]"
              >
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white/20 bg-white/10 shadow-2xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 230px, 30vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
