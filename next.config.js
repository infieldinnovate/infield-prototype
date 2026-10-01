/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    config.cache = false;
    config.snapshot = {
      ...(config.snapshot || {}),
      managedPaths: [],
      unmanagedPaths: [],
    };
    return config;
  },
};

module.exports = nextConfig;
