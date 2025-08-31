import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2mx7vld70uuck.cloudfront.net",
        pathname: "/**"
      }
    ]
  }
}

export default nextConfig