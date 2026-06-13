import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Heart } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/adopt-foster", label: "Adopt or Foster" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/employment", label: "Employment" },
  { href: "/hopehasaplace", label: "Edwina & Sam Friedman Pet Adoption and Welfare Center" },
  { href: "/donate", label: "Donate" },
]

export function Footer() {
  return (
    <footer className="bg-[#061424] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-1.5 shrink-0">
                <Image
        src="Logo Final outlined.png"
        alt="FAUNA - Friends All United for Natchitoches Animals"
        width={180}
        height={180}
        className="h-auto w-auto max-w-[180px]"
        priority
      />
              </div>
              <div>
                <span className="font-extrabold text-xl block leading-tight">FAUNA</span>
                <span className="text-[#33CCCC] text-xs">Friends All United for Natchitoches Animals</span>
              </div>
            </div>
            <p className="text-sky-200/80 text-sm leading-relaxed mb-5 max-w-sm">
              An all-volunteer 501(c)(3) nonprofit dedicated to providing humane care for homeless
              animals in Natchitoches Parish, Louisiana — and finding every one of them a loving home.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/FaunaNatchitoches"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d2851] hover:bg-[#0099FF] p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/fauna_natchitoches/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d2851] hover:bg-[#0099FF] p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[#33CCCC] mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sky-200/80 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#33CCCC] mb-4 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-sky-200/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[#33CCCC] shrink-0" />
                <span>Natchitoches Parish, Louisiana</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-[#33CCCC] shrink-0" />
                <a href="mailto:npfauna@gmail.com" className="hover:text-white transition-colors">
                  npfauna@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-4 w-4 mt-0.5 text-[#8AFF00] shrink-0" />
                <span>All-volunteer organization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0d2851] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-sky-900">
          <p>© {new Date().getFullYear()} FAUNA · Friends All United for Natchitoches Animals</p>
          <p>501(c)(3) Nonprofit · EIN: 27-1004712 </p>
        </div>
      </div>
    </footer>
  )
}
