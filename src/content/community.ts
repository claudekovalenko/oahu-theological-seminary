export type Event = {
  id: string;
  title: string;
  date: string; // ISO date of the first day
  when: string; // human-readable date and time
  location: string;
  description: string;
  url?: string;
};

/**
 * Newest first. Add upcoming events at the top. Past events stay as a
 * record of what OTS offers the wider church.
 */
export const events: Event[] = [
  {
    id: "seminar-worship-2026",
    title: "Seminar on Worship",
    date: "2026-06-20",
    when: "Saturday, June 20, 2026 · 9:00 am – 12:30 pm",
    location: "Aiea Heights Church",
    description: "A free Saturday-morning seminar on gathered worship, open to the public.",
    url: "https://www.eventbrite.com/e/oahu-theological-seminary-seminar-on-worship-tickets-1990996548272",
  },
  {
    id: "greek-refresher-2026",
    title: "Biblical Greek Refresher with Dr. Robert Plummer",
    date: "2026-01-07",
    when: "Wednesday – Saturday, January 7–10, 2026",
    location: "Aiea Heights Church",
    description:
      "Dr. Robert Plummer of Daily Dose of Greek led a four-day refresher working through portions of John’s Gospel. $35 per person.",
  },
  {
    id: "preview-night-2025",
    title: "Preview Night",
    date: "2025-05-12",
    when: "Monday, May 12, 2025 · 6:00 pm",
    location: "Aiea Heights Church",
    description: "An evening to sit in on classes and meet faculty and students.",
    url: "https://www.eventbrite.com/e/oahu-theological-seminary-preview-night-tickets-1304861559049",
  },
];

export const communityPillars = [
  {
    title: "Linked to local churches",
    text: "OTS is very intentionally linked to the local churches on Oʻahu. Most courses include projects that can only be completed in the context of the local church.",
  },
  {
    title: "Open to the wider church",
    text: "Seminars, refresher courses, and preview nights are open to pastors, church members, and anyone who wants to grow in the Scriptures.",
  },
  {
    title: "For the Pacific",
    text: "The aim is bigger than Oʻahu: a strengthened church in Hawaiʻi and across the Pacific Rim.",
  },
];
