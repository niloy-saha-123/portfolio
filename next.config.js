/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '**'
    }]
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
 }
 
 module.exports = nextConfig