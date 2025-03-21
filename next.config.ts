import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Ensures the project is built as a static site
  images: {
    unoptimized: true, // Required to export images statically
  },
};

export default nextConfig;
