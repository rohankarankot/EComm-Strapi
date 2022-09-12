/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "wpkoi.com",
      "source.unsplash.com",
      "thumbs.dreamstime.com",
      "localhost",
      "www.kindpng.com",
    ],
  },
};

module.exports = nextConfig;
