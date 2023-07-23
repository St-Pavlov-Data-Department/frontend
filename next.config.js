/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3api.wanz.site",
      },
      {
        protocol: "https",
        hostname: "backend.stpavlov-data.com",
      }
    ]
  }
}

module.exports = nextConfig
