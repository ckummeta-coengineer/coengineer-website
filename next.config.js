/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'coengineer.co.uk',
          },
        ],
        destination: 'https://www.coengineer.co.uk',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
