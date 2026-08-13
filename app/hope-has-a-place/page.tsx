import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ExternalLink,
  Heart,
  Mail,
  Sparkles,
  ZoomIn,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Hope Has a Place Campaign | FAUNA",
  description:
    "Explore naming and capital opportunities supporting the Edwina and Sam Friedman Pet Adoption and Welfare Center.",
}

const BASE = "http://www.npfauna.org/wp-content/uploads/2026/05"

const SPACES_OF_HOPE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9ON6iD-ia_VU0ypZTPr5bwkaI0vqVyBTXf0_p8D63S_08xg/viewform?usp=header"

const SYMBOLS_OF_HOPE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdA0f7yJru-Z-PZIQlSVzIUFc7uobfChx86xTrRfv9pBcFwNg/viewform?usp=header"

const CIRCLE_OF_HOPE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScaHXizAN7CDW97Tw9Je8t6FXDuW6wFzKij8I9MD2nvVaQ2HQ/viewform?usp=header"

const campaignEmail = "hopehasaplace@npfauna.org"

const CAMPAIGN_FLIPBOOK =
  "https://online.fliphtml5.com/placeforhope/Hope-Has-a-Place-Campaign-GfbZ/"

const SPACES_FLIPBOOK = `${CAMPAIGN_FLIPBOOK}#p=5`
const SYMBOLS_FLIPBOOK = `${CAMPAIGN_FLIPBOOK}#p=9`
const CIRCLE_FLIPBOOK = `${CAMPAIGN_FLIPBOOK}#p=12`

const faqs = [
  {
    question: "Are campaign gifts tax-deductible?",
    answer:
      "FAUNA is a 501(c)(3) nonprofit organization. Contributions may be tax-deductible to the extent allowed by law. Please consult your tax adviser regarding your individual circumstances.",
  },
  {
    question: "Can I honor a person or pet?",
    answer:
      "Yes. Naming opportunities may be used to honor or remember a person, family, organization, or beloved pet.",
  },
  {
    question: "Can a business or foundation participate?",
    answer:
      "Yes. Individuals, families, businesses, civic groups, and foundations are invited to participate in the Hope Has a Place Campaign.",
  },
  {
    question: "How do I select an available opportunity?",
    answer:
      "Choose the giving category that interests you and complete its form. A member of the FAUNA campaign team will contact you to confirm availability and discuss the next steps.",
  },
  {
    question: "Who can answer questions about the campaign?",
    answer:
      "Contact the campaign team at hopehasaplace@npfauna.org for assistance selecting a giving opportunity.",
  },
]

export default function HopeHasAPlaceCampaignPage() {
  const spacesImageOne = "/Spaces_1.png"
  const spacesImageTwo = `${BASE}/Spaces-2-2.png`
  const symbolsImage = `${BASE}/Symbols-of-Hope-2.png`
  const circleImage = `${BASE}/Circle-of-Hope-2.png`

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white md:py-28">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#0099FF]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#8AFF00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 px-4 py-1.5 text-[#8AFF00]">
            Naming &amp; Capital Opportunities
          </Badge>

          <h1 className="font-sans text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
            Hope Has a Place Campaign
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100 md:text-xl">
            Your generosity can create a lasting legacy at the Edwina &amp; Sam
            Friedman Pet Adoption &amp; Welfare Center while giving homeless
            animals the care, safety, and second chances they deserve.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300">
            Your name, or the name of a person or pet you love, can be forever
            honored where second chances begin.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={`mailto:${campaignEmail}`}>
              <Button
                variant="outline"
                className="h-auto border-white bg-transparent px-7 py-3 font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                Contact the Campaign Team
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-white/30 shadow-2xl sm:h-96 sm:w-96">
              <Image
                src="/Rendering1.png"
                alt="Rendering of the future Friedman Center"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 320px, 384px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Sparkles className="mx-auto mb-4 h-9 w-9 text-[#0099FF]" />

            <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
              A Lasting Legacy of Compassion
            </h2>

            <blockquote className="mx-auto mt-6 max-w-2xl text-2xl font-bold italic leading-relaxed text-[#0099FF]">
              &ldquo;Someone believed you were worth this.&rdquo;
            </blockquote>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-lg">
              <div className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] px-6 py-5 text-center">
                <h3 className="font-script text-3xl text-white">
                  Spaces of Hope
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-7 text-center">
                <p className="text-xl font-bold leading-relaxed text-[#0a1e3d]">
                  Name a meaningful space within the facility.
                </p>

                <div className="mx-auto my-5 h-px w-16 bg-sky-200" />

                <p className="leading-relaxed text-gray-600">
                  Help create places where healing, compassionate care, and
                  second chances begin.
                </p>

                <Badge className="mx-auto mt-6 border-[#0099FF]/20 bg-[#0099FF]/10 px-4 py-2 text-base text-[#0078c9]">
                  $1,000 &ndash; $50,000
                </Badge>

                <Link href="#spaces-of-hope" className="mt-auto pt-7">
                  <Button className="h-auto w-full bg-[#0099FF] px-6 py-3 font-bold text-white hover:bg-[#0088ee]">
                    View Spaces of Hope
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-lg">
              <div className="bg-gradient-to-r from-[#0099FF] to-[#8AFF00] px-6 py-5 text-center">
                <h3 className="font-script text-3xl text-[#061424]">
                  Symbols of Hope
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-7 text-center">
                <p className="text-xl font-bold leading-relaxed text-[#0a1e3d]">
                  Honor a beloved pet or person with a lasting tribute.
                </p>

                <div className="mx-auto my-5 h-px w-16 bg-teal-200" />

                <p className="leading-relaxed text-gray-600">
                  Choose from pavers, leaves, pawprints, benches, memorial
                  trees, and other meaningful symbols.
                </p>

                <Badge className="mx-auto mt-6 border-[#33CCCC]/30 bg-[#33CCCC]/10 px-4 py-2 text-base text-[#167f7f]">
                  $100 &ndash; $7,500+
                </Badge>

                <Link href="#symbols-of-hope" className="mt-auto pt-7">
                  <Button className="h-auto w-full bg-[#33CCCC] px-6 py-3 font-bold text-[#061424] hover:bg-[#29b8b8]">
                    View Symbols of Hope
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-lime-100 bg-white shadow-lg">
              <div className="bg-gradient-to-r from-[#33CCCC] to-[#8AFF00] px-6 py-5 text-center">
                <h3 className="font-script text-3xl text-[#061424]">
                  Circle of Hope
                </h3>

                <p className="mt-1 font-semibold italic text-[#0a1e3d]">
                  Membership
                </p>
              </div>

              <div className="flex flex-1 flex-col p-7 text-center">
                <p className="text-xl font-bold leading-relaxed text-[#0a1e3d]">
                  Provide dependable monthly or annual support.
                </p>

                <div className="mx-auto my-5 h-px w-16 bg-lime-200" />

                <p className="leading-relaxed text-gray-600">
                  Help sustain lifesaving animal care, rescue efforts, staffing,
                  supplies, and community programs year-round.
                </p>

                <Badge className="mx-auto mt-6 border-[#8AFF00]/40 bg-[#8AFF00]/20 px-4 py-2 text-base text-[#356600]">
                  $300 &ndash; $12,000 Per Year
                </Badge>

                <Link href="#circle-of-hope" className="mt-auto pt-7">
                  <Button className="h-auto w-full bg-[#8AFF00] px-6 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                    View Circle of Hope
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="giving-opportunities"
        className="scroll-mt-24 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Choose Your Impact
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Naming &amp; Capital Opportunities
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
              Select a giving level below to view the available opportunities
              and submit your interest directly to FAUNA.
            </p>

            <p className="mx-auto mt-3 flex max-w-3xl items-center justify-center gap-2 text-sm font-semibold text-[#0099FF]">
              <ZoomIn className="h-4 w-4" />
              Click any giving-level image to open the full-size version.
            </p>
          </div>

          <div className="space-y-12">
            <article
              id="spaces-of-hope"
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-xl"
            >
              <div className="grid items-stretch lg:grid-cols-[1.2fr_0.8fr]">
                <div className="bg-sky-50 p-5 sm:p-8">
                  <div className="grid h-full gap-6 xl:grid-cols-2">
                    <a
                      href={spacesImageOne}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open the full-size Spaces of Hope naming opportunities image"
                      className="group relative block min-h-[520px] cursor-zoom-in overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <Image
                        src={spacesImageOne}
                        alt="Spaces of Hope naming opportunities and giving levels"
                        fill
                        className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                        unoptimized
                      />

                      <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                        <ZoomIn className="h-4 w-4" />
                        Click to Enlarge
                      </span>
                    </a>

                    <a
                      href={spacesImageTwo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open the full-size additional Spaces of Hope naming opportunities image"
                      className="group relative block min-h-[520px] cursor-zoom-in overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <Image
                        src={spacesImageTwo}
                        alt="Additional Spaces of Hope naming opportunities and giving levels"
                        fill
                        className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                        unoptimized
                      />

                      <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                        <ZoomIn className="h-4 w-4" />
                        Click to Enlarge
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <Badge className="mb-5 w-fit border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
                    $1,000 &ndash; $50,000
                  </Badge>

                  <h3 className="font-script text-5xl text-[#0a1e3d]">
                    Spaces of Hope
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-gray-600">
                    Create a meaningful and visible legacy by naming a space
                    within the Friedman Center. These opportunities recognize
                    the people and pets whose lives have inspired compassion,
                    generosity, and hope.
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    Review the giving-level images to explore available rooms,
                    care areas, gathering spaces, and other naming
                    opportunities.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={SPACES_OF_HOPE_FORM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="h-auto bg-[#0099FF] px-7 py-3 font-bold text-white hover:bg-[#0088ee]">
                        Reserve a Space
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                    <Link
                      href={SPACES_FLIPBOOK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="h-auto border-[#0099FF] px-7 py-3 font-bold text-[#0099FF] hover:bg-sky-50"
                      >
                        View in Flipbook
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article
              id="symbols-of-hope"
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-xl"
            >
              <div className="grid items-stretch lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:order-1 lg:p-14">
                  <Badge className="mb-5 w-fit border-[#33CCCC]/30 bg-[#33CCCC]/10 text-[#167f7f]">
                    $100 &ndash; $7,500
                  </Badge>

                  <h3 className="font-script text-5xl text-[#0a1e3d]">
                    Symbols of Hope
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-gray-600">
                    Honor a person, family, organization, or cherished pet
                    through a special symbol of hope displayed at the Friedman
                    Center.
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    These opportunities offer meaningful recognition at a
                    variety of giving levels, making it possible for donors
                    throughout the community to become part of the
                    center&apos;s lasting story.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={SYMBOLS_OF_HOPE_FORM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="h-auto bg-[#33CCCC] px-7 py-3 font-bold text-[#061424] hover:bg-[#29b8b8]">
                        Reserve a Symbol
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                    <Link
                      href={SYMBOLS_FLIPBOOK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="h-auto border-[#33CCCC] px-7 py-3 font-bold text-[#167f7f] hover:bg-teal-50"
                      >
                        View in Flipbook
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="bg-teal-50 p-5 sm:p-8 lg:order-2">
                  <a
                    href={symbolsImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the full-size Symbols of Hope opportunities image"
                    className="group relative block min-h-[620px] cursor-zoom-in overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Image
                      src={symbolsImage}
                      alt="Symbols of Hope recognition opportunities and giving levels"
                      fill
                      className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
                      unoptimized
                    />

                    <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                      <ZoomIn className="h-4 w-4" />
                      Click to Enlarge
                    </span>
                  </a>
                </div>
              </div>
            </article>

            <article
              id="circle-of-hope"
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-lime-100 bg-white shadow-xl"
            >
              <div className="grid items-stretch lg:grid-cols-[1.2fr_0.8fr]">
                <div className="bg-lime-50 p-5 sm:p-8">
                  <a
                    href={circleImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the full-size Circle of Hope membership image"
                    className="group relative block min-h-[620px] cursor-zoom-in overflow-hidden rounded-2xl border border-lime-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Image
                      src={circleImage}
                      alt="Circle of Hope annual membership levels"
                      fill
                      className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
                      unoptimized
                    />

                    <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                      <ZoomIn className="h-4 w-4" />
                      Click to Enlarge
                    </span>
                  </a>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <Badge className="mb-5 w-fit border-[#8AFF00]/40 bg-[#8AFF00]/20 text-[#356600]">
                    $300 &ndash; $12,000 Per Year
                  </Badge>

                  <h3 className="font-script text-5xl text-[#0a1e3d]">
                    Circle of Hope
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-[#5a9900]">
                    Annual Membership
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-gray-600">
                    Join a dedicated community of annual supporters committed
                    to sustaining the Friedman Center and FAUNA&apos;s
                    lifesaving mission year after year.
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    Circle of Hope memberships provide dependable support for
                    animal care, staffing, supplies, medical services, and
                    community programs.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={CIRCLE_OF_HOPE_FORM}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                        Join the Circle of Hope
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                    <Link
                      href={CIRCLE_FLIPBOOK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="h-auto border-[#8AFF00] px-7 py-3 font-bold text-[#356600] hover:bg-lime-50"
                      >
                        View in Flipbook
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Helpful Information
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#0a1e3d] transition-colors hover:bg-sky-50">
                  <span>{faq.question}</span>

                  <span
                    className="text-2xl font-light text-[#0099FF] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-gray-100 px-6 py-5">
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto mb-5 h-10 w-10 fill-white text-white" />

          <h2 className="font-script text-5xl sm:text-6xl">
            Be Part of the Legacy
          </h2>

          <div className="mt-10 mb-10 text-center">
            <Badge className="mb-4 border-[#33CCCC]/30 bg-[#33CCCC]/15 text-[#33CCCC]">
              Campaign Guide
            </Badge>

            <h2 className="font-sans text-5xl font-extrabold text-white sm:text-6xl">
              Explore the Campaign Flipbook
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-sky-100">
              Browse the complete Hope Has a Place Campaign guide to learn more
              about the Friedman Center and the opportunities available.
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
            style={{ paddingBottom: "60%" }}
          >
            <iframe
              src={CAMPAIGN_FLIPBOOK}
              className="absolute inset-0 h-full w-full"
              title="Hope Has a Place Campaign flipbook"
              allowFullScreen
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href={CAMPAIGN_FLIPBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[#8AFF00] underline underline-offset-4"
            >
              Open the campaign guide in a larger window
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/95">
            A campaign gift is more than recognition. It is a permanent
            expression of compassion and a promise of hope for animals and
            families throughout Natchitoches Parish.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={`mailto:${campaignEmail}`}>
              <Button className="h-auto bg-[#0a1e3d] px-7 py-3 font-bold text-white hover:bg-[#061424]">
                <Mail className="mr-2 h-4 w-4" />
                Contact the Campaign Team
              </Button>
            </Link>

            <Link href="/donate">
              <Button className="h-auto bg-white px-7 py-3 font-bold text-[#0099FF] hover:bg-gray-100">
                <Heart className="mr-2 h-4 w-4" />
                Make a General Donation
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/90">
            <Link
              href={`mailto:${campaignEmail}`}
              className="font-semibold underline underline-offset-4"
            >
              {campaignEmail}
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
