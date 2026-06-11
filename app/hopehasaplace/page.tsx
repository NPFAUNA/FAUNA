"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, ChevronDown } from "lucide-react"
import { useState } from "react"

const BASE = "http://www.npfauna.org/wp-content/uploads/2026/05"

const faqs = [
  {
    q: "Are naming gifts tax-deductible?",
    a: "Yes. Naming gifts made through the Generations of Hope Campaign are tax-deductible to the extent allowed by law, as FAUNA is a 501(c)(3) nonprofit organization.",
  },
  {
    q: "How long does naming recognition last?",
    a: "Naming recognition is intended to be permanent, subject to facility use and organizational needs.",
  },
  {
    q: "Can businesses or foundations participate?",
    a: "Absolutely. Naming opportunities are available for individuals, families, businesses, and foundations.",
  },
  {
    q: "Can I name a space in memory or honor of someone?",
    a: "Yes. Many naming opportunities are well-suited for memorial or honorary recognition.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0a1e3d]">{q}</span>
        <ChevronDown className={`h-5 w-5 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function CapitalCampaignPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1e3d] via-[#0d2851] to-[#061424] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-[#8AFF00]/20 text-[#8AFF00] border-[#8AFF00]/30 mb-4">Capital Campaign</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The Edwina and Sam Friedman<br />
            <span className="text-[#33CCCC]">Pet Adoption &amp; Welfare Center</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Generations of Hope Campaign</p>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A Home for Hope and a Hub for the Whole Community
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-[#0099FF]/10 text-[#0099FF] border-[#0099FF]/20 mb-3">Our Story</Badge>
            <h2 className="text-3xl font-bold text-[#0a1e3d] mb-6">From Grass-Roots Rescue to Parish-Wide Lifesaving</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 text-center">
            <p className="text-lg leading-relaxed mb-6">
              Twelve years ago FAUNA began as a handful of volunteers pulling frightened pets from a high-kill shelter.
              Since then—powered by fosters, transport teams, and a community that refused to give up—we have{" "}
              <strong className="text-[#0099FF]">
                cut local euthanasia rates nearly in half, placed thousands of animals in loving homes, and provided
                free vaccines, spay/neuter vouchers, and TNR care to families and colonies that had nowhere else to turn.
              </strong>
            </p>
            <p className="text-lg leading-relaxed">
              But every milestone brings a new, urgent truth:{" "}
              <strong className="text-[#0a1e3d]">
                our current converted metal buildings cannot hold the hope we&apos;re ready to deliver.
              </strong>
            </p>
          </div>

          {/* Why a New Facility */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏥", title: "Community Health & Safety", body: "Modern facilities for high-volume spay/neuter clinics and public vet services." },
              { icon: "🎓", title: "Education & Youth Engagement", body: "Dedicated spaces for youth programs, humane education, and community workshops." },
              { icon: "🚨", title: "Emergency Readiness", body: "Purpose-built kennels for disaster response and emergency animal intake." },
              { icon: "🤝", title: "Community Gathering Spaces", body: "Meeting rooms, adoption suites, and volunteer areas that bring neighbors together." },
            ].map((item) => (
              <div key={item.title} className="bg-sky-50 rounded-xl p-5 border border-sky-100 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0a1e3d] text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Photo Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0a1e3d] text-center mb-6">Construction Progress</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["42-2", "37-1", "38-1", "39-1", "40-1", "41-1"].map((n) => (
              <div key={n} className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={`${BASE}/${n}.png`}
                  alt="Friedman Center construction"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="https://natchitochesparishjournal.com/2025/09/04/construction-underway-on-new-pet-adoption-welfare-center-in-natchitoches/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-[#0099FF] text-[#0099FF] hover:bg-sky-50">
                Read the Full Story in the Natchitoches Parish Journal →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Thank You — Friedman Family */}
      <section className="py-20 bg-gradient-to-br from-[#0a1e3d] to-[#0d2851] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden max-w-sm mx-auto md:mx-0 w-full">
              <Image
                src={`${BASE}/43.png`}
                alt="Edwina & Sam Friedman"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-[#8AFF00]" />
                <span className="text-[#8AFF00] font-semibold uppercase tracking-wide text-sm">A Huge Thank You</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">Edwina &amp;</h2>
              <h2 className="text-4xl font-bold text-[#33CCCC] mb-6">Sam Friedman</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Because of Edwina and Sam Friedman, hope now has an address.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Their extraordinary gift transformed a dream into walls, warmth, and second chances—ensuring that every
                animal who enters this shelter, and every community member who walks through its doors, discovers
                compassion waiting inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Naming Campaign */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Badge className="bg-[#8AFF00]/20 text-[#0a1e3d] border-[#8AFF00]/30 mb-4">Generations of Hope</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3d] mb-4">Naming Campaign</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Your name, or the name of someone or a pet that you love, can live where second chances begin.
          </p>
          <blockquote className="text-2xl font-bold text-[#0099FF] italic my-8">
            &ldquo;Someone believed you were worth this.&rdquo;
          </blockquote>

          {/* What your gift powers */}
          <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100 max-w-2xl mx-auto mb-12 text-left">
            <h3 className="font-bold text-[#0a1e3d] mb-4">What your gift powers:</h3>
            <ul className="space-y-2">
              {[
                "Finishing construction of the Friedman Center",
                "Outfitting surgery, recovery, and play yards with modern equipment",
                "Securing the staff and supplies that keep lifesaving running—day after day, year after year",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <Star className="h-4 w-4 text-[#8AFF00] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Naming Tiers */}
          <h3 className="text-2xl font-bold text-[#0a1e3d] mb-8">Naming &amp; Capital Opportunities</h3>
          <div className="space-y-10">
            {/* Spaces of Hope */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-[#0a1e3d]">Spaces of Hope</h4>
                  <p className="text-[#0099FF] font-semibold">$1,000 – $50,000</p>
                </div>
                <Link href="mailto:npfauna@gmail.com">
                  <Button className="bg-[#0099FF] hover:bg-[#0088ee] text-white">Secure a Space</Button>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {["spaces1-1", "Spaces-2-2"].map((n) => (
                  <div key={n} className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={`${BASE}/${n}.png`}
                      alt="Spaces of Hope naming tier"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Symbols of Hope */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-[#0a1e3d]">Symbols of Hope</h4>
                  <p className="text-[#33CCCC] font-semibold">$100 – $7,500</p>
                </div>
                <Link href="mailto:npfauna@gmail.com">
                  <Button className="bg-[#33CCCC] hover:bg-[#22bbbb] text-white">Secure a Symbol</Button>
                </Link>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden max-w-lg mx-auto">
                <Image
                  src={`${BASE}/Symbols-of-Hope-2.png`}
                  alt="Symbols of Hope naming tier"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Circle of Hope */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-[#0a1e3d]">Circle of Hope Annual Membership</h4>
                  <p className="text-[#8AFF00] font-semibold text-[#0a1e3d]" style={{ color: "#5a9900" }}>$300 – $12,000/year</p>
                </div>
                <Link href="mailto:npfauna@gmail.com">
                  <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold">Choose a Membership Level</Button>
                </Link>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden max-w-lg mx-auto">
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

      {/* Flipbook */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Badge className="bg-[#0099FF]/10 text-[#0099FF] border-[#0099FF]/20 mb-4">Campaign Flipbook</Badge>
          <h2 className="text-2xl font-bold text-[#0a1e3d] mb-6">Explore the Naming Campaign Flipbook</h2>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: "60%" }}>
            <iframe
              src="https://online.fliphtml5.com/placeforhope/Generations-of-Hope---Updated-Tables/"
              className="absolute inset-0 w-full h-full"
              title="Generations of Hope Campaign Flipbook"
              allowFullScreen
              seamless
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0a1e3d]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0099FF] to-[#33CCCC] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Legacy</h2>
          <p className="text-white/90 mb-8 text-lg">
            A named space is more than a plaque on a wall. It is a permanent beacon of hope.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:hopehasaplace@npfauna.org">
              <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-base px-8 py-4 h-auto">
                Contact Us About Naming Opportunities
              </Button>
            </Link>
            <Link href="/donate">
              <Button className="bg-white text-[#0099FF] hover:bg-gray-100 font-bold text-base px-8 py-4 h-auto">
                <Heart className="h-5 w-5 mr-2" />
                Make a General Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
