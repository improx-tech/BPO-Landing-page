import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash resizes and compresses on its CDN, so Next only needs to build the URLs.
    loader: "custom",
    loaderFile: "./lib/unsplash-loader.ts",
  },
};

export default nextConfig;
