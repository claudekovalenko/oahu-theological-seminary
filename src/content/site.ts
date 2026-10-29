/**
 * Site-wide settings. Edit this file to change names, links, and the
 * featured YouTube video without touching any page code.
 *
 * Content in /src/content was gathered from oahuseminary.org (Oct 2026).
 * Anything marked TODO could not be confirmed and needs a human check.
 */
export const site = {
  name: "Oahu Theological Seminary",
  shortName: "OTS",
  tagline:
    "A center for theological and ministry training in partnership with local churches in Hawaiʻi",
  description:
    "Oahu Theological Seminary is a center for theological and ministry training in partnership with local churches in Hawaiʻi, for the glory of God and the strengthening of the Church in the Pacific Rim.",
  purpose: "To equip faithful pastors, teachers, and leaders for the sake of Christ’s church in the islands.",
  url: "https://oahuseminary.org",

  history: [
    { year: "2011", text: "Chris Bruno begins pastoral training work on Oʻahu." },
    { year: "2021", text: "Bethlehem College & Seminary opens an extension site on Oʻahu. Partnership with Training Leaders International begins." },
    { year: "2023", text: "The extension site becomes its own institution: Oahu Theological Seminary." },
  ],

  // Social
  instagram: {
    handle: "oahutheologicalseminary",
    url: "https://www.instagram.com/oahutheologicalseminary/",
  },
  youtube: {
    channelUrl: "https://www.youtube.com/@trainingleadershawaii",
    /**
     * TODO: the single featured video from the channel. Paste the 11-character
     * YouTube video ID here (the part after `v=` in the video URL).
     */
    featuredVideoId: "",
    featuredVideoTitle: "Training leaders for Hawaiʻi and the Pacific",
  },

  // Location & contact
  location: {
    venue: "Aiea Heights Church",
    address: "99-400 Aiea Heights Dr",
    city: "Aiea, HI 96701",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=99-400+Aiea+Heights+Dr+Aiea+HI+96701",
    note: "All OTS classes are held at Aiea Heights Church on Tuesday evenings.",
    classTimes: ["5:00 – 6:45 pm", "7:00 – 8:45 pm"],
  },
  /** TODO: the seminary's public email. Hidden everywhere while blank. */
  contactEmail: "",

  // Partners
  partner: {
    name: "Training Leaders International",
    short: "TLI",
    url: "https://trainingleadersinternational.org/",
    since: 2021,
  },

  // Giving
  giveUrl: "https://www.zeffy.com/organizations/oahu-theological-seminary",

  // External learning platform (Moodle). Leave blank to hide the embed.
  moodleUrl: process.env.NEXT_PUBLIC_MOODLE_URL ?? "",

  academicCalendarPdf:
    "https://img1.wsimg.com/blobby/go/46e4a438-68e8-4a7b-b9fa-326d9e0a2ed3/2025-26%20Academic%20Calendar%20OTS-3ae57c2.pdf",

  tuition: {
    year: "2025–2026",
    perCredit: 300,
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/degrees", label: "Degrees" },
  { href: "/faculty", label: "Faculty" },
  { href: "/calendar", label: "Calendar" },
  { href: "/courses", label: "Courses" },
  { href: "/community", label: "Community" },
  { href: "/admissions", label: "Admissions" },
] as const;
