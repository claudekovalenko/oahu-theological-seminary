/**
 * The "Start Here" pathway: three short videos, then an application.
 * Paste YouTube video IDs into `videoId` to activate each step.
 */
export type PathwayStep = {
  n: number;
  slug: string;
  title: string;
  kicker: string;
  videoId: string;
  minutes: number;
  description: string;
  reflect: string[];
};

export const pathway: PathwayStep[] = [
  {
    n: 1,
    slug: "why",
    title: "Why the church needs trained leaders",
    kicker: "The vision",
    videoId: "",
    minutes: 8,
    description:
      "Hear why Oahu Theological Seminary exists: to equip faithful pastors, teachers, and leaders for the sake of Christ’s church in the islands.",
    reflect: [
      "Where do you see a need for deeper teaching in your church?",
      "Who in your life has shaped you theologically?",
    ],
  },
  {
    n: 2,
    slug: "how",
    title: "How learning works at OTS",
    kicker: "The model",
    videoId: "",
    minutes: 7,
    description:
      "Tuesday evenings at Aiea Heights Church, with projects you complete in your own church. See how the M.A., M.Div., and Th.M. fit together, and where community courses come in.",
    reflect: [
      "What rhythm of study could you realistically sustain?",
      "Who at your church would walk through this with you?",
    ],
  },
  {
    n: 3,
    slug: "sample",
    title: "Try a sample lesson",
    kicker: "The experience",
    videoId: "",
    minutes: 15,
    description:
      "A short teaching segment pulled straight from one of our courses, so you know exactly what to expect before you apply.",
    reflect: [
      "What was one thing you learned or saw differently?",
      "Which track fits you: community courses, or a degree?",
    ],
  },
];
