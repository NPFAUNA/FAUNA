import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  AlertCircle,
  Heart,
  Syringe,
  MapPin,
  DollarSign,
  ShoppingBag,
  BookOpen,
  Search,
  CloudLightning,
  Users,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

export const metadata = {
  title: "Community Resources & Help Desk",
  description:
    "Emergency numbers, low-cost vet care, financial aid, pet food, lost & found help, and disaster prep — all in one place for Natchitoches-area pet owners.",
}

// ── data ───────────────────────────────────────────────────
const emergencyNumbers = [
  {
    name: "Crossroads Animal Emergency Clinic",
    location: "Alexandria",
    phone: "318-427-1292",
    tel: "3184271292",
    note: "24/7 regional ER",
    badge: "24/7",
  },
  {
    name: "Animal Emergency Clinic",
    location: "Shreveport",
    phone: "318-227-2345",
    tel: "3182272345",
    note: "Nights + weekends",
    badge: "After Hours",
  },
  {
    name: "LSU Veterinary Teaching Hospital",
    location: "Baton Rouge",
    phone: "225-578-9600",
    tel: "2255789600",
    note: "Open 24/7/365, small-animal ER",
    badge: "24/7",
  },
  {
    name: "ASPCA Poison Control",
    location: "National",
    phone: "888-426-4435",
    tel: "8884264435",
    note: "$95 fee may apply",
    badge: "Poison",
  },
  {
    name: "Pet Poison Helpline",
    location: "National",
    phone: "855-764-7661",
    tel: "8557647661",
    note: "$89 flat fee",
    badge: "Poison",
  },
]

const localVets = [
  {
    name: "Natchitoches Animal Hospital",
    address: "1787 LA-6",
    distance: "≈ 3 mi",
    phone: "318-352-2103",
    tel: "3183522103",
    note: "General practice Mon–Fri; handles routine surgeries and daytime urgent care.",
  },
  {
    name: "Cane River Veterinary Clinic",
    address: "1841 South Dr",
    distance: "≈ 2 mi",
    phone: "318-352-6678",
    tel: "3183526678",
    note: "60-year fixture in town; weekday hours 8 a.m.–5 p.m.",
  },
  {
    name: "Good Hope Veterinary Hospital",
    address: "128 South Dr",
    distance: "≈ 2 mi",
    phone: "318-238-3000",
    tel: "3182383000",
    note: "Full-service small-animal care; praised for quick appointments.",
  },
  {
    name: "James Veterinary Clinic",
    address: "7107 Hwy 1 Bypass",
    distance: "≈ 4 mi",
    phone: "318-357-8312",
    tel: "3183578312",
    note: "Long-standing mixed-animal clinic; weekday + half-day Friday.",
  },
  {
    name: "Many Veterinary Hospital",
    address: "Many, LA",
    distance: "29 mi W (≈ 30 min)",
    phone: "318-256-2608",
    tel: "3182562608",
    note: "Good fallback if in western parish; M–F 8–5.",
  },
  {
    name: "Red River Veterinary Center",
    address: "Coushatta, LA",
    distance: "31 mi SE (≈ 35 min)",
    phone: "318-932-1000",
    tel: "3189321000",
    note: "Affordable wellness + farm-animal services; same-day sick visits.",
  },
]

const financialAid = [
  {
    name: "RedRover Relief – Urgent-Care Grants",
    covers: "Up to ≈ $250 toward life-saving treatment",
    href: "https://redrover.org/relief",
    domain: "redrover.org/relief",
  },
  {
    name: "Brown Dog Foundation",
    covers: "Bridge funding when a diagnosis is treatable but unaffordable",
    href: "https://browndogfoundation.org",
    domain: "browndogfoundation.org",
  },
  {
    name: "Pet Help Finder",
    covers: "Search tool for food, vet, and temporary care assistance",
    href: "https://pethelpfinder.org",
    domain: "pethelpfinder.org",
  },
]

const partners = [
  {
    tier: "Local Core",
    items: [
      { name: "Good Hope Veterinary Hospital", href: "https://www.goodhopevet.com" },
      { name: "Many Veterinary Hospital", href: "https://www.manyanimalclinic.com" },
      { name: "Red River Veterinary Center", href: "https://www.redrivervet.com" },
    ],
    color: "#0099FF",
  },
  {
    tier: "Regional / Transport",
    items: [
      { name: "Best Friends Animal Society", href: "https://bestfriends.org" },
    ],
    color: "#33CCCC",
  },
  {
    tier: "Statewide Allies",
    items: [
      { name: "Louisiana SPCA", href: "https://www.la-spca.org" },
      { name: "Heart of Louisiana Humane Society", href: "https://www.hlhumane.org/" },
    ],
    color: "#8AFF00",
  },
  {
    tier: "National Content",
    items: [
      { name: "ASPCA", href: "https://www.aspca.org" },
      { name: "RedRover", href: "https://redrover.org" },
      { name: "PetSmart Charities", href: "https://petsmartcharities.org" },
    ],
    color: "#0a1e3d",
  },
]

const navSections = [
  { id: "emergency", label: "Emergency" },
  { id: "spay-neuter", label: "Spay & Neuter" },
  { id: "local-vets", label: "Local Vets" },
  { id: "financial-aid", label: "Financial Aid" },
  { id: "food-supplies", label: "Food & Supplies" },
  { id: "training", label: "Training" },
  { id: "lost-found", label: "Lost & Found" },
  { id: "disaster", label: "Disaster Prep" },
  { id: "partners", label: "Partners" },
]

// ── page ───────────────────────────────────────────────────
export default function ResourcesPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#0a1e3d] via-[#0d2851] to-[#061424] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Badge className="bg-[#8AFF00]/20 text-[#8AFF00] border-[#8AFF00]/30 mb-4">Community Resources</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Community Resources &amp;{" "}
            <span className="text-[#33CCCC]">Help Desk</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            One hub for Natchitoches-area pet owners — emergencies, low-cost care, behaviour advice,
            supplies, and long-term planning.
          </p>
          {/* Section nav */}
          <div className="flex flex-wrap justify-center gap-2">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#0099FF] text-white text-xs font-medium transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency CTA strip ── */}
      <div className="bg-red-600 text-white py-3 px-4 text-center text-sm font-semibold tracking-wide">
        <AlertCircle className="inline h-4 w-4 mr-2 mb-0.5" />
        Need help right now? Call the numbers below.
      </div>

      {/* ── 24/7 Emergency Quick-Dial ── */}
      <section id="emergency" className="py-14 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-500">24/7 Emergency</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">Emergency Quick-Dial</h2>
            </div>
          </div>

          {/* Mobile-first tappable rows */}
          <div className="rounded-2xl border border-red-100 overflow-hidden shadow-sm">
            {/* Table header — hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr] bg-red-50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-red-600 border-b border-red-100">
              <span>Service</span>
              <span>Phone</span>
              <span>Notes</span>
            </div>
            {emergencyNumbers.map((row, i) => (
              <a
                key={row.name}
                href={`tel:${row.tel}`}
                className={`flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] items-start md:items-center px-5 py-4 gap-1 md:gap-0 transition-colors hover:bg-red-50 active:bg-red-100 ${
                  i !== emergencyNumbers.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Badge
                    className={`text-[10px] px-2 py-0 h-5 shrink-0 ${
                      row.badge === "24/7"
                        ? "bg-red-100 text-red-700 border-red-200"
                        : row.badge === "Poison"
                        ? "bg-orange-100 text-orange-700 border-orange-200"
                        : "bg-amber-100 text-amber-700 border-amber-200"
                    }`}
                  >
                    {row.badge}
                  </Badge>
                  <span className="font-semibold text-[#0a1e3d] text-sm">
                    {row.name}
                    <span className="font-normal text-gray-500 ml-1 hidden md:inline">— {row.location}</span>
                  </span>
                </div>
                <span className="font-bold text-[#0099FF] text-base md:text-sm flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#0099FF]" />
                  {row.phone}
                </span>
                <span className="text-xs text-gray-500">{row.note}</span>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Tap any row on mobile to dial directly.
          </p>
        </div>
      </section>

      {/* ── Low-Cost Spay / Neuter ── */}
      <section id="spay-neuter" className="py-14 bg-sky-50 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#0099FF] flex items-center justify-center shrink-0">
              <Syringe className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0099FF]">Prevention</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">Low-Cost Spay / Neuter &amp; Preventive Care</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Spay Natchitoches */}
            <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-[#8AFF00]/20 text-[#0a1e3d] border-[#8AFF00]/30 text-xs">FAUNA Program</Badge>
              </div>
              <h3 className="font-bold text-[#0a1e3d] mb-2">Spay Natchitoches</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Need-based vouchers covering a major portion of your pet&apos;s spay/neuter cost. Your
                out-of-pocket is usually under $100.
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://new.shelterluv.com/form/community/FAUN/14823-spay-natchitoches"
                  target="_blank"
                >
                  <Button size="sm" className="w-full bg-[#0099FF] hover:bg-[#0088ee] text-white text-xs">
                    Apply for a Voucher <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
                <a href="mailto:SpayNatchitoches@yahoo.com">
                  <Button size="sm" variant="outline" className="w-full border-[#0099FF] text-[#0099FF] text-xs">
                    Email SpayNatchitoches@yahoo.com
                  </Button>
                </a>
              </div>
            </div>

            {/* Heart of Louisiana Humane Society*/}
            <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-[#33CCCC]/10 text-[#33CCCC] border-[#33CCCC]/20 text-xs">Statewide</Badge>
              </div>
              <h3 className="font-bold text-[#0a1e3d] mb-2">Heart of Louisiana Humane Society</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Interactive parish-by-parish directory of free and low-cost spay/neuter clinics across
                Louisiana.
              </p>
              <Link href="https://www.hlhumane.org/" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full bg-[#33CCCC] hover:bg-[#22bbbb] text-white text-xs">
                  View Parish Directory <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>

           {/* Best Friends Animal Society */}
<div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-sm flex flex-col">
  <div className="flex items-center gap-2 mb-3">
    <Badge className="bg-[#0099FF]/10 text-[#0099FF] border-[#0099FF]/20 text-xs">
      National
    </Badge>
  </div>

  <h3 className="font-bold text-[#0a1e3d] mb-2">
    Best Friends Spay/Neuter Resource Map
  </h3>

  <p className="text-sm text-gray-600 mb-4 flex-1">
    Search nationwide for low-cost spay/neuter clinics, financial assistance
    programs, transport options, and voucher resources in your area.
  </p>

  <Link
    href="https://network.bestfriends.org/spayneuter-resource-map"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="sm"
      className="w-full bg-[#0099FF] hover:bg-[#0088ee] text-white text-xs"
    >
      Open Resource Map
      <ExternalLink className="h-3 w-3 ml-1" />
    </Button>
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* ── Local Veterinary & Wellness Partners ── */}
      <section id="local-vets" className="py-14 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#33CCCC] flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#33CCCC]">Near You</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">Local Veterinary &amp; Wellness Partners</h2>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[2.5fr_1fr_1fr_2fr] bg-[#0d2851] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider">
              <span>Clinic</span>
              <span>Distance</span>
              <span>Phone</span>
              <span>Quick Notes</span>
            </div>
            {localVets.map((vet, i) => (
              <div
                key={vet.name}
                className={`grid grid-cols-[2.5fr_1fr_1fr_2fr] items-start px-5 py-4 gap-2 ${
                  i % 2 === 1 ? "bg-gray-50" : "bg-white"
                } ${i !== localVets.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div>
                  <p className="font-semibold text-[#0a1e3d] text-sm">{vet.name}</p>
                  <p className="text-xs text-gray-500">{vet.address}</p>
                </div>
                <span className="text-xs text-gray-600 pt-0.5">{vet.distance}</span>
                <a
                  href={`tel:${vet.tel}`}
                  className="text-[#0099FF] font-bold text-sm hover:underline flex items-center gap-1"
                >
                  <Phone className="h-3 w-3 shrink-0" />
                  {vet.phone}
                </a>
                <p className="text-xs text-gray-600 leading-relaxed">{vet.note}</p>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {localVets.map((vet) => (
              <div key={vet.name} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-bold text-[#0a1e3d] text-sm">{vet.name}</p>
                    <p className="text-xs text-gray-500">{vet.address} · {vet.distance}</p>
                  </div>
                </div>
                <a
                  href={`tel:${vet.tel}`}
                  className="inline-flex items-center gap-1.5 text-[#0099FF] font-bold text-base mb-2"
                >
                  <Phone className="h-4 w-4" />
                  {vet.phone}
                </a>
                <p className="text-xs text-gray-600">{vet.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financial Aid ── */}
      <section id="financial-aid" className="py-14 bg-amber-50 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Help Paying Bills</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">Financial Aid for Vet Bills</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {financialAid.map((prog) => (
              <Link
                key={prog.name}
                href={prog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-amber-100 p-5 shadow-sm hover:shadow-md hover:border-amber-200 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#0a1e3d] text-sm leading-tight pr-2">{prog.name}</h3>
                  <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-amber-500 shrink-0 transition-colors" />
                </div>
                <p className="text-sm text-gray-600 flex-1 mb-4">{prog.covers}</p>
                <span className="text-xs text-amber-600 font-semibold">{prog.domain} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pet Food & Supplies ── */}
      <section id="food-supplies" className="py-14 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#8AFF00] flex items-center justify-center shrink-0">
              <ShoppingBag className="h-5 w-5 text-[#0a1e3d]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5a9900]">Pantries &amp; Aid</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">Pet Food &amp; Supplies</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "Cane River Food Pantry – Pet Shelf",
                location: "Natchitoches",
                desc: "Local food pantry with a dedicated pet shelf for families in need in the Natchitoches area.",
                href: "https://caneriverfoodpantry.weebly.com/",
                tag: "Local",
                tagColor: "bg-[#8AFF00]/20 text-[#0a1e3d] border-[#8AFF00]/30",
              },
              {
                name: "Louisiana SPCA Pet Food Pantry",
                location: "Statewide (ships during disasters)",
                desc: "Ships statewide during declared disasters; provides emergency pet food and supply assistance.",
                href: "https://www.la-spca.org",
                tag: "Statewide",
                tagColor: "bg-[#33CCCC]/10 text-[#33CCCC] border-[#33CCCC]/20",
              },
              {
                name: "Feeding Pets of the Homeless",
                location: "Pop-up wellness & food clinics",
                desc: "Provides free food and veterinary care to pets of people experiencing homelessness; hosts pop-up clinics.",
                href: "https://www.petsofthehomeless.org",
                tag: "National",
                tagColor: "bg-purple-100 text-purple-700 border-purple-200",
              },
            ].map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={`text-xs ${item.tagColor}`}>{item.tag}</Badge>
                </div>
                <h3 className="font-bold text-[#0a1e3d] mb-1 text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{item.location}</p>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="text-xs w-full border-gray-200 hover:border-[#0099FF] hover:text-[#0099FF]">
                    Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          {/* FAUNA wishlists callout */}
          <div className="mt-6 bg-sky-50 rounded-2xl border border-sky-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#0a1e3d] mb-1">Support FAUNA directly with supplies</p>
              <p className="text-sm text-gray-600">
                Shop our Amazon, Chewy, or Tractor Supply wishlists — items ship straight to our shelter.
              </p>
            </div>
            <Link href="/donate" className="shrink-0">
              <Button className="bg-[#0099FF] hover:bg-[#0088ee] text-white text-sm">
                View FAUNA Wishlists <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Training & Behavior ── */}
      <section id="training" className="py-14 bg-[#0a1e3d] text-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#33CCCC] flex items-center justify-center shrink-0">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#33CCCC]">Education</p>
              <h2 className="text-2xl font-bold text-white">Training &amp; Behavior Libraries</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="https://www.aspca.org/pet-care"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 hover:bg-white/20 transition-colors rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-white text-lg">ASPCA Pet-Care Guides</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#33CCCC] transition-colors shrink-0" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Dog, cat, seasonal safety, and DIY enrichment guides — written and reviewed by
                veterinary professionals. Great first stop for any behaviour question.
              </p>
              <span className="inline-block mt-4 text-xs text-[#33CCCC] font-semibold">aspca.org/pet-care →</span>
            </Link>
            <Link
              href="https://bestfriends.org/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 hover:bg-white/20 transition-colors rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-white text-lg">Best Friends Animal Society</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#33CCCC] transition-colors shrink-0" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                800+ free how-to articles and videos covering training, health, behaviour modification,
                enrichment, and responsible pet ownership for every stage of life.
              </p>
              <span className="inline-block mt-4 text-xs text-[#33CCCC] font-semibold">bestfriends.org/resources →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lost & Found ── */}
      <section id="lost-found" className="py-14 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#0099FF] flex items-center justify-center shrink-0">
              <Search className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0099FF]">Missing Pet</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">Lost &amp; Found Toolkit</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Microchip lookup */}
            <Link
              href="https://petmicrochiplookup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-sky-50 rounded-2xl border border-sky-100 p-5 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="text-2xl mb-3">&#x1F4F1;</div>
              <h3 className="font-bold text-[#0a1e3d] mb-2 text-sm">Microchip Lookup</h3>
              <p className="text-xs text-gray-600 flex-1 mb-3">
                Search any microchip number across all major registries at once.
              </p>
              <span className="text-xs text-[#0099FF] font-semibold">petmicrochiplookup.org →</span>
            </Link>

            {/* Facebook group */}
            <Link
              href="https://www.facebook.com/groups/natchitocheslostfoundpets"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-50 rounded-2xl border border-blue-100 p-5 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="text-2xl mb-3">&#x1F4F8;</div>
              <h3 className="font-bold text-[#0a1e3d] mb-2 text-sm">Natchitoches Lost/Found Pets</h3>
              <p className="text-xs text-gray-600 flex-1 mb-3">
                Active Facebook community group — post a clear photo immediately when a pet goes missing.
              </p>
              <span className="text-xs text-[#1877F2] font-semibold">Facebook Group →</span>
            </Link>

            {/* Lost pet flyer */}
            <div className="bg-green-50 rounded-2xl border border-green-100 p-5 flex flex-col">
              <div className="text-2xl mb-3">&#x1F4CB;</div>
              <h3 className="font-bold text-[#0a1e3d] mb-2 text-sm">Printable &ldquo;Lost Pet&rdquo; Flyer</h3>
              <p className="text-xs text-gray-600 flex-1 mb-3">
                FAUNA-branded template — fill in your pet&apos;s photo and contact info, then post around the neighbourhood.
              </p>
              <a href="mailto:npfauna@gmail.com?subject=Lost Pet Flyer Template Request">
                <Button size="sm" variant="outline" className="text-xs w-full border-green-300 text-green-700 hover:bg-green-100">
                  Request Template
                </Button>
              </a>
            </div>

            {/* Local ordinances */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex flex-col">
              <div className="text-2xl mb-3">&#x1F4DC;</div>
              <h3 className="font-bold text-[#0a1e3d] mb-2 text-sm">Local Ordinances</h3>
              <p className="text-xs text-gray-600 flex-1 mb-3">
                Leash law and stray hold period quick-links for the City of Natchitoches and Natchitoches Parish.
              </p>
              <div className="flex flex-col gap-1.5">
                <Link href="https://www.natchitochesla.gov" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="text-xs w-full border-gray-200 hover:border-[#0099FF] hover:text-[#0099FF]">
                    City of Natchitoches <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
                <Link href="https://www.natchitochesparish.com" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="text-xs w-full border-gray-200 hover:border-[#0099FF] hover:text-[#0099FF]">
                    Natchitoches Parish <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact animal control callout */}
          <div className="mt-6 bg-amber-50 rounded-2xl border border-amber-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex-1">
              <p className="font-semibold text-[#0a1e3d] mb-0.5">Also contact Natchitoches Animal Control immediately.</p>
              <p className="text-sm text-gray-600">
                If your pet has been picked up, animal control is the first place to check — in person or by phone.
                Time matters: stray hold periods are short.
              </p>
            </div>
            <a href="mailto:npfauna@gmail.com?subject=Animal Control Contact Info Request" className="shrink-0">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white text-xs">
                Ask FAUNA for Contact Info
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Disaster Preparedness ── */}
      <section id="disaster" className="py-14 bg-gray-50 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#0a1e3d] flex items-center justify-center shrink-0">
              <CloudLightning className="h-5 w-5 text-[#8AFF00]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0a1e3d]">Storm Season</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">Disaster Preparedness</h2>
            </div>
          </div>

          {/* Checklist card */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-[#0a1e3d] mb-4 flex items-center gap-2">
                <span className="text-xl">&#x2705;</span> Hurricane &amp; Disaster Checklist
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Keep a 2-week supply of food, water, and medications",
                  "Store vet records, vaccination certificates, and microchip info in a waterproof bag",
                  "Have a pet carrier and leash at the ready — always",
                  "Identify pet-friendly hotels/shelters along your evacuation route in advance",
                  "Photograph your pet monthly so you have a recent image if separated",
                  "Program emergency vet numbers in your phone (see above)",
                  "Know your parish's emergency shelter pet policy",
                  "Tag your crate/carrier with your contact information",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#8AFF00] shrink-0 mt-0.5">&#x2714;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-400 italic">
                Need a printable PDF version? Email{" "}
                <a href="mailto:npfauna@gmail.com" className="text-[#0099FF] underline">npfauna@gmail.com</a>.
              </p>
            </div>

            <div className="space-y-4">
              {/* LSU Vet hotline */}
              <div className="bg-[#0a1e3d] rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-[#8AFF00]/20 text-[#8AFF00] border-[#8AFF00]/30 text-xs">Activates during hurricanes</Badge>
                </div>
                <h3 className="font-bold text-white mb-2">LSU Vet School Disaster Hotline</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Louisiana State University&apos;s veterinary teaching hospital activates a disaster
                  response hotline during hurricanes and other declared emergencies.
                </p>
                <a
                  href="tel:2255789600"
                  className="inline-flex items-center gap-2 text-[#33CCCC] font-bold text-lg"
                >
                  <Phone className="h-4 w-4" />
                  225-578-9600
                </a>
              </div>

              {/* Humane Society storm response */}
              <Link
                href="https://louisianahumane.org/disaster-response"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-[#0a1e3d] mb-2">Humane Society of Louisiana — Storm Response</h3>
                    <p className="text-sm text-gray-600">
                      Statewide animal rescue and sheltering network that activates during hurricanes
                      and major disasters. Coordinates transport, foster placement, and emergency supplies.
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-[#0099FF] shrink-0 ml-3 mt-0.5 transition-colors" />
                </div>
              </Link>

              {/* FAUNA emergency note */}
              <div className="bg-[#0099FF]/10 rounded-2xl border border-[#0099FF]/20 p-5">
                <h3 className="font-bold text-[#0a1e3d] mb-2 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#0099FF]" />
                  FAUNA Emergency Response
                </h3>
                <p className="text-sm text-gray-600">
                  During disasters, FAUNA coordinates emergency kenneling and transport for animals
                  whose owners must evacuate. Email us as early as possible.
                </p>
                <a href="mailto:npfauna@gmail.com?subject=Disaster Pet Help" className="inline-block mt-3">
                  <Button size="sm" className="bg-[#0099FF] hover:bg-[#0088ee] text-white text-xs">
                    Contact FAUNA for Emergency Help
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAUNA & Strategic Partners ── */}
      <section id="partners" className="py-14 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#0099FF] flex items-center justify-center shrink-0">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0099FF]">Our Network</p>
              <h2 className="text-2xl font-bold text-[#0a1e3d]">FAUNA &amp; Strategic Partners</h2>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-8 max-w-2xl">
            These organizations extend our reach and amplify lifesaving impact.
          </p>

          <div className="space-y-6">
            {partners.map((group) => (
              <div key={group.tier}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: group.color }} />
                  <p
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: group.tier === "Statewide Allies" ? "#5a9900" : group.color }}
                  >
                    {group.tier}
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gray-50 hover:bg-sky-50 border border-gray-100 hover:border-[#0099FF]/30 rounded-xl px-4 py-3 flex items-center justify-between gap-2 transition-all text-sm font-semibold text-[#0a1e3d] hover:text-[#0099FF]"
                    >
                      <span className="leading-tight">{item.name}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#0099FF] shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-14 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Still Can&apos;t Find What You Need?</h2>
          <p className="text-white/90 mb-8">
            FAUNA&apos;s team is happy to connect you with the right resource. We&apos;re a volunteer-run
            organization — responses may take 1–3 business days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:npfauna@gmail.com">
              <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-base px-7 py-4 h-auto">
                Email npfauna@gmail.com
              </Button>
            </a>
            <Link href="/programs">
              <Button className="bg-white text-[#0099FF] hover:bg-gray-100 font-bold text-base px-7 py-4 h-auto">
                Explore Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
