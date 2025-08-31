/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.plasmic.app', 'site-assets.plasmic.app'],
  },
  experimental: {
    esmExternals: false,
  },
  transpilePackages: ['@plasmicapp/react-web', '@plasmicapp/loader-react', '@plasmicapp/host'],
}

module.exports = nextConfig
