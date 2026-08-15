import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Grid3X3,
  Heart,
  MapPin,
  Star,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Donate | FAUNA",
  description:
    "Support FAUNA through online donations, PayPal, Venmo, wishlists, mailed checks, and memorial or honorary gifts.",
}

const donationTiers = [
  {
    amount: "$20",
    label: "Feeds a rescued animal for one week.",
    img: "/Bath_Days.jpg",
  },
  {
    amount: "$50",
    label: "Provides lifesaving vaccinations.",
    img: "/Employment_1.jpg",
  },
  {
    amount: "$100",
    label: "Sponsors a spay or neuter surgery.",
    img: "/Carousel_3.jpg",
  },
  {
    amount: "$250",
    label: "Helps transport animals to loving homes.",
    img: "/Pup2.jpg",
  },
  {
    amount: "$500",
    label: "Provides emergency medical care for an animal in crisis.",
    img: "/Adoption_Event1.jpg",
  },
]

const wishlistStores = [
  {
    name: "Amazon Wishlist",
    color: "#FF9900",
    href: "https://www.amazon.com/hz/wishlist/ls/2WFXZFAZO4DZX?ref_=list_d_wl_lfu_nav_1",
    description:
      "Food, bedding, toys, and supplies delivered directly to FAUNA.",
    logo: "/Amazon.png",
  },
  {
    name: "Chewy Wishlist",
    color: "#0099FF",
    href: "https://www.chewy.com/g/natchitoches-hope-for-paws_b71124533#wish-list&wishlistsortby=DEFAULT",
    description:
      "Premium pet food, treats, and health products from Chewy.",
    logo: "/Chewy.png",
  },
  {
    name: "Tractor Supply Wishlist",
    color: "#E31837",
    href: "https://www.tractorsupply.com/SharedWishListView?catalogId=10051&wishListEMail=true&langId=-1&storeId=10151&guestAccessKey=-46bfe9b5:192d4e589ad:-7ae0&externalId=8535798&wishListEMail=true",
    description:
      "Farm and pet supplies from our local Tractor Supply Co.",
    logo: "/Tractor_Supply.jpeg",
  },
]

function ScriptTitle({ title }: { title: string }) {
  return (
    <>
      {title.split(/([A-Z]{2,})/).map((part, index) =>
        /^[A-Z]{2,}$/.test(part) ? (
          <span key={`${part}-${index}`} className="font-brand-caps">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061424] via-[#0a1e3d] to-[#0d2851] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-[#8AFF00] shadow-xl sm:h-52 sm:w-52">
            <Image
              src="/Donate_Dog.jpeg"
              alt="FAUNA rescue dog"
              width={208}
              height={208}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
            Make a Difference
          </Badge>

          <h1 className="font-sans text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
            Support Our Mission
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            Every contribution &mdash; big or small &mdash; saves lives and
            strengthens our community. Choose the way you would like to give
            below.
          </p>
        </div>
      </section>

      {/* Donation Impact Tiers */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0099FF]">
              Your Support Matters
            </p>

            <h2 className="font-script mt-2 text-4xl text-[#0a1e3d] sm:text-5xl">
              <ScriptTitle title="Your Gift in Action" />
            </h2>
          </div>

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
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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

      {/* Square Donate */}
      <section className="bg-gradient-to-r from-[#1DA1F2] via-[#2CBFD3] to-[#33CCCC] py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-4 border-[#0099FF]/20 bg-[#0099FF]/10 text-[#0099FF]">
            Donate by Card
          </Badge>

          <h2 className="font-script text-4xl text-white sm:text-5xl">
            <ScriptTitle title="Donate to Support Our Mission" />
          </h2>

          <p className="mb-8 mt-3 text-gray-600">
            Secure online donations powered by Square.
          </p>

          <div className="mx-auto max-w-[260px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            <Image
              src="https://items-images-production.s3.us-west-2.amazonaws.com/files/75b961727e19d4d99ce5e130ce417058d3683009/original.png"
              alt="Support FAUNA's mission"
              width={259}
              height={160}
              className="h-auto w-full"
              unoptimized
            />

            <div className="p-6">
              <p className="text-lg text-[#0a1e3d]">Support Our Mission</p>

              <p className="mt-2 text-lg font-semibold text-[#0a1e3d]">
                Enter your donation amount
              </p>

              <Link
                href="https://square.link/u/cx8khPNs?src=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#2693ff] px-6 font-bold text-white transition hover:bg-[#167ee6]"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PayPal and Venmo */}
      <section className="border-y border-sky-100 bg-[#33CCCC] py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
            <ScriptTitle title="Donate via PayPal or Venmo" />
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            >
              <Button className="h-auto bg-[#3D95CE] px-8 py-4 text-base font-bold text-white hover:bg-[#3080b0]">
                <Image
                  src="/Venmo.png"
                  alt="Venmo"
                  width={24}
                  height={24}
                  className="mr-2 h-6 w-6 rounded-full"
                />
                Donate via Venmo @NPFauna
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wishlists */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge className="mb-3 border-[#8AFF00]/30 bg-[#8AFF00]/20 text-[#0a1e3d]">
              Shop Our Wishlists
            </Badge>

            <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
              <ScriptTitle title="Send Supplies Directly to FAUNA" />
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Browse our curated lists and send needed supplies directly to
              animals in our care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {wishlistStores.map((store) => (
              <Link
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="h-full cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:border-gray-200 hover:shadow-md">
                  <div
                    className="mx-auto mb-5 flex h-32 w-32 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${store.color}20`,
                      color: store.color,
                    }}
                  >
                    <Image
                      src={store.logo}
                      alt={store.name}
                      width={128}
                      height={128}
                      className="h-24 w-24 rounded-full bg-white object-contain p-2"
                    />
                  </div>

                  <h3 className="mb-2 font-bold text-[#0a1e3d]">
                    {store.name}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600">
                    {store.description}
                  </p>

                  <span
                    className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white"
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
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8AFF00]">
            <Grid3X3 className="h-8 w-8 text-[#0a1e3d]" />
          </div>

          <Badge className="mb-3 border-[#8AFF00]/40 bg-[#8AFF00]/30 text-[#0a1e3d]">
            $5 Friday Giving Grid
          </Badge>

          <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
            <ScriptTitle title="Every Square Saves a Life" />
          </h2>

          <p className="mt-4 text-gray-700">
            The Giving Grid is available every day, but we highlight it on
            Fridays. PayPal donations have no fee, and credit cards are accepted
            with a small processing fee.
          </p>

          <p className="mt-2 text-gray-600">
            You can also add a photo of your pet or a personal message to the
            grid.
          </p>

          <Link
            href="https://www.givinggrid.com/tsdzah/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <MapPin className="mx-auto mb-4 h-10 w-10 text-[#0099FF]" />

            <h2 className="font-script text-4xl text-[#0a1e3d] sm:text-5xl">
              <ScriptTitle title="Mail a Check" />
            </h2>

            <p className="mb-4 mt-4 text-gray-600">
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

      {/* In Memory or Honor */}
      <section className="bg-[#0a1e3d] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="mx-auto mb-4 h-10 w-10 text-[#8AFF00]" />

            <h2 className="font-script text-4xl text-white sm:text-5xl">
              <ScriptTitle title="Donate in Memory or Honor" />
            </h2>

            <p className="mt-4 text-gray-300">
              Donations made in remembrance or honor are a meaningful way to
              celebrate the legacy of a loved one or animal while helping the
              animals in FAUNA&apos;s care.{" "}
              <strong className="text-white">
                All donations are tax deductible.
              </strong>
            </p>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSckj10hj7yi5qJf4DCxXAG0SoVHqB-Mj1y-tfJ4J9vZLPGrnQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block"
            >
              <Button className="h-auto bg-[#8AFF00] px-8 py-4 text-base font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                <Heart className="mr-2 h-5 w-5" />
                Memorial &amp; Honor Donation Form
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Questions? Email us at{" "}
            <a
              href="mailto:rescue@npfauna.org"
              className="text-[#33CCCC] underline"
            >
              rescue@npfauna.org
            </a>
          </p>
        </div>
      </section>

      {/* Lives You're Helping */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-script mb-10 text-center text-4xl text-[#0a1e3d] sm:text-5xl">
            <ScriptTitle title="Lives You&apos;re Helping" />
          </h2>

          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
            <div className="mx-auto w-full max-w-[380px]">
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-[#33CCCC] bg-white shadow-xl">
                <Image
                  src="/Carousel_10.jpg"
                  alt="FAUNA rescue animal"
                  fill
                  sizes="(max-width: 768px) 90vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mx-auto w-full max-w-[380px]">
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-[#33CCCC] bg-white shadow-xl">
                <Image
                  src="/Carousel_6.jpg"
                  alt="FAUNA rescue animal"
                  fill
                  sizes="(max-width: 768px) 90vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
