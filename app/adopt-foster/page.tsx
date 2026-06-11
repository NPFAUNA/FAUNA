import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, Cat, CheckCircle, Dog, Heart, Home, PawPrint, Shield, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Adopt & Foster | FAUNA",
  description:
    "Adopt or foster dogs and cats through FAUNA, Friends All United for Natchitoches Animals.",
}

const BASE22 = "https://www.npfauna.org/wp-content/uploads/2022/11"
const BASE05 = "http://www.npfauna.org/wp-content/uploads/2026/05"

const adoptionLinks = [
  {
    title: "Adopt a Dog",
    description: "View adoptable dogs and start your Shelterluv adoption application.",
    href: "https://new.shelterluv.com/matchme/adoption/FAUN/Dog",
    icon: Dog,
  },
  {
    title: "Adopt a Cat",
    description: "View adoptable cats and start your Shelterluv adoption application.",
    href: "https://new.shelterluv.com/matchme/adoption/FAUN/Cat",
    icon: Cat,
  },
]

const fosterLinks = [
  {
    title: "Foster a Dog",
    description: "Open your home temporarily to a dog who needs safety, care, and love.",
    href: "https://new.shelterluv.com/matchme/foster/FAUN/Dog",
    icon: Dog,
  },
  {
    title: "Foster a Cat",
    description: "Help a cat or kitten thrive while they wait for their forever family.",
    href: "https://new.shelterluv.com/matchme/foster/FAUN/Cat",
    icon: Cat,
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

export default function AdoptFosterPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative overflow-hidden bg-[#061424] text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={`${BASE22}/315084086_144718381640650_1920145290093752988_n.jpg`}
            alt="FAUNA rescue animals"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#061424] via-[#0a1e3d]/95 to-[#0099FF]/45" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Badge className="mb-6 rounded-full bg-[#33CCCC] px-4 py-2 text-[#061424] hover:bg-[#33CCCC]">
              Adopt &amp; Foster
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Help a FAUNA animal find home.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-50">
              Whether you are ready to adopt or able to foster, your home can become the safe place an animal needs while they begin their next chapter.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-[#0099FF] px-8 text-white hover:bg-[#007ad1]">
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
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6">
              <Heart className="mb-4 h-10 w-10 text-[#0099FF]" />
              <h2 className="text-xl font-extrabold text-[#0a1e3d]">Adopt</h2>
              <p className="mt-2 text-gray-700">
                Give a dog or cat a permanent home and a fresh start with a loving family.
              </p>
            </div>
            <div className="rounded-3xl border border-teal-100 bg-teal-50 p-6">
              <Home className="mb-4 h-10 w-10 text-[#33CCCC]" />
              <h2 className="text-xl font-extrabold text-[#0a1e3d]">Foster</h2>
              <p className="mt-2 text-gray-700">
                Provide temporary care while FAUNA works to place animals with adopters.
              </p>
            </div>
            <div className="rounded-3xl border border-lime-100 bg-lime-50 p-6">
              <Shield className="mb-4 h-10 w-10 text-[#8AFF00]" />
              <h2 className="text-xl font-extrabold text-[#0a1e3d]">Support</h2>
              <p className="mt-2 text-gray-700">
                Every adoption, foster home, donation, and volunteer hour helps save lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="adopt" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge className="mb-4 rounded-full bg-[#0099FF] px-4 py-2 text-white hover:bg-[#0099FF]">
              Adoption
            </Badge>
            <h2 className="text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
              Ready to meet your new best friend?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              Start with the dog or cat application below, or browse the live list of available FAUNA pets.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
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
                  <h3 className="text-2xl font-extrabold text-[#0a1e3d]">{item.title}</h3>
                  <p className="mt-3 text-gray-700">{item.description}</p>
                  <div className="mt-6 inline-flex items-center font-bold text-[#0099FF]">
                    Start application
                    <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                  </div>
                </a>
              )
            })}
          </div>

          <div id="available-pets" className="rounded-[2rem] border border-sky-100 bg-white p-4 shadow-xl sm:p-6">
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#33CCCC]">
                Live Shelterluv Listing
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-[#0a1e3d] sm:text-3xl">
                Available FAUNA Pets
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-gray-700">
                This list updates automatically through Shelterluv as adoptable animals become available.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-4">
              <div id="shelterluv_wrap_1682446298867" />

              <div className="mt-4 text-center text-sm text-gray-600">
                This page is powered by Shelterluv. Learn more{" "}
                <a
                  href="http://www.shelterluv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0099FF] hover:underline"
                >
                  www.shelterluv.com
                </a>
              </div>

              <Script
                src="https://www.shelterluv.com/misc/shelterluv_embed.js"
                strategy="afterInteractive"
              />

              <Script id="shelterluv-available-pets" strategy="afterInteractive">
                {`
                  var sourceDomain = "https://www.shelterluv.com";
                  var base_path = "";
                  var GID = 42566;
                  var filters = {};
                  EmbedAvailablePets("shelterluv_wrap_1682446298867", GID, filters, 1, sourceDomain, base_path, 2);
                `}
              </Script>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge className="mb-4 rounded-full bg-[#8AFF00] px-4 py-2 text-[#061424] hover:bg-[#8AFF00]">
              Adoption Process
            </Badge>
            <h2 className="text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
              How adoption works
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
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem]">
          <Image
  src={`${BASE05}/79.png`}
  alt="FAUNA volunteer with adoptable dog"
  fill
  className="object-cover"
  unoptimized
/>
          </div>
        </div>
      </section>

      <section id="foster" className="bg-[#061424] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge className="mb-4 rounded-full bg-[#33CCCC] px-4 py-2 text-[#061424] hover:bg-[#33CCCC]">
              Foster
            </Badge>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Not ready to adopt? Fostering still saves lives.
            </h2>
            <p className="mt-5 text-lg leading-8 text-sky-50">
              Foster homes give animals a calm, loving place to decompress while FAUNA works toward adoption.
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
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#0099FF] to-[#33CCCC] p-8 text-white sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div>
                <PawPrint className="mb-5 h-12 w-12 text-[#8AFF00]" />
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Every home makes a difference.
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                  Adopting, fostering, volunteering, and sharing available pets all help FAUNA care for animals across Natchitoches Parish.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="rounded-full bg-[#061424] text-white hover:bg-[#0a1e3d]">
                  <a href="#available-pets">View Available Pets</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-[#061424]"
                >
                  <Link href="/donate">Support FAUNA</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Users className="mb-4 h-9 w-9 text-[#0099FF]" />
              <h3 className="text-xl font-extrabold text-[#0a1e3d]">Questions?</h3>
              <p className="mt-2 text-gray-700">
                FAUNA volunteers can help you understand the adoption or foster process.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Heart className="mb-4 h-9 w-9 text-[#33CCCC]" />
              <h3 className="text-xl font-extrabold text-[#0a1e3d]">Share pets</h3>
              <p className="mt-2 text-gray-700">
                Sharing adoptable animals helps them reach more potential families.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Home className="mb-4 h-9 w-9 text-[#8AFF00]" />
              <h3 className="text-xl font-extrabold text-[#0a1e3d]">Open your home</h3>
              <p className="mt-2 text-gray-700">
                A foster home gives an animal comfort, stability, and a better chance at adoption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
