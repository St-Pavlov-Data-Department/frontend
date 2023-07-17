/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3api.wanz.site",
            }
        ]
    }
}

module.exports = nextConfig
