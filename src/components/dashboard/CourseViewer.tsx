"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { activityLabels, courseActivityCount, type Activity, type Course } from "@/content/courses";
import { useEnrollments, useProgress } from "@/lib/progress";
import { site } from "@/content/site";
import { YouTube } from "../YouTube";
import { Button, Pill, icons } from "../ui";
import { ProgressBar } from "./MyCourses";

/**
 * Moodle-style course page: a section/topic index on the left and the
 * selected activity on the right. Completion is tracked per activity, the
 * same way Moodle's "activity completion" works.
 */
export function CourseViewer({ course }: { course: Course }) {
  const flat = useMemo(() => course.sections.flatMap((s) => s.activities.map((a) => ({ a, s }))), [course]);
  const { isDone, setDone, countDone, ready } = useProgress();
  const { has, toggle, ready: enrollReady } = useEnrollments();
  const [selectedId, setCurrentId] = useState<string | null>(null);

  // Until the student picks something, resume at the first incomplete activity.
  const resumeId = ready ? (flat.find(({ a }) => !isDone(course.slug, a.id)) ?? flat[0])?.a.id : flat[0]?.a.id;
  const currentId = selectedId ?? resumeId;

  const idx = flat.findIndex(({ a }) => a.id === currentId);
  const current = flat[idx];
  const total = courseActivityCount(course);
  const done = countDone(course.slug);

  // Marking an activity pins the view on it so the page doesn't jump ahead.
  function markCurrent(done: boolean) {
    if (!current) return;
    setCurrentId(current.a.id);
    setDone(course.slug, current.a.id, done);
  }

  function go(delta: number) {
    const n = flat[idx + delta];
    if (n) {
      setCurrentId(n.a.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div>
      <nav className="text-xs text-ink-muted" aria-label="Breadcrumb">
        <Link href="/dashboard" className="hover:underline">
          My courses
        </Link>{" "}
        / {course.code}
      </nav>
      <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl text-ocean-900">{course.title}</h1>
          <p className="mt-1 text-sm text-ink-muted">
            {course.instructor} · {course.weeks} weeks
          </p>
        </div>
        <div className="flex gap-2">
          {course.moodleUrl && (
            <Button href={course.moodleUrl} external variant="secondary" size="sm">
              Open in Moodle
            </Button>
          )}
          {enrollReady && !has(course.slug) && (
            <Button size="sm" onClick={() => toggle(course.slug)}>
              Enroll
            </Button>
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 text-xs text-ink-muted">
        <span className="whitespace-nowrap">
          {done}/{total} complete
        </span>
        <ProgressBar value={done} max={total} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Section index */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto">
          {course.sections.map((s) => (
            <div key={s.id}>
              <p className="text-xs font-semibold uppercase tracking-wider text-ocean-900">{s.title}</p>
              <ul className="mt-2 space-y-1">
                {s.activities.map((a) => {
                  const active = a.id === currentId;
                  const complete = isDone(course.slug, a.id);
                  return (
                    <li key={a.id}>
                      <button
                        type="button"
                        onClick={() => setCurrentId(a.id)}
                        className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm ${
                          active ? "bg-ocean-900 text-white" : "hover:bg-sand-100"
                        }`}
                        aria-current={active ? "true" : undefined}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                            complete ? "border-lagoon-500 bg-lagoon-500 text-white" : active ? "border-white/60" : "border-sand-300"
                          }`}
                        >
                          {complete && <span className="scale-75">{icons.check}</span>}
                        </span>
                        <span className="truncate">{a.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </aside>

        {/* Activity */}
        <section className="min-w-0 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft sm:p-8">
          {current ? (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <Pill tone="lagoon">{activityLabels[current.a.type]}</Pill>
                <span className="text-xs text-ink-muted">{current.s.title}</span>
                {current.a.minutes && <span className="text-xs text-ink-muted">· {current.a.minutes} min</span>}
              </div>
              <h2 className="mt-3 text-2xl text-ocean-900">{current.a.title}</h2>
              <div className="mt-6">
                <ActivityBody activity={current.a} onComplete={() => markCurrent(true)} />
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-sand-200 pt-6">
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-lagoon-600"
                    checked={isDone(course.slug, current.a.id)}
                    onChange={(e) => markCurrent(e.target.checked)}
                  />
                  Mark as done
                </label>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" onClick={() => go(-1)} disabled={idx <= 0}>
                    Previous
                  </Button>
                  <Button size="sm" onClick={() => go(1)} disabled={idx >= flat.length - 1}>
                    Next {icons.arrow}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <p className="text-ink-muted">This course has no activities yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}

function ActivityBody({ activity, onComplete }: { activity: Activity; onComplete: () => void }) {
  switch (activity.type) {
    case "video":
      return (
        <div>
          <YouTube id={activity.videoId} title={activity.title} />
          {activity.body && <p className="mt-4 whitespace-pre-line text-ink">{activity.body}</p>}
        </div>
      );
    case "reading":
      return <div className="whitespace-pre-line text-lg leading-relaxed">{activity.body}</div>;
    case "forum":
      return <Forum prompt={activity.body ?? ""} onPost={onComplete} />;
    case "quiz":
      return <Quiz questions={activity.questions ?? []} onPass={onComplete} />;
    case "assignment":
      return <Assignment body={activity.body ?? ""} onSubmit={onComplete} />;
    case "link":
      return (
        <Button href={activity.url ?? site.moodleUrl} external>
          Open link
        </Button>
      );
  }
}

function Forum({ prompt, onPost }: { prompt: string; onPost: () => void }) {
  const [text, setText] = useState("");
  const [posted, setPosted] = useState<string[]>([]);
  return (
    <div>
      <p className="rounded-xl bg-sand-50 p-4 text-ink">{prompt}</p>
      <p className="mt-4 text-xs text-ink-muted">
        Discussion posts are saved in this browser in demo mode. With accounts enabled they’re shared with your cohort.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="mt-3 w-full rounded-xl border border-sand-300 px-3 py-2 text-sm"
        placeholder="Write your response…"
      />
      <Button
        size="sm"
        className="mt-3"
        disabled={!text.trim()}
        onClick={() => {
          setPosted((p) => [text.trim(), ...p]);
          setText("");
          onPost();
        }}
      >
        Post
      </Button>
      {posted.length > 0 && (
        <ul className="mt-6 space-y-3">
          {posted.map((p, i) => (
            <li key={i} className="rounded-xl border border-sand-200 p-4 text-sm">
              <p className="text-xs text-ink-muted">You · just now</p>
              <p className="mt-1 whitespace-pre-line">{p}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Quiz({ questions, onPass }: { questions: NonNullable<Activity["questions"]>; onPass: () => void }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const score = questions.filter((q, i) => answers[i] === q.answer).length;
  const passed = checked && score === questions.length;

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <fieldset key={i}>
          <legend className="font-medium">
            {i + 1}. {q.q}
          </legend>
          <div className="mt-2 space-y-1.5">
            {q.options.map((o, j) => {
              const chosen = answers[i] === j;
              const correct = checked && j === q.answer;
              const wrong = checked && chosen && j !== q.answer;
              return (
                <label
                  key={j}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm ${
                    correct ? "border-lagoon-500 bg-lagoon-100" : wrong ? "border-koa-600 bg-sand-100" : "border-sand-200"
                  }`}
                >
                  <input type="radio" name={`q${i}`} checked={chosen} onChange={() => setAnswers((a) => ({ ...a, [i]: j }))} className="accent-lagoon-600" />
                  {o}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
      <div className="flex items-center gap-4">
        <Button
          size="sm"
          onClick={() => {
            setChecked(true);
            if (questions.every((q, i) => answers[i] === q.answer)) onPass();
          }}
          disabled={Object.keys(answers).length < questions.length}
        >
          Check answers
        </Button>
        {checked && (
          <p className="text-sm">
            {score}/{questions.length} correct{passed ? " · marked complete" : " · try again"}
          </p>
        )}
      </div>
    </div>
  );
}

function Assignment({ body, onSubmit }: { body: string; onSubmit: () => void }) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <p className="whitespace-pre-line rounded-xl bg-sand-50 p-4">{body}</p>
      {submitted ? (
        <p className="mt-4 rounded-xl border border-lagoon-500 bg-lagoon-100 p-4 text-sm">Submitted. Your instructor will review it and follow up.</p>
      ) : (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
            className="mt-4 w-full rounded-xl border border-sand-300 px-3 py-2 text-sm"
            placeholder="Paste or write your submission here…"
          />
          <Button
            size="sm"
            className="mt-3"
            disabled={!text.trim()}
            onClick={() => {
              setSubmitted(true);
              onSubmit();
            }}
          >
            Submit assignment
          </Button>
        </>
      )}
    </div>
  );
}
