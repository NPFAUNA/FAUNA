"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  ChevronDown,
  ChevronRight,
  Dog,
  Cat,
  Home,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const BASE22 = "https://www.npfauna.org/wp-content/uploads/2022/11"
const BASE05 = "http://www.npfauna.org/wp-content/uploads/2026/05"
const BASE06 = "http://www.npfauna.org/wp-content/uploads/2026/06"

// ── FAQ Accordion ──────────────────────────────────────────
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-sky-50 transition-colors gap-4"
      >
        <span className="font-semibold text-[#0a1e3d] text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#0099FF] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-sky-50 border-t border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

// ── page ───────────────────────────────────────────────────
export default function AdoptFosterPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-[#061424] text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={`${BASE22}/315084086_144718381640650_1920145290093752988_n.jpg`}
            alt="FAUNA animals"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061424]/60 via-[#0a1e3d]/50 to-[#061424]" />

        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-24 text-center">
          <Badge className="bg-[#8AFF00]/20 text-[#8AFF00] border-[#8AFF00]/30 mb-5 text-sm">
            Change a Life — or Two
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
            Find Your New{" "}
            <span className="text-[#33CCCC]">Best Friend.</span>
            <br />
            <span className="text-3xl md:text-4xl font-bold text-gray-200">
              Or become their hero for a while.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every dog and cat in FAUNA&apos;s care is waiting for a second chance —
            and you could be the one to give it. Whether you&apos;re ready to adopt forever
            or open your home temporarily, <strong className="text-white">you save a life either way.</strong>
          </p>
          {/* Jump CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#adopt">
              <Button className="bg-[#0099FF] hover:bg-[#0088ee] text-white font-bold text-base px-8 py-4 h-auto w-full sm:w-auto">
                <Heart className="h-5 w-5 mr-2" />
                I Want to Adopt
              </Button>
            </a>
            <a href="#foster">
              <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-base px-8 py-4 h-auto w-full sm:w-auto">
                <Home className="h-5 w-5 mr-2" />
                I Want to Foster
              </Button>
            </a>
          </div>
          {/* Scroll cue */}
          <div className="mt-12 flex justify-center">
            <ChevronDown className="h-6 w-6 text-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── Impact bar ── */}
      <section className="bg-[#0d2851] text-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "7 Days", label: "Stray hold at local shelters", accent: "text-red-400" },
              { value: "0 Days", label: "Hold for owner surrenders", accent: "text-red-400" },
              { value: "92%", label: "FAUNA live-release rate", accent: "text-[#8AFF00]" },
              { value: "2,500+", label: "Animals saved last year", accent: "text-[#33CCCC]" },
            ].map((s) => (
              <div key={s.label}>
                <div className={`text-3xl font-extrabold ${s.accent}`}>{s.value}</div>
                <div className="text-gray-400 text-xs mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Adopt vs Foster comparison strip ── */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-sm text-gray-500 font-semibold uppercase tracking-wider mb-6">
            Not sure which is right for you?
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border-2 border-[#0099FF]/30 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0099FF] flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1e3d]">Adoption is for you if…</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "You&apos;re ready for a permanent, lifelong commitment",
                  "You want a companion every single day",
                  "You&apos;re prepared for all pet care costs going forward",
                  "You want to give one animal a forever home",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#0099FF] shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <a href="#adopt" className="mt-5 block">
                <Button className="w-full bg-[#0099FF] hover:bg-[#0088ee] text-white text-sm">
                  Explore Adoption <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </a>
            </div>
            <div className="bg-white rounded-2xl border-2 border-[#8AFF00]/50 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8AFF00] flex items-center justify-center">
                  <Home className="h-5 w-5 text-[#0a1e3d]" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1e3d]">Fostering is for you if…</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "You love animals but aren&apos;t ready for permanent ownership",
                  "You want to try pet ownership before committing",
                  "You travel and need flexibility",
                  "You want to help multiple animals over time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#5a9900] shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <a href="#foster" className="mt-5 block">
                <Button className="w-full bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-sm">
                  Explore Fostering <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          ADOPT SECTION
      ═══════════════════════════════════ */}
      <section id="adopt" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">

          {/* Section header */}
          <div className="text-center mb-12">
            <Badge className="bg-[#0099FF]/10 text-[#0099FF] border-[#0099FF]/20 mb-4">Adoption</Badge>
            <h2 className="text-4xl font-extrabold text-[#0a1e3d] mb-4">
              Find Your New Best Friend
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              When you adopt, you&apos;re not just saving a life —
              <strong className="text-[#0a1e3d]"> you&apos;re completing your family.</strong>
            </p>
          </div>

          {/* Hero image + emotional copy */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src={`${BASE22}/315084086_144718381640650_1920145290093752988_n.jpg`}
                alt="Happy FAUNA dogs"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-2 shadow-lg">
                <p className="text-[#0099FF] font-bold text-sm">&#x1F43E; Love is just a paw away.</p>
              </div>
            </div>
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Every dog and cat in FAUNA&apos;s care arrived frightened, uncertain — but
                <strong> full of potential</strong> to love and be loved.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Local animal-control facilities give strays just <strong className="text-red-600">seven days</strong> before
                euthanasia. Owner-surrendered pets receive no grace period at all.
                When you adopt from FAUNA, you give an animal who has run out of time the chance
                to begin an entirely new story.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                All FAUNA animals are spayed or neutered, vaccinated, and microchipped before
                going home. You&apos;re not just adopting a pet — you&apos;re joining a community of people
                who believe every life is worth saving.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://new.shelterluv.com/matchme/adoption/FAUN/Dog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0099FF] hover:bg-[#0088ee] text-white font-bold">
                    <Dog className="h-4 w-4 mr-2" />
                    Browse Adoptable Dogs
                  </Button>
                </Link>
                <Link
                  href="https://new.shelterluv.com/matchme/adoption/FAUN/Cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-[#0099FF] text-[#0099FF] hover:bg-sky-50 font-semibold">
                    <Cat className="h-4 w-4 mr-2" />
                    Browse Adoptable Cats
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pet photo gallery */}
          <div className="mb-16">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Animals waiting for their forever home
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {[
                `${BASE05}/1-4.png`,
                `${BASE05}/2-2.png`,
                `${BASE06}/4.png`,
                `${BASE05}/21-1.png`,
                `${BASE06}/8.png`,
                `${BASE05}/3.png`,
                `${BASE05}/29-1.png`,
                `${BASE06}/9.png`,
                `${BASE05}/19-1.png`,
                `${BASE06}/12.png`,
              ].map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt="FAUNA animal"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* What to expect from adoption */}
          <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100">
            <h3 className="text-xl font-bold text-[#0a1e3d] mb-6 text-center">
              What Every Adopted Pet Comes With
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Shield className="h-6 w-6" />, title: "Spayed or Neutered", desc: "Every pet is altered before going home — no surprises." },
                { icon: <Syringe className="h-6 w-6" />, title: "Up-to-Date Vaccines", desc: "Core vaccinations and rabies shot included." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Microchipped", desc: "Already registered so your pet can always find its way back." },
                { icon: <Heart className="h-6 w-6" />, title: "Vet Cleared", desc: "Health-checked and treated before placement." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 border border-sky-100 text-center shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#0099FF]/10 text-[#0099FF] flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#0a1e3d] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Big CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-5 text-lg">
              Ready to meet your match? Browse our available pets on Shelterluv and apply today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://new.shelterluv.com/matchme/adoption/FAUN/Dog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#0099FF] hover:bg-[#0088ee] text-white font-bold text-base px-8 py-4 h-auto">
                  <Dog className="h-5 w-5 mr-2" />
                  Adopt a Dog
                </Button>
              </Link>
              <Link
                href="https://new.shelterluv.com/matchme/adoption/FAUN/Cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#33CCCC] hover:bg-[#22bbbb] text-white font-bold text-base px-8 py-4 h-auto">
                  <Cat className="h-5 w-5 mr-2" />
                  Adopt a Cat
                </Button>
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Powered by Shelterluv &middot;{" "}
              <Link href="https://www.facebook.com/FaunaNatchitoches" target="_blank" className="text-[#0099FF] underline">
                Follow us on Facebook
              </Link>{" "}
              for the latest events &amp; photos
            </p>
          </div>
        </div>
      </section>

      {/* ── Bridge ── */}
      <section className="py-14 bg-gradient-to-br from-[#0a1e3d] to-[#0d2851] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">&#x1F3E0;</div>
          <h2 className="text-3xl font-bold mb-4">
            Not ready to adopt permanently?{" "}
            <span className="text-[#8AFF00]">Foster.</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Fostering is the most powerful thing one person can do for our mission. Every night
            a pet spends in a loving foster home is a night out of a high-risk shelter —
            and one step closer to their forever family.
          </p>
          <p className="text-[#33CCCC] font-semibold">
            You don&apos;t have to keep them forever to change their lives forever.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FOSTER SECTION
      ═══════════════════════════════════ */}
      <section id="foster" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">

          {/* Section header */}
          <div className="text-center mb-12">
            <Badge className="bg-[#8AFF00]/20 text-[#0a1e3d] border-[#8AFF00]/30 mb-4">Fostering</Badge>
            <h2 className="text-4xl font-extrabold text-[#0a1e3d] mb-4">
              Do You Have Room in Your{" "}
              <span className="text-[#33CCCC]">Heart and Home?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              FAUNA can always use foster families to save more animals from the Natchitoches
              Parish and City Animal Control shelters.
            </p>
          </div>

          {/* Hero + copy */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                All animals in those shelters are at high risk. Expanding our foster network is the
                single biggest way we can save more lives — <strong>and it starts with you.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We&apos;re seeking caring, committed, and qualified people who help animals take the
                next steps in their lives. Fostering is a big yet rewarding responsibility — and
                FAUNA walks alongside you every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of foster mentors is available via text, Facebook, or in person whenever
                you have questions. You won&apos;t be doing this alone.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://new.shelterluv.com/matchme/foster/FAUN/Dog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold">
                    <Dog className="h-4 w-4 mr-2" />
                    Foster a Dog
                  </Button>
                </Link>
                <Link
                  href="https://new.shelterluv.com/matchme/foster/FAUN/Cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-[#33CCCC] text-[#33CCCC] hover:bg-teal-50 font-semibold">
                    <Cat className="h-4 w-4 mr-2" />
                    Foster a Cat
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src={`${BASE22}/s8230njszmtvt6r6.jpg`}
                alt="FAUNA foster pet"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute bottom-4 left-4 bg-white/95 rounded-xl px-4 py-2 shadow-lg">
                <p className="text-[#0a1e3d] font-bold text-sm">&#x2764;&#xFE0F; Every foster home saves a life.</p>
              </div>
            </div>
          </div>

          {/* What FAUNA Provides */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0a1e3d] text-center mb-8">
              What FAUNA Provides for Every Foster
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: "&#x1F9BA;",
                  title: "All Supplies",
                  desc: "Crate, collar & leash, litter box, food bowls — everything you need to get started.",
                },
                {
                  icon: "&#x1FA7A;",
                  title: "Full Medical Coverage",
                  desc: "FAUNA covers 100% of all veterinary care costs for your foster pet.",
                },
                {
                  icon: "&#x1F465;",
                  title: "Mentor Support",
                  desc: "A team of experienced foster mentors available by text, Facebook, or in person.",
                },
                {
                  icon: "&#x1F9F3;",
                  title: "Vacation Coverage",
                  desc: "Going out of town? Our volunteer network provides temporary foster sitters.",
                },
                {
                  icon: "&#x1F9FC;",
                  title: "Free Summer Baths",
                  desc: "Bath days during summer are free for foster dogs — because they deserve to feel good.",
                },
                {
                  icon: "&#x1F381;",
                  title: "Treats & Toys",
                  desc: "Occasional donation items like treats and toys are passed along to fosters whenever available.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100 p-5 shadow-sm"
                >
                  <div className="text-3xl mb-3" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h4 className="font-bold text-[#0a1e3d] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 italic mt-5">
              In exchange for all this, you&apos;ll be paid in unconditional love and the gratitude of an animal who desperately needed you.
            </p>
          </div>

          {/* Foster photo gallery */}
          <div className="mb-16">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">
              Animals ready for a foster home
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                `${BASE05}/52.png`,
                `${BASE05}/47.png`,
                `${BASE05}/44.png`,
                `${BASE05}/45.png`,
                `${BASE05}/46.png`,
                `${BASE05}/48.png`,
              ].map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt="FAUNA foster animal"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* "Foster Failure" moment */}
          <div className="mb-16 bg-gradient-to-r from-[#0099FF]/10 to-[#33CCCC]/10 rounded-3xl border border-[#0099FF]/20 p-8 text-center">
            <div className="text-5xl mb-4">&#x1F496;</div>
            <h3 className="text-2xl font-bold text-[#0a1e3d] mb-3">
              The Most Beautiful Kind of &ldquo;Failure&rdquo;
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed mb-2">
              What if you want to adopt your foster pet? <strong>This happens all the time.</strong>
            </p>
            <p className="text-[#0099FF] font-bold text-lg">
              We call it a &ldquo;Foster Failure&rdquo; — and it&apos;s one of our favorite outcomes. &#x1F63A;
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-[#0a1e3d] text-center mb-8">
              Frequently Asked Questions About Fostering
            </h3>
            <div className="space-y-3 mb-8">
              <FAQ
                q="What should I expect as a foster?"
                a="Taking a foster pet into your home to prepare him/her for the next phase of their life is a crucial part of the rescue process. Fosters are expected to treat their pet like a member of their family, provide exercise and training (dogs), playtime, and create a foundation of trust for an animal who has no place to call home. You'll provide your cat or dog with structure and a routine that'll help him/her thrive as well as manage their schedule of medical care and appointments as necessary. As a foster, it's also your job to do as much as possible to help get your foster pet adopted — you'll be asked to write up a bio and take great photos to be posted to his/her web page profile. You may be expected to bring a foster dog to adoption events, with advance notice."
              />
              <FAQ
                q="What does FAUNA provide for fosters?"
                a="FAUNA will work to provide you with everything you need to care for your foster cat or dog: crate, collar and leash, litter box, and food bowls. Many of our fosters take on the cost of food as an additional donation, which we really appreciate, but we can work with you if this is not possible. Occasionally we receive donations of treats and toys to hand out as well. We also cover all costs of medical care. If you choose to provide anything extra for your foster cat or dog, remember that everything is tax deductible — so go ahead and spoil him/her! Bath days in the summer are free for our foster dogs!"
              />
              <FAQ
                q="How long will I have my foster pet?"
                a="The honest answer is: until they find their perfect home. This varies — it could be a couple of weeks, others take longer! If you have a foster dog and it is heartworm negative, we are able to send it up to other states for adoption and only need a few days or weeks for fostering while it waits for transport. This also means other dogs in need can be pulled from Animal Control in the meantime!"
              />
              <FAQ
                q="What if I go on vacation while fostering?"
                a="We have a family of volunteers who are able to help out with temporary care when you go out of town! You can also select to be a 'foster sitter' as an option in the application form — a wonderful way to help multiple animals on a flexible schedule."
              />
              <FAQ
                q="Will I be sad when my foster animal is adopted?"
                a="Honestly, letting them go — especially the first one — is not easy. All fosters have been through this and will share their stories. All of our cats and dogs go to the best homes, and seeing that you just helped someone add to their family is very rewarding. We can organize contact methods for fosters to help transition the pet, and usually adopters enjoy sending regular updates (who doesn't like sharing pet photos?). Locals will often stop by our events down the line so you can see how they're doing!"
              />
              <FAQ
                q="What if I want to adopt my foster cat or dog?"
                a="This happens all of the time! We will lovingly call you a 'foster failure' — and it's one of our absolute favorite outcomes. Talk to our team and we'll help make it official."
              />
            </div>

            {/* Dog-specific */}
            <div className="bg-sky-50 rounded-2xl border border-sky-100 p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Dog className="h-5 w-5 text-[#0099FF]" />
                <h4 className="font-bold text-[#0a1e3d]">Dog-Specific Questions</h4>
              </div>
              <div className="space-y-3">
                <FAQ
                  q="I don't have a fence — is that okay?"
                  a="Though a secure fence is preferred, if you are okay with putting a leash on your foster dog and going with it each time it goes outside, we are okay with that — but your pet must be secure when outdoors. We encourage all of our fosters to leash walk the dog regularly anyway so they have that experience as needed for their future homes."
                />
                <FAQ
                  q="Can my foster dog be loose in my house during the day?"
                  a="We want to avoid damage to your home and recommend that during this transition phase in the dog's life, you have your dog in the kennel when you are not home and when you are asleep. Many adopters want to have the kennel or crate as part of the dog's routine and they may have different opinions on where dogs should sleep, so we don't want to make that shift harder for the pup! Many of the dogs we place into foster homes are also not fans of storms, so we do not want them to be outdoors or unsupervised when you are away."
                />
                <FAQ
                  q="Am I ready for fostering?"
                  a="You will not know until you try! We will do our best to match you with an appropriate animal to care for to build up your confidence. Fill out the form to get started — our team is here to support you every step of the way!"
                />
              </div>
            </div>

            {/* Foster CTA */}
            <div className="bg-gradient-to-br from-[#0a1e3d] to-[#0d2851] rounded-3xl p-8 text-white text-center">
              <div className="text-4xl mb-4">&#x1F43E;</div>
              <h3 className="text-2xl font-bold mb-3">Ready to Open Your Home?</h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Fill out the foster application on Shelterluv and our team will be in touch to match
                you with the perfect animal for your home and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://new.shelterluv.com/matchme/foster/FAUN/Dog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-base px-8 py-4 h-auto w-full sm:w-auto">
                    <Dog className="h-5 w-5 mr-2" />
                    Complete Dog Foster Form
                  </Button>
                </Link>
                <Link
                  href="https://new.shelterluv.com/matchme/foster/FAUN/Cat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#33CCCC] hover:bg-[#22bbbb] text-white font-bold text-base px-8 py-4 h-auto w-full sm:w-auto">
                    <Cat className="h-5 w-5 mr-2" />
                    Complete Cat Foster Form
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof / Community strip ── */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-6 w-6 text-[#0099FF]" />
            <h3 className="text-xl font-bold text-[#0a1e3d]">Join the FAUNA Family</h3>
          </div>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Hundreds of volunteers, fosters, and adopters across Natchitoches Parish are building
            a community where no animal is left behind.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: <Heart className="h-5 w-5" />, label: "Adopt", href: "#adopt", color: "bg-[#0099FF] text-white" },
              { icon: <Home className="h-5 w-5" />, label: "Foster", href: "#foster", color: "bg-[#8AFF00] text-[#0a1e3d]" },
              {
                icon: <Users className="h-5 w-5" />,
                label: "Volunteer",
                href: "https://new.shelterluv.com/form/volunteer/FAUN/14821-volunteer-application",
                color: "bg-[#33CCCC] text-white",
                external: true,
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <Button className={`w-full font-bold text-base py-4 h-auto ${item.color}`}>
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-16 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">&#x1F43E;</div>
          <h2 className="text-3xl font-bold mb-4">
            Every Story Starts With One Decision.
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            The decision to say &ldquo;yes.&rdquo; Yes to love. Yes to a second chance.
            Yes to making Natchitoches a place where no animal is left behind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://new.shelterluv.com/matchme/adoption/FAUN/Dog" target="_blank">
              <Button className="bg-white text-[#0099FF] hover:bg-gray-100 font-bold text-base px-8 py-4 h-auto">
                <Heart className="h-5 w-5 mr-2" />
                Adopt Today
              </Button>
            </Link>
            <Link href="https://new.shelterluv.com/matchme/foster/FAUN/Dog" target="_blank">
              <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-base px-8 py-4 h-auto">
                <Home className="h-5 w-5 mr-2" />
                Foster Today
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-white/70 text-sm">
            Questions?{" "}
            <a href="mailto:npfauna@gmail.com" className="underline text-white/90 hover:text-white">
              npfauna@gmail.com
            </a>{" "}
            &middot;{" "}
            <Link
              href="https://www.facebook.com/FaunaNatchitoches"
              target="_blank"
              className="underline text-white/90 hover:text-white"
            >
              Follow us on Facebook
            </Link>
          </p>
        </div>
      </section>

    </div>
  )
}

// Prevent TypeScript from complaining about the Syringe import not being used
function Syringe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  )
}
