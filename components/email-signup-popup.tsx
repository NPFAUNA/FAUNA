"use client"

import { useEffect, useState } from "react"
import { Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmailSignupPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const hasSeenPopup = window.localStorage.getItem(
      "fauna-email-popup-seen",
    )

    if (!hasSeenPopup) {
      const timer = window.setTimeout(() => {
        setOpen(true)
      }, 1200)

      return () => window.clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    window.localStorage.setItem("fauna-email-popup-seen", "true")
    setOpen(false)
  }

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061424]/75 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-popup-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#0a1e3d]"
          aria-label="Close email signup popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8AFF00]/25">
          <Mail className="h-7 w-7 text-[#0a1e3d]" />
        </div>

        <p className="font-script text-3xl text-[#0099FF]">
          Stay connected
        </p>

        <h2
          id="email-popup-title"
          className="mt-1 text-3xl font-extrabold text-[#0a1e3d]"
        >
          Join Our Email List
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          Receive FAUNA news, upcoming event details, volunteer opportunities,
          adoption updates, and other ways to help animals throughout
          Natchitoches Parish.
        </p>

        <a
          href="mailto:rescue@npfauna.org?subject=Please%20add%20me%20to%20the%20FAUNA%20email%20list"
          onClick={closePopup}
        >
          <Button className="mt-7 w-full bg-[#0099FF] py-6 text-base font-bold text-white hover:bg-[#007acc]">
            <Mail className="mr-2 h-5 w-5" />
            Join the Email List
          </Button>
        </a>

        <button
          type="button"
          onClick={closePopup}
          className="mt-4 w-full text-sm font-semibold text-gray-500 hover:text-[#0a1e3d]"
        >
          Maybe later
        </button>
      </div>
    </div>
  )
}
