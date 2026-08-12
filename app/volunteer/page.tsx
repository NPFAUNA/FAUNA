import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Volunteer With FAUNA",
  description:
    "Volunteer opportunities with Friends All United for Natchitoches Animals.",
}

const opportunities = [
  {
    title: "Foster Caregiver",
    description:
      "Provide temporary housing for animals. FAUNA covers all veterinary costs; you provide love.",
  },
  {
    title: "Event Volunteer",
    description:
      "Help staff adoption events, community health fairs, and fundraisers throughout the year.",
  },
  {
    title: "Social Media & Photography",
    description:
      "Photograph animals, create engaging content, and help FAUNA tell our story online.",
  },
  {
    title: "PACT Therapy Handler",
    description:
      "Accompany certified therapy animals on visits to schools, hospitals, senior living facilities, and community events.",
  },
  {
    title: "Veterinary Assistance",
    description:
      "Assist with vaccines, blood tests, nail trimming, intake appointments, community health fairs, and bath days.",
  },
]

const volunteerPhotos = [
  {
    src: "/Volunteer_2.jpg",
    alt: "FAUNA volunteer helping animals",
  },
  {
    src: "/Volunteer_3.jpg",
    alt: "FAUNA volunteer at a community event",
  },
  {
    src: "/Volunteer_4.jpg",
    alt: "FAUNA volunteer supporting the rescue mission",
  },
]

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-sky-50">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="font-script text-4xl text-[#33CCCC] sm:text-5xl">
            Join Our Mission
          </p>

          <h1 className="mt-3 text-5xl font-extrabold sm:text-6xl">
            Volunteer With FAUNA
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-sky-100">
            Every volunteer helps save lives. Whether you&apos;re fostering,
            photographing pets, helping at adoption events, or supporting our
            veterinary clinics, your time creates brighter futures for animals
            in Natchitoches Parish.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-white/30 shadow-2xl">
              <Image
                src="/Volunteer_1.jpg"
                alt="FAUNA volunteer"
                fill
                className="object-cover"
                sizes="320px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {opportunities.map((item) => (
              <Card
                key={item.title}
                className="w-full max-w-sm border-0 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-extrabold text-[#0099FF]">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            {volunteerPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative h-52 w-52 overflow-hidden rounded-full border-8 border-white shadow-xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="font-script text-5xl text-[#0a1e3d]">
              Ready to Help?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              We&apos;d love to have you on the FAUNA team. Complete our
              volunteer application to get started.
            </p>

            <Link
              href="https://new.shelterluv.com/form/community/FAUN/14823"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="mt-8 bg-[#0099FF] font-bold hover:bg-[#007acc]"
              >
                Submit Volunteer Application
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
