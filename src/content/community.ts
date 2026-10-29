export type Event = {
  id: string;
  title: string;
  date: string; // ISO date
  time?: string;
  location: string;
  description: string;
  url?: string;
  kind: "seminar" | "gathering" | "class" | "prayer";
};

export const events: Event[] = [
  {
    id: "seminar-worship-2026",
    title: "Seminar on Worship",
    date: "2026-06-20",
    time: "9:00 AM – 12:30 PM",
    location: "Aiea Heights Church",
    description:
      "A Saturday-morning seminar for pastors, worship leaders, and church members on what Scripture says about gathered worship. Open to all.",
    url: "https://www.eventbrite.com/e/oahu-theological-seminary-seminar-on-worship-tickets-1990996548272",
    kind: "seminar",
  },
  {
    id: "spring-2027-term",
    title: "Spring 2027 Term begins",
    date: "2027-01-12",
    time: "Tuesday evenings",
    location: "Aiea Heights Church",
    description:
      "Ecclesial Theology and Greek Exegesis of Matthew are on the schedule. Visitors are welcome to sit in on a first night.",
    kind: "class",
  },
];

export const communityPillars = [
  {
    title: "Learn together",
    text: "Nobody studies alone at OTS. Classes are small, shared meals are common, and most assignments are designed to be done with people from your church.",
  },
  {
    title: "Rooted in local churches",
    text: "We don't replace the church; we serve it. Every student is sent and supported by a congregation, and pastors stay involved throughout.",
  },
  {
    title: "Praying for the Pacific",
    text: "Our vision is bigger than Oahu. We pray and work for a strengthened church across Hawaiʻi and the Pacific Islands.",
  },
];

export const testimonials = [
  {
    quote:
      "Most of our courses are built around projects that can only be completed in the context of the local church. That's on purpose.",
    name: "Chris Bruno",
    role: "President, Oahu Theological Seminary",
  },
];
