import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
} from "lucide-react"

const footerLinks = [
  {
    label: "About",
    href: "/history",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Adopt",
    href: "/adopt-foster",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Friedman Center",
    href: "/friedmancenter",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Volunteer",
    href: "/volunteer",
  },
  {
    label: "Donate",
    href: "/donate",
  },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/FaunaNatchitoches",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fauna_natchitoches/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@faunanatchitochesrescue?is_from_webapp=1&sender_device=pc",
    icon: Music2,
  },
]

export function Footer() {
  return (
    <footer className="bg-[#061424] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex"
              aria-label="FAUNA homepage"
            >
              <Image
                src="/fauna-logo-white.png"
                alt="FAUNA - Friends All United for Natchitoches Animals"
                width={220}
                height={220}
                className="h-auto w-40 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-base leading-7 text-gray-300">
              A 501(c)(3) nonprofit dedicated to providing humane care for
              homeless animals in Natchitoches Parish, Louisiana - We are a
              voice for those creatures who can not speak for themselves.
            </p>

            <p className="mt-3 text-sm font-semibold text-gray-300">
              EIN: 27-1004712
            </p>

            <div className="mt-6 space-y-3 text-gray-300">
              <a
                href="mailto:rescue@npfauna.org"
                className="flex items-center gap-3 transition hover:text-[#8AFF00]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#33CCCC]" />
                rescue@npfauna.org
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#33CCCC]" />

                <p>
                  FAUNA
                  <br />
                  P.O. Box 2552
                  <br />
                  Natchitoches, LA 71457
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#8AFF00]">
              Explore
            </h2>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-gray-300 transition hover:text-[#8AFF00]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-[#8AFF00]">
              Follow FAUNA
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              Follow our latest animal, event, volunteer, and community
              updates.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow FAUNA on ${label}`}
                  title={label}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0a1e3d] shadow-lg transition hover:-translate-y-1 hover:bg-[#8AFF00]"
                >
                  <Icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Friends All United for
            Natchitoches Animals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
