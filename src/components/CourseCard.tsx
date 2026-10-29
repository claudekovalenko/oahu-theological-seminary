import Link from "next/link";
import { Pill, icons } from "./ui";
import { courseActivityCount, type Course } from "@/content/courses";

export function CourseCard({ course, href }: { course: Course; href: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-sand-200 bg-white p-6 shadow-soft transition hover:border-ocean-900"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{course.code}</span>
        <Pill tone={course.level === "Beginner" ? "lagoon" : course.level === "Intermediate" ? "gold" : "ocean"}>{course.level}</Pill>
      </div>
      <h3 className="mt-3 text-xl text-ocean-900 group-hover:underline">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-muted">{course.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {course.sample && <Pill tone="gold">Sample</Pill>}
        {course.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <p className="mt-4 flex items-center justify-between text-xs text-ink-muted">
        <span>
          {course.weeks} weeks · {courseActivityCount(course)} activities
        </span>
        <span className="text-ocean-900">{icons.arrow}</span>
      </p>
    </Link>
  );
}
