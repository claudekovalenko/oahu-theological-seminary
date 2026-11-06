/**
 * Degree programs, from oahuseminary.org program pages and the
 * OTS Course Catalogue 2024–25.
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
      { label: "Credits", value: "51" },
      { label: "Duration", value: "Two years" },
      { label: "Classes", value: "Tuesday evenings at Aiea Heights Church" },
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
      { label: "Credits", value: "93 total (51 M.A. + 42 additional)" },
      { label: "Duration", value: "Four years" },
      { label: "Classes", value: "Tuesday evenings at Aiea Heights Church" },
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

export const otsDistinctives =
  "OTS is an intentionally reformed and catholic institution, committed to teaching the Christian faith as handed down by the prophets and apostles in Holy Scripture and guarded by the Great Tradition for the sake of God's glory among the churches throughout the Pacific Islands. Because we recognize that the church is the institution that the Lord Jesus himself established and the context in which pastors and other church leaders are equipped and recognized, we are deeply committed to partner and collaborate with local congregations. During every semester, students are required to have significant ministry involvement in the church through the Applied Theology courses.";

export type CatalogueCourse = {
  code: string;
  title: string;
  credits: number;
  description: string;
};

export const maCourses: CatalogueCourse[] = [
  // Language Courses
  {
    code: "GREK 6001",
    title: "Beginning Greek 1",
    credits: 3,
    description:
      "In this course, students will learn introductory matters to koine Greek or the Greek language of the New Testament. Such studies will include vocabulary, basic parts of speech, elementary principles of grammar and syntax, and components of the construction for Greek words.",
  },
  {
    code: "GREK 6002",
    title: "Beginning Greek 2",
    credits: 3,
    description:
      "In this course, students will continue to develop their knowledge from Beginning Greek 1, diving deeper and further into vocabulary, basic parts of speech, elementary principles of grammar and syntax, and components of the construction for Greek words.",
  },
  {
    code: "GREK 6003",
    title: "Intermediate Greek",
    credits: 3,
    description:
      "In this course, students will build upon what they learned in Beginning Greek 1 & 2, focusing more on the parts of speech and different uses of particular cases in koine Greek. Students will use this deeper knowledge of the Greek language for exegesis of biblical texts in order to make warranted theological conclusions.",
  },
  {
    code: "GREK 6004",
    title: "Greek Exegesis",
    credits: 3,
    description:
      "In this course, students will apply and use their skills and knowledge gained in Beginning Greek 1 & 2 and Intermediate Greek in exegeting part of the New Testament. Students will also learn the peculiar aspects of the book's genre as it relates to biblical interpretation.",
  },
  // Theology Courses
  {
    code: "OLDT 7001",
    title: "Old Testament Theology",
    credits: 3,
    description:
      "In this course, students will work through the Old Testament to understand the background and message of each book.",
  },
  {
    code: "NEWT 7002",
    title: "New Testament Theology",
    credits: 3,
    description:
      "In this course, students will work through the New Testament to understand the background and message of each book.",
  },
  {
    code: "THEO 7003",
    title: "Theology 1",
    credits: 3,
    description:
      "In this course, students will study classical doctrines typically taught in systematic theology 1: prolegomena, God, creation, revelation, Scripture, man, and sin.",
  },
  {
    code: "THEO 7004",
    title: "Theology 2",
    credits: 3,
    description:
      "In this course, students will study classical doctrines typically taught in systematic theology 2: Christology, soteriology, and pneumatology.",
  },
  {
    code: "HIST 7005",
    title: "History of the Church's Theology",
    credits: 3,
    description:
      "In this course, students will study the church's history with special attention to the development and defense of doctrine according to its classical, orthodox teaching.",
  },
  {
    code: "DIRS 7006",
    title: "Directed Study",
    credits: 3,
    description:
      "In this course, students will choose an area of interest and find an OTS-approved supervisor to facilitate the directed study.",
  },
  {
    code: "BIBT 7007",
    title: "Biblical Theology",
    credits: 3,
    description:
      "In this course, students will study prominent themes in Scripture as well as pay close attention to redemptive history, the overall story of the Bible, and see how Jesus is the fulfillment and culmination of that redemptive storyline.",
  },
  // Ecclesial Courses
  {
    code: "ECCL 5001",
    title: "Ecclesial Theology",
    credits: 3,
    description:
      "In this course, students will examine the biblical, theological, and historical foundations for ecclesial theology. Particular emphasis will be put on the vocation of a pastor as a theologian and apply this calling in the student's particular context.",
  },
  {
    code: "APPT 5002–4",
    title: "Applied Theology 1–3",
    credits: 1,
    description:
      "In this course, students will seek to apply their classroom training in the context of ministry in the church through various practical ministry applications. (1 credit each; 3 total)",
  },
  {
    code: "PLIT 5005",
    title: "Polity & Liturgy",
    credits: 3,
    description:
      "In this course, students will be instructed within the context of their own church about the unique polity and liturgical practices of their church and denomination. Though the focus will be largely determined by the student's pastor, it will include both theological and philosophical and practical implementation of church polity and liturgy in the life of the church.",
  },
  {
    code: "ACAP 5006",
    title: "Applied Theology Capstone",
    credits: 3,
    description:
      "In this course, students will work with their pastor and local church to complete a teaching or preaching project. This could include a Sunday school class or seminar, a preaching series, or some other appropriate teaching setting.",
  },
];

export const mdivCourses: CatalogueCourse[] = [
  // Language Courses (additional to M.A.)
  {
    code: "HEBR 6101",
    title: "Hebrew 1",
    credits: 3,
    description:
      "In this course, students will learn the basics of biblical Hebrew. In particular, students will study vocabulary, basic parts of speech, and the components of Hebrew terminology.",
  },
  {
    code: "HEBR 6102",
    title: "Hebrew 2",
    credits: 3,
    description:
      "In this course, students will continue in the basics of biblical Hebrew from Hebrew 1. In particular, students will study vocabulary, basic parts of speech, and the components of Hebrew terminology. Students will also learn how to employ exegetical skills in the Hebrew text.",
  },
  {
    code: "HEBR 6103",
    title: "Hebrew Exegesis",
    credits: 3,
    description:
      "In this course, students will apply and use what they learned in Hebrew 1 & 2 in order to exegete particular passages of the Old Testament.",
  },
  // Pastoral Courses
  {
    code: "COUN 5101",
    title: "Counseling 1",
    credits: 3,
    description:
      "In this course, students will learn the theology, methods for, and the goals of pastoral counseling in the context of the local church.",
  },
  {
    code: "COUN 5102",
    title: "Counseling 2",
    credits: 3,
    description:
      "In this course, students will learn to apply methods and goals of pastoral counseling learned in Counseling 1 to specific and common issues in the human life.",
  },
  {
    code: "PREA 5103",
    title: "Preaching 1",
    credits: 3,
    description:
      "In this course, students will learn the basics of Christian preaching in the context of the local church. Students will learn methods, preparation, tasks, and theology of preaching.",
  },
  {
    code: "PREA 5104",
    title: "Preaching 2",
    credits: 3,
    description:
      "In this course, students will learn to apply what they learned in Preaching 1 and write numerous sermons of their own as well as preach in a local church.",
  },
  {
    code: "DPAS 5105",
    title: "The Daily Pastor",
    credits: 3,
    description:
      "In this course, students will work alongside a professor of OTS and an OTS approved local pastor to learn the basic and practical duties of the pastor as well as study the theology of the pastorate.",
  },
  {
    code: "MISS 5106",
    title: "Missions and the Local Church",
    credits: 3,
    description:
      "In this course, students will learn the biblical, theological, and historical foundations of the global missions movement and consider how local congregations and networks should be involved in the ongoing work of global discipleship and church planting.",
  },
  {
    code: "APPT 5107–9",
    title: "Applied Theology 4–6",
    credits: 1,
    description:
      "In this course, students will seek to apply their classroom training in the context of ministry in the church through various practical ministry applications. (1 credit each; 3 total)",
  },
  // Advanced Theology Courses
  {
    code: "ADVB 7101",
    title: "Advanced Biblical Studies",
    credits: 3,
    description:
      "In this course, students will apply their theological training in their previous courses to dive deeper in biblical studies to focus more pointedly into the technicalities of OT, NT, and biblical-theological topics.",
  },
  {
    code: "ADVT 7102",
    title: "Advanced Theological Studies",
    credits: 3,
    description:
      "In this course, students will apply their theological training in their previous courses to dive deeper in theological studies to focus more pointedly into the technicalities of Christian dogmatics.",
  },
  {
    code: "CCCS 7103",
    title: "Creeds, Confessions, & Catechisms",
    credits: 3,
    description:
      "In this course, students will spend time focusing on the four major classical creeds and dive deeper in their own specific tradition's confession(s) and catechism(s).",
  },
  {
    code: "TCAP 7104",
    title: "Thesis Capstone",
    credits: 3,
    description:
      "In this capstone course, students will prepare, write, and defend a Masters Thesis. The written thesis will be approximately fifteen thousand (15,000) words and will demonstrate thorough research, academic rigor, and a successful argument. Students must secure an OTS-approved supervisor holding a ThM or higher and have their thesis topic approved by the director of OTS and their thesis supervisor.",
  },
  {
    code: "DIRS 7105",
    title: "Directed Study",
    credits: 3,
    description:
      "In this course, students will choose an area of interest and find an OTS-approved supervisor to facilitate the directed study.",
  },
];

export const thmCourses: CatalogueCourse[] = [
  {
    code: "RSEM 7201",
    title: "Research Seminar",
    credits: 2,
    description:
      "The student will take an academic approach to understanding elements, practices, and methods for studies in theology. This course will serve as the foundation for the Thesis Proposal, which in turn prepares the student for the completion of their thesis.",
  },
  {
    code: "TPRP 7202",
    title: "Thesis Proposal",
    credits: 2,
    description:
      "After completion of the Research Seminar, students will begin working under the supervision of an OTS-approved advisor. Students will write a proposal (approximately 8,000 words) that will (1) introduce the specific topic of the thesis, (2) offer a preliminary thesis statement, (3) survey the current field of scholarship on the subject, (4) give a detailed outline of each chapter of the thesis, and (5) provide a bibliography of at least 25 academic sources. Once the thesis proposal is approved, the student can then begin working on their thesis.",
  },
  {
    code: "THMC 7203–4",
    title: "Theological Coursework 1–2",
    credits: 6,
    description:
      "Students will take two in-class courses with the other students in the institution. The courses taken by the student should be related to the thesis' field of study and must be approved by the thesis supervisor.",
  },
  {
    code: "DIRS 7301–2",
    title: "Directed Studies 1–2",
    credits: 4,
    description:
      "Students will take two directed studies pertinent to their thesis topic so as to make progress towards the completion of their thesis.",
  },
  {
    code: "THES 7303",
    title: "Thesis",
    credits: 6,
    description:
      "Students will write a graduate level Masters thesis (approximately 40,000 words) under the supervision of an OTS approved advisor, demonstrating careful, thoughtful, and academic research and argumentation that interacts with primary and secondary sources. In order to pass the thesis stage, students must (1) complete the writing process with the approval of the advisor, and (2) successfully defend the thesis from an external examiner.",
  },
];
