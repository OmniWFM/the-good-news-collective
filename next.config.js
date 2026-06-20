/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ideogram.ai',
        pathname: '/api/images/**',
      },
    ],
  },
}

mmodule.exports = nextConfig