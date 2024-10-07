/** @type {import('next').NextConfig} */const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // This enables the static export
  trailingSlash: true, // Optional: Adds trailing slashes for better compatibility in static sites
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    unoptimized: true, // Required for static export to handle external images properly
  },
};

module.exports = nextConfig;
