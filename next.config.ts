import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (
        !config.optimization.splitChunks ||
        config.optimization.splitChunks === false
      ) {
        config.optimization.splitChunks = {}; // Inisialisasi jika belum ada
      }
      config.optimization.splitChunks.maxSize = 10000;
    }
    return config;
  },
};

export default nextConfig;
