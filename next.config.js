/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['wpkoi.com','source.unsplash.com'],
  },
}

module.exports = nextConfig
