import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this project (it lives beside other projects in a
  // shared parent folder, which otherwise confuses workspace-root inference).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
