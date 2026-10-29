export type Degree = {
  slug: string;
  short: string;
  name: string;
  summary: string;
  audience: string;
  format: string;
  length: string;
  highlights: string[];
  description: string[];
  concentrations?: string[];
  sampleCourses: string[];
  outcomes: string[];
};

export const degrees: Degree[] = [
  {
    slug: "ma-ecclesial-theology",
    short: "M.A.",
    name: "Master of Arts in Ecclesial Theology",
    summary:
      "The traditional theological disciplines, studied with a meaningful emphasis on how they shape and serve the local church.",
    audience:
      "Lay leaders, elders, ministry staff, and anyone pursuing deep biblical and theological formation while staying rooted in their church.",
    format: "Tuesday evenings at Aiea Heights Church, with church-based projects",
    length: "Part-time, typically 2–3 years",
    highlights: [
      "Biblical languages, theology, and applied ecclesiology",
      "Optional 9-credit concentration",
      "Coursework designed to be completed in the context of your local church",
    ],
    description: [
      "The M.A. in Ecclesial Theology studies the traditional theological disciplines—Old and New Testament, systematic and biblical theology, church history—but it places a meaningful emphasis on how those disciplines impact the local church.",
      "Students take biblical language, theology, and applied ecclesiology courses. Much of the coursework is designed around projects that can only be completed in the context of the local church, so that what you learn on Tuesday night shows up in your congregation on Sunday.",
      "Students may add an optional concentration of nine credit hours in counseling, church planting, or youth and family ministry.",
    ],
    concentrations: ["Counseling", "Church Planting", "Youth & Family Ministry"],
    sampleCourses: [
      "Beginning Greek I & II",
      "New Testament Theology",
      "Biblical Theology",
      "Ecclesial Theology",
      "Counseling I & II",
      "Greek Exegesis of Matthew",
    ],
    outcomes: [
      "Read and interpret Scripture faithfully in its original languages",
      "Articulate historic, confessional Christian doctrine",
      "Apply theology to the real life of a local congregation",
    ],
  },
  {
    slug: "master-of-divinity",
    short: "M.Div.",
    name: "Master of Divinity",
    summary:
      "The standard preparation for pastoral ministry: Scripture, languages, theology, preaching, and pastoral care, all practiced in your church.",
    audience:
      "Those preparing for pastoral ministry, church planting, or vocational leadership in Hawaiʻi and the Pacific Islands.",
    format: "Tuesday evenings at Aiea Heights Church, with church-based projects",
    length: "Part-time, typically 4–5 years",
    highlights: [
      "Full biblical language sequence (Greek and Hebrew)",
      "Preaching, counseling, and pastoral ministry courses",
      "Built for people already serving in a congregation",
    ],
    description: [
      "The Master of Divinity is the seminary's most comprehensive program, designed for men and women preparing for pastoral and vocational ministry.",
      "Students complete the full range of biblical, theological, historical, and practical courses, including preaching and counseling, with a strong emphasis on applied theology in the local church.",
      "Because every student is embedded in a local church, the M.Div. functions as an apprenticeship as much as a degree: your pastor and elders walk with you through the program.",
    ],
    sampleCourses: [
      "Beginning Greek & Hebrew",
      "Old and New Testament Theology",
      "Preaching",
      "Counseling I & II (with CCEF supervision)",
      "Ecclesial Theology",
      "Applied Theology",
    ],
    outcomes: [
      "Preach and teach the whole counsel of God",
      "Shepherd people with biblical wisdom and care",
      "Lead a church with theological clarity and humility",
    ],
  },
  {
    slug: "master-of-theology",
    short: "Th.M.",
    name: "Master of Theology",
    summary:
      "A 20-credit, thesis-based research degree for those who already hold an M.Div. or equivalent and want to go deeper.",
    audience:
      "Pastors and teachers with a prior theological master's degree who want advanced study and a supervised thesis.",
    format: "Seminars plus independent, supervised research",
    length: "20 credits including a thesis",
    highlights: [
      "20 credits, thesis required",
      "Supervised research with OTS faculty",
      "Ideal preparation for doctoral study or advanced teaching ministry",
    ],
    description: [
      "The Master of Theology (Th.M.) is a post-M.Div. academic degree for pastors and teachers who want to pursue focused research in a theological discipline.",
      "The program is 20 credits and requires a thesis, written under the supervision of OTS faculty, that makes a contribution to the life and teaching of the church in the Pacific Rim.",
    ],
    sampleCourses: [
      "Advanced Exegesis Seminar",
      "Theological Research Methods",
      "Directed Reading",
      "Thesis",
    ],
    outcomes: [
      "Conduct original theological research",
      "Write at a level suitable for publication or doctoral admission",
      "Teach others with depth and precision",
    ],
  },
];

export function getDegree(slug: string) {
  return degrees.find((d) => d.slug === slug);
}
