// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'mars.nasa.gov',
      },
      {
        protocol: 'http',
        hostname: 'mars.jpl.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'mars.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'mars.jpl.nasa.gov',
      },
    ],
  },
};

module.exports = nextConfig;
