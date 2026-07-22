import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Mail, MapPin, ShoppingCart, Grid3X3, Star } from "lucide-react"

const BASE05 = "http://www.npfauna.org/wp-content/uploads/2026/05"
const BASE06 = "http://www.npfauna.org/wp-content/uploads/2026/06"

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
      <section className="bg-gradient-to-br from-[#0a1e3d] via-[#0d2851] to-[#061424] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-[#8AFF00]/20 text-[#8AFF00] border-[#8AFF00]/30 mb-4">Make a Difference</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Help Build Brighter Futures for{" "}
            <span className="text-[#33CCCC]">Natchitoches Animals</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Every contribution — big or small — saves lives and strengthens our community. Choose the way you want
            to give below.
          </p>
        </div>
      </section>

      {/* Donation Impact Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0a1e3d] text-center mb-10">Your Gift in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0099FF]/30 transition-all overflow-hidden text-center"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={tier.img}
                    alt={tier.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <p className="text-2xl font-bold text-[#0099FF] mb-1">{tier.amount}</p>
                  <p className="text-xs text-gray-600 leading-snug">{tier.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Square Donate */}
<section className="py-16 bg-white">
  <div className="max-w-2xl mx-auto px-4 text-center">
    <Badge className="bg-[#0099FF]/10 text-[#0099FF] border-[#0099FF]/20 mb-4">
      Donate by Card
    </Badge>

    <h2 className="text-2xl font-bold text-[#0a1e3d] mb-2">
      Donate to Support Our Mission
    </h2>

    <p className="text-gray-600 mb-8">
      Secure online donations powered by Square.
    </p>

    <div className="mx-auto max-w-[260px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <Image
        src="https://items-images-production.s3.us-west-2.amazonaws.com/files/75b961727e19d4d99ce5e130ce417058d3683009/original.png"
        alt="Support Our Mission"
        width={259}
        height={160}
        className="w-full h-auto"
        unoptimized
      />

      <div className="p-6">
        <p className="text-lg text-[#0a1e3d]">
          Support Our Mission
        </p>

        <p className="mt-2 text-lg font-semibold text-[#0a1e3d]">
          Entered by customer
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

      {/* PayPal + Venmo */}
      <section className="py-12 bg-sky-50 border-y border-sky-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0a1e3d] mb-8">Donate via PayPal or Venmo</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://www.paypal.com/donate/?hosted_button_id=7KDF67TNWVHLL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#003087] hover:bg-[#00256e] text-white font-bold px-8 py-4 h-auto text-base">
                Donate via PayPal
              </Button>
            </Link>
            <Link
              href="https://account.venmo.com/u/NPFauna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#3D95CE] hover:bg-[#3080b0] text-white font-bold px-8 py-4 h-auto text-base">
                Donate via Venmo @NPFauna
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wishlists */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-[#8AFF00]/20 text-[#0a1e3d] border-[#8AFF00]/30 mb-3">Shop Our Wishlists</Badge>
            <h2 className="text-2xl font-bold text-[#0a1e3d]">Make a Purchase from Our Wishlists</h2>
            <p className="text-gray-600 mt-2">
              Browse our curated lists and send supplies directly to FAUNA. Every item on these lists is something
              our animals genuinely need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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
              <Link key={store.name} href={store.href} target="_blank" rel="noopener noreferrer">
                <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-center cursor-pointer h-full">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${store.color}20`, color: store.color }}
                  >
                    {store.icon}
                  </div>
                  <h3 className="font-bold text-[#0a1e3d] mb-2">{store.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{store.desc}</p>
                  <span
                    className="inline-block text-sm font-semibold px-4 py-2 rounded-full text-white transition-opacity"
                    style={{ backgroundColor: store.color }}
                  >
                    Shop Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* $5 Friday */}
      <section className="py-16 bg-gradient-to-br from-[#8AFF00]/10 to-[#33CCCC]/10 border-y border-[#8AFF00]/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#8AFF00] flex items-center justify-center mx-auto mb-4">
            <Grid3X3 className="h-8 w-8 text-[#0a1e3d]" />
          </div>
          <Badge className="bg-[#8AFF00]/30 text-[#0a1e3d] border-[#8AFF00]/40 mb-3">$5 Friday Giving Grid</Badge>
          <h2 className="text-2xl font-bold text-[#0a1e3d] mb-3">Every Square Saves a Life</h2>
          <p className="text-gray-700 mb-2">
            Available all days — we just promote it on Fridays! Uses PayPal with <strong>no fee</strong> and also
            accepts credit cards with a small fee.
          </p>
          <p className="text-gray-600 mb-8">
            You can add a photo of your pet or a personal message in the grid!
          </p>
          <Link href="https://www.givinggrid.com/tsdzah/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#8AFF00] hover:bg-[#7aee00] text-[#0a1e3d] font-bold text-base px-8 py-4 h-auto">
              <Star className="h-5 w-5 mr-2" />
              Open the $5 Giving Grid
            </Button>
          </Link>
        </div>
      </section>

      {/* Mail a Check */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
            <MapPin className="h-10 w-10 text-[#0099FF] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#0a1e3d] mb-3">Mail a Check</h2>
            <p className="text-gray-600 mb-4">Make checks payable to <strong>FAUNA</strong> and mail to:</p>
            <div className="bg-white rounded-xl border border-gray-200 px-8 py-5 inline-block text-left mb-2">
              <p className="font-bold text-[#0a1e3d] text-lg">FAUNA</p>
              <p className="text-gray-700">P.O. Box 2552</p>
              <p className="text-gray-700">Natchitoches, LA 71457</p>
            </div>
          </div>
        </div>
      </section>

      {/* In Memory / Honor */}
      <section className="py-16 bg-[#0a1e3d] text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <Heart className="h-10 w-10 text-[#8AFF00] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Donate in Memory or Honor</h2>
            <p className="text-gray-300">
              Donations made &ldquo;In Remembrance of&rdquo; or &ldquo;In Honor of&rdquo; are a beautiful way to
              honor the legacy of a loved one or animal by helping support a better life for the animals in
              FAUNA&apos;s care. <strong className="text-white">All donations are tax deductible.</strong>
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="text-gray-300 mb-4">
              To donate in remembrance or honor of someone, use the{" "}
              <Link href="https://www.paypal.com/donate/?hosted_button_id=7KDF67TNWVHLL" target="_blank" className="text-[#33CCCC] underline">PayPal</Link>{" "}
              or{" "}
              <Link href="https://account.venmo.com/u/NPFauna" target="_blank" className="text-[#33CCCC] underline">Venmo</Link>{" "}
              links, or mail a check to the address above.
            </p>
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#8AFF00]" />
              In the Memo box, please include:
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "Your Name & Address (to receive a tax deductible receipt/letter)",
                "Who the donation is in Memory of (Person, Animal, etc.)",
                "Name & Address of who should receive the Acknowledgement Letter",
                "If you want the funds to go to a specific FAUNA cause (if not specified, funds will go into our general fund that provides care for our current rescues).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#8AFF00] shrink-0 mt-0.5">★</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            Questions? Email us at{" "}
            <a href="mailto:rescue@npfauna.org" className="text-[#33CCCC] underline">
              rescue@npfauna.org
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
  {/* Photo Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0a1e3d] text-center mb-8">Lives You&apos;re Helping</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>
