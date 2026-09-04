import type { NextConfig } from "next";

/**
 * Static export: `next build` emits a fully static site to `out/`,
 * deployable to Vercel, Cloudflare Pages, Netlify, S3, or any static host.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // No remote images are used; unoptimized keeps the static export dependency-free.
    unoptimized: true,
  },
};

export default nextConfig;
