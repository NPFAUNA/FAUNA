"use client"

import Script from "next/script"

// TypeScript declaration for the Stripe Buy Button web component
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "buy-button-id": string
          "publishable-key": string
        },
        HTMLElement
      >
    }
  }
}

export function StripeDonateButton() {
  return (
    <div className="flex justify-center py-2">
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />
      <stripe-buy-button
        buy-button-id="buy_btn_1TdGnRQV69zCbwqhQAEfNK7j"
        publishable-key="pk_live_51OD8yxQV69zCbwqheTWOdPWf6ooYUmhC3f4b48hf64TELlMFlMmxD6saVEXXLrcjtdYIJBXOuYTy7rBmJLmtQbdW00K6hvfteY"
      />
    </div>
  )
}
