import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Dog,
  ExternalLink,
  Heart,
  Home,
  Mail,
  PawPrint,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Foster Frequently Asked Questions | FAUNA",
  description:
    "Learn what to expect when fostering a dog or cat with FAUNA, what supplies and veterinary care are provided, and how to become a foster family.",
}

const fosterBenefits = [
  {
    icon: Home,
    title: "Flexible Commitment",
    description:
      "Foster stays vary from a few days to several months depending on the animal and their adoption or transport plan.",
  },
  {
    icon: ShieldCheck,
    title: "Medical Care Provided",
    description:
      "FAUNA covers approved veterinary care, vaccinations, medications, and other necessary medical treatment.",
  },
  {
    icon: PawPrint,
    title: "Support Along the Way",
    description:
      "Our foster mentors are available to answer questions and help you navigate your foster pet's needs.",
  },
  {
    icon: Heart,
    title: "Lifesaving Impact",
    description:
      "Every foster home creates space for another homeless animal to receive safety, care, and a second chance.",
  },
]

const generalFaqs = [
  {
    question: "What should I expect?",
    answer: (
      <>
        <p>
          Taking a foster pet into your home to prepare them for the next phase
          of their life is a crucial part of the rescue process. Foster
          families are expected to treat their foster pet like a member of the
          family and provide daily care, attention, structure, and a consistent
          routine.
        </p>

        <p className="mt-4">
          Dogs need exercise, training, enrichment, and opportunities to
          practice good household habits. Cats need playtime, enrichment, a
          safe place to settle, and help building trust. Foster families may
          also need to help manage veterinary appointments and medical-care
          schedules.
        </p>

        <p className="mt-4">
          As you get to know your foster cat or dog, you will help FAUNA promote
          them for adoption by sharing personality information, writing a
          biography, and taking clear photographs. You may also be asked to
          bring a foster dog to an adoption event with advance notice.
        </p>

        <p className="mt-4">
          FAUNA&apos;s foster mentors are available to help through text,
          Facebook, or in person when needed.
        </p>
      </>
    ),
  },
  {
    question: "What is provided by FAUNA for fosters?",
    answer: (
      <>
        <p>
          FAUNA works to provide the basic supplies needed to care for your
          foster cat or dog. Available supplies may include:
        </p>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Crate or kennel",
            "Collar and leash",
            "Litter box",
            "Food and water bowls",
            "Approved veterinary care",
            "Vaccinations and medications",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#33CCCC]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4">
          Supplies that you are able to provide help preserve FAUNA&apos;s
          resources for another animal in need. Many foster families choose to
          purchase food as an additional donation, but FAUNA will work with you
          when that is not possible.
        </p>

        <p className="mt-4">
          Treats and toys may also be available when donated. Anything extra
          you choose to provide may be tax-deductible, so feel free to spoil
          your foster pet.
        </p>

        <p className="mt-4">
          Free summer bath days may also be available for foster dogs.
        </p>
      </>
    ),
  },
  {
    question: "How long will I have my foster?",
    answer: (
      <>
        <p>
          The honest answer is: until the animal finds the right home or moves
          to the next step in their rescue plan.
        </p>

        <p className="mt-4">
          Some animals need only a few days or weeks of foster care, while
          others may remain in foster care longer. Every animal&apos;s timeline
          is different.
        </p>

        <p className="mt-4">
          Some heartworm-negative dogs may be eligible for transport to rescue
          partners in other states. In those cases, a foster home may only be
          needed for a short period while transportation is arranged. Even a
          short foster stay creates room for another dog to leave Animal
          Control.
        </p>
      </>
    ),
  },
  {
    question: "What if I go on vacation while fostering?",
    answer: (
      <>
        <p>
          FAUNA has a network of volunteers who may be able to provide
          temporary care while foster families travel.
        </p>

        <p className="mt-4">
          Volunteers may also sign up specifically as foster sitters. Advance
          notice is very helpful so FAUNA has time to coordinate temporary
          care.
        </p>
      </>
    ),
  },
  {
    question: "Will I be sad when my foster animal is adopted?",
    answer: (
      <>
        <p>
          Letting a foster pet go can be emotional, especially the first time.
          Nearly every experienced foster family understands that feeling.
        </p>

        <p className="mt-4">
          Seeing an animal join a loving family is also incredibly rewarding.
          You helped prepare that pet for success and made room for another
          animal to be rescued.
        </p>

        <p className="mt-4">
          When appropriate, FAUNA can help foster families and adopters share
          updates during the transition. Many adopters enjoy sending photos and
          stories, and local adopters may visit FAUNA events with their new
          family member.
        </p>
      </>
    ),
  },
  {
    question: "What if I want to adopt my foster cat or dog?",
    answer: (
      <>
        <p>
          It happens all the time. We lovingly call it a &ldquo;foster
          failure,&rdquo; although finding the perfect home is always a success.
        </p>

        <p className="mt-4">
          Contact FAUNA as soon as you believe your foster pet may belong with
          your family so the team can explain the adoption process and confirm
          the next steps.
        </p>
      </>
    ),
  },
]

const dogFaqs = [
  {
    question: "I do not have a fence. Is that okay?",
    answer: (
      <>
        <p>
          A secure fence is preferred, but it is not always required. Foster
          dogs must remain safely secured outdoors.
        </p>

        <p className="mt-4">
          If you are comfortable putting your foster dog on a leash and going
          outside with them every time, you may still be able to foster.
          Regular leash walks are encouraged because they help dogs prepare for
          routines they may have in their future homes.
        </p>
      </>
    ),
  },
  {
    question: "Can my foster dog be loose in my house during the day?",
    answer: (
      <>
        <p>
          During the adjustment period, FAUNA recommends keeping foster dogs in
          a secure crate or kennel when you are away from home and when you are
          asleep.
        </p>

        <p className="mt-4">
          This helps protect your home, keeps the dog safe, and builds a routine
          that may continue in their adoptive home.
        </p>

        <p className="mt-4">
          Foster dogs should not be left outside unattended. Many rescue dogs
          are frightened by storms, unfamiliar noises, or sudden changes in
          their environment.
        </p>
      </>
    ),
  },
  {
    question: "Am I ready for fostering?",
    answer: (
      <>
        <p>
          You may not know until you try. FAUNA will do its best to match you
          with an animal whose needs fit your household, experience, schedule,
          and comfort level.
        </p>

        <p className="mt-4">
          Fostering is a learning experience, and you will not be expected to
          know everything on the first day. The foster team will help you build
          confidence along the way.
        </p>
      </>
    ),
  },
]

export default function FosterFaqPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] px-6 py-20 text-white md:py-28">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0099FF]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#8AFF00]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 px-4 py-1.5 text-[#8AFF00]">
            Foster Resources
          </Badge>

          <p className="font-script text-5xl leading-tight text-[#33CCCC] sm:text-6xl md:text-7xl">
            Open Your Home
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Foster Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100 md:text-xl">
            Thinking about opening your home to a homeless dog or cat? Learn
            what to expect, what FAUNA provides, and how foster families help
            animals prepare for their next chapter.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="https://new.shelterluv.com/matchme/foster/FAUN/Dog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                Foster a Dog
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link
              href="https://new.shelterluv.com/matchme/foster/FAUN/Cat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-auto bg-[#33CCCC] px-7 py-3 font-bold text-[#061424] hover:bg-[#29b8b8]">
                Foster a Cat
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Foster Introduction */}
      <section className="bg-sky-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto h-10 w-10 text-[#0099FF]" />

          <h2 className="mt-4 font-script text-5xl text-[#0a1e3d] sm:text-6xl">
            Every Foster Saves Lives
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Every time a foster family opens their home, space becomes
            available for another homeless animal in need. Whether you foster
            for a few days, several weeks, or longer, you are giving a dog or
            cat the safety and stability they need while waiting for the right
            home.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-script text-4xl text-[#33CCCC]">
              Support for every foster
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
              You Are Not Doing This Alone
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fosterBenefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <Card
                  key={benefit.title}
                  className="h-full border border-sky-100 bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-7 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0099FF]">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#0a1e3d]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* General FAQ */}
      <section className="bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
              Foster Basics
            </Badge>

            <h2 className="font-script text-5xl text-[#0a1e3d] sm:text-6xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
              Select a question below to learn more about fostering with FAUNA.
            </p>
          </div>

          <div className="space-y-4">
            {generalFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-bold text-[#0a1e3d] transition-colors hover:bg-sky-50">
                  <span>{faq.question}</span>

                  <span
                    className="text-2xl font-light text-[#0099FF] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-sky-100 px-6 py-6 leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Foster Failure Highlight */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#0099FF] to-[#33CCCC] p-8 text-center text-white shadow-xl sm:p-12">
          <Heart className="mx-auto h-10 w-10 fill-white text-white" />

          <p className="mt-4 font-script text-5xl sm:text-6xl">
            Foster Failure
          </p>

          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Sometimes the Perfect Home Is Yours
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/95">
            Falling in love with your foster pet happens all the time. We may
            jokingly call it a foster failure, but helping an animal find their
            forever family is always a success.
          </p>
        </div>
      </section>

      {/* Dog-Specific Questions */}
      <section className="bg-[#0a1e3d] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <Dog className="mx-auto h-11 w-11 text-[#8AFF00]" />

            <p className="mt-4 font-script text-5xl text-[#33CCCC] sm:text-6xl">
              Dog Foster Questions
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white">
              Preparing Your Home for a Foster Dog
            </h2>
          </div>

          <div className="space-y-4">
            {dogFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-bold text-white transition-colors hover:bg-white/10">
                  <span>{faq.question}</span>

                  <span
                    className="text-2xl font-light text-[#8AFF00] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 py-6 leading-relaxed text-gray-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-5xl text-[#8AFF00] sm:text-6xl">
            Ready to Save a Life?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Become a FAUNA Foster
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/95">
            You do not have to commit forever. You simply have to provide a
            safe place, compassionate care, and a little time while your foster
            pet waits for their next chapter.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="https://new.shelterluv.com/matchme/foster/FAUN/Dog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#8AFF00] font-bold text-[#0a1e3d] hover:bg-[#7aee00]"
              >
                Foster a Dog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link
              href="https://new.shelterluv.com/matchme/foster/FAUN/Cat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white font-bold text-[#0099FF] hover:bg-gray-100"
              >
                Foster a Cat
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <a href="mailto:rescue@npfauna.org?subject=FAUNA Foster Question">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                Ask a Foster Question
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
