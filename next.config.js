/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pxlhaeypphfpfmbqcuzk.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
