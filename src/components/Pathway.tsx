"use client";

import Link from "next/link";
import { pathway } from "@/content/pathway";
import { usePathwayProgress } from "@/lib/progress";
import { YouTube } from "./YouTube";
import { Button, icons } from "./ui";

export function Pathway() {
  const { done, mark, ready } = usePathwayProgress();

  const allDone = pathway.every((s) => done.includes(s.n));

  return (
    <div className="space-y-6">
      {/* Progress rail */}
      <ol className="flex items-center gap-2 text-sm" aria-label="Progress">
        {pathway.map((s) => (
          <li key={s.n} className="flex items-center gap-2">
            <a
              href={`#step-${s.n}`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border font-display ${
                done.includes(s.n) ? "border-lagoon-600 bg-lagoon-600 text-white" : "border-sand-300 bg-white text-ocean-900"
              }`}
              aria-label={`Step ${s.n}: ${s.title}${done.includes(s.n) ? " (done)" : ""}`}
            >
              {done.includes(s.n) ? icons.check : s.n}
            </a>
            <span className="h-px w-6 bg-sand-300 sm:w-10" />
          </li>
        ))}
        <li>
          <Link
            href="/start/apply"
            className={`flex h-9 items-center rounded-full border px-4 font-medium ${
              allDone ? "border-gold-500 bg-gold-500 text-ocean-950" : "border-sand-300 bg-white text-ink-muted"
            }`}
          >
            Apply
          </Link>
        </li>
      </ol>

      {pathway.map((s) => {
        const isDone = done.includes(s.n);
        return (
          <section key={s.n} id={`step-${s.n}`} className="scroll-mt-24 grid gap-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft lg:grid-cols-[1.2fr_.8fr] lg:p-8">
            <YouTube id={s.videoId} title={s.title} />
            <div className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-600">
                Step {s.n} · {s.kicker} · {s.minutes} min
              </p>
              <h2 className="mt-2 text-2xl text-ocean-900">{s.title}</h2>
              <p className="mt-3 text-ink-muted">{s.description}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-muted">Reflect</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {s.reflect.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-lagoon-600"
                    checked={isDone}
                    disabled={!ready}
                    onChange={(e) => mark(s.n, e.target.checked)}
                  />
                  I’ve watched this video
                </label>
              </div>
            </div>
          </section>
        );
      })}

      <section className={`rounded-3xl p-8 text-center ${allDone ? "bg-gold-500 text-ocean-950" : "bg-ocean-900 text-white"}`}>
        <h2 className="text-3xl">{allDone ? "You've seen it all. Ready?" : "Finish the three videos, then apply"}</h2>
        <p className={`mx-auto mt-3 max-w-xl ${allDone ? "text-ocean-900" : "text-sand-200"}`}>
          The application asks about you, your church, and which track you’re interested in. It takes about ten minutes
          and starts a conversation; it is not a commitment.
        </p>
        <Button href="/start/apply" variant={allDone ? "primary" : "gold"} size="lg" className="mt-6">
          Go to the application {icons.arrow}
        </Button>
      </section>
    </div>
  );
}
