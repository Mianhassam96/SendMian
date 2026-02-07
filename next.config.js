/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  },
  images: {
    domains: ['uploadthing.com', 'utfs.io']
  }
}

module.exports = nextConfig