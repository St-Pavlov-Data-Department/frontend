/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3api.wanz.site",
      }
    ]
  }
}

module.exports = nextConfig
