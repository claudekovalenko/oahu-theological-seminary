/**
 * Faculty, from oahuseminary.org/meet-our-team and individual bio pages.
 * TODO: the source page's layout made two titles ambiguous (Taylor Brazil,
 * Mark Brians). Confirm before launch. A bio page for Cody Irwin exists on the
 * current site but its content could not be read; add him when confirmed.
 */
export type Person = {
  slug: string;
  name: string;
  title: string;
  degrees?: string;
  bio: string[];
  teaches?: string[];
};

export const faculty: Person[] = [
  {
    slug: "chris-bruno",
    name: "Chris Bruno",
    title: "President · Professor of New Testament and Biblical Theology",
    degrees: "PhD, Wheaton College",
    bio: [
      "Chris has been involved in pastoral training on Oʻahu since 2011. In 2017 he moved to Minneapolis to teach at Bethlehem College & Seminary, and in 2021 he helped launch and facilitate a BCS extension site on Oʻahu.",
      "In 2023 the extension site began transitioning into its own entity, Oahu Theological Seminary, with help from BCS and local church leaders. Chris serves as its president in partnership with Training Leaders International.",
      "He is the author of Paul vs. James: What We’ve Been Missing in the Faith and Works Debate (Crossway).",
    ],
    teaches: ["New Testament Theology", "Beginning Greek", "Greek Exegesis of Matthew", "Biblical Theology"],
  },
  {
    slug: "david-larson",
    name: "David Larson",
    title: "Academic Dean · Assistant Professor of Systematic Theology & Biblical Languages",
    bio: [
      "David first visited Oʻahu in 2019 on a ministry trip during his M.Div. studies. He and his family moved to Hawaiʻi in 2022 to equip and raise up leaders in the Pacific Islands.",
      "He wants to help younger men and women teach and preach the gospel faithfully to Scripture within the Reformed tradition.",
    ],
    teaches: ["Theology 1 & 2", "Intermediate Greek", "Preaching", "Applied Theology", "Ecclesial Theology"],
  },
  {
    slug: "todd-morikawa",
    name: "Todd Morikawa",
    title: "Assistant Professor of Historical Theology",
    degrees: "PhD & MDiv, The Southern Baptist Theological Seminary · BA, University of Hawaiʻi at Hilo",
    bio: ["Todd is a full-time pastor at Kailua Baptist Church."],
    teaches: ["Historical Theology"],
  },
  {
    slug: "taylor-brazil",
    name: "Taylor Brazil",
    title: "Instructor of Biblical Languages",
    degrees: "MDiv, Beeson Divinity School · PhD candidate, Beeson Divinity School",
    bio: [],
    teaches: ["Beginning Greek 2", "Hebrew Exegesis", "Advanced Biblical Studies"],
  },
  {
    slug: "mark-brians",
    name: "Mark Brians",
    title: "Instructor in Pastoral Theology",
    bio: [
      "Mark is rector of All Saints Anglican Church in Honolulu and director of the Theopolis Fellows Program. He also serves as a trustee of the seminary.",
    ],
    teaches: ["Old Testament Theology"],
  },
];
