/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://ioloryn.github.com/kasm/favicon.ico',
    listUrl: 'https://ioloryn.github.com/kasm/',
    contactUrl: 'https://ioloryn.github.com/kasm/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
