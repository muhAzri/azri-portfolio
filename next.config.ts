import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxSize: 200000, // 200KB (adjust based on your needs)
      };
    }
    return config;
  },
};

export default nextConfig;
