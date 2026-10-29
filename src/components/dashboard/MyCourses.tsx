"use client";

import Link from "next/link";
import { courseActivityCount, courses } from "@/content/courses";
import { useEnrollments, useProgress } from "@/lib/progress";
import { Button, Pill, icons } from "../ui";

export function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-sand-200" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-lagoon-600 transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function MyCourses() {
  const { list, ready } = useEnrollments();
  const { countDone } = useProgress();
  const mine = courses.filter((c) => list.includes(c.slug));

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl text-ocean-900">My courses</h1>
          <p className="mt-1 text-ink-muted">Pick up where you left off.</p>
        </div>
        <Button href="/dashboard/catalog" variant="secondary" size="sm">
          Browse the catalog
        </Button>
      </div>

      {ready && mine.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-sand-300 bg-white p-10 text-center">
          <p className="font-display text-xl text-ocean-900">You’re not enrolled in anything yet.</p>
          <p className="mt-2 text-sm text-ink-muted">Community courses are free and self-paced. Start with one.</p>
          <Button href="/dashboard/catalog" className="mt-5">
            Find a course {icons.arrow}
          </Button>
        </div>
      )}

      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {mine.map((c) => {
          const total = courseActivityCount(c);
          const done = countDone(c.slug);
          return (
            <li key={c.slug} className="rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{c.code}</span>
                <Pill tone={done === total ? "lagoon" : "sand"}>{done === total ? "Complete" : "In progress"}</Pill>
              </div>
              <h2 className="mt-2 text-xl text-ocean-900">
                <Link href={`/dashboard/courses/${c.slug}`} className="hover:underline">
                  {c.title}
                </Link>
              </h2>
              <p className="mt-3 text-xs text-ink-muted">
                {done} of {total} activities
              </p>
              <div className="mt-2">
                <ProgressBar value={done} max={total} />
              </div>
              <Button href={`/dashboard/courses/${c.slug}`} size="sm" className="mt-5">
                {done === 0 ? "Start" : done === total ? "Review" : "Continue"} {icons.arrow}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Catalog() {
  const { has, toggle, ready } = useEnrollments();
  return (
    <div>
      <h1 className="text-3xl text-ocean-900">Course catalog</h1>
      <p className="mt-1 text-ink-muted">Enroll in any community course. Degree coursework is delivered through Moodle.</p>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {courses.map((c) => (
          <li key={c.slug} className="flex flex-col rounded-2xl border border-sand-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{c.code}</span>
              <Pill tone="lagoon">{c.level}</Pill>
            </div>
            <h2 className="mt-2 text-xl text-ocean-900">{c.title}</h2>
            <p className="mt-2 flex-1 text-sm text-ink-muted">{c.summary}</p>
            <p className="mt-3 text-xs text-ink-muted">
              {c.weeks} weeks · {courseActivityCount(c)} activities · {c.instructor}
            </p>
            <div className="mt-5 flex gap-2">
              <Button
                size="sm"
                variant={has(c.slug) ? "secondary" : "primary"}
                disabled={!ready}
                onClick={() => toggle(c.slug)}
              >
                {has(c.slug) ? "Unenroll" : "Enroll"}
              </Button>
              {has(c.slug) && (
                <Button href={`/dashboard/courses/${c.slug}`} size="sm" variant="gold">
                  Open
                </Button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
