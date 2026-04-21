import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages compatibility
  // Vercel handles this gracefully and uses its own deployment mode
  output: "export",

  // Disable image optimization for static export (uses unoptimized images)
  images: {
    unoptimized: true,
  },

  // GitHub Pages deployment for username.github.io repo (no basePath needed for user site)
  // If deploying to a project repo like github.com/user/repo, set basePath: "/repo-name"
  basePath: "",

  // Trailing slashes for GitHub Pages compatibility
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    ".space.z.ai",
  ],
};

export default nextConfig;
