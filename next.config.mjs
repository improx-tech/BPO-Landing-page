/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Unsplash resizes and compresses on its CDN, so Next only needs to build the URLs.
    loader: "custom",
    loaderFile: "./lib/unsplash-loader.ts",
  },
};

export default nextConfig;
