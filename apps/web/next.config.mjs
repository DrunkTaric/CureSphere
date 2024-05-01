/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static8.depositphotos.com"
      }
    ]
  }
};

export default nextConfig;
