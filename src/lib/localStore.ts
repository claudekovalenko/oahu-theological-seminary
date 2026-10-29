"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny localStorage-backed store that plays nicely with React 19:
 * components subscribe via useSyncExternalStore, so there is no setState
 * inside effects and server rendering gets a stable fallback snapshot.
 */
export function createLocalStore<T>(key: string, fallback: T) {
  let cached: T | undefined;
  let raw: string | null | undefined;
  const listeners = new Set<() => void>();

  function read(): T {
    if (typeof window === "undefined") return fallback;
    let next: string | null = null;
    try {
      next = window.localStorage.getItem(key);
    } catch {
      next = null;
    }
    if (next !== raw || cached === undefined) {
      raw = next;
      try {
        cached = next === null ? fallback : (JSON.parse(next) as T);
      } catch {
        cached = fallback;
      }
    }
    return cached as T;
  }

  function emit() {
    listeners.forEach((l) => l());
  }

  function set(value: T | ((prev: T) => T)) {
    const next = typeof value === "function" ? (value as (prev: T) => T)(read()) : value;
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* storage unavailable: keep in memory */
    }
    raw = JSON.stringify(next);
    cached = next;
    emit();
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) listener();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  }

  /** `hydrated` is false during SSR and the first client render. */
  function useValue(): { value: T; hydrated: boolean } {
    const value = useSyncExternalStore(subscribe, read, () => fallback);
    const hydrated = useSyncExternalStore(
      () => () => {},
      () => true,
      () => false,
    );
    return { value, hydrated };
  }

  return { get: read, set, subscribe, useValue };
}
