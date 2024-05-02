/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static8.depositphotos.com"
      },
      {
        protocol: "https",
        hostname: "media.wired.com"
      }
    ]
  }
};

export default nextConfig;
