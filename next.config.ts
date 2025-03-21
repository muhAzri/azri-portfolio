import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pages: {
    "*": {
      maxChunkSize: 10000,
    },
  },
};

export default nextConfig;
