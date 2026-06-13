import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Users, ChevronRight } from "lucide-react"

const BASE = "http://www.npfauna.org/wp-content/uploads/2026/05"

const programSections = [
  { id: "spay", label: "Spay Natchitoches" },
  { id: "tnr", label: "TNR Program" },
  { id: "health-fairs", label: "Community Health Fairs" },
  { id: "transport", label: "Emergency Transport" },
    { id: "pact", label: "PACT Therapy" },
  { id: "klaws", label: "KLAWS" },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1e3d] via-[#0d2851] to-[#061424] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-[#8AFF00]/20 text-[#8AFF00] border-[#8AFF00]/30 mb-4">Our Programs</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            End the Cycle.{" "}
            <span className="text-[#33CCCC]">Build a Legacy of Hope.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            FAUNA fights every day to give every animal a chance at life. Yet the flood of stray and surrendered animals
            in Natchitoches Parish still outpaces every kennel we build and every van we load. The only way to break
            this cycle is prevention.
          </p>
          {/* Sticky Program Nav */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {programSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#0099FF] text-white text-sm font-medium transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spay Natchitoches ── */}
      <section id="spay" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Badge className="bg-[#0099FF]/10 text-[#0099FF] border-[#0099FF]/20 mb-3">Spay Natchitoches</Badge>
              <h2 className="text-3xl font-bold text-[#0a1e3d] mb-4">
                Need-Based Vouchers for Spay &amp; Neuter
              </h2>
              <p className="text-gray-600 mb-4">
                Spay Natchitoches provides need-based vouchers that cover a major portion of a pet&apos;s spay or
                neuter surgery—making responsible pet care possible for families who otherwise couldn&apos;t afford it.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Thousands of unwanted litters are born in Natchitoches Parish every year.",
                  "Preventive care is the only long-term solution.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#0099FF] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 italic mb-6">
                If you cannot afford $100 at a local vet, please check out{" "}
                <strong>Magnolia Spay Neuter&apos;s</strong> website — they are low-cost and based in Alexandria, LA.
                We try to have their mobile clinic come to Natchitoches a few times a year, so be sure to follow us on
                Facebook for dates!
              </p>
              <Link href="https://new.shelterluv.com/form/community/FAUN/14823-spay-natchitoches" target="_blank">
                <Button className="bg-[#0099FF] hover:bg-[#0088ee] text-white">
                  Apply for Spay Natchitoches Assistance
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              {["1-4", "2-2", "3", "21-1"].map((n) => (
                <div key={n} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={`${BASE}/${n}.png`}
                    alt="Spay Natchitoches"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Process */}
          <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
            <h3 className="text-xl font-bold text-[#0a1e3d] mb-6 text-center">
              How to Use Spay Natchitoches Vouchers in 4 Easy Steps
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  body: "Submit the quick voucher form. Applications are reviewed every week.",
                },
                {
                  step: "2",
                  title: "Watch Your Mailbox",
                  body: "Approved vouchers arrive within 7–10 days. Need it sooner? Email SpayNatchitoches@yahoo.com with your vet appointment date.",
                },
                {
                  step: "3",
                  title: "Book Surgery",
                  body: "Choose any local partner veterinarian. Schedule within 30 days of receiving the voucher.",
                },
                {
                  step: "4",
                  title: "Bring Voucher & Pay the Balance",
                  body: "Hand the voucher to the clinic. Your cost is usually under $100.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0099FF] text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                    {s.step}
                  </div>
                  <h4 className="font-semibold text-[#0a1e3d] mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-600">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6 italic">
              Questions or delays? Email{" "}
              <a href="mailto:SpayNatchitoches@yahoo.com" className="text-[#0099FF] underline">
                SpayNatchitoches@yahoo.com
              </a>{" "}
              — we&apos;re here to help.
            </p>
            <p className="text-center text-xs text-gray-400 mt-3">
              Filling out this application does not guarantee a voucher. Vouchers will be provided as long as funds
              are available. The voucher is a coupon/discount for a portion of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* ── TNR ── */}
      <section id="tnr" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3 order-2 md:order-1">
              {["29-1", "19-1"].map((n, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={`${BASE}/${n}.png`}
                    alt="TNR Program"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <Badge className="bg-[#33CCCC]/10 text-[#33CCCC] border-[#33CCCC]/20 mb-3">TNR Program</Badge>
              <h2 className="text-3xl font-bold text-[#0a1e3d] mb-4">
                Building a Legacy of Hope for Community Cats
              </h2>
              <p className="text-gray-600 mb-4">
                FAUNA&apos;s Trap-Neuter-Return (TNR) Program humanely traps unowned community cats, provides spay/neuter
                surgery and core vaccinations, then returns each cat to its familiar outdoor colony. TNR prevents
                endless breeding cycles, stabilises colony size, improves feline health, and reduces nuisance
                behaviours.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { title: "Fewer Litters", body: "Each altered cat prevents hundreds of kittens over a lifetime." },
                  { title: "Healthier Colonies", body: "Vaccination and parasite treatment lower disease spread." },
                  {
                    title: "Calmer Communities",
                    body: "Sterilized cats spray and fight less, reducing noise and property damage.",
                  },
                  {
                    title: "Shelter Relief",
                    body: "Fewer kittens entering shelters frees space for adoptable pets.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="font-semibold text-[#0099FF] text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.body}</p>
                  </div>
                ))}
              </div>
              <Link href="https://new.shelterluv.com/form/cat/FAUN/14825-community-cats-tnr" target="_blank">
                <Button className="bg-[#33CCCC] hover:bg-[#22bbbb] text-white mr-3">Submit TNR Form</Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline" className="border-[#33CCCC] text-[#33CCCC] hover:bg-[#33CCCC]/10">
                  Donate
                </Button>
              </Link>
            </div>
          </div>

          {/* 5-Step TNR Process */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-[#0a1e3d] mb-6 text-center">How the TNR Process Works</h3>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Request Assistance",
                  body: "Complete FAUNA's online TNR Form or call our helpline to report a free-roaming cat colony.",
                },
                {
                  step: "2",
                  title: "Humane Trapping",
                  body: "Trained volunteers set safe, baited traps and monitor until cats are secured.",
                },
                {
                  step: "3",
                  title: "Veterinary Care",
                  body: "Cats receive spay/neuter surgery, rabies and core vaccinations, parasite treatment, and an ear-tip to indicate they are sterilised.",
                },
                {
                  step: "4",
                  title: "Recovery & Return",
                  body: "After a short recovery, cats are returned to their original territory—the place they know as home.",
                },
                {
                  step: "5",
                  title: "Ongoing Colony Care",
                  body: "Colony caretakers provide food, water, and monitor for new arrivals that may need TNR.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#33CCCC] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0a1e3d]">{s.title}</p>
                    <p className="text-sm text-gray-600">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Community Health Fairs ── */}
      <section id="health-fairs" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-[#8AFF00]/20 text-[#0a1e3d] border-[#8AFF00]/30 mb-3">Community Health Fairs</Badge>
            <h2 className="text-3xl font-bold text-[#0a1e3d] mb-4">Keeping Pets Healthy, Microchipped, and Loved</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              FAUNA&apos;s mobile Community Pet Services team partners with local businesses, churches, and civic groups
              to host free or low-cost Health Fairs across Natchitoches Parish.
            </p>
          </div>

          {/* Photo row */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-10">
            {["27-1", "28-2", "1-5", "30-1", "20-2", "21-2"].map((n) => (
              <div key={n} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`${BASE}/${n}.png`}
                  alt="Community Health Fair"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
              <h3 className="font-bold text-[#0a1e3d] mb-4">At each event we provide:</h3>
              <ul className="space-y-3">
                {[
                  "Core vaccines for dogs and cats",
                  "Microchipping with lifetime registration",
                  "Nail trims & basic wellness checks",
                  "Pet-care education on nutrition, parasite prevention, and responsible ownership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#0099FF] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#0a1e3d] mb-4">Why It Matters</h3>
              <ul className="space-y-3">
                {[
                  { title: "Preventive Care Saves Lives", body: "Vaccinated, altered pets are less likely to enter the shelter system sick or injured." },
                  { title: "Keeps Families Together", body: "Affordable services reduce economic surrender and strengthen the human-animal bond." },
                  { title: "Community Health & Safety", body: "Widespread rabies and parvo protection keeps neighborhoods safer for pets and people." },
                  { title: "Shelter Relief", body: "Fewer sick intakes means staff and funds can focus on lifesaving adoptions and transports." },
                ].map((item) => (
                  <li key={item.title} className="text-sm">
                    <span className="font-semibold text-[#0a1e3d]">{item.title}: </span>
                    <span className="text-gray-600">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="https://new.shelterluv.com/form/volunteer/FAUN/14821-volunteer-application" target="_blank">
              <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold">
                <Users className="h-4 w-4 mr-2" />
                Volunteer at a Health Fair
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="outline" className="border-[#0099FF] text-[#0099FF] hover:bg-sky-50">
                <Heart className="h-4 w-4 mr-2" />
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Emergency Rescue Transport ── */}
      <section id="transport" className="py-20 bg-[#0a1e3d] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-3">Emergency Transport</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">
                Meeting Urgent Needs in the Moments That Matter Most
              </h2>
              <p className="text-gray-300 mb-6">
                When an animal is abandoned on a back road, struck by a car, or out of options in an overcrowded
                shelter, <strong className="text-white">FAUNA&apos;s Emergency Rescue &amp; Transport team goes first.</strong>
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { title: "Rapid Response Pick-ups", body: "24-hour call line for injured or abandoned pets." },
                  { title: "Emergency Vet Runs", body: "Immediate transport to partner clinics for life-saving surgery or critical care." },
                  { title: "Out-of-State Rescue Transports", body: "We drive pets to no-kill partner shelters where adopters are waiting and euthanasia isn't on the clock." },
                  { title: "Crisis Support for Families", body: "Temporary kenneling and medical help when owners face disasters, hospitalization, or financial crisis." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#8AFF00] shrink-0 mt-2" />
                    <div>
                      <span className="font-semibold text-white text-sm">{item.title} – </span>
                      <span className="text-gray-300 text-sm">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="https://new.shelterluv.com/form/volunteer/FAUN/14821-volunteer-application" target="_blank">
                  <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold">
                    Join the Transport Crew
                  </Button>
                </Link>
             <Link href="/donate">
  <Button className="bg-[#8AFF00] hover:bg-[#78e000] text-[#061424] font-bold">
    Donate Emergency Medical Funds
  </Button>
</Link>
              </div>
            </div>
            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-2">
              {["16-1", "17", "18-1", "13-1", "14", "15-1"].map((n) => (
                <div key={n} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={`${BASE}/${n}.png`}
                    alt="Emergency Transport"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PACT Therapy ── */}
      <section id="pact" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-2">
              {["50", "51", "52", "44", "45", "46", "47", "48", "49"].map((n) => (
                <div key={n} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={`${BASE}/${n}.png`}
                    alt="PACT Therapy"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <div>
              <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-3">PACT Therapy</Badge>
              <h2 className="text-3xl font-bold text-[#0a1e3d] mb-2">
                Healing Hearts Through the Power of Pets
              </h2>
              <p className="text-sm text-gray-500 mb-4 italic">
                PACT — Providing Animal Comfort Therapy
              </p>
              <p className="text-gray-600 mb-6">
                Each week FAUNA&apos;s PACT volunteers bring calm, certified therapy animals to nursing homes, hospitals,
                rehabilitation centers, and schools across Natchitoches Parish. A gentle paw, a warm purr, or a slow
                tail-wag turns a quiet room into a moment of connection—easing loneliness, lowering stress, and sparking
                conversation for residents who need it most.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { title: "Emotional Well-Being", body: "Therapy-pet visits reduce anxiety and depression in seniors and patients." },
                  { title: "Physical Health Benefits", body: "Interacting with animals can lower blood pressure and heart rate—natural, drug-free relief." },
                  { title: "Social Connection", body: "Visits prompt memories and conversation, helping staff engage residents more deeply." },
                  { title: "Community Compassion", body: "Showing up with pets reminds our most vulnerable neighbors that they are valued and loved." },
                ].map((item) => (
                  <div key={item.title} className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                    <p className="font-semibold text-purple-700 text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="https://new.shelterluv.com/form/volunteer/FAUN/14821-volunteer-application" target="_blank">
                  <Button className="bg-[#0099FF] hover:bg-[#0088ee] text-white">
                    Become a Therapy Team Member
                  </Button>
                </Link>
                <Link href="mailto:katcamcal@yahoo.com">
                  <Button variant="outline" className="border-[#0099FF] text-[#0099FF] hover:bg-sky-50">
                    Email Kathy About PACT
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-14 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Make a Difference?</h2>
          <p className="text-white/90 mb-8">
            Every dollar, every volunteer hour, every shared post builds the legacy of hope Natchitoches animals
            deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://new.shelterluv.com/form/volunteer/FAUN/14821-volunteer-application" target="_blank">
              <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-base px-6 py-3 h-auto">
                <Users className="h-5 w-5 mr-2" />
                Volunteer
              </Button>
            </Link>
            <Link href="/donate">
              <Button className="bg-white text-[#0099FF] hover:bg-gray-100 font-bold text-base px-6 py-3 h-auto">
                <Heart className="h-5 w-5 mr-2" />
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
