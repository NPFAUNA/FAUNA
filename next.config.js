/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.npfauna.org' },
      { protocol: 'http', hostname: 'www.npfauna.org' },
    ],
  },

  async redirects() {
    return [
      {
        source: '/board-of-directors',
        destination: '/board',
        permanent: true,
      },
      {
        source: '/advisory-board',
        destination: '/advisoryboard',
        permanent: true,
      },
      {
        source: '/programs/spay-natchitoches',
        destination: '/spay',
        permanent: true,
      },
      {
        source: '/programs/tnr',
        destination: '/tnr',
        permanent: true,
      },
      {
        source: '/foster-faq',
        destination: '/fosterfaq',
        permanent: true,
      },
      {
        source: '/capital-campaign',
        destination: '/friedmancenter',
        permanent: true,
      },
      {
        source: '/hope-has-a-place',
        destination: '/hopehasaplace',
        permanent: true,
      },
      {
        source: '/generations-of-hope',
        destination: '/friedmancenter',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
