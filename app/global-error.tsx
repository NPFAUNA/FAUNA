"use client"

export const dynamic = "force-dynamic"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#0a1e3d", color: "white" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
          <div style={{ color: "#8AFF00", fontSize: "5rem", fontWeight: "bold", marginBottom: "1rem" }}>Oops</div>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Something went wrong</h2>
          <button
            onClick={reset}
            style={{ background: "#8AFF00", color: "#0a1e3d", border: "none", borderRadius: "8px", padding: "0.75rem 1.5rem", fontWeight: "bold", cursor: "pointer", fontSize: "1rem" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
