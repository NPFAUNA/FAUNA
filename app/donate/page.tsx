
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Mail,
  MapPin,
  ShoppingCart,
  Grid3X3,
  Star,
} from "lucide-react"
import { StripeDonateButton } from "@/components/stripe-donate-button"

const BASE05 =
  "https://www.npfauna.org/wp-content/uploads/2026/05"
const BASE06 =
  "https://www.npfauna.org/wp-content/uploads/2026/06"

const donationTiers = [
  { amount: "$20", label: "Feeds a rescued animal for one week.", img: `${BASE06}/8.png` },
  { amount: "$50", label: "Provides lifesaving vaccinations.", img: `${BASE05}/1-4.png` },
  { amount: "$100", label: "Sponsors a spay or neuter surgery.", img: `${BASE05}/2-2.png` },
  { amount: "$250", label: "Helps transport animals to loving homes.", img: `${BASE05}/14.png` },
  { amount: "$500", label: "Provides emergency medical care for an animal in crisis.", img: `${BASE05}/29-1.png` },
]

const galleryImages = [
  { src: `${BASE06}/4.png`, alt: "FAUNA animal 4" },
  { src: `${BASE05}/52.png`, alt: "FAUNA animal 52" },
  { src: `${BASE06}/8.png`, alt: "FAUNA animal 8" },
  { src: `${BASE05}/16-1.png`, alt: "FAUNA animal 16" },
  { src: `${BASE05}/1-5.png`, alt: "FAUNA animal 1-5" },
  { src: `${BASE05}/25-2.png`, alt: "FAUNA animal 25" },
  { src: `${BASE05}/19-1.png`, alt: "FAUNA animal 19" },
  { src: `${BASE06}/12.png`, alt: "FAUNA animal 12" },
  { src: `${BASE05}/15-1.png`, alt: "FAUNA animal 15" },
  { src: `${BASE05}/18-1.png`, alt: "FAUNA animal 18" },
  { src: `${BASE05}/47.png`, alt: "FAUNA animal 47" },
  { src: `${BASE06}/9.png`, alt: "FAUNA animal 9" },
  { src: `${BASE05}/13-1.png`, alt: "FAUNA animal 13" },
  { src: `${BASE05}/27-1.png`, alt: "FAUNA animal 27" },
  { src: `${BASE06}/10.png`, alt: "FAUNA animal 10" },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1e3d] via-[#0d2851] to-[#061424] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/20 px-4 py-2 text-[#8AFF00]">
            Make a Difference
          </Badge>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Help Build Brighter Futures for{" "}
            <span className="text-[#33CCCC]">
              Natchitoches Animals
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Every contribution &mdash; big or small &mdash; saves lives and
            strengthens our community. Choose the way you want to give below.
          </p>
        </div>
      </section>

      {/* Donation Impact Tiers */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#0a1e3d]">
            Your Gift in Action
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-center shadow-sm transition-all hover:border-[#0099FF]/30 hover:shadow-md"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={tier.img}
                    alt={tier.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                <div className="p-4">
                  <p className="mb-1 text-2xl font-bold text-[#0099FF]">
                    {tier.amount}
                  </p>
                  <p className="text-xs leading-snug text-gray-600">
                    {tier.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#0a1e3d]">
            Lives You&apos;re Helping
          </h2>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 20vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PayPal + Venmo - above Donate by Card */}
      <section className="border-y border-sky-100 bg-sky-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-8 text-2xl font-bold text-[#0a1e3d]">
            Donate via PayPal or Venmo
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://www.paypal.com/donate/?hosted_button_id=7KDF67TNWVHLL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-auto bg-[#003087] px-8 py-4 text-base font-bold text-white hover:bg-[#00256e]">
                Donate via PayPal
              </Button>
            </Link>

            <Link
              href="https://account.venmo.com/u/NPFauna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#3D95CE] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#3080b0]"
            >
              Donate via Venmo @NPFauna
            </Link>
          </div>
        </div>
      </section>

      {/* Stripe Donate */}
      <section className="bg-[#0a1e3d] py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <Badge className="mb-4 border-[#0099FF] bg-[#0099FF] px-5 py-2 text-lg font-bold text-white">
            Donate by Card
          </Badge>

          <h2 className="mb-2 text-3xl font-bold text-white">
            Donate to Support Our Mission
          </h2>

          <p className="mb-8 text-gray-300">
            Secure online donation &mdash; all major credit cards accepted.
          </p>

          <StripeDonateButton />
        </div>
      </section>

      {/* Wishlists */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <Badge className="mb-3 border-[#8AFF00]/30 bg-[#8AFF00]/20 text-[#0a1e3d]">
              Shop Our Wishlists
            </Badge>

            <h2 className="text-2xl font-bold text-[#0a1e3d]">
              Make a Purchase from Our Wishlists
            </h2>

            <p className="mt-2 text-gray-600">
              Browse our curated lists and send supplies directly to FAUNA.
              Every item on these lists is something our animals genuinely need.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Amazon Wishlist",
                icon: <ShoppingCart className="h-8 w-8" />,
                color: "#FF9900",
                href: "https://www.amazon.com/hz/wishlist/ls/2WFXZFAZO4DZX?ref_=list_d_wl_lfu_nav_1",
                desc: "Food, bedding, toys, and supplies delivered right to our shelter.",
              },
              {
                name: "Chewy Wishlist",
                icon: <ShoppingCart className="h-8 w-8" />,
                color: "#0099FF",
                href: "https://www.chewy.com/g/natchitoches-hope-for-paws_b71124533#wish-list&wishlistsortby=DEFAULT",
                desc: "Premium pet food, treats, and health products from Chewy.",
              },
              {
                name: "Tractor Supply Wishlist",
                icon: <ShoppingCart className="h-8 w-8" />,
                color: "#E31837",
                href: "https://www.tractorsupply.com/SharedWishListView?catalogId=10051&wishListEMail=true&langId=-1&storeId=10151&guestAccessKey=-46bfe9b5:192d4e589ad:-7ae0&externalId=8535798&wishListEMail=true",
                desc: "Farm and pet supplies from our local Tractor Supply Co.",
              },
            ].map((store) => (
              <Link
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group h-full cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:border-gray-200 hover:shadow-md">
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${store.color}20`,
                      color: store.color,
                    }}
                  >
                    {store.icon}
                  </div>

                  <h3 className="mb-2 font-bold text-[#0a1e3d]">
                    {store.name}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600">
                    {store.desc}
                  </p>

                  <span
                    className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity"
                    style={{ backgroundColor: store.color }}
                  >
                    Shop Now &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* $5 Friday */}
      <section className="border-y border-[#8AFF00]/20 bg-gradient-to-br from-[#8AFF00]/10 to-[#33CCCC]/10 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8AFF00]">
            <Grid3X3 className="h-8 w-8 text-[#0a1e3d]" />
          </div>

          <Badge className="mb-3 border-[#8AFF00]/40 bg-[#8AFF00]/30 text-[#0a1e3d]">
            $5 Friday Giving Grid
          </Badge>

          <h2 className="mb-3 text-2xl font-bold text-[#0a1e3d]">
            Every Square Saves a Life
          </h2>

          <p className="mb-2 text-gray-700">
            Available all days &mdash; we just promote it on Fridays! Uses
            PayPal with <strong>no fee</strong> and also accepts credit cards
            with a small fee.
          </p>

          <p className="mb-8 text-gray-600">
            You can add a photo of your pet or a personal message in the grid!
          </p>

          <Link
            href="https://www.givinggrid.com/tsdzah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-auto bg-[#8AFF00] px-8 py-4 text-base font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
              <Star className="mr-2 h-5 w-5" />
              Open the $5 Giving Grid
            </Button>
          </Link>
        </div>
      </section>

      {/* Mail a Check */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <MapPin className="mx-auto mb-4 h-10 w-10 text-[#0099FF]" />

            <h2 className="mb-3 text-2xl font-bold text-[#0a1e3d]">
              Mail a Check
            </h2>

            <p className="mb-4 text-gray-600">
              Make checks payable to <strong>FAUNA</strong> and mail to:
            </p>

            <div className="mb-2 inline-block rounded-xl border border-gray-200 bg-white px-8 py-5 text-left">
              <p className="text-lg font-bold text-[#0a1e3d]">FAUNA</p>
              <p className="text-gray-700">P.O. Box 2552</p>
              <p className="text-gray-700">Natchitoches, LA 71457</p>
            </div>
          </div>
        </div>
      </section>

      {/* In Memory / Honor */}
      <section className="bg-[#0a1e3d] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 text-center">
            <Heart className="mx-auto mb-4 h-10 w-10 text-[#8AFF00]" />

            <h2 className="mb-3 text-2xl font-bold">
              Donate in Memory or Honor
            </h2>

            <p className="text-gray-300">
              Donations made &ldquo;In Remembrance of&rdquo; or &ldquo;In Honor
              of&rdquo; are a beautiful way to honor the legacy of a loved one
              or animal by helping support a better life for the animals in
              FAUNA&apos;s care.{" "}
              <strong className="text-white">
                All donations are tax deductible.
              </strong>
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            <p className="mb-4 text-gray-300">
              To donate in remembrance or honor of someone, use the{" "}
              <Link
                href="https://www.paypal.com/donate/?hosted_button_id=7KDF67TNWVHLL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33CCCC] underline"
              >
                PayPal
              </Link>{" "}
              or{" "}
              <Link
                href="https://account.venmo.com/u/NPFauna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33CCCC] underline"
              >
                Venmo
              </Link>{" "}
              links, or mail a check to the address above.
            </p>

            <h3 className="mb-3 flex items-center gap-2 font-semibold text-white">
              <Mail className="h-5 w-5 text-[#8AFF00]" />
              In the Memo box, please include:
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Your Name & Address (to receive a tax deductible receipt/letter)",
                "Who the donation is in Memory of (Person, Animal, etc.)",
                "Name & Address of who should receive the Acknowledgement Letter",
                "If you want the funds to go to a specific FAUNA cause (if not specified, funds will go into our general fund that provides care for our current rescues).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[#8AFF00]">
                    ★
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Questions? Email us at{" "}
            <a
              href="mailto:npfauna@gmail.com"
              className="text-[#33CCCC] underline"
            >
              npfauna@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
