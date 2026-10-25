import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/prices.html", destination: "/prices", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/areas.html", destination: "/areas", permanent: true },
      { source: "/tips.html", destination: "/how-to-prepare", permanent: true },
      { source: "/services/:slug.html", destination: "/services/:slug", permanent: true },
      { source: "/areas/:slug.html", destination: "/areas/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
