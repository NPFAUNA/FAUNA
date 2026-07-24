import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "TNR Program",
  description:
    "FAUNA's humane Trap-Neuter-Return program for community cats in Natchitoches Parish.",
}

const benefits = [
  {
    title: "Healthier Colonies",
    body: "Spay/neuter surgery and core vaccinations improve the health of community cats while reducing disease transmission.",
  },
  {
    title: "Stable Populations",
    body: "TNR prevents continuous breeding cycles and helps stabilize colony size over time.",
  },
  {
    title: "Calmer Colonies",
    body: "Sterilization can reduce fighting, spraying, yowling, and other nuisance behaviors.",
  },
]

const steps = [
  {
    title: "Submit a TNR Request",
    body: "Complete FAUNA's online TNR form to report a free-roaming community cat or colony.",
  },
  {
    title: "Plan and Trap",
    body: "FAUNA coordinates humane trapping and provides instructions for safe handling and transport.",
  },
  {
    title: "Veterinary Care",
    body: "Cats receive spay/neuter surgery, core vaccinations, and an ear-tip to indicate they are sterilized.",
  },
  {
    title: "Return",
    body: "After recovery, each cat is returned to its familiar outdoor colony and caregiver.",
  },
]

export default function TnrPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061424] to-[#0a1e3d] px-6 py-20 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#33CCCC]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#8AFF00]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="font-script text-4xl text-[#33CCCC]">
              Community cat care
            </p>

            <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">
              TNR Program
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-200">
              FAUNA&apos;s Trap-Neuter-Return Program humanely traps community
              cats, provides spay/neuter surgery and core vaccinations, then
              returns each cat to its familiar outdoor colony.
            </p>
          </div>

          <div className="mx-auto lg:mx-0">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-white/15 bg-white shadow-2xl sm:h-72 sm:w-72">
              <Image
                src="/publictnr-cat.jpg"
                alt="Black and white community cat"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-teal-100 bg-white p-7 shadow-sm"
              >
                <h2 className="font-script text-3xl text-[#0a1e3d]">
                  {benefit.title}
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  {benefit.body}
                </p>
              </article>
            ))}
          </div>

          <h2 className="mt-16 text-center text-3xl font-extrabold text-[#0a1e3d]">
            How the TNR Process Works
          </h2>

          <div className="mx-auto mt-9 max-w-4xl space-y-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-5 rounded-2xl bg-sky-50 p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0099FF] font-bold text-white">
                  {index + 1}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-[#0a1e3d]">
                    {step.title}
                  </h3>

                  <p className="mt-1 leading-7 text-gray-600">{step.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://new.shelterluv.com/form/community/FAUN/14823-tnr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#8AFF00] font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                Submit a TNR Request
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
