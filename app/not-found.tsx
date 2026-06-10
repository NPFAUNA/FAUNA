import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1e3d] text-white px-4 text-center">
      <div className="text-[#8AFF00] text-8xl font-bold mb-4">404</div>
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-300 mb-8 max-w-md">
        We couldn&apos;t find the page you&apos;re looking for. It may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="bg-[#8AFF00] text-[#0a1e3d] font-bold px-6 py-3 rounded-lg hover:bg-lime-300 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
