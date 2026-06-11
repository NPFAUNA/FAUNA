import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Heart, TrendingUp, Star, Briefcase, Users } from "lucide-react"

const photos = [
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/1-3.png",  alt: "FAUNA team with animals" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/2-1.png",  alt: "Dog in FAUNA's care" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/5-1.png",  alt: "Cat at FAUNA" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/29-1.png", alt: "FAUNA volunteer with pets" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/9-2.png",  alt: "Animal care at FAUNA" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/12-2.png", alt: "FAUNA team member" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/15.png",   alt: "Happy pet at FAUNA" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/18.png",   alt: "Community event" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/20-1.png", alt: "FAUNA shelter animals" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/23-1.png", alt: "Dog care at FAUNA" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/25-1.png", alt: "FAUNA staff and animals" },
  { src: "http://www.npfauna.org/wp-content/uploads/2026/05/28-1.png", alt: "Animal rescue moment" },
]

const stats = [
  { value: "97.5%",    label: "Live-Release Rate" },
  { value: "482",   label: "Free Vaccines Given" },
  { value: "251",   label: "Community Cats TNR'd" },
]

export default function EmploymentPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#8AFF00]/90 text-[#0a1e3d] text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Future Opportunities - Natchitoches, LA
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              Turn Compassion<br />
              <span className="text-[#33CCCC]">Into a Career</span>
            </h1>
            <p className="text-sky-100 text-lg leading-relaxed mb-8">
              Join the team that gave <strong className="text-[#8AFF00]">2,thousands of pets a second
              chance last year and drives FAUNA&apos;s{" "}
              <strong className="text-[#8AFF00]">97.5% live-release rate</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="https://fauna.bamboohr.com/careers" target="_blank" rel="noopener noreferrer">
                <div className="mb-8 rounded-2xl border border-[#33CCCC]/30 bg-white/10 p-5">
  <p className="text-sky-50 leading-relaxed">
    Some positions do not have a confirmed start date yet. Start dates will coincide with
    the opening of the new{" "}
    <strong className="text-[#8AFF00]">
      Edwina &  Sam Friedman Pet Adoption and Welfare Center
    </strong>
    , coming soon. Interested candidates are encouraged to apply now through FAUNA&apos;s
    careers page.
  </p>
</div>
                <Button size="lg" className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold">
    View Open Positions <ArrowRight className="h-4 w-4 ml-2" />
  </Button>
</Link>
              <Link href="https://new.shelterluv.com/form/volunteer/FAUN/14821-volunteer-application" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold bg-transparent">
                  Volunteer Application
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2851] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-[#8AFF00]">{s.value}</div>
                <div className="text-[#33CCCC] text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#33CCCC] text-sm font-semibold uppercase tracking-wider">Why Join Us</span>
            <h2 className="text-3xl font-extrabold text-[#0a1e3d] mt-2 mb-4">Why Work With FAUNA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <Card className="border border-sky-100 shadow-md text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#0099FF] rounded-full flex items-center justify-center mx-auto mb-5">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0a1e3d] text-lg mb-3">Mission That Matters</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Every shift directly reduces euthanasia in Natchitoches Parish. You won&apos;t just have a job &mdash; you&apos;ll have a purpose.</p>
              </CardContent>
            </Card>
            <Card className="border border-sky-100 shadow-md text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#0099FF] rounded-full flex items-center justify-center mx-auto mb-5">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0a1e3d] text-lg mb-3">Hands-On Impact</h3>
                <p className="text-gray-600 text-sm leading-relaxed">You&apos;ll feed, comfort, and advocate for animals who have nowhere else to turn. The difference you make is immediate and real.</p>
              </CardContent>
            </Card>
            <Card className="border border-sky-100 shadow-md text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#0099FF] rounded-full flex items-center justify-center mx-auto mb-5">
                  <Star className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0a1e3d] text-lg mb-3">Grow With Us!</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Training in animal handling, shelter medicine basics, and customer service &mdash; skills that open doors in vet tech, animal control, and nonprofit careers.</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto bg-sky-50 rounded-2xl p-8 text-center border border-sky-100">
            <p className="text-[#0a1e3d] text-lg leading-relaxed font-medium italic">
              &ldquo;You&apos;ll be the heartbeat of daily shelter life &mdash; ensuring every dog and cat is safe,
              clean, and loved while helping adopters find their perfect match. Think of yourself as
              both caretaker and ambassador for hope.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#0099FF] rounded-xl flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-[#33CCCC] text-xs font-semibold uppercase tracking-wider">Open Position</span>
              <h2 className="text-3xl font-extrabold text-[#0a1e3d]">Site Employee</h2>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <span className="bg-[#8AFF00] text-[#0a1e3d] text-xs font-bold px-3 py-1 rounded-full">Part-Time</span>
            <span className="text-gray-500 text-sm">Minimum 6 hours / week - Natchitoches, LA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border border-sky-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#0099FF] text-base mb-4 flex items-center gap-2">
                  <span className="text-xl">&#x1F43E;</span> Daily Care
                </h3>
                <ul className="space-y-2">
                  {[
                    "Feed, walk, and enrich dogs & cats",
                    "Keep kennels and food-prep areas spotless",
                    "Monitor health and log notes for the medical team",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-[#33CCCC] mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-sky-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#0099FF] text-base mb-4 flex items-center gap-2">
                  <span className="text-xl">&#x1F91D;</span> Guest &amp; Facility Support
                </h3>
                <ul className="space-y-2">
                  {[
                    "Greet adopters and answer pet-match questions",
                    "Transport animals to vet visits (company vehicle provided)",
                    "Team up on big days for yard work, deep cleaning, or supply drives",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-[#33CCCC] mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-sky-200 shadow-md mb-8">
            <CardContent className="p-6">
              <h3 className="font-bold text-[#0a1e3d] text-base mb-4 flex items-center gap-2">
                <span className="text-xl">&#x2705;</span> What You Bring
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Positive, professional customer-service mindset",
                  "Confidence handling large or shy dogs",
                  "Valid driver's license & reliable transport",
                  "Ability to lift 50 lbs and work outdoors in Louisiana weather",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#8AFF00] mt-0.5 shrink-0" />
                    {q}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs italic mt-4">
                Don&apos;t meet every single qualification? We still encourage you to apply &mdash; passion
                and willingness to learn matter most.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-br from-[#0099FF] to-[#33CCCC] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-2">Ready to Build a Legacy of Hope?</h3>
            <p className="text-sky-100 mb-6">
              Questions? Email us at{" "}
              <a href="mailto:npfauna@gmail.com" className="underline hover:text-white font-medium">
                npfauna@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://forms.gle/GhUYXbKtettyEpVc8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold px-8">
                  Apply Now <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a href="mailto:npfauna@gmail.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold bg-transparent">
                  Email a Question
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#33CCCC] text-sm font-semibold uppercase tracking-wider">Not ready for a job?</span>
            <h2 className="text-3xl font-extrabold text-[#0a1e3d] mt-2 mb-3">Volunteer With FAUNA</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              FAUNA runs entirely on volunteer power. Whether you have an hour a week or a full
              schedule to offer, there&apos;s a meaningful role for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { emoji: "&#x1F3E0;", title: "Foster Caregiver", desc: "Provide temporary housing for animals. FAUNA covers all vet costs — you provide love." },
              { emoji: "&#x1F697;", title: "Transport Volunteer", desc: "Drive animals to vet appointments, rescue transfers, and adoption events." },
              { emoji: "&#x1F4E3;", title: "Event Volunteer", desc: "Help staff adoption events, health fairs, and fundraisers throughout the year." },
              { emoji: "&#x1FA7A;", title: "Veterinary Assistant", desc: "Support vet staff during spay/neuter clinics and vaccine events. Vet/tech background preferred." },
              { emoji: "&#x1F4F8;", title: "Social Media & Photography", desc: "Photograph animals, create content, and help FAUNA tell our story online." },
              { emoji: "&#x2B50;", title: "PACT Therapy Handler", desc: "Accompany certified therapy animals on visits to schools, hospitals, and senior facilities." },
            ].map((role) => (
              <Card key={role.title} className="border border-sky-100 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="text-2xl mb-3" dangerouslySetInnerHTML={{ __html: role.emoji }} />
                  <h3 className="font-bold text-[#0a1e3d] mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="https://new.shelterluv.com/form/volunteer/FAUN/14821-volunteer-application" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#0099FF] hover:bg-[#007acc] text-white font-semibold px-8">
                <Users className="h-5 w-5 mr-2" />
                Submit Volunteer Application <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
 <section className="py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {photos.map((p, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-sky-100">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
