import type { NextConfig } from "next";
// Standard Next.js export is used for Vercel, Netlify, or a GitHub user site.
const nextConfig: NextConfig = {
  output: process.env.STATIC_EXPORT === "1" ? "export" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
