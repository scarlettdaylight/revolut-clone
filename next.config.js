/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freetogame.com",
        port: "",
        pathname: "/g/**",
      },
    ],
  },
}

module.exports = nextConfig
