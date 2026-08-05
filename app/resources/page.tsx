import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  AlertCircle,
  BookOpen,
  ChevronRight,
  CloudLightning,
  ExternalLink,
  Heart,
  MapPin,
  Phone,
  Search,
  ShieldAlert,
  Stethoscope,
  Users,
  WalletCards,
  ZoomIn,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Community Resources & Help Desk | FAUNA",
  description:
    "Emergency veterinary contacts, low-cost care, local veterinarians, financial assistance, pet food resources, training information, and disaster-preparedness resources for Natchitoches Parish.",
}

const emergencyResources = [
  {
    status: "24/7",
    name: "Crossroads Animal Emergency Clinic",
    location: "Alexandria, LA",
    phone: "318-427-1292",
    phoneHref: "tel:3184271292",
    website: "http://crossroadsanimal.top/",
  },
  {
    status: "After Hours",
    name: "Animal Emergency Clinic",
    location: "Shreveport, LA",
    phone: "318-227-2345",
    phoneHref: "tel:3182272345",
    website: "http://www.aeclinic.com/",
  },
  {
    status: "24/7",
    name: "LSU Veterinary Teaching Hospital",
    location: "Baton Rouge, LA",
    phone: "225-578-9600",
    phoneHref: "tel:2255789600",
    website: "https://www.lsu.edu/vetmed/",
  },
  {
    status: "Poison",
    name: "ASPCA Poison Control",
    location: "National",
    phone: "888-426-4435",
    phoneHref: "tel:8884264435",
    website: "https://www.aspca.org/pet-care/aspca-poison-control",
  },
  {
    status: "Poison",
    name: "Pet Poison Helpline",
    location: "National",
    phone: "855-764-7661",
    phoneHref: "tel:8557647661",
    website: "https://www.petpoisonhelpline.com/",
  },
]

const localVets = [
  {
    name: "Natchitoches Animal Hospital",
    address: "1787 LA-6, Natchitoches, LA",
    distance: "Approximately 3 miles",
    phone: "318-352-2103",
    phoneHref: "tel:3183522103",
    description:
      "General practice offering routine care, surgeries, and daytime urgent care.",
  },
  {
    name: "Good Hope Veterinary Hospital",
    address: "128 South Dr, Natchitoches, LA",
    distance: "Approximately 2 miles",
    phone: "318-238-3000",
    phoneHref: "tel:3182383000",
    description:
      "Full-service small-animal veterinary care in Natchitoches.",
  },
  {
    name: "Many Veterinary Hospital",
    address: "Many, LA",
    distance: "Approximately 29 miles west",
    phone: "318-256-2608",
    phoneHref: "tel:3182562608",
    description:
      "A regional veterinary option serving pets and families near western Natchitoches Parish.",
    website: "https://www.manyvet.com/",
  },
  {
    name: "Red River Veterinary Center",
    address: "Coushatta, LA",
    distance: "Approximately 31 miles southeast",
    phone: "318-932-1000",
    phoneHref: "tel:3189321000",
    description:
      "Wellness, sick-pet, and mixed-animal veterinary services in Coushatta.",
  },
]

const financialResources = [
  {
    name: "RedRover Relief",
    description:
      "Urgent-care grants that may help with the cost of lifesaving veterinary treatment.",
    website: "https://redrover.org/relief/",
  },
  {
    name: "Brown Dog Foundation",
    description:
      "Financial assistance for families whose pets have a treatable condition but whose care is unaffordable.",
    website: "https://www.browndogfoundation.org/",
  },
  {
    name: "Pet Help Finder",
    description:
      "Search for veterinary care, pet food, temporary care, and other assistance programs.",
    website: "https://www.pethelpfinder.org/",
  },
]

const foodResources = [
  {
    name: "Cane River Food Pantry Pet Shelf",
    location: "Natchitoches",
    description:
      "A local food pantry offering pet-food assistance for families in the Natchitoches area.",
    website: "https://www.caneriverfoodpantry.org",
    label: "Local",
  },
  {
    name: "Louisiana SPCA Pet Food Pantry",
    location: "Statewide",
    description:
      "Emergency pet-food and supply assistance, including support during declared disasters.",
    website: "https://www.la-spca.org",
    label: "Statewide",
  },
  {
    name: "Feeding Pets of the Homeless",
    location: "National",
    description:
      "Food and veterinary-care assistance for pets belonging to people experiencing homelessness.",
    website: "https://www.petsofthehomeless.org",
    label: "National",
  },
]

const partnerGroups = [
  {
    title: "Local Core",
    partners: [
      {
        name: "Good Hope Veterinary Hospital",
        website: "https://www.facebook.com/GoodHopeVeterinaryHospital/",
      },
      {
        name: "Many Veterinary Hospital",
        website: "https://www.manyvet.com/",
      },
    ],
  },
  {
    title: "Regional & Transport",
    partners: [
      {
        name: "Best Friends Animal Society",
        website: "https://bestfriends.org/",
      },
    ],
  },
  {
    title: "Statewide Allies",
    partners: [
      {
        name: "Louisiana SPCA",
        website: "https://www.la-spca.org/",
      },
    ],
  },
  {
    title: "National Resources",
    partners: [
      {
        name: "ASPCA",
        website: "https://www.aspca.org/",
      },
      {
        name: "RedRover",
        website: "https://redrover.org/",
      },
      {
        name: "Pet Help Finder",
        website: "https://www.pethelpfinder.org/",
      },
    ],
  },
]

const navigationLinks = [
  { href: "#emergency", label: "Emergency" },
  { href: "#spay-neuter", label: "Spay & Neuter" },
  { href: "#local-vets", label: "Local Vets" },
  { href: "#financial-aid", label: "Financial Aid" },
  { href: "#food-supplies", label: "Food & Supplies" },
  { href: "#training", label: "Training" },
  { href: "#found-cat", label: "Found a Cat?" },
  { href: "#lost-found", label: "Lost & Found" },
  { href: "#disaster", label: "Disaster Prep" },
  { href: "#partners", label: "Partners" },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#33CCCC]/30 bg-[#33CCCC]/15 text-[#33CCCC]">
            Community Resources
          </Badge>

          <h1 className="font-script text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
            Community Resources &amp; Help Desk
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            One hub for Natchitoches-area pet owners &mdash; emergencies,
            low-cost care, behavior advice, supplies, and long-term planning.
          </p>
        </div>
      </section>

      <nav className="sticky top-16 z-40 border-b border-sky-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 py-5 sm:px-6 lg:px-8">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-sky-100 bg-sky-50 px-6 py-3 text-sm font-semibold text-[#0a1e3d] transition-colors hover:border-[#0099FF] hover:bg-[#0099FF] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <section id="emergency" className="scroll-mt-32 bg-red-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600">
              <ShieldAlert className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-600">
                Need help right now? Call the numbers below.
              </p>

              <h2 className="font-script mt-1 text-4xl text-[#0a1e3d] sm:text-5xl">
                Emergency Quick-Dial
              </h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg">
            <div className="hidden grid-cols-[120px_1fr_190px] gap-4 bg-[#0a1e3d] px-6 py-4 text-sm font-semibold text-white md:grid">
              <span>Availability</span>
              <span>Emergency Resource</span>
              <span>Phone</span>
            </div>

            <div className="divide-y divide-gray-100">
              {emergencyResources.map((resource) => (
                <div
                  key={resource.name}
                  className="grid gap-4 px-5 py-5 transition-colors hover:bg-red-50/50 md:grid-cols-[120px_1fr_190px] md:items-center md:px-6"
                >
                  <div>
                    <Badge
                      className={
                        resource.status === "Poison"
                          ? "border-purple-200 bg-purple-100 text-purple-700"
                          : resource.status === "After Hours"
                            ? "border-amber-200 bg-amber-100 text-amber-700"
                            : "border-red-200 bg-red-100 text-red-700"
                      }
                    >
                      {resource.status}
                    </Badge>
                  </div>

                  <div>
                    <Link
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-bold text-[#0a1e3d] hover:text-[#0099FF]"
                    >
                      {resource.name}
                      <ExternalLink className="h-4 w-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                    </Link>

                    <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {resource.location}
                    </p>

                    <Link
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-semibold text-[#0099FF] hover:underline"
                    >
                      Visit website
                    </Link>
                  </div>

                  <a
                    href={resource.phoneHref}
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 font-bold text-white transition-colors hover:bg-red-700"
                  >
                    <Phone className="h-4 w-4" />
                    {resource.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Tap a phone number to call or tap the resource name to visit its
            website.
          </p>
        </div>
      </section>

      <section id="spay-neuter" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#33CCCC]">
              <Heart className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#33CCCC]">
                Prevention
              </p>

              <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
                Low-Cost Spay, Neuter &amp; Preventive Care
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-7">
              <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
                FAUNA Program
              </Badge>

              <h3 className="text-2xl font-bold text-[#0a1e3d]">
                Spay Natchitoches
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Need-based vouchers cover a major portion of your pet&apos;s
                spay or neuter cost. Your out-of-pocket cost is usually under
                $100.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://new.shelterluv.com/form/community/FAUN/14823-spay-natchitoches"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0099FF] text-white hover:bg-[#0088ee]">
                    Apply for a Voucher
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <a href="mailto:SpayNatchitoches@yahoo.com">
                  <Button variant="outline">Email the Program</Button>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <Badge className="mb-4 border-purple-200 bg-purple-100 text-purple-700">
                National
              </Badge>

              <h3 className="text-2xl font-bold text-[#0a1e3d]">
                Pet Help Finder
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                Search for low-cost spay and neuter services, preventive
                veterinary care, financial assistance, pet food, and other
                support programs throughout the United States.
              </p>

              <Link
                href="https://www.pethelpfinder.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <Button variant="outline">
                  Find Low-Cost Care
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="local-vets" className="scroll-mt-32 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0099FF]">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0099FF]">
                Near You
              </p>

              <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
                Local Veterinary &amp; Wellness Partners
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {localVets.map((vet) => (
              <article
                key={vet.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0a1e3d]">
                  {vet.name}
                </h3>

                <p className="mt-2 flex items-start gap-2 text-sm text-gray-500">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0099FF]" />

                  <span>
                    {vet.address}
                    <br />
                    {vet.distance}
                  </span>
                </p>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {vet.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={vet.phoneHref}>
                    <Button
                      size="sm"
                      className="bg-[#0099FF] text-white hover:bg-[#0088ee]"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {vet.phone}
                    </Button>
                  </a>

                  {vet.website && (
                    <Link
                      href={vet.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        Website
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="financial-aid" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8AFF00]">
              <WalletCards className="h-5 w-5 text-[#0a1e3d]" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#5a9900]">
                Help Paying Bills
              </p>

              <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
                Financial Aid for Veterinary Bills
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {financialResources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0099FF]/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-[#0a1e3d] group-hover:text-[#0099FF]">
                    {resource.name}
                  </h3>

                  <ExternalLink className="h-4 w-4 shrink-0 text-gray-400" />
                </div>

                <p className="mt-4 flex-1 leading-relaxed text-gray-600">
                  {resource.description}
                </p>

                <span className="mt-5 text-sm font-semibold text-[#0099FF]">
                  Visit resource
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="food-supplies" className="scroll-mt-32 bg-sky-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0099FF]">
              Pantries &amp; Aid
            </p>

            <h2 className="font-script mt-1 text-4xl text-[#0a1e3d] sm:text-5xl">
              Pet Food &amp; Supplies
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {foodResources.map((resource) => (
              <div
                key={resource.name}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
              >
                <Badge className="mb-4 border-[#33CCCC]/20 bg-[#33CCCC]/10 text-[#167f7f]">
                  {resource.label}
                </Badge>

                <h3 className="text-lg font-bold text-[#0a1e3d]">
                  {resource.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {resource.location}
                </p>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {resource.description}
                </p>

                <Link
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block"
                >
                  <Button size="sm" variant="outline">
                    Visit Website
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-sky-100 bg-white p-6 sm:flex-row">
            <div>
              <h3 className="font-bold text-[#0a1e3d]">
                Support FAUNA directly with supplies
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Shop FAUNA&apos;s wishlists and send needed supplies directly
                to animals in our care.
              </p>
            </div>

            <Link href="/donate">
              <Button className="bg-[#0099FF] text-white hover:bg-[#0088ee]">
                View FAUNA Wishlists
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="training"
        className="scroll-mt-32 bg-[#0a1e3d] py-16 text-white"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#33CCCC]">
              <BookOpen className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#33CCCC]">
                Education
              </p>

              <h2 className="font-script text-4xl text-white sm:text-5xl">
                Training &amp; Behavior Libraries
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="https://www.aspca.org/pet-care"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/10 p-7 transition-colors hover:bg-white/15"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">ASPCA Pet-Care Guides</h3>
                <ExternalLink className="h-4 w-4 shrink-0 text-[#33CCCC]" />
              </div>

              <p className="mt-4 leading-relaxed text-gray-300">
                Dog and cat care, seasonal safety, enrichment, health, and
                behavior information.
              </p>
            </Link>

            <Link
              href="https://bestfriends.org/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/10 p-7 transition-colors hover:bg-white/15"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">
                  Best Friends Animal Society
                </h3>
                <ExternalLink className="h-4 w-4 shrink-0 text-[#33CCCC]" />
              </div>

              <p className="mt-4 leading-relaxed text-gray-300">
                Free articles and videos covering training, behavior,
                enrichment, health, and responsible pet ownership.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section id="found-cat" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Badge className="mb-4 border-[#33CCCC]/20 bg-[#33CCCC]/10 text-[#167f7f]">
                Found Cat Guide
              </Badge>

              <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
                What to Do If You Find a Cat
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                Use this guide to decide whether a cat needs Trap-Neuter-Return,
                foster assistance, an owned-cat voucher, or a lost-and-found
                post. For kittens, always make sure they are truly abandoned
                before moving them.
              </p>

              <Link
                href="https://new.shelterluv.com/form/community/FAUN/14823-tnr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block"
              >
                <Button className="bg-[#33CCCC] font-bold text-[#061424] hover:bg-[#29b8b8]">
                  Submit a TNR Request
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <a
              href="/What to do if you find a cat.jpg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the What to Do If You Find a Cat guide at full size"
              className="group relative block aspect-square cursor-zoom-in overflow-hidden rounded-2xl bg-sky-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#0099FF]/30"
            >
              <Image
                src="/What to do if you find a cat.jpg"
                alt="What to do if you find a cat in Natchitoches Parish"
                fill
                className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
              />

              <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0a1e3d]/90 px-4 py-2 text-xs font-bold text-white shadow-lg">
                <ZoomIn className="h-4 w-4" />
                Click to Enlarge
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="lost-found" className="scroll-mt-32 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0099FF]">
              <Search className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0099FF]">
                Missing Pet
              </p>

              <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
                Lost &amp; Found Toolkit
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="https://petmicrochiplookup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-bold text-[#0a1e3d]">Microchip Lookup</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Search a microchip number across major registries.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#0099FF]">
                Search now
              </span>
            </Link>

            <Link
              href="https://www.facebook.com/groups/natchitocheslostfoundpets"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-bold text-[#0a1e3d]">
                Natchitoches Lost/Found Pets
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Post a clear photo and identifying information in the local
                Facebook group.
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#0099FF]">
                Open Facebook group
              </span>
            </Link>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#0a1e3d]">Local Ordinances</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Review local government information concerning animals and
                community services.
              </p>

              <div className="mt-5 flex flex-col gap-2">
                <Link
                  href="https://www.natchitochesla.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="w-full">
                    City of Natchitoches
                  </Button>
                </Link>

                <Link
                  href="https://www.natchitochesparish.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="w-full">
                    Natchitoches Parish
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <AlertCircle className="h-6 w-6 shrink-0 text-amber-600" />

            <div>
              <h3 className="font-bold text-[#0a1e3d]">
                Contact Natchitoches Animal Control immediately.
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                If your pet has been picked up, animal control is one of the
                first places to check. Time matters because stray-hold periods
                may be short.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="disaster" className="scroll-mt-32 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a1e3d]">
              <CloudLightning className="h-5 w-5 text-[#8AFF00]" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0a1e3d]">
                Storm Season
              </p>

              <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
                Disaster Preparedness
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#0a1e3d]">
                Hurricane &amp; Disaster Checklist
              </h3>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-700">
                {[
                  "Keep a two-week supply of food, water, and medications.",
                  "Store veterinary records, vaccination certificates, and microchip information in a waterproof bag.",
                  "Keep a pet carrier and leash ready.",
                  "Identify pet-friendly hotels or shelters along your evacuation route.",
                  "Keep a recent photograph of every pet.",
                  "Program emergency veterinary numbers into your phone.",
                  "Know your parish emergency shelter's pet policy.",
                  "Label carriers with your contact information.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-[#5a9900]">
                      &#10003;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-[#0a1e3d] p-7 text-white">
                <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
                  Activates During Hurricanes
                </Badge>

                <h3 className="text-xl font-bold">
                  LSU Vet School Disaster Hotline
                </h3>

                <p className="mt-3 leading-relaxed text-gray-300">
                  LSU&apos;s veterinary teaching hospital may activate disaster
                  response services during hurricanes and other declared
                  emergencies.
                </p>

                <a
                  href="tel:2255789600"
                  className="mt-5 inline-flex items-center gap-2 text-xl font-bold text-[#33CCCC]"
                >
                  <Phone className="h-5 w-5" />
                  225-578-9600
                </a>
              </div>

              <Link
                href="https://humanela.org/disaster-relief/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#0a1e3d]">
                      Humane Society of Louisiana Disaster Relief
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      Louisiana-specific hurricane preparation, evacuation,
                      response, and recovery information for pets and families.
                    </p>
                  </div>

                  <ExternalLink className="h-4 w-4 shrink-0 text-[#0099FF]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-32 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0099FF]">
              <Users className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0099FF]">
                Our Network
              </p>

              <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
                FAUNA &amp; Strategic Partners
              </h2>
            </div>
          </div>

          <p className="mb-8 max-w-2xl text-gray-600">
            These organizations extend our reach and strengthen lifesaving
            support for animals and families.
          </p>

          <div className="space-y-8">
            {partnerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#0a1e3d]">
                  {group.title}
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {group.partners.map((partner) => (
                    <Link
                      key={partner.name}
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 font-semibold text-[#0a1e3d] transition-colors hover:border-[#0099FF]/30 hover:bg-sky-50 hover:text-[#0099FF]"
                    >
                      <span>{partner.name}</span>
                      <ExternalLink className="h-4 w-4 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0099FF] to-[#33CCCC] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-script text-4xl text-white sm:text-5xl">
            Still Can&apos;t Find What You Need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/90">
            FAUNA&apos;s team is happy to help connect you with the right
            resource. We are a volunteer-run organization, so responses may
            take one to three business days.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:rescue@npfauna.org">
              <Button className="h-auto bg-[#8AFF00] px-7 py-3 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                Email rescue@npfauna.org
              </Button>
            </a>

            <Link href="/programs">
              <Button className="h-auto bg-white px-7 py-3 font-bold text-[#0099FF] hover:bg-gray-100">
                Explore Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
