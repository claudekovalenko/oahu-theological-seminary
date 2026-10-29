/**
 * TODO: these four courses are SAMPLE content to show how the portal works.
 * Replace them with real OTS courses (or export from Moodle) before launch.
 *
 * Non-degree ("Equip") courses for the wider church community.
 *
 * The structure intentionally mirrors Moodle so that content can be moved
 * between the two systems with minimal translation:
 *
 *   Course  ->  Sections (Moodle "topics")  ->  Activities (modules)
 *
 * Activity types map to Moodle modules: video (URL/Page), reading (Page),
 * forum (Forum), quiz (Quiz), assignment (Assignment), link (URL).
 */

export type ActivityType =
  | "video"
  | "reading"
  | "forum"
  | "quiz"
  | "assignment"
  | "link";

export type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  minutes?: number;
  /** YouTube video id for `video` activities */
  videoId?: string;
  /** Markdown-ish body for `reading`, `assignment`, `forum` prompts */
  body?: string;
  /** External URL for `link` activities, or a Moodle deep link */
  url?: string;
  /** Simple quiz: questions with one correct option index */
  questions?: { q: string; options: string[]; answer: number }[];
};

export type Section = {
  id: string;
  title: string;
  summary?: string;
  activities: Activity[];
};

export type Course = {
  slug: string;
  code: string;
  title: string;
  track: "equip" | "degree";
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;
  description: string;
  instructor: string;
  weeks: number;
  /** Optional link to the same course in Moodle */
  moodleUrl?: string;
  /** True for placeholder content that still needs to be replaced */
  sample?: boolean;
  tags: string[];
  sections: Section[];
};

export const courses: Course[] = [
  {
    slug: "reading-the-bible-well",
    code: "EQ101",
    title: "Reading the Bible Well",
    track: "equip",
    level: "Beginner",
    summary:
      "Learn to read any passage of Scripture in context, trace its place in the big story, and apply it faithfully.",
    description:
      "This course is for anyone in the church who wants to grow in reading Scripture. We cover genre, context, the storyline of the Bible, and how to move from the text to life. No prior training required.",
    instructor: "OTS Faculty",
    sample: true,
    weeks: 6,
    tags: ["Bible", "Foundations"],
    sections: [
      {
        id: "general",
        title: "Welcome & Course Information",
        summary: "Start here. Read the syllabus and introduce yourself.",
        activities: [
          {
            id: "syllabus",
            type: "reading",
            title: "Syllabus & how this course works",
            minutes: 5,
            body: `Welcome! This six-week course meets you where you are.\n\nEach week has a short video, a reading, a discussion prompt, and a brief check for understanding. Plan on about 60–90 minutes per week.\n\nYou can go at your own pace, but we encourage you to work through it with one or two people from your church.`,
          },
          {
            id: "intro-forum",
            type: "forum",
            title: "Introduce yourself",
            minutes: 5,
            body: "Share your name, your church, and one question you have about the Bible.",
          },
        ],
      },
      {
        id: "week-1",
        title: "Week 1 · What is the Bible?",
        activities: [
          { id: "w1-video", type: "video", title: "One book, one story", minutes: 14, videoId: "" },
          {
            id: "w1-reading",
            type: "reading",
            title: "The shape of the canon",
            minutes: 15,
            body: "The Bible is 66 books written over roughly 1,500 years, yet it tells one unified story about God's redemption of his people through Jesus Christ. In this reading we survey how the Old and New Testaments fit together.",
          },
          {
            id: "w1-quiz",
            type: "quiz",
            title: "Check your understanding",
            minutes: 5,
            questions: [
              {
                q: "How many books are in the Protestant Bible?",
                options: ["27", "39", "66", "73"],
                answer: 2,
              },
              {
                q: "The unifying center of the Bible's story is…",
                options: ["Israel's law", "Jesus Christ", "The temple", "Wisdom"],
                answer: 1,
              },
            ],
          },
        ],
      },
      {
        id: "week-2",
        title: "Week 2 · Context is everything",
        activities: [
          { id: "w2-video", type: "video", title: "Historical and literary context", minutes: 16, videoId: "" },
          {
            id: "w2-reading",
            type: "reading",
            title: "Three questions to ask of any passage",
            minutes: 15,
            body: "1. What did this mean to the original audience?\n2. Where does it sit in the storyline of Scripture?\n3. How does it point to Christ and shape our lives today?",
          },
          {
            id: "w2-forum",
            type: "forum",
            title: "Discussion: a passage you've misread",
            minutes: 10,
            body: "Share a verse you once read out of context. What changed when you saw the surrounding passage?",
          },
        ],
      },
      {
        id: "week-3",
        title: "Week 3 · Genres of Scripture",
        activities: [
          { id: "w3-video", type: "video", title: "Narrative, poetry, law, prophecy, letters", minutes: 18, videoId: "" },
          {
            id: "w3-assignment",
            type: "assignment",
            title: "Genre practice",
            minutes: 30,
            body: "Pick one psalm and one passage from a New Testament letter. For each, write a short paragraph on how the genre changes the way you read it.",
          },
        ],
      },
      {
        id: "week-4",
        title: "Week 4 · The storyline of the Bible",
        activities: [
          { id: "w4-video", type: "video", title: "Creation, fall, redemption, new creation", minutes: 20, videoId: "" },
          {
            id: "w4-quiz",
            type: "quiz",
            title: "Storyline check",
            minutes: 5,
            questions: [
              {
                q: "Which covenant promises blessing to all nations through Abraham's offspring?",
                options: ["Noahic", "Abrahamic", "Mosaic", "Davidic"],
                answer: 1,
              },
            ],
          },
        ],
      },
      {
        id: "week-5",
        title: "Week 5 · From text to life",
        activities: [
          { id: "w5-video", type: "video", title: "Application without abuse", minutes: 15, videoId: "" },
          {
            id: "w5-forum",
            type: "forum",
            title: "Discussion: applying a hard passage",
            minutes: 10,
            body: "Choose a passage that feels difficult to apply. How would you move from its original meaning to your own life and church?",
          },
        ],
      },
      {
        id: "week-6",
        title: "Week 6 · Reading together",
        activities: [
          { id: "w6-video", type: "video", title: "Scripture in the life of the church", minutes: 12, videoId: "" },
          {
            id: "w6-assignment",
            type: "assignment",
            title: "Final project: lead a Bible study",
            minutes: 60,
            body: "Prepare a 30-minute Bible study on a passage of your choice using the three questions from Week 2. Lead it with a small group from your church and write a one-page reflection.",
          },
        ],
      },
    ],
  },
  {
    slug: "christian-doctrine-for-everyone",
    code: "EQ102",
    title: "Christian Doctrine for Everyone",
    track: "equip",
    level: "Beginner",
    summary:
      "An accessible walk through the core teachings of the Christian faith as confessed by the historic creeds.",
    description:
      "What do Christians believe about God, Christ, the Spirit, salvation, and the church, and why does it matter for ordinary life? This course works through the Apostles' Creed line by line.",
    instructor: "OTS Faculty",
    sample: true,
    weeks: 8,
    tags: ["Theology", "Foundations"],
    sections: [
      {
        id: "general",
        title: "Welcome & Course Information",
        activities: [
          {
            id: "syllabus",
            type: "reading",
            title: "Syllabus",
            minutes: 5,
            body: "Eight weeks, one creedal phrase at a time. Each week: a short lecture, a reading from a historic confession, and a discussion.",
          },
        ],
      },
      {
        id: "week-1",
        title: "Week 1 · \"I believe in God the Father Almighty\"",
        activities: [
          { id: "w1-video", type: "video", title: "Who God is", minutes: 17, videoId: "" },
          {
            id: "w1-reading",
            type: "reading",
            title: "Reading: the doctrine of God",
            minutes: 20,
            body: "God is one in essence and three in person. He is self-existent, holy, loving, and sovereign over all things.",
          },
          { id: "w1-forum", type: "forum", title: "Discussion", minutes: 10, body: "Which attribute of God do you find most comforting? Most challenging?" },
        ],
      },
      {
        id: "week-2",
        title: "Week 2 · \"Maker of heaven and earth\"",
        activities: [
          { id: "w2-video", type: "video", title: "Creation and providence", minutes: 15, videoId: "" },
          {
            id: "w2-quiz",
            type: "quiz",
            title: "Check your understanding",
            minutes: 5,
            questions: [
              { q: "Providence means…", options: ["God created and then stepped back", "God sustains and governs all things", "Humans control history", "Nature is divine"], answer: 1 },
            ],
          },
        ],
      },
      {
        id: "week-3",
        title: "Week 3 · \"And in Jesus Christ, his only Son, our Lord\"",
        activities: [
          { id: "w3-video", type: "video", title: "The person of Christ", minutes: 19, videoId: "" },
          { id: "w3-assignment", type: "assignment", title: "Reflection", minutes: 30, body: "In one page, explain why it matters that Jesus is fully God and fully man." },
        ],
      },
    ],
  },
  {
    slug: "story-of-the-church-in-the-pacific",
    code: "EQ201",
    title: "The Story of the Church in the Pacific",
    track: "equip",
    level: "Intermediate",
    summary:
      "From the first missionaries to the islands to the church today: how the gospel came to Hawaiʻi and the Pacific and what we can learn from it.",
    description:
      "A church-history course with a local focus. We trace the arrival and growth of Christianity in Hawaiʻi and the wider Pacific, the faithfulness and failures of earlier generations, and what that history means for ministry in the islands now.",
    instructor: "OTS Faculty",
    sample: true,
    weeks: 6,
    tags: ["Church History", "Hawaiʻi"],
    sections: [
      {
        id: "general",
        title: "Welcome & Course Information",
        activities: [
          { id: "syllabus", type: "reading", title: "Syllabus", minutes: 5, body: "Six weeks of story, sources, and discussion. Expect roughly 90 minutes per week." },
        ],
      },
      {
        id: "week-1",
        title: "Week 1 · The gospel comes to the islands",
        activities: [
          { id: "w1-video", type: "video", title: "1820 and after", minutes: 18, videoId: "" },
          { id: "w1-forum", type: "forum", title: "Discussion", minutes: 10, body: "What surprised you about the early church in Hawaiʻi?" },
        ],
      },
    ],
  },
  {
    slug: "leading-a-small-group",
    code: "EQ110",
    title: "Leading a Small Group",
    track: "equip",
    level: "Beginner",
    summary:
      "Practical training for anyone who leads, or wants to lead, a Bible study or small group in their church.",
    description:
      "Facilitation skills, preparing a study, asking good questions, handling hard conversations, and caring for people. Built for volunteers.",
    instructor: "OTS Faculty",
    sample: true,
    weeks: 4,
    tags: ["Ministry Skills", "Community"],
    sections: [
      {
        id: "general",
        title: "Welcome & Course Information",
        activities: [
          { id: "syllabus", type: "reading", title: "Syllabus", minutes: 5, body: "Four short weeks. Each week pairs a video with a practice assignment you can do with your actual group." },
        ],
      },
      {
        id: "week-1",
        title: "Week 1 · What a small group is for",
        activities: [
          { id: "w1-video", type: "video", title: "Word, prayer, and people", minutes: 12, videoId: "" },
          { id: "w1-assignment", type: "assignment", title: "Write your group's purpose", minutes: 20, body: "In two or three sentences, describe why your group exists and what you hope God does in it this year." },
        ],
      },
      {
        id: "week-2",
        title: "Week 2 · Asking better questions",
        activities: [
          { id: "w2-video", type: "video", title: "Observation, interpretation, application", minutes: 14, videoId: "" },
          { id: "w2-forum", type: "forum", title: "Share three questions", minutes: 10, body: "Post three questions you'd ask about John 15:1–11, one of each kind." },
        ],
      },
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function courseActivityCount(course: Course) {
  return course.sections.reduce((n, s) => n + s.activities.length, 0);
}

export const activityLabels: Record<ActivityType, string> = {
  video: "Video",
  reading: "Reading",
  forum: "Discussion",
  quiz: "Quiz",
  assignment: "Assignment",
  link: "Link",
};
