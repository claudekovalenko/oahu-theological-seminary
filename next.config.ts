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

const isGitHubPages = !!process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = isGitHubPages ? "/oahu-theological-seminary" : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: basePath || undefined,
  images: isGitHubPages ? { unoptimized: true } : undefined,
  ...(!isGitHubPages && { cacheComponents: true, partialPrefetching: true }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(!isGitHubPages && {
    async redirects() {
      return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
    },
  }),
};

export default nextConfig;
