/**
 * Course schedule, from the OTS 2025–2026 Academic Calendar (PDF).
 * All classes meet Tuesday evenings at Aiea Heights Church.
 * "A" and "B" are the two halves of a semester; "AB" runs the full semester.
 */
export type Offering = { course: string; session?: string; instructor: string };
export type Term = { name: string; dates?: string; offerings: Offering[] };

export const academicYear = "2025–2026";

export const terms: Term[] = [
  {
    name: "Fall 2025",
    dates: "August 19 – December 11, 2025",
    offerings: [
      { course: "OT Theology", session: "Fall A", instructor: "Brians" },
      { course: "NT Theology", session: "Fall B", instructor: "Bruno" },
      { course: "Beginning Greek 1", session: "Fall AB", instructor: "Bruno" },
      { course: "Intermediate Greek", session: "Fall AB", instructor: "Larson" },
      { course: "Applied Theology", instructor: "Larson" },
      { course: "Preaching 2", session: "Fall A", instructor: "Larson" },
      { course: "Counseling 2", session: "Fall B", instructor: "CCEF, supervised by Bruno" },
      { course: "Intermediate Hebrew", instructor: "Kairos" },
    ],
  },
  {
    name: "Spring 2026",
    dates: "January 20 – May 15, 2026",
    offerings: [
      { course: "Historical Theology", session: "Spring A", instructor: "Morikawa" },
      { course: "Biblical Theology", session: "Spring B", instructor: "Larson & Bruno" },
      { course: "Beginning Greek 2", session: "Spring AB", instructor: "Brazil" },
      { course: "Greek Exegesis of Matthew", instructor: "Bruno" },
      { course: "Applied Theology", instructor: "Larson" },
      { course: "Advanced Theological Studies", instructor: "Larson" },
      { course: "Advanced Biblical Studies", instructor: "Brazil" },
      { course: "Hebrew Exegesis", instructor: "Brazil" },
    ],
  },
  {
    name: "Fall 2026",
    offerings: [
      { course: "Theology 1", session: "Fall A", instructor: "Larson" },
      { course: "Theology 2", session: "Fall B", instructor: "Larson" },
    ],
  },
  {
    name: "Spring 2027",
    offerings: [
      { course: "Ecclesial Theology", session: "Spring A", instructor: "Larson & Bruno" },
      { course: "Greek Exegesis of Matthew", instructor: "Bruno" },
    ],
  },
];
