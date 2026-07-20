import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Spay Natchitoches",
  description:
    "Learn how FAUNA's Spay Natchitoches voucher assistance program works.",
}

const steps = [
  {
    title: "Apply Online",
    body: "Complete the Spay Natchitoches assistance form with your contact and pet information.",
  },
  {
    title: "Watch Your Email Inbox or Mailbox",
    body: "FAUNA will contact you with the next steps and voucher information.",
  },
  {
    title: "Schedule with a Partner",
    body: "Contact the participating veterinary partner listed with your voucher to schedule the procedure.",
  },
  {
    title: "Complete the Appointment",
    body: "Bring your voucher and follow the veterinary partner's pre-appointment instructions.",
  },
]

export default function SpayNatchitochesPage() {
  return (
    <main>
      <section className="bg-[#8AFF00] px-6 py-20 text-[#0a1e3d]">
        <div className="mx-auto max-w-5xl">
          <p className="font-script text-4xl">Accessible care</p>

          <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">
            Spay Natchitoches
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8">
            FAUNA helps eligible Natchitoches Parish pet owners access
            affordable spay and neuter services through participating
            veterinary partners.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold text-[#0a1e3d]">
            How to Use Spay Natchitoches
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0099FF] font-bold text-white">
                    {index + 1}
                  </span>

                  <h3 className="text-xl font-bold text-[#0a1e3d]">
                    {step.title}
                  </h3>
                </div>

                <p className="leading-7 text-gray-600">{step.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#0a1e3d] p-8 text-center text-white">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[#8AFF00]" />

            <h2 className="mt-3 text-2xl font-bold">Ready to apply?</h2>

            <p className="mx-auto mt-2 max-w-xl text-gray-300">
              Submit the online form and watch for a response from FAUNA.
            </p>

            <Link
              href="https://new.shelterluv.com/form/community/FAUN/14823-spay-natchitoches"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-6 bg-[#8AFF00] font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                Apply for Assistance
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
