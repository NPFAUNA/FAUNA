"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    EmbedAvailablePets?: (
      elementId: string,
      gid: number,
      filters: Record<string, unknown>,
      page: number,
      sourceDomain: string,
      basePath: string,
      columns: number
    ) => void
  }
}

export function ShelterluvAvailablePets() {
  useEffect(() => {
    const elementId = "shelterluv_wrap_1682446298867"
    const sourceDomain = "https://www.shelterluv.com"
    const basePath = ""
    const gid = 42566
    const filters = {}

    const runEmbed = () => {
      if (window.EmbedAvailablePets) {
        window.EmbedAvailablePets(elementId, gid, filters, 1, sourceDomain, basePath, 2)
      }
    }

    const existingScript = document.querySelector(
      'script[src="https://www.shelterluv.com/misc/shelterluv_embed.js"]'
    )

    if (existingScript) {
      runEmbed()
      return
    }

    const script = document.createElement("script")
    script.src = "https://www.shelterluv.com/misc/shelterluv_embed.js"
    script.async = true
    script.onload = runEmbed
    document.body.appendChild(script)
  }, [])

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-4">
      <div id="shelterluv_wrap_1682446298867" />

      <div className="mt-4 text-center text-sm text-gray-600">
        This page is powered by Shelterluv. Learn more{" "}
        <a
          href="http://www.shelterluv.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#0099FF] hover:underline"
        >
          www.shelterluv.com
        </a>
      </div>
    </div>
  )
}
