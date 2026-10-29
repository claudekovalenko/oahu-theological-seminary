import type { NextConfig } from "next";

/** Old oahuseminary.org paths, so existing links and search results keep working. */
const legacyRedirects: [string, string][] = [
  ["/ma-in-ecclesial-theology", "/degrees/ma-in-ecclesial-theology"],
  ["/master-of-theology", "/degrees/master-of-theology"],
  ["/master-of-divinity", "/degrees/master-of-divinity"],
  ["/admissions-info", "/admissions"],
  ["/letter-from-the-president", "/about"],
  ["/creeds-and-confessions", "/about#beliefs"],
  ["/meet-our-team", "/faculty"],
  ["/chris-bruno", "/faculty#chris-bruno"],
  ["/david-larson", "/faculty#david-larson"],
  ["/academic-calendar", "/calendar"],
  ["/learn-biblical-greek", "/community"],
];

const nextConfig: NextConfig = {
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
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
