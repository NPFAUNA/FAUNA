import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Generations of Hope Campaign | FAUNA",
  description:
    "Explore naming and capital opportunities for the Edwina and Sam Friedman Pet Adoption and Welfare Center.",
}

const BASE = "http://www.npfauna.org/wp-content/uploads/2026/05"

const faqs = [
  {
    question: "Are naming gifts tax-deductible?",
    answer:
      "Yes. Naming gifts made through the Generations of Hope Campaign are tax-deductible to the extent allowed by law, as FAUNA is a 501(c)(3) nonprofit organization.",
  },
  {
    question: "How long does naming recognition last?",
    answer:
      "Naming recognition is intended to be permanent, subject to facility use and organizational needs.",
  },
  {
    question: "Can businesses or foundations participate?",
    answer:
      "Absolutely. Naming opportunities are available for individuals, families, businesses, and foundations.",
  },
  {
    question: "Can I name a space in memory or honor of someone?",
    answer:
      "Yes. Many naming opportunities are well-suited for memorial or honorary recognition.",
  },
]

export default function GenerationsOfHopePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/20 text-[#8AFF00]">
            Naming &amp; Capital Opportunities
          </Badge>

          <h1 className="font-script text-5xl leading-tight md:text-7xl">
            Generations of Hope Campaign
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sky-100">
            Create a lasting legacy at the Edwina &amp; Sam Friedman Pet
            Adoption &amp; Welfare Center and help sustain lifesaving care for
            generations to come.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-script mb-8 text-5xl text-[#0a1e3d]">
            Naming &amp; Capital Opportunities
          </h2>

          <div className="space-y-10">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="font-script text-4xl text-[#0a1e3d]">
                    Spaces of Hope
                  </h3>

                  <p className="font-semibold text-[#0099FF]">
                    $1,000 &ndash; $50,000
                  </p>
                </div>

                <Link href="mailto:npfauna@gmail.com">
                  <Button className="bg-[#0099FF] text-white hover:bg-[#0088ee]">
                    Secure a Space
                  </Button>
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {["spaces1-1", "Spaces-2-2"].map((imageName) => (
                  <div
                    key={imageName}
                    className="relative aspect-video overflow-hidden rounded-xl"
                  >
                    <Image
                      src={`${BASE}/${imageName}.png`}
                      alt="Spaces of Hope naming opportunities"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="font-script text-4xl text-[#0a1e3d]">
                    Symbols of Hope
                  </h3>

                  <p className="font-semibold text-[#33CCCC]">
                    $100 &ndash; $7,500
                  </p>
                </div>

                <Link href="mailto:npfauna@gmail.com">
                  <Button className="bg-[#33CCCC] text-white hover:bg-[#22bbbb]">
                    Secure a Symbol
                  </Button>
                </Link>
              </div>

              <div className="relative mx-auto aspect-video max-w-lg overflow-hidden rounded-xl">
                <Image
                  src={`${BASE}/Symbols-of-Hope-2.png`}
                  alt="Symbols of Hope naming opportunities"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="font-script text-4xl text-[#0a1e3d]">
                    Circle of Hope Annual Membership
                  </h3>

                  <p className="font-semibold text-[#5a9900]">
                    $300 &ndash; $12,000/year
                  </p>
                </div>

                <Link href="mailto:npfauna@gmail.com">
                  <Button className="h-auto whitespace-normal bg-[#8AFF00] font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                    Choose a Membership Level
                  </Button>
                </Link>
              </div>

              <div className="relative mx-auto aspect-video max-w-lg overflow-hidden rounded-xl">
                <Image
                  src={`${BASE}/Circle-of-Hope-2.png`}
                  alt="Circle of Hope annual membership"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
            Campaign Flipbook
          </Badge>

          <h2 className="font-script mb-6 text-4xl text-[#0a1e3d] md:text-5xl">
            Explore the Naming Campaign Flipbook
          </h2>

          <div
            className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-xl"
            style={{ paddingBottom: "60%" }}
          >
            <iframe
              src="https://online.fliphtml5.com/placeforhope/Generations-of-Hope---Updated-Tables/"
              className="absolute inset-0 h-full w-full"
              title="Generations of Hope Campaign Flipbook"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-script text-4xl text-[#0a1e3d] md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-left font-semibold text-[#0a1e3d] transition-colors hover:bg-gray-50">
                  <span>{faq.question}</span>

                  <span
                    className="ml-4 text-xl text-[#0099FF] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                  <p className="text-sm leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-script mb-4 text-5xl">
            Be Part of the Legacy
          </h2>

          <p className="mb-8 text-lg text-white/90">
            A named space is more than a plaque on a wall. It is a permanent
            beacon of hope.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:npfauna@gmail.com">
              <Button className="h-auto bg-[#8AFF00] px-8 py-4 text-base font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                Contact Us About Naming Opportunities
              </Button>
            </Link>

            <Link href="/donate">
              <Button className="h-auto bg-white px-8 py-4 text-base font-bold text-[#0099FF] hover:bg-gray-100">
                <Heart className="mr-2 h-5 w-5" />
                Make a General Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
