import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Heart,
  MailCheck,
  PawPrint,
  Stethoscope,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Spay Natchitoches | FAUNA",
  description:
    "Apply for affordable spay and neuter assistance through FAUNA's Spay Natchitoches program.",
}

const APPLICATION_URL =
  "https://new.shelterluv.com/form/community/FAUN/14823-spay-natchitoches"

const steps = [
  {
    number: "1",
    icon: PawPrint,
    title: "Apply Online",
    description:
      "Complete the Spay Natchitoches assistance form with your contact and pet information.",
  },
  {
    number: "2",
    icon: MailCheck,
    title: "Watch Your Email Inbox or Mailbox",
    description:
      "FAUNA will contact you with the next steps and voucher information.",
  },
  {
    number: "3",
    icon: CalendarCheck,
    title: "Schedule with a Partner",
    description:
      "Contact the participating veterinary partner listed with your voucher to schedule the procedure.",
  },
  {
    number: "4",
    icon: Stethoscope,
    title: "Complete the Appointment",
    description:
      "Bring your voucher and follow the veterinary partner's pre-appointment instructions.",
  },
]

export default function SpayNatchitochesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#33CCCC]/30 bg-[#33CCCC]/15 text-[#33CCCC]">
            Accessible Care
          </Badge>

          <h1 className="font-script text-6xl leading-tight text-white sm:text-7xl">
            Spay Natchitoches
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            FAUNA helps eligible Natchitoches Parish pet owners access
            affordable spay and neuter services through participating
            veterinary partners.
          </p>

          <Link
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
              Apply for Spay Natchitoches Assistance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <div className="mt-12 flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-white/30 shadow-2xl sm:h-96 sm:w-96">
              <Image
                src="/Spay.jpg"
                alt="Spay Natchitoches"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 320px, 384px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge className="mb-4 border-red-200 bg-red-50 text-red-700">
              The Reality in Our Community
            </Badge>

            <h2 className="font-script text-5xl leading-tight text-[#0a1e3d] sm:text-6xl">
              The Truth Is Tough: Natchitoches Parish Has Too Many Homeless
              Pets
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              FAUNA works tirelessly to save as many animals as possible
              through local adoptions, rescue transports to areas with greater
              demand, foster care, and sheltering at our facility.
            </p>

            <p>
              But the reality is difficult: the number of stray and surrendered
              animals in Natchitoches Parish far exceeds the space and
              resources available to help them all.
            </p>

            <p>
              We all adore puppies and kittens, but the most responsible thing
              we can do for our animals and our community is to spay or neuter
              our pets.
            </p>

            <p className="font-semibold text-[#0a1e3d]">
              Spaying and neutering is the only long-term solution that stops
              the cycle before it begins. It reduces unwanted litters,
              prevents more animals from entering overcrowded shelters, and
              gives every pet a better chance at a safe and healthy life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Prevention Starts Early
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Why Spay and Neuter Early?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              One unplanned litter can quickly become many. Early spay and
              neuter helps prevent accidental litters and reduces the number of
              animals entering already overcrowded shelters.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Prevents accidental and unwanted litters",
                "Reduces pressure on shelters and rescue groups",
                "Helps more pets remain safely in their homes",
                "Supports a healthier animal population",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5a9900]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white p-3 shadow-xl">
            <Image
              src="/spay-neuter-facts.jpg"
              alt="Infographic explaining pet overpopulation and the importance of spaying and neutering dogs and cats early"
              width={1024}
              height={683}
              className="h-auto w-full rounded-2xl object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0a1e3d] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-10 w-10 text-[#8AFF00]" />

          <h2 className="font-script mt-5 text-5xl text-[#33CCCC] sm:text-6xl">
            Be Part of the Solution
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            If you want to be part of the solution, apply for Spay Natchitoches
            assistance to have your pet spayed or neutered.
          </p>

          <Link
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <Button className="h-auto whitespace-normal bg-[#8AFF00] px-8 py-4 text-center font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
              Apply for Spay Natchitoches Assistance
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-[#33CCCC]/30 bg-[#33CCCC]/10 text-[#167f7f]">
              Four Simple Steps
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              How to Use Spay Natchitoches
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon

              return (
                <Card
                  key={step.number}
                  className="relative border border-sky-100 shadow-md"
                >
                  <CardContent className="p-7 text-center">
                    <div className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#8AFF00] font-extrabold text-[#0a1e3d] shadow">
                      {step.number}
                    </div>

                    <div className="mx-auto mb-5 mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0099FF]">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="font-script text-3xl text-[#0a1e3d]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-script text-5xl">Ready to Apply?</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/95">
            Submit the online form and watch for a response from FAUNA with
            information about your eligibility and next steps.
          </p>

          <Link
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <Button className="h-auto bg-[#0a1e3d] px-8 py-4 font-bold text-white hover:bg-[#061424]">
              Apply for Assistance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
