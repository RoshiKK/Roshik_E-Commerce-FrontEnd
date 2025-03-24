// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // If you just want a quick whitelist of domains:
  images: {
    domains: ['cdn.sanity.io'],
  },

  // Or, if you prefer remotePatterns (recommended for Next.js 13+):
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.sanity.io',
  //       port: '',
  //       pathname: '/images/**',
  //     },
  //   ],
  // },
}

export default nextConfig
