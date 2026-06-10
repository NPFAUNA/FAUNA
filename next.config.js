/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.npfauna.org' },
      { protocol: 'http',  hostname: 'www.npfauna.org' },
    ],
  },
}
module.exports = nextConfig
