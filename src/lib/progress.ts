"use client";

import { useCallback } from "react";
import { createLocalStore } from "./localStore";
import { getSupabase } from "./supabase/client";

/**
 * Course progress store.
 *  - Always persisted to localStorage so the portal works without an account.
 *  - When Supabase is configured and the user is signed in, progress is also
 *    upserted to `activity_progress` (see supabase/migrations).
 */

export type ProgressMap = Record<string, Record<string, string>>; // course -> activity -> ISO date

const progressStore = createLocalStore<ProgressMap>("ots:progress:v1", {});
const enrollStore = createLocalStore<string[]>("ots:enrolled:v1", []);
export const pathwayStore = createLocalStore<number[]>("ots:pathway:v1", []);

async function syncRemote(course: string, activity: string, done: boolean) {
  const sb = getSupabase();
  if (!sb) return;
  const { data } = await sb.auth.getUser();
  if (!data.user) return;
  if (done) {
    await sb.from("activity_progress").upsert({
      user_id: data.user.id,
      course_slug: course,
      activity_id: activity,
      completed_at: new Date().toISOString(),
    });
  } else {
    await sb
      .from("activity_progress")
      .delete()
      .match({ user_id: data.user.id, course_slug: course, activity_id: activity });
  }
}

export function useProgress() {
  const { value: map, hydrated } = progressStore.useValue();

  const isDone = useCallback(
    (course: string, activity: string) => Boolean(map[course]?.[activity]),
    [map],
  );

  const setDone = useCallback((course: string, activity: string, done = true) => {
    progressStore.set((prev) => {
      const next: ProgressMap = { ...prev, [course]: { ...(prev[course] ?? {}) } };
      if (done) next[course][activity] = new Date().toISOString();
      else delete next[course][activity];
      return next;
    });
    void syncRemote(course, activity, done);
  }, []);

  const countDone = useCallback(
    (course: string) => Object.keys(map[course] ?? {}).length,
    [map],
  );

  return { ready: hydrated, isDone, setDone, countDone };
}

export function useEnrollments() {
  const { value: list, hydrated } = enrollStore.useValue();

  const toggle = useCallback((slug: string) => {
    enrollStore.set((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }, []);

  return { ready: hydrated, list, toggle, has: (slug: string) => list.includes(slug) };
}

export function usePathwayProgress() {
  const { value: done, hydrated } = pathwayStore.useValue();
  const mark = useCallback((n: number, value: boolean) => {
    pathwayStore.set((prev) => (value ? Array.from(new Set([...prev, n])) : prev.filter((x) => x !== n)));
  }, []);
  return { ready: hydrated, done, mark };
}
