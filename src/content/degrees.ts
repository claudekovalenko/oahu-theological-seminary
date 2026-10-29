/**
 * Degree programs, from oahuseminary.org program pages.
 * TODO: total credit hours for the M.A. and M.Div. were not published
 * in the sources available; add them when confirmed.
 */
export type Degree = {
  slug: string;
  short: string;
  name: string;
  summary: string;
  description: string[];
  facts: { label: string; value: string }[];
  concentrations?: { credits: string; areas: string[]; note: string };
  prerequisites?: string[];
  courses: string[];
};

const concentrationAreas = ["Counseling", "Church Planting", "Youth & Family Ministry"];

export const degrees: Degree[] = [
  {
    slug: "ma-in-ecclesial-theology",
    short: "M.A.",
    name: "Master of Arts in Ecclesial Theology",
    summary:
      "The traditional theological disciplines, with a meaningful emphasis on how those disciplines impact the local church.",
    description: [
      "The Master of Arts in Ecclesial Theology program studies traditional theological disciplines, but it places a meaningful emphasis on how those disciplines impact the local church.",
      "Students in the program take biblical language, theology, and applied ecclesiology courses. Much of the coursework is designed to be completed in the context of the local church, so students are doing ministry while they take classes.",
    ],
    facts: [
      { label: "Classes", value: "Tuesday evenings at Aiea Heights Church" },
      { label: "Coursework", value: "Biblical languages, theology, applied ecclesiology" },
      { label: "Tuition", value: "$300 per credit hour (2025–2026)" },
    ],
    concentrations: {
      credits: "9 credit hours",
      areas: concentrationAreas,
      note: "For the M.A., the concentration takes the place of the Applied Ministry courses, free electives, and the applied theology capstone.",
    },
    courses: [
      "Old Testament Theology",
      "New Testament Theology",
      "Biblical Theology",
      "Beginning Greek 1 & 2",
      "Theology 1 & 2",
      "Historical Theology",
      "Ecclesial Theology",
      "Applied Theology",
    ],
  },
  {
    slug: "master-of-divinity",
    short: "M.Div.",
    name: "Master of Divinity",
    summary:
      "Preparation for pastoral ministry: Scripture in the original languages, theology, preaching, and counseling, practiced in the local church.",
    description: [
      "The Master of Divinity prepares students for pastoral and vocational ministry. Like every OTS program, it is built in partnership with local churches, and its courses include projects that are completed in the life of a congregation.",
      "M.Div. students may add a concentration in counseling, church planting, or youth and family ministry.",
    ],
    facts: [
      { label: "Classes", value: "Tuesday evenings at Aiea Heights Church" },
      { label: "Coursework", value: "Greek and Hebrew, theology, preaching, counseling" },
      { label: "Tuition", value: "$300 per credit hour (2025–2026)" },
    ],
    concentrations: {
      credits: "Optional",
      areas: concentrationAreas,
      note: "Ask the academic dean how a concentration fits your M.Div. plan.",
    },
    courses: [
      "Beginning & Intermediate Greek",
      "Intermediate Hebrew",
      "Hebrew Exegesis",
      "Greek Exegesis of Matthew",
      "Preaching 2",
      "Counseling 2 (with CCEF)",
      "Advanced Biblical Studies",
      "Advanced Theological Studies",
    ],
  },
  {
    slug: "master-of-theology",
    short: "Th.M.",
    name: "Master of Theology",
    summary:
      "A 20-credit research degree for sharpening your understanding of a specific topic within a theological discipline.",
    description: [
      "The Master of Theology is for students who want to sharpen their understanding of a specific topic through graduate-level research within a given theological discipline.",
      "After the research and coursework, the student writes a thesis of approximately 40,000 words and defends it.",
    ],
    facts: [
      { label: "Credits", value: "20" },
      { label: "Thesis", value: "About 40,000 words, with an oral defense" },
      { label: "Tuition", value: "$300 per credit hour (2025–2026)" },
    ],
    prerequisites: [
      "You have already completed an M.Div. degree.",
      "You have secured a faculty member, or another qualified individual, as a supervisor.",
      "You have a general thesis topic in mind.",
    ],
    courses: ["Supervised research", "Directed coursework", "Thesis and defense"],
  },
];

export function getDegree(slug: string) {
  return degrees.find((d) => d.slug === slug);
}
