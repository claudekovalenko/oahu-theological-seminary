/**
 * Site-wide settings. Edit this file to change names, links, and the
 * featured YouTube video without touching any page code.
 */
export const site = {
  name: "Oahu Theological Seminary",
  shortName: "OTS",
  tagline: "Theological training for the church in Hawaiʻi and the Pacific Rim",
  description:
    "Oahu Theological Seminary is a center for theological and ministry training that works alongside local churches in Hawaiʻi, for the glory of God and the strengthening of the Church in the Pacific Rim.",
  url: "https://oahuseminary.org",

  // Social
  instagram: {
    handle: "oahutheologicalseminary",
    url: "https://www.instagram.com/oahutheologicalseminary/",
  },
  youtube: {
    channelUrl: "https://www.youtube.com/@trainingleadershawaii",
    /**
     * The single featured video from the channel. Paste the 11-character
     * YouTube video ID here (the part after `v=` in the video URL).
     * Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
     */
    featuredVideoId: "",
    featuredVideoTitle: "Why theological training in the local church?",
  },

  // Location & contact
  location: {
    venue: "Aiea Heights Church",
    address: "99-400 Aiea Heights Dr",
    city: "Aiea, HI 96701",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=99-400+Aiea+Heights+Dr+Aiea+HI+96701",
    note: "All OTS classes meet at Aiea Heights Church on Tuesday evenings.",
  },
  contactEmail: "info@oahuseminary.org",

  // Partners
  partner: {
    name: "Training Leaders International",
    url: "https://trainingleadersinternational.org/",
    since: 2021,
  },

  // Giving
  giveUrl: "https://www.zeffy.com/organizations/oahu-theological-seminary",

  // External learning platform (Moodle). Leave blank to hide the embed.
  moodleUrl: process.env.NEXT_PUBLIC_MOODLE_URL ?? "",

  // Academic calendar PDF (hosted on the current site)
  academicCalendarUrl:
    "https://img1.wsimg.com/blobby/go/46e4a438-68e8-4a7b-b9fa-326d9e0a2ed3/2025-26%20Academic%20Calendar%20OTS-3ae57c2.pdf",

  tuition: {
    year: "2025–2026",
    perCredit: 300,
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/degrees", label: "Degrees" },
  { href: "/courses", label: "Courses" },
  { href: "/community", label: "Community" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
] as const;
