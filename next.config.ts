import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only: build plain HTML/CSS/JS into ./out
  output: "export",
  // No image server on GitHub Pages, so serve images as-is
  images: { unoptimized: true },
  // cacheComponents / partialPrefetching were removed: they enable PPR, which
  // needs a server and fails with `output: "export"`. The site didn't use them.
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
