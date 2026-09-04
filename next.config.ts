import type { NextConfig } from "next";

/**
 * Static export: `next build` emits a fully static site to `out/`,
 * deployable to Vercel, Cloudflare Pages, Netlify, GitHub Pages, S3, or any
 * other static host.
 *
 * `NEXT_PUBLIC_BASE_PATH` lets the same build be served from a sub-path — a
 * GitHub Pages project site lives at /<repo>, for example. Leave it unset for
 * the production domain, which serves the site from the root. See
 * src/lib/site.ts for the full set of deployment-target variables.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  reactStrictMode: true,
  images: {
    // No remote images are used; unoptimized keeps the static export dependency-free.
    unoptimized: true,
  },
};

export default nextConfig;
